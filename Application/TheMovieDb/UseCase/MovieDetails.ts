import IMovieRepository from '../Repository/IMovieRepository'
import Movie from '../../../Domain/Movie/Entity/Movie'

export default class MovieDetails {
  constructor(private repository: IMovieRepository) {}

  async execute(url: string): Promise<Movie> {
    return await this.repository.movieDetails(url)
  }
}