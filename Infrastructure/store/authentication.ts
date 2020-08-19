import axios from 'axios'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { AuthenticationRepository }
  from '../../Domain/Repository/AuthenticationRepository'
import { CreateTokenUseCase }
  from '../../Domain/UseCase/CreateToken/CreateTokenUseCase'
import { CreateTokenWithLoginUseCase }
  from '../../Domain/UseCase/CreateTokenWithLogin/CreateTokenWithLoginUseCase'
import { CreateSessionUseCase }
  from '../../Domain/UseCase/CreateSession/CreateSessionUseCase'
import { IToken } from '../../Domain/Entity/Token'
import { TMDBRoutes } from '../../Domain/Support/TheMovieDbRoutes'
import { UseCaseFactory }
  from '../../Domain/Support/UseCaseFactory'
import { RootState } from '~/store'

const axiosInstance = axios.create()
const authenticationRepository = new AuthenticationRepository(axiosInstance)
const createToken = UseCaseFactory(
  authenticationRepository,
  CreateTokenUseCase
)
const createTokenWithLoginUseCase = UseCaseFactory(
  authenticationRepository,
  CreateTokenWithLoginUseCase
)
const createSessionUseCase = UseCaseFactory(
  authenticationRepository,
  CreateSessionUseCase
)

export const state = () => ({
  loading: false,
  errors: null,
  token: null,
  session: null
})

export type AuthenticationState = ReturnType<typeof state>

export const getters: GetterTree<AuthenticationState, RootState> = {
  loading: state => state.loading,
  errors: state => state.errors,
  token: state => state.token,
  session: state => state.session
}

export const mutations: MutationTree<AuthenticationState> = {
  SET_LOADING: (state, payload) => (state.loading = payload),
  SET_ERRORS: (state, payload) => (state.errors = payload),
  SET_TOKEN: (state, payload) => (state.token = payload),
  SET_SESSION: (state, payload) => (state.session = payload)
}

export const actions: ActionTree<AuthenticationState, RootState> = {
  createRequestToken ({ commit }) {
    commit('SET_LOADING', true)
    createToken.execute(TMDBRoutes.createRequestToken)
      .then((data: IToken) => {
        commit('SET_TOKEN', data)
      })
      .catch((error: any) => {
        commit('SET_ERRORS', error)
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  },

  createTokenWithLogin ({ commit, getters, dispatch }, payload) {
    const body = { ...payload, ...getters.token }
    commit('SET_LOADING', true)
    createTokenWithLoginUseCase.execute(
      TMDBRoutes.createRequestTokenWithLogin,
      body
    )
      .then((data: IToken) => {
        commit('SET_TOKEN', data)
        dispatch('createSession')
      })
      .catch((error: any) => {
        commit('SET_ERRORS', error)
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  },

  createSession ({ commit, getters, dispatch }) {
    commit('SET_LOADING', true)
    createSessionUseCase.execute(
      TMDBRoutes.authenticationTokenNew,
      getters.token
    )
      .then((data: IToken) => {
        commit('SET_SESSION', data)
        dispatch('account/myAccount', null, { root: true })
      })
      .catch((error: any) => {
        commit('SET_ERRORS', error)
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  }
}
