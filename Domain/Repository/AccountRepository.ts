import { IHttpClient } from '../Support/IHttpClient'
import { Catalog } from '../Entity/Catalog'
import { Account } from '../Entity/Account'

export interface Status {
  status_code: number,
  status_message: string
}

export interface IAccountRepository {
  myAccount(url: string): Promise<Account>,
  myWatchList(url: string): Promise<Catalog>,
  addToMyWatchlist(
    url: string,
    media_type: string,
    media_id: number,
    watchlist: boolean
  ): Promise<Status>
}

export class AccountRepository implements IAccountRepository {
  constructor(
    private httpClient: IHttpClient
  ) {}

  async myAccount(url: string): Promise<Account> {
    const { data } = await this.httpClient.get(url)

    return new Account(data, data.id)
  }

  async myWatchList(url: string): Promise<Catalog> {
    const { data } = await this.httpClient.get(url)

    return new Catalog(data)
  }

  async addToMyWatchlist(
    url: string,
    media_type: string,
    media_id: number,
    watchlist: boolean
  ): Promise<Status> {
    const { data } = await this.httpClient
      .post(url, { media_type, media_id, watchlist })

    return data
  }
}