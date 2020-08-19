import { IHttpClient } from '../Support/IHttpClient'
import { AccountRepository, IAccountRepository }
  from '../Repository/AccountRepository'
import { AddToMyWatchlistUseCase }
  from '../UseCase/AddToMyWatchlist/AddToMyWatchlistUseCase'
import { IAddToMyWatchlistDTO }
  from '../UseCase/AddToMyWatchlist/IAddToMyWatchlistDTO'
import { MyWatchlistUseCase }
  from '../UseCase/MyWatchlist/MyWatchlistUseCase'
import { MyAccountUseCase }
  from '../UseCase/MyAccount/MyAccountUseCase'
import { UseCaseFactory }
  from '../Support/UseCaseFactory'
import { TMDBRoutes } from '../Support/TheMovieDbRoutes'

export class AccountService {
  public repository: IAccountRepository

  constructor(httpClient: IHttpClient) {
    this.repository = new AccountRepository(httpClient)
  }

  addToMyWatchlist(accountId: number, sessionId: string, data: IAddToMyWatchlistDTO) {
    const addToMyWatchlistUseCase = UseCaseFactory(
      this.repository,
      AddToMyWatchlistUseCase
    )
    return addToMyWatchlistUseCase.execute(
      TMDBRoutes.addToAccountWatchlist(accountId, sessionId),
      data
    )
  }

  myWatchlist(accountId: number, sessionId: string, page: number) {
    const myWatchlistUseCase = UseCaseFactory(
      this.repository,
      MyWatchlistUseCase
    )
    return myWatchlistUseCase.execute(
      TMDBRoutes.accountWatchlist(accountId, sessionId, page)
    )
  }

  myAccount(sessionId: string) {
    const myAccountUseCase = UseCaseFactory(
      this.repository,
      MyAccountUseCase
    )
    return myAccountUseCase.execute(TMDBRoutes.account(sessionId))
  }
}