import { HttpClient } from '../../Support/HttpClient'
import Repository from '../../../Domain/Account/Repository'

import Status from '../../../Domain/Account/Entity/Status'
import Catalog from '../../../Domain/Account/Entity/Catalog'
import Account from '../../../Domain/Account/Entity/Account'

import AccountDM from '../DataMapper/AccountDM'
import WatchlistCatalogDM from '../DataMapper/WatchlistCatalogDM'
import StatusDM from '../DataMapper/StatusDM'
import AddToMyWatchListDTO from '../DataTransferObject/AddToMyWatchlistDTO'

const accountDM = new AccountDM()
const watchlistCatalogDM = new WatchlistCatalogDM()
const statusDM = new StatusDM()

export default class AccountRepository implements Repository {
  constructor(
    private httpClient: HttpClient
  ) {}

  async myAccount(url: string): Promise<Account> {
    const { data } = await this.httpClient.get(url)

    return accountDM.responseDataToEntity(data)
  }

  async myWatchList(url: string): Promise<Catalog> {
    const { data } = await this.httpClient.get(url)

    return watchlistCatalogDM.responseDataToEntity(data)
  }

  async addToMyWatchlist(url: string, body: AddToMyWatchListDTO): Promise<Status> {
    const { data } = await this.httpClient.post(url, body)

    return statusDM.responseDataToEntity(data)
  }
}