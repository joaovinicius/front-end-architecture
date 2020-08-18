import { ICatalog } from "../Entity/Catalog";
import { IMovie } from "../Entity/Movie";

export interface IMovieRepository {
  findPopular(apiKey: string): Promise<ICatalog>,
  search(apiKey: string, query: string): Promise<ICatalog>
  findById(apiKey: string, movie_id: number): Promise<IMovie>
}