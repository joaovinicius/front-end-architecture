import IMovieRepository from '../Repository/IMovieRepository';
import Catalog from '../../../Domain/MovieCatalog/Entity/Catalog';

export default class PopularMovies {
  constructor(private repository: IMovieRepository) {}

  async execute(url: string): Promise<Catalog> {
    return await this.repository.popularMovies(url)
  }
}