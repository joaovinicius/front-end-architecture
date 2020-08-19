import { IAccountRepository, Status }
  from '../../Repository/AccountRepository'
import { IAddToMyWatchlistDTO } from './IAddToMyWatchlistDTO'

export class AddToMyWatchlistUseCase {
  constructor(
    private accountRepository: IAccountRepository
  ) {}

  async execute(
    url: string,
    data: IAddToMyWatchlistDTO
  ): Promise<Status> {
    return await this.accountRepository
      .addToMyWatchlist(
        url,
        data.media_type,
        data.media_id,
        data.watchlist
      )
  }
}