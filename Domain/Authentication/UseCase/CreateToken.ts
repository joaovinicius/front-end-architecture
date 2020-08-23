import Repository from '../Repository'
import Token from '../Entity/Token'

export default class CreateToken {
  constructor(private repository: Repository) {}

  async execute(url: string): Promise<Token> {
    return await this.repository.createRequestToken(url)
  }
}