import Repository from '../../../Domain/Movie/Repository'
import State from '../../../Domain/Movie/Entity/State'

export default class MovieAccountState {
  constructor(private repository: Repository) {}

  async execute(url: string): Promise<State> {
    return await this.repository.movieAccountState(url)
  }
}