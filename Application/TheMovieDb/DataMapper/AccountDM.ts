import { Read } from '../../Support/DataMapper'
import Account from '../../../Domain/Account/Entity/Account'

export default class AccountDM implements Read {
  responseDataToEntity(data: any): Account {
    return new Account(data, data.id)
  }
}