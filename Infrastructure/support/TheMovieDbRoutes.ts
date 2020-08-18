class TheMovieDbRoutes {
  public baseUrl: string
  public apiKey: string

  constructor (baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl
    this.apiKey = apiKey
  }

  get authentication () {
    return `${this.baseUrl}/authentication`
  }

  get authenticationTokenNew () {
    return `${this.authentication}/token/new?api_key=${this.apiKey}`
  }

  get authenticationWithLogin () {
    return `${this.authentication}/token/validate_with_login?api_key=${this.apiKey}`
  }
}

const apiBaseUrl = process.env.NUXT_ENV_API_BASE_URL || ''
const apiKey = process.env.NUXT_ENV_API_KEY || ''

export const instance = new TheMovieDbRoutes(apiBaseUrl, apiKey)
