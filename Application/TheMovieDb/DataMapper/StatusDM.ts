import { Read } from '../../Support/DataMapper'
import Status from '../../../Domain/Account/Entity/Status'

export default class StatusDM implements Read {
  responseDataToEntity(data: any): Status {
    return new Status(data)
  }
}