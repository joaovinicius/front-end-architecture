import { IHttpClient } from "../Support/IHttpClient";
import { IToken, Token } from "../Entity/Token";

export interface IAuthenticationRepository {
  createRequestToken(url: string): Promise<Token>,

  createUserSession(
    url: string,
    request_token: string,
    username: string,
    password: string
  ): Promise<Token>
}

export class AuthenticationRepository implements IAuthenticationRepository {
  constructor(
    private httpClient: IHttpClient
  ) {}

  async createRequestToken(url: string): Promise<Token> {
    const { data } = await this.httpClient.get(url)

    return new Token(data)
  }

  async createUserSession(
    url: string,
    request_token: string,
    username: string,
    password: string
  ): Promise<Token> {
    const { data } = await this.httpClient
      .post(url, { request_token, username, password })

    return new Token(data)
  }
}