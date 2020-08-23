import IProductionCountry from './IProductionCountry'

export default class ProductionCountry implements IProductionCountry {
  public iso_3166_1: string
  public name: string

  constructor(props: IProductionCountry) {
    this.iso_3166_1 = ''
    this.name = ''
    Object.assign(this, props)
  }
}
