import { Read } from '../../Support/DataMapper'
import Session from '../../../Domain/Authentication/Entity/Session'

export default class SessionDM implements Read {
  responseDataToEntity(data: any): Session {
    return new Session(data)
  }
}