import { Read } from '../../Support/DataMapper'
import State from '../../../Domain/Movie/Entity/State'

export default class StateDM implements Read {
  responseDataToEntity(data: any): State {
    return new State(data, data.id)
  }
}