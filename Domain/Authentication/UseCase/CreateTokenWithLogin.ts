import Repository from '../Repository'
import IToken from '../Entity/IToken'

export default class CreateTokenWith {
  constructor(private repository: Repository) {}

  async execute(url: string, data: any): Promise<IToken> {
    return await this.repository.createTokenWithLogin(url, data)
  }
}