import ICatalogMovie from './ICatalogMovie'

export default interface ICatalog {
  page: number,
  results: Array<ICatalogMovie>,
  total_results: number,
  total_pages: number
}