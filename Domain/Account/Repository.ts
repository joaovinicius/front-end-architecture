import Catalog from './Entity/Watchlist'
import Account from './Entity/Account'
import Status from './Entity/Status'

export default interface Repository {
  myAccount(url: string): Promise<Account>,
  myWatchList(url: string): Promise<Catalog>,
  addToMyWatchlist(url: string, data: any): Promise<Status>
}