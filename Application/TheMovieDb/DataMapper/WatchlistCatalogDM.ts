import { Read } from '../../Support/DataMapper'
import Catalog from '../../../Domain/Account/Entity/Catalog'

export default class WatchlistCatalogDM implements Read {
  responseDataToEntity(data: any): Catalog {
    return new Catalog(data)
  }
}