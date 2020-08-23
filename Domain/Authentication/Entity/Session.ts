import ISession from './ISession'

export default class Session implements ISession{
  public success: boolean
  public session_id: string

  constructor(props: ISession) {
    this.success = false
    this.session_id = ''
    Object.assign(this, props)
  }
}
