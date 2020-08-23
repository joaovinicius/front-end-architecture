import Repository from '../Repository'
import Movie from '../Entity/Movie'

export default class MovieDetails {
  constructor(private repository: Repository) {}

  async execute(url: string): Promise<Movie> {
    return await this.repository.movieDetails(url)
  }
}