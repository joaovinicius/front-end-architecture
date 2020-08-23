import ICatalogFilm from './ICatalogFilm'

export default interface ICatalog {
  page: number,
  results: Array<ICatalogFilm>,
  total_results: number,
  total_pages: number
}