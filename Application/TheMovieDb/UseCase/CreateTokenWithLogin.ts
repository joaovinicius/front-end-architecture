import IAuthenticationRepository from '../Repository/IAuthenticationRepository'
import IToken from '../../../Domain/Authentication/Entity/IToken'

export default class CreateTokenWith {
  constructor(private repository: IAuthenticationRepository) {}

  async execute(url: string, data: any): Promise<IToken> {
    return await this.repository.createTokenWithLogin(url, data)
  }
}