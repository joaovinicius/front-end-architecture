import Catalog from '../../../Domain/MovieCatalog/Entity/Catalog'
import Movie from '../../../Domain/Movie/Entity/Movie'

export default interface IMovieRepository {
  popularMovies(url: string): Promise<Catalog>,
  search(url: string): Promise<Catalog>
  movieDetails(url: string): Promise<Movie>
}