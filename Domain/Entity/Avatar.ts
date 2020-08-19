export interface IAvatar {
  gravatar: { hash: string }
}

export class Avatar implements IAvatar{
  public gravatar: { hash: string }

  constructor(props: { hash: string }) {
    this.gravatar = props
  }
}