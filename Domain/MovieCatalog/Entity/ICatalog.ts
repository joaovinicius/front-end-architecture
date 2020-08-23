import IMovie from './IMovie'

export default interface ICatalog {
  page: number,
  results: Array<IMovie>,
  total_results: number,
  total_pages: number
}