import { HttpClient } from '../../Support/HttpClient'
import IMovieRepository from './IMovieRepository'
import Catalog from '../../../Domain/MovieCatalog/Entity/Catalog'
import Movie from '../../../Domain/Movie/Entity/Movie'
import MovieDM from '../DataMapper/MovieDM'
import CatalogDM from '../DataMapper/CatalogDM'
const movieDM = new MovieDM()
const catalogDM = new CatalogDM()

export default class MovieRepository implements IMovieRepository {
  constructor(
    private httpClient: HttpClient
  ) {}

  async popularMovies(url: string): Promise<Catalog> {
    const { data } = await this.httpClient.get(url)

    return catalogDM.responseDataToEntity(data)
  }

  async search(url: string): Promise<Catalog> {
    const { data } = await this.httpClient.get(url)

    return catalogDM.responseDataToEntity(data)
  }

  async movieDetails(url: string): Promise<Movie> {
    const { data } = await this.httpClient.get(url)

    return movieDM.responseDataToEntity(data)
  }
}