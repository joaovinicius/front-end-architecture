import IAuthenticationRepository from '../Repository/IAuthenticationRepository'
import Session from '../../../Domain/Authentication/Entity/Session'

export default class CreateSession {
  constructor(private repository: IAuthenticationRepository) {}

  async execute(url: string, data: any): Promise<Session> {
    return await this.repository.createSession(url, data)
  }
}