import IAccountRepository from '../Repository/IAccountRepository'
import Status from '../../../Domain/Account/Entity/Status'

export default class AddToMyWatchlist {
  constructor(private repository: IAccountRepository) {}

  async execute(url: string, data: any): Promise<Status> {
    return await this.repository.addToMyWatchlist(url, data)
  }
}