import Repository from '../Repository'
import Catalog from '../Entity/Catalog'

export default class MyWatchlist {
  constructor(private repository: Repository) {}

  async execute(url: string): Promise<Catalog> {
    return await this.repository.myWatchList(url)
  }
}