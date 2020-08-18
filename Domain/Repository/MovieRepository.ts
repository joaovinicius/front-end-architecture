import { IHttpClient } from '../Support/IHttpClient';
import { Catalog } from "../Entity/Catalog";
import { Movie } from "../Entity/Movie";

export interface IMovieRepository {
  findPopular(apiKey: string): Promise<Catalog>,
  search(apiKey: string): Promise<Catalog>
  findById(apiKey: string): Promise<Movie>
}

export class MovieRepository implements IMovieRepository {
  constructor(
    private httpClient: IHttpClient
  ) {}

  async findPopular(url: string): Promise<Catalog> {
    const { data } = await this.httpClient.get(url)

    return new Catalog(data)
  }

  async search(url: string): Promise<Catalog> {
    const { data } = await this.httpClient.get(url)

    return new Catalog(data)
  }

  async findById(url: string): Promise<Movie> {
    const { data } = await this.httpClient.get(url)

    return new Movie(data)
  }
}