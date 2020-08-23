import Repository from '../Repository'
import Account from '../Entity/Account'

export default class MyAccountUse {
  constructor(private repository: Repository) {}

  async execute(url: string): Promise<Account> {
    return await this.repository.myAccount(url)
  }
}