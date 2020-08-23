import IStatus from './IStatus'

export default class Status implements IStatus{
  public status_code: number
  public status_message: string

  constructor(props: IStatus) {
    this.status_code = 0
    this.status_message = ''
    Object.assign(this, props)
  }
}