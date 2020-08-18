import { IAuthenticationRepository }
  from "../../Repository/AuthenticationRepository";
import { Token }
  from "../../Entity/Token";

export class CreateTokenUseCase {
  constructor(
    private authenticationRepository: IAuthenticationRepository
  ) {}

  async execute(url: string): Promise<Token> {
    return await this.authenticationRepository
      .createRequestToken(url)
  }
}