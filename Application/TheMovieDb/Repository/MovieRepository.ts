import { HttpClient } from '../../Support/HttpClient'
import Repository from '../../../Domain/Movie/Repository'

import Catalog from '../../../Domain/Movie/Entity/Catalog'
import Movie from '../../../Domain/Movie/Entity/Movie'
import State from '../../../Domain/Movie/Entity/State'

import MovieDM from '../DataMapper/MovieDM'
import CatalogDM from '../DataMapper/CatalogDM'
import StateDM from '../DataMapper/StateDM'

const movieDM = new MovieDM()
const catalogDM = new CatalogDM()
const stateDM = new StateDM()

export default class MovieRepository implements Repository {
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

  async movieAccountState(url: string): Promise<State> {
    const { data } = await this.httpClient.get(url)

    return stateDM.responseDataToEntity(data)
  }
}