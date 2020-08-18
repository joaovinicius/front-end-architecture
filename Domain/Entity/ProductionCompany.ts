export interface IProductionCompany {
  name: string,
  logo_path: string,
  origin_country: string,
}

export class ProductionCompany implements IProductionCompany {
  public readonly id: number
  public name: string
  public logo_path: string
  public origin_country: string

  constructor(props: Omit<IProductionCompany, 'id'>, id?: number) {
    if (id) {
      this.id = id
    }
    this.name = ''
    this.logo_path = ''
    this.origin_country = ''
    Object.assign(this, props)
  }
}
