import { IAccountRepository }
  from '../../Repository/AccountRepository'
import { Account } from '../../Entity/Account'

export class MyAccountUseCase {
  constructor(
    private accountRepository: IAccountRepository
  ) {}

  async execute(url: string): Promise<Account> {
    return await this.accountRepository
      .myAccount(url)
  }
}