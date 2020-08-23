import { Read } from '../../Support/DataMapper'
import Watchlist from '../../../Domain/Account/Entity/Watchlist'

export default class WatchlistDM implements Read {
  responseDataToEntity(data: any): Watchlist {
    return new Watchlist(data)
  }
}