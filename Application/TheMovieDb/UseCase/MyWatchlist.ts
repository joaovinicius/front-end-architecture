import Repository from '../../../Domain/Account/Repository'
import Watchlist from '../../../Domain/Account/Entity/Watchlist'

export default class MyWatchlist {
  constructor(private repository: Repository) {}

  async execute(url: string): Promise<Watchlist> {
    return await this.repository.myWatchList(url)
  }
}