import IAvatar from './IAvatar'

export default interface IAccount {
  avatar: IAvatar,
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  include_adult: boolean,
  username: string
}