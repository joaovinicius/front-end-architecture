import { HttpClient } from '../../Support/HttpClient'
import AccountRepository from '../Repository/AccountRepository'
import UseCaseFactory from '../../Support/UseCaseFactory'
import { Routes } from './Routes'

import Status from '../../../Domain/Account/Entity/Status'
import Catalog from '../../../Domain/Account/Entity/Catalog'
import Account from '../../../Domain/Account/Entity/Account'

import AddToMyWatchlist from '../../../Domain/Account/UseCase/AddToMyWatchlist'
import MyWatchlist from '../../../Domain/Account/UseCase/MyWatchlist'
import MyAccount from '../../../Domain/Account/UseCase/MyAccount'

import AddToMyWatchlistDTO from '../DataTransferObject/AddToMyWatchlistDTO'

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

    return addToMyWatchlist.execute(Routes.addToAccountWatchlist(accountId, sessionId), data)
  }

  myWatchlist(accountId: number, sessionId: string, page: number): Promise<Catalog> {
    const myWatchlist = UseCaseFactory(this.repository, MyWatchlist)

    return myWatchlist.execute(Routes.accountWatchlist(accountId, sessionId, page))
  }

  myAccount(sessionId: string): Promise<Account> {
    const myAccount = UseCaseFactory(this.repository, MyAccount)

    return myAccount.execute(Routes.account(sessionId))
  }
}