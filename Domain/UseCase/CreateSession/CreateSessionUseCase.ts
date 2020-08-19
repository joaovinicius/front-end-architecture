import { IAuthenticationRepository }
  from "../../Repository/AuthenticationRepository";
import { Session }
  from "../../Entity/Session";
import { ICreateSessionDTO } from './ICreateSessionDTO'

export class CreateSessionUseCase {
  constructor(
    private authenticationRepository: IAuthenticationRepository
  ) {}

  async execute(url: string, data: ICreateSessionDTO): Promise<Session> {
    return await this.authenticationRepository
      .createSession(url, data.request_token)
  }
}