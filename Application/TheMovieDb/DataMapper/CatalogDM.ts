import { Read } from '../../Support/DataMapper'
import Catalog from '../../../Domain/Movie/Entity/Catalog'

export default class CatalogDM implements Read {
  responseDataToEntity(data: any): Catalog {
    return new Catalog(data)
  }
}