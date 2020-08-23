import Token from './Entity/Token'
import Session from './Entity/Session'

export default interface Repository {
  createRequestToken(url: string): Promise<Token>,

  createTokenWithLogin(url: string, data: any): Promise<Token>,

  createSession(url: string, data: any): Promise<Session>
}
