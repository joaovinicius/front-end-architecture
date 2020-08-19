import { IHttpClient } from '../Support/IHttpClient'
import { MovieRepository, IMovieRepository }
  from '../Repository/MovieRepository'
import { PopularMoviesUseCase }
  from '../UseCase/PopularMovies/PopularMoviesUseCase'
import { SearchMoviesUseCase }
  from '../UseCase/SearchMovies/SearchMoviesUseCase'
import { ISearchMoviesDTO }
  from '../UseCase/SearchMovies/ISearchMoviesDTO'
import { MovieDetailsUseCase }
  from '../UseCase/MovieDetails/MovieDetailsUseCase'
import { UseCaseFactory }
  from '../Support/UseCaseFactory'
import { TMDBRoutes } from '../Support/TheMovieDbRoutes'
import { Catalog } from '../Entity/Catalog'
import { Movie } from '../Entity/Movie'

export class MovieService {
  public repository: IMovieRepository

  constructor(httpClient: IHttpClient) {
    this.repository = new MovieRepository(httpClient)
  }

  getPopularMovies(page: number): Promise<Catalog> {
    const popularMoviesUseCase = UseCaseFactory(
      this.repository,
      PopularMoviesUseCase
    )
    return popularMoviesUseCase.execute(TMDBRoutes.popularMovies(page))
  }

  searchMovies(props: ISearchMoviesDTO): Promise<Catalog> {
    const searchMoviesUseCase = UseCaseFactory(
      this.repository,
      SearchMoviesUseCase
    )
    return searchMoviesUseCase.execute(
      TMDBRoutes.searchMovie(props.query, props.page)
    )
  }

  getMovieDetails(movieId: number): Promise<Movie> {
    const movieDetailsUseCase = UseCaseFactory(
      this.repository,
      MovieDetailsUseCase
    )
    return movieDetailsUseCase.execute(TMDBRoutes.movieDetails(movieId))
  }
}