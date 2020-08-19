export interface ISession {
  success: boolean,
  session_id: string
}

export class Session implements ISession{
  public success: boolean
  public session_id: string

  constructor(props: ISession) {
    this.success = false
    this.session_id = ''
    Object.assign(this, props)
  }
}
