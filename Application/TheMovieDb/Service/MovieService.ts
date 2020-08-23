import { HttpClient } from '../../Support/HttpClient'
import UseCaseFactory  from '../../Support/UseCaseFactory'
import MovieRepository from '../Repository/MovieRepository'
import { Routes } from './Routes'

import Catalog from '../../../Domain/Movie/Entity/Catalog'
import Movie from '../../../Domain/Movie/Entity/Movie'

import MovieDetails from '../UseCase/MovieDetails'
import PopularMovies from '../UseCase/PopularMovies'
import SearchMovies from '../UseCase/SearchMovies'

import SearchMoviesDTO from '../DataTransferObject/SearchMoviesDTO'

export default class MovieService {
  public repository: MovieRepository

  constructor(httpClient: HttpClient) {
    this.repository = new MovieRepository(httpClient)
  }

  getPopularMovies(page: number): Promise<Catalog> {
    const popularMovies = UseCaseFactory(this.repository, PopularMovies)

    return popularMovies.execute(Routes.popularMovies(page))
  }

  searchMovies(props: SearchMoviesDTO): Promise<Catalog> {
    const searchMovies = UseCaseFactory(this.repository, SearchMovies)

    return searchMovies.execute(Routes.searchMovie(props.query, props.page))
  }

  getMovieDetails(movieId: number): Promise<Movie> {
    const movieDetails = UseCaseFactory(this.repository, MovieDetails)

    return movieDetails.execute(Routes.movieDetails(movieId))
  }
}