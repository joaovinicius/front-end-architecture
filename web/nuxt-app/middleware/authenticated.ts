
import { Middleware } from '@nuxt/types'

const authenticatedMiddleware: Middleware = (context) => {
  if (!context.store.state.authentication.session) {
    context.redirect('/')
  }
}

export default authenticatedMiddleware
