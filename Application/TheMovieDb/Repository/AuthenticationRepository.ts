import { HttpClient } from '../../Support/HttpClient'
import Repository from '../../../Domain/Authentication/Repository'
import CreateTokenWithLoginDTO from '../DataTransferObject/CreateTokenWithLoginDTO'
import CreateSessionDTO from '../DataTransferObject/CreateSessionDTO'

import Token from '../../../Domain/Authentication/Entity/Token'
import Session from '../../../Domain/Authentication/Entity/Session'

import TokenDM from '../DataMapper/TokenDM'
import SessionDM from '../DataMapper/SessionDM'

const tokenDM = new TokenDM()
const sessionDM = new SessionDM()

export default class AuthenticationRepository implements Repository {
  constructor(
    private httpClient: HttpClient
  ) {}

  async createRequestToken(url: string): Promise<Token> {
    const { data } = await this.httpClient.get(url)

    return tokenDM.responseDataToEntity(data)
  }

  async createTokenWithLogin(url: string, body: CreateTokenWithLoginDTO): Promise<Token> {
    const { data } = await this.httpClient.post(url, body)

    return tokenDM.responseDataToEntity(data)
  }

  async createSession(url: string, body: CreateSessionDTO): Promise<Session> {
    const { data } = await this.httpClient.post(url, body)

    return sessionDM.responseDataToEntity(data)
  }
}