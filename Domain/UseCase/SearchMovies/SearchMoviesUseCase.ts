import { IMovieRepository }
  from "../../Repository/MovieRepository";
import { Catalog }
  from "../../Entity/Catalog";

export class SearchMoviesUseCase {
  constructor(
    private movieRepository: IMovieRepository
  ) {}

  async execute(url: string): Promise<Catalog> {
    return await this.movieRepository
      .search(url)
  }
}