import Catalog from '../../Movie/Entity/Catalog'
import IWatchlist from './IWatchlist'

export default class Watchlist extends Catalog {
  constructor(props: IWatchlist) {
    super(props)
  }
}
