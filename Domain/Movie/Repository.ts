import Catalog from './Entity/Catalog'
import Movie from './Entity/Movie'

export default interface Repository {
  popularMovies(url: string): Promise<Catalog>,
  search(url: string): Promise<Catalog>
  movieDetails(url: string): Promise<Movie>
}