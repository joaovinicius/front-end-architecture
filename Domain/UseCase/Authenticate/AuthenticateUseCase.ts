import { IAuthenticationRepository }
  from "../../Repository/AuthenticationRepository";
import { IAutheticateDTO }
  from "./IAutheticateDTO";
import { IToken }
  from "../../Entity/Token";

export class AuthenticateUseCase {
  constructor(
    private authenticationRepository: IAuthenticationRepository
  ) {}

  async execute(
    url: string,
    data: IAutheticateDTO
  ): Promise<IToken> {
    return await this.authenticationRepository
      .createUserSession(
        url,
        data.request_token,
        data.username,
        data.password
      )
  }
}