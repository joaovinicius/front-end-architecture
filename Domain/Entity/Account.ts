import { IAvatar, Avatar } from './Avatar'

export interface IAccount {
  avatar: IAvatar,
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  include_adult: boolean,
  username: string
}

export class Account implements IAccount{
  public readonly id?: number
  public avatar: IAvatar
  public iso_639_1: string
  public iso_3166_1: string
  public name: string
  public include_adult: boolean
  public username: string

  constructor(props: Omit<IAccount, 'id'>, id?: number) {
    if (id) {
      this.id = id
    }
    this.avatar = new Avatar({ hash: '' })
    this.iso_639_1 = ''
    this.iso_3166_1 = ''
    this.name = ''
    this.include_adult = false
    this.username = ''
    Object.assign(this, props)
  }
}