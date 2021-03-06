import ISpokenLanguage from './ISpokenLanguage'

export default class SpokenLanguage implements ISpokenLanguage {
  public iso_639_1: string
  public name: string

  constructor(props: ISpokenLanguage) {
    this.iso_639_1 = ''
    this.name = ''
    Object.assign(this, props)
  }
}
