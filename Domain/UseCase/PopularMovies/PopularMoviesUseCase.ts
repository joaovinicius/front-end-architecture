import { IMovieRepository }
  from "../../Repository/MovieRepository";
import { Catalog }
  from "../../Entity/Catalog";

export class PopularMoviesUseCase {
  constructor(
    private movieRepository: IMovieRepository
  ) {}

  async execute(url: string): Promise<Catalog> {
    return await this.movieRepository
      .findPopular(url)
  }
}