import IAccountRepository from '../Repository/IAccountRepository'
import Catalog from '../../../Domain/Account/Entity/Catalog'

export default class MyWatchlist {
  constructor(private repository: IAccountRepository) {}

  async execute(url: string): Promise<Catalog> {
    return await this.repository.myWatchList(url)
  }
}