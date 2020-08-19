import { IAccountRepository }
  from '../../Repository/AccountRepository'
import { Catalog } from '../../Entity/Catalog'

export class MyMoviesUseCase {
  constructor(
    private accountRepository: IAccountRepository
  ) {}

  async execute(url: string): Promise<Catalog> {
    return await this.accountRepository
      .myMovies(url)
  }
}