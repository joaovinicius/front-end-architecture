import Repository from '../../../Domain/Authentication/Repository'
import Token from '../../../Domain/Authentication/Entity/Token'

export default class CreateToken {
  constructor(private repository: Repository) {}

  async execute(url: string): Promise<Token> {
    return await this.repository.createRequestToken(url)
  }
}