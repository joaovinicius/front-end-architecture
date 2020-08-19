interface Movie {
  poster_path: string,
  adult: boolean,
  overview: string,
  release_date: string,
  genre_ids: Array<number>,
  id: number,
  original_title: string,
  original_language: string,
  title: string,
  backdrop_path: string,
  popularity: number,
  vote_count: number,
  video: boolean,
  vote_average: number
}

export interface ICatalog {
  page: number,
  results: Array<Movie>,
  total_results: number,
  total_pages: number
}

export class Catalog implements ICatalog {
  public page: number
  public results: Array<Movie>
  public total_results: number
  public total_pages: number

  constructor(props: ICatalog) {
    this.page = 0
    this.results = []
    this.total_pages = 0
    this.total_results = 0
    Object.assign(this, props)
  }
}
