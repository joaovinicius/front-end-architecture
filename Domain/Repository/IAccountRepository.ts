import { ICatalog } from "../Entity/Catalog";

export interface IAccountRepository {
  findMyMovies(): Promise<ICatalog>
}