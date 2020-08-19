import { IHttpClient } from '../Support/IHttpClient'
import { AuthenticationRepository, IAuthenticationRepository }
  from '../Repository/AuthenticationRepository'
import { CreateTokenUseCase }
  from '../UseCase/CreateToken/CreateTokenUseCase'
import { CreateTokenWithLoginUseCase }
  from '../UseCase/CreateTokenWithLogin/CreateTokenWithLoginUseCase'
import { ICreateTokenWithLoginDTO }
  from '../UseCase/CreateTokenWithLogin/ICreateTokenWithLoginDTO'
import { CreateSessionUseCase }
  from '../UseCase/CreateSession/CreateSessionUseCase'
import { ICreateSessionDTO }
  from '../UseCase/CreateSession/ICreateSessionDTO'
import { Token } from '../Entity/Token'
import { Session } from '../Entity/Session'
import { TMDBRoutes } from '../Support/TheMovieDbRoutes'
import { UseCaseFactory }
  from '../Support/UseCaseFactory'

export class AuthenticationService {
  public repository: IAuthenticationRepository

  constructor(httpClient: IHttpClient) {
    this.repository = new AuthenticationRepository(httpClient)
  }

  createToken(): Promise<Token> {
    const createToken = UseCaseFactory(
      this.repository,
      CreateTokenUseCase
    )
    return createToken.execute(TMDBRoutes.createRequestToken)
  }

  createTokenWithLogin(body: ICreateTokenWithLoginDTO): Promise<Token> {
    const createTokenWithLoginUseCase = UseCaseFactory(
      this.repository,
      CreateTokenWithLoginUseCase
    )
    return createTokenWithLoginUseCase.execute(
      TMDBRoutes.createRequestTokenWithLogin,
      body
    )
  }

  createSession(token: ICreateSessionDTO): Promise<Session> {
    const createSessionUseCase = UseCaseFactory(
      this.repository,
      CreateSessionUseCase
    )
    return createSessionUseCase.execute(TMDBRoutes.createSession, token)
  }
}