import Catalog from './../../../Domain/Account/Entity/Catalog'
import Account from './../../../Domain/Account/Entity/Account'
import Status from './../../../Domain/Account/Entity/Status'

export default interface IAccountRepository {
  myAccount(url: string): Promise<Account>,
  myWatchList(url: string): Promise<Catalog>,
  addToMyWatchlist(url: string, data: any): Promise<Status>
}