class TheMovieDbRoutes {
  public baseUrl: string
  public apiKey: string

  constructor (baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl
    this.apiKey = apiKey
  }

  authentication (uri: string): string {
    return `${this.baseUrl}authentication/${uri}?api_key=${this.apiKey}`
  }

  get createRequestToken (): string {
    return this.authentication('token/new')
  }

  get createRequestTokenWithLogin (): string {
    return this.authentication('token/validate_with_login')
  }

  get createSession() : string {
    return this.authentication('session/new')
  }

  account (sessionId: string): string {
    return `${this.baseUrl}account?api_key=${this.apiKey}&session_id=${sessionId}`
  }

  accountWatchlist(accountId: number, sessionId: string, page: number): string {
    return `${this.baseUrl}account/${accountId}/watchlist/movies?api_key=${this.apiKey}&session_id=${sessionId}&page=${page}`
  }

  addToAccountWatchlist(accountId: number, sessionId: string): string {
    return `${this.baseUrl}account/${accountId}/watchlist?api_key=${this.apiKey}&session_id=${sessionId}`
  }

  popularMovies(page: number): string {
    return `${this.baseUrl}movie/popular?api_key=${this.apiKey}&page=${page}`
  }

  movieDetails(movieId: number): string {
    return `${this.baseUrl}movie/${movieId}?api_key=${this.apiKey}`
  }

  searchMovie(query: string, page: number): string {
    return `${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${query}&page=${page}`
  }
}

const apiBaseUrl = process.env.NUXT_ENV_API_BASE_URL || ''
const apiKey = process.env.NUXT_ENV_API_KEY || ''

export const Routes = new TheMovieDbRoutes(apiBaseUrl, apiKey)
