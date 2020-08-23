import Repository from '../Repository'
import Status from '../Entity/Status'

export default class AddToMyWatchlist {
  constructor(private repository: Repository) {}

  async execute(url: string, data: any): Promise<Status> {
    return await this.repository.addToMyWatchlist(url, data)
  }
}