import { HttpClient } from '../../Support/HttpClient'
import AccountRepository from '../Repository/AccountRepository'
import AddToMyWatchlistDTO from '../DataTransferObject/AddToMyWatchlistDTO'
import UseCaseFactory from '../../Support/UseCaseFactory'
import { Routes } from './Routes'

import Status from '../../../Domain/Account/Entity/Status'
import Watchlist from '../../../Domain/Account/Entity/Watchlist'
import Account from '../../../Domain/Account/Entity/Account'

import AddToMyWatchlist from '../UseCase/AddToMyWatchlist'
import MyWatchlist from '../UseCase/MyWatchlist'
import MyAccount from '../UseCase/MyAccount'

export default class AccountService {
  public repository: AccountRepository

  constructor(httpClient: HttpClient) {
    this.repository = new AccountRepository(httpClient)
  }

  addToMyWatchlist(
    accountId: number,
    sessionId: string,
    data: AddToMyWatchlistDTO
  ): Promise<Status> {
    const addToMyWatchlist = UseCaseFactory(this.repository, AddToMyWatchlist)
    const body = {...data, media_type: 'movie' }

    return addToMyWatchlist.execute(Routes.addToAccountWatchlist(accountId, sessionId), body)
  }

  myWatchlist(accountId: number, sessionId: string, page: number): Promise<Watchlist> {
    const myWatchlist = UseCaseFactory(this.repository, MyWatchlist)

    return myWatchlist.execute(Routes.accountWatchlist(accountId, sessionId, page))
  }

  myAccount(sessionId: string): Promise<Account> {
    const myAccount = UseCaseFactory(this.repository, MyAccount)

    return myAccount.execute(Routes.account(sessionId))
  }
}