import axios from 'axios'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

import AccountService
  from '~/../../Application/TheMovieDb/Service/AccountService'
import AddToMyWatchlistDTO
  from '~/../../Application/TheMovieDb/DataTransferObject/AddToMyWatchlistDTO'

import Account from '~/../../Domain/Account/Entity/Account'
import Watchlist from '~/../../Domain/Account/Entity/Watchlist'

import { RootState } from '~/store'

const axiosInstance = axios.create()
const accountService = new AccountService(axiosInstance)

export const state = () => ({
  account: null,
  watchlist: null,
  loading: false,
  errors: null,
  saved: false
})

export type AccountState = ReturnType<typeof state>

export const getters: GetterTree<AccountState, RootState> = {
  account: state => state.account,
  watchlist: state => state.watchlist,
  loading: state => state.loading,
  errors: state => state.errors,
  saved: state => state.saved,
  sessionId: (state, getters, rootState, rootGetters) => rootGetters['authentication/session'].session_id
}

export const mutations: MutationTree<AccountState> = {
  SET_ACCOUNT: (state, payload) => (state.account = payload),
  SET_WATCHLIST: (state, payload) => (state.watchlist = payload),
  SET_LOADING: (state, payload) => (state.loading = payload),
  SET_ERRORS: (state, payload) => (state.errors = payload),
  SET_SAVED: (state, payload) => (state.saved = payload)
}

export const actions: ActionTree<AccountState, RootState> = {
  myAccount ({ commit, getters }) {
    commit('SET_LOADING', true)
    accountService.myAccount(getters.sessionId)
      .then((data: Account) => {
        commit('SET_ACCOUNT', data)
      })
      .catch((error: any) => {
        commit('SET_ERRORS', error)
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  },

  fetchMyWatchlist ({ commit, getters }, page: number = 1) {
    commit('SET_LOADING', true)
    const { sessionId } = getters
    const accountId = getters.account.id
    accountService.myWatchlist(accountId, sessionId, page)
      .then((data: Watchlist) => {
        commit('SET_WATCHLIST', data)
      })
      .catch((error: any) => {
        commit('SET_ERRORS', error)
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  },

  fetchNextMyWatchlist ({ dispatch, getters }) {
    dispatch('fetchMyWatchlist', getters.watchlist.page + 1)
  },

  fetchPreviousMyWatchlist ({ dispatch, getters }) {
    dispatch('fetchMyWatchlist', getters.watchlist.page - 1)
  },

  fetchPageMyWatchlist ({ dispatch }, page: number) {
    dispatch('fetchMyWatchlist', page)
  },

  addToMyWatchlist ({ commit, getters }, payload: AddToMyWatchlistDTO) {
    commit('SET_LOADING', true)
    commit('SET_SAVED', false)
    const { sessionId } = getters
    const accountId = getters.account.id
    accountService.addToMyWatchlist(accountId, sessionId, payload)
      .then(() => {
        commit('SET_SAVED', true)
      })
      .catch((error: any) => {
        commit('SET_ERRORS', error)
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  }
}
