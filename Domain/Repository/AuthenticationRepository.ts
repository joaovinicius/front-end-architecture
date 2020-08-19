import { IHttpClient } from '../Support/IHttpClient';
import { Token } from '../Entity/Token';
import { Session } from '../Entity/Session';

export interface IAuthenticationRepository {
  createRequestToken(url: string): Promise<Token>,

  createTokenWithLogin(
    url: string,
    request_token: string,
    username: string,
    password: string
  ): Promise<Token>,

  createSession(url: string, request_token: string): Promise<Session>
}

export class AuthenticationRepository implements IAuthenticationRepository {
  constructor(
    private httpClient: IHttpClient
  ) {}

  async createRequestToken(url: string): Promise<Token> {
    const { data } = await this.httpClient.get(url)

    return new Token(data)
  }

  async createTokenWithLogin(
    url: string,
    request_token: string,
    username: string,
    password: string
  ): Promise<Token> {
    const { data } = await this.httpClient
      .post(url, { request_token, username, password })

    return new Token(data)
  }

  async createSession(url: string, request_token: string): Promise<Session> {
    const { data } = await this.httpClient
      .post(url, { request_token })

    return new Session(data)
  }
}