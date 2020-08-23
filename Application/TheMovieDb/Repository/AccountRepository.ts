import { HttpClient } from '../../Support/HttpClient'
import Repository from '../../../Domain/Account/Repository'
import AddToMyWatchListDTO from '../DataTransferObject/AddToMyWatchlistDTO'

import Status from '../../../Domain/Account/Entity/Status'
import Watchlist from '../../../Domain/Account/Entity/Watchlist'
import Account from '../../../Domain/Account/Entity/Account'

import AccountDM from '../DataMapper/AccountDM'
import WatchlistDM from '../DataMapper/WatchlistDM'
import StatusDM from '../DataMapper/StatusDM'

const accountDM = new AccountDM()
const watchlistDM = new WatchlistDM()
const statusDM = new StatusDM()

export default class AccountRepository implements Repository {
  constructor(
    private httpClient: HttpClient
  ) {}

  async myAccount(url: string): Promise<Account> {
    const { data } = await this.httpClient.get(url)

    return accountDM.responseDataToEntity(data)
  }

  async myWatchList(url: string): Promise<Watchlist> {
    const { data } = await this.httpClient.get(url)

    return watchlistDM.responseDataToEntity(data)
  }

  async addToMyWatchlist(url: string, body: AddToMyWatchListDTO): Promise<Status> {
    const { data } = await this.httpClient.post(url, body)

    return statusDM.responseDataToEntity(data)
  }
}