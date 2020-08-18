import { IHttpClient } from '../Support/IHttpClient'
import { Catalog } from '../Entity/Catalog'

export interface IAccountRepository {
  findMyMovies(url: string): Promise<Catalog>
}

export class AccountRepository implements IAccountRepository {
  constructor(
    private httpClient: IHttpClient
  ) {}

  async findMyMovies(url: string): Promise<Catalog> {
    const { data } = await this.httpClient.get(url)

    return new Catalog(data)
  }
}