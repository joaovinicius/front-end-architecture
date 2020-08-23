import IAccountRepository from '../Repository/IAccountRepository'
import Account from '../../../Domain/Account/Entity/Account'

export default class MyAccountUse {
  constructor(private repository: IAccountRepository) {}

  async execute(url: string): Promise<Account> {
    return await this.repository.myAccount(url)
  }
}