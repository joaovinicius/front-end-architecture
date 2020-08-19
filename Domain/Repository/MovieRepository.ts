import { IHttpClient } from '../Support/IHttpClient';
import { Catalog } from "../Entity/Catalog";
import { Movie } from "../Entity/Movie";

export interface IMovieRepository {
  popularMovies(url: string): Promise<Catalog>,
  search(url: string): Promise<Catalog>
  movieDetails(url: string): Promise<Movie>
}

export class MovieRepository implements IMovieRepository {
  constructor(
    private httpClient: IHttpClient
  ) {}

  async popularMovies(url: string): Promise<Catalog> {
    const { data } = await this.httpClient.get(url)

    return new Catalog(data)
  }

  async search(url: string): Promise<Catalog> {
    const { data } = await this.httpClient.get(url)

    return new Catalog(data)
  }

  async movieDetails(url: string): Promise<Movie> {
    const { data } = await this.httpClient.get(url)

    return new Movie(data, data.id)
  }
}