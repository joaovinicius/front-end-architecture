import IToken from './IToken'

export default class Token implements IToken{
  public success: boolean
  public expires_at: string
  public request_token: string

  constructor(props: IToken) {
    this.success = false
    this.expires_at = ''
    this.request_token = ''
    Object.assign(this, props)
  }
}
