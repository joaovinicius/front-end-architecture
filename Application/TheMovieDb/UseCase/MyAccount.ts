import Repository from '../../../Domain/Account/Repository'
import Account from '../../../Domain/Account/Entity/Account'

export default class MyAccountUse {
  constructor(private repository: Repository) {}

  async execute(url: string): Promise<Account> {
    return await this.repository.myAccount(url)
  }
}