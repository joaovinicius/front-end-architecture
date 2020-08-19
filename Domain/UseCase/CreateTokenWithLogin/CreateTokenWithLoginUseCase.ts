import { IAuthenticationRepository }
  from "../../Repository/AuthenticationRepository";
import { ICreateTokenWithLoginDTO }
  from "./ICreateTokenWithLoginDTO";
import { IToken }
  from "../../Entity/Token";

export class CreateTokenWithLoginUseCase {
  constructor(
    private authenticationRepository: IAuthenticationRepository
  ) {}

  async execute(
    url: string,
    data: ICreateTokenWithLoginDTO
  ): Promise<IToken> {
    return await this.authenticationRepository
      .createTokenWithLogin(
        url,
        data.request_token,
        data.username,
        data.password
      )
  }
}