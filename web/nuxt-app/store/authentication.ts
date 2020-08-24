import axios from 'axios'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

import AuthenticationService
  from '~/../../Application/TheMovieDb/Service/AuthenticationService'

import Token
  from '~/../../Domain/Authentication/Entity/Token'
import Session
  from '~/../../Domain/Authentication/Entity/Session'

import { RootState } from '~/store'

const cookie = process.client ? require('js-cookie') : undefined
const axiosInstance = axios.create()
const authenticationService = new AuthenticationService(axiosInstance)

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
  session: state => state.session,
  authenticated: state => !!state.session
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
    authenticationService.createToken()
      .then((data: Token) => {
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
    authenticationService.createTokenWithLogin(body)
      .then((data: Token) => {
        commit('SET_TOKEN', data)
        cookie.set('token', data)
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
    authenticationService.createSession(getters.token)
      .then((data: Session) => {
        cookie.set('session', data)
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
