import IAuthenticationRepository from '../Repository/IAuthenticationRepository'
import Token from '../../../Domain/Authentication/Entity/Token'

export default class CreateToken {
  constructor(private repository: IAuthenticationRepository) {}

  async execute(url: string): Promise<Token> {
    return await this.repository.createRequestToken(url)
  }
}