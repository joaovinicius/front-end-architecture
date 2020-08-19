import { IHttpClient } from '../Support/IHttpClient'
import { Catalog } from '../Entity/Catalog'
import { Account } from '../Entity/Account'

export interface IAccountRepository {
  myAccount(url: string): Promise<Account>,
  myMovies(url: string): Promise<Catalog>
}

export class AccountRepository implements IAccountRepository {
  constructor(
    private httpClient: IHttpClient
  ) {}

  async myAccount(url: string): Promise<Account> {
    const { data } = await this.httpClient.get(url)

    return new Account(data, data.id)
  }

  async myMovies(url: string): Promise<Catalog> {
    const { data } = await this.httpClient.get(url)

    return new Catalog(data)
  }
}