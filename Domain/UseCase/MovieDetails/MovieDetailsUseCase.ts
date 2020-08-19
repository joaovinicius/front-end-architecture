import { IMovieRepository }
  from "../../Repository/MovieRepository";
import { Movie }
  from "../../Entity/Movie";

export class MovieDetailsUseCase {
  constructor(
    private movieRepository: IMovieRepository
  ) {}

  async execute(url: string): Promise<Movie> {
    return await this.movieRepository
      .movieDetails(url)
  }
}