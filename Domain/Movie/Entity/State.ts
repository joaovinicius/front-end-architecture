import IState from './IState'

export default class State implements IState {
  public readonly id?: number
  public favorite: boolean
  public rated: boolean
  public watchlist: boolean

  constructor(props: Omit<IState, 'id'>, id?: number) {
    if (id) {
      this.id = id
    }
    this.favorite = false
    this.rated = false
    this.watchlist = false
    Object.assign(this, props)
  }
}
