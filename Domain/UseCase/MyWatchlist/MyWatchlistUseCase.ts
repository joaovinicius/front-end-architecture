import { IAccountRepository }
  from '../../Repository/AccountRepository'
import { Catalog } from '../../Entity/Catalog'

export class MyWatchlistUseCase {
  constructor(
    private accountRepository: IAccountRepository
  ) {}

  async execute(url: string): Promise<Catalog> {
    return await this.accountRepository
      .myWatchList(url)
  }
}