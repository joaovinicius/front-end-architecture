import { Read } from '../../Support/DataMapper'
import Token from '../../../Domain/Authentication/Entity/Token'

export default class TokenDM implements Read {
  responseDataToEntity(data: any): Token {
    return new Token(data)
  }
}