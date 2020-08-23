import Repository from '../../../Domain/Movie/Repository';
import Catalog from '../../../Domain/Movie/Entity/Catalog';

export default class PopularMovies {
  constructor(private repository: Repository) {}

  async execute(url: string): Promise<Catalog> {
    return await this.repository.popularMovies(url)
  }
}