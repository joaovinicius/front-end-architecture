import Repository from '../Repository';
import Catalog from '../Entity/Catalog';

export default class PopularMovies {
  constructor(private repository: Repository) {}

  async execute(url: string): Promise<Catalog> {
    return await this.repository.popularMovies(url)
  }
}