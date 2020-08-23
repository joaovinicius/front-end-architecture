import IProductionCompany from './IProductionCompany'
import IProductionCountry from './IProductionCountry'
import ISpokenLanguage from './ISpokenLanguage'
import IGenre from './IGenre'

export default interface IMovie {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: string | null
  budget: number
  genres: Array<IGenre>
  homepage: string
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  production_companies: Array<IProductionCompany>
  production_countries: Array<IProductionCountry>
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: Array<ISpokenLanguage>
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}