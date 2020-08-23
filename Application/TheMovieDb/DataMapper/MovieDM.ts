import { Read } from '../../Support/DataMapper'
import Movie from '../../../Domain/Movie/Entity/Movie'

export default class MovieDM implements Read {
  responseDataToEntity(data: any): Movie {
    return new Movie(data, data.id)
  }
}