import ICatalog from './ICatalog'
import ICatalogMovie from './ICatalogMovie'

export default class Catalog implements ICatalog {
  public page: number
  public results: Array<ICatalogMovie>
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
