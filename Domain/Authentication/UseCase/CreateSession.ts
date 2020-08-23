import Repository from '../Repository'
import Session from '../Entity/Session'

export default class CreateSession {
  constructor(private repository: Repository) {}

  async execute(url: string, data: any): Promise<Session> {
    return await this.repository.createSession(url, data)
  }
}