import IAvatar from './IAvatar'

export default class Avatar implements IAvatar{
  public gravatar: { hash: string }

  constructor(props: { hash: string }) {
    this.gravatar = props
  }
}