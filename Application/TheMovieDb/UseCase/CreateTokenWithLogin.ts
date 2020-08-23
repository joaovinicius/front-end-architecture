import Repository from '../../../Domain/Authentication/Repository'
import Token from '../../../Domain/Authentication/Entity/Token'

export default class CreateTokenWith {
  constructor(private repository: Repository) {}

  async execute(url: string, data: any): Promise<Token> {
    return await this.repository.createTokenWithLogin(url, data)
  }
}