import Token from '../../../Domain/Authentication/Entity/Token'
import Session from '../../../Domain/Authentication/Entity/Session'

export default interface IAuthenticationRepository {
  createRequestToken(url: string): Promise<Token>,

  createTokenWithLogin(url: string, data: any): Promise<Token>,

  createSession(url: string, data: any): Promise<Session>
}
