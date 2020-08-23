import Catalog from './Entity/Catalog'
import Movie from './Entity/Movie'

export default interface IRepository {
  popularMovies(url: string): Promise<Catalog>,
  search(url: string): Promise<Catalog>
  movieDetails(url: string): Promise<Movie>
}