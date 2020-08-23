import Repository from '../../../Domain/Movie/Repository'
import Movie from '../../../Domain/Movie/Entity/Movie'

export default class MovieDetails {
  constructor(private repository: Repository) {}

  async execute(url: string): Promise<Movie> {
    return await this.repository.movieDetails(url)
  }
}