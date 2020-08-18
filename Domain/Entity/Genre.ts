export interface IGenre {
  name: string
}

export class Genre implements IGenre {
  public readonly id: number
  public name: string

  constructor(props: Omit<IGenre, 'id'>, id?: number) {
    if (id) {
      this.id = id
    }
    this.name = ''
    Object.assign(this, props)
  }
}
