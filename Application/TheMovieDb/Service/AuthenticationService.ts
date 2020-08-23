import { HttpClient } from '../../Support/HttpClient'
import UseCaseFactory  from '../../Support/UseCaseFactory'
import AuthenticationRepository from '../Repository/AuthenticationRepository'
import { Routes } from './Routes'

import Token from '../../../Domain/Authentication/Entity/Token'
import Session from '../../../Domain/Authentication/Entity/Session'

import CreateToken from '../UseCase/CreateToken'
import CreateTokenWithLogin from '../UseCase/CreateTokenWithLogin'
import CreateSession from '../UseCase/CreateSession'

import CreateTokenWithLoginDTO from '../DataTransferObject/CreateTokenWithLoginDTO'
import CreateSessionDTO from '../DataTransferObject/CreateSessionDTO'

export default class AuthenticationService {
  public repository: AuthenticationRepository

  constructor(httpClient: HttpClient) {
    this.repository = new AuthenticationRepository(httpClient)
  }

  createToken(): Promise<Token> {
    const createToken = UseCaseFactory(this.repository, CreateToken)

    return createToken.execute(Routes.createRequestToken)
  }

  createTokenWithLogin(body: CreateTokenWithLoginDTO): Promise<Token> {
    const createTokenWithLoginUseCase = UseCaseFactory(this.repository, CreateTokenWithLogin)

    return createTokenWithLoginUseCase.execute(Routes.createRequestTokenWithLogin, body)
  }

  createSession(token: CreateSessionDTO): Promise<Session> {
    const createSessionUseCase = UseCaseFactory(this.repository, CreateSession)

    return createSessionUseCase.execute(Routes.createSession, token)
  }
}