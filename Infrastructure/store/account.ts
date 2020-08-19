import axios from 'axios'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { AccountRepository }
  from '../../Domain/Repository/AccountRepository'
import { AddToMyWatchlistUseCase }
  from '../../Domain/UseCase/AddToMyWatchlist/AddToMyWatchlistUseCase'
import { IAddToMyWatchlistDTO }
  from '../../Domain/UseCase/AddToMyWatchlist/IAddToMyWatchlistDTO'
import { MyWatchlistUseCase }
  from '../../Domain/UseCase/MyWatchlist/MyWatchlistUseCase'
import { MyAccountUseCase }
  from '../../Domain/UseCase/MyAccount/MyAccountUseCase'
import { UseCaseFactory }
  from '../../Domain/Support/UseCaseFactory'
import { IAccount } from '../../Domain/Entity/Account'
import { ICatalog } from '../../Domain/Entity/Catalog'
import { TMDBRoutes } from '../../Domain/Support/TheMovieDbRoutes'
import { RootState } from '~/store'

const axiosInstance = axios.create()
const accountRepository = new AccountRepository(axiosInstance)
const addToMyWatchlistUseCase = UseCaseFactory(
  accountRepository,
  AddToMyWatchlistUseCase
)
const myWatchlistUseCase = UseCaseFactory(
  accountRepository,
  MyWatchlistUseCase
)
const myAccountUseCase = UseCaseFactory(
  accountRepository,
  MyAccountUseCase
)

export const state = () => ({
  account: null,
  loading: false,
  errors: null,
  saved: false
})

export type AccountState = ReturnType<typeof state>

export const getters: GetterTree<AccountState, RootState> = {
  account: state => state.account,
  accountId: state => state.account?.id,
  loading: state => state.loading,
  errors: state => state.errors,
  saved: state => state.saved,
  myMovies: (state, getters, rootState, rootGetters) => rootGetters['movies/catalog'],
  sessionId: (state, getters, rootState, rootGetters) => rootGetters['authentication/session'].id
}

export const mutations: MutationTree<AccountState> = {
  SET_ACCOUNT: (state, payload) => (state.account = payload),
  SET_LOADING: (state, payload) => (state.loading = payload),
  SET_ERRORS: (state, payload) => (state.errors = payload),
  SET_SAVED: (state, payload) => (state.saved = payload)
}

export const actions: ActionTree<AccountState, RootState> = {
  myAccount ({ commit, getters }) {
    commit('SET_LOADING', true)
    myAccountUseCase.execute(TMDBRoutes.account(getters.sessionId))
      .then((data: IAccount) => {
        commit('SET_ACCOUNT', data)
      })
      .catch((error: any) => {
        commit('SET_ERRORS', error)
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  },

  myWatchlist ({ commit, getters }, page: number = 1) {
    commit('SET_LOADING', true)
    const { sessionId, accountId } = getters
    myWatchlistUseCase.execute(
      TMDBRoutes.accountWatchlist(accountId, sessionId, page)
    )
      .then((data: ICatalog) => {
        commit('movies/SET_CATALOG', data, { root: true })
      })
      .catch((error: any) => {
        commit('SET_ERRORS', error)
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  },

  addToMyWatchlist ({ commit, getters }, payload: IAddToMyWatchlistDTO) {
    commit('SET_LOADING', true)
    commit('SET_SAVED', false)
    const { sessionId, accountId } = getters
    addToMyWatchlistUseCase.execute(
      TMDBRoutes.addToAccountWatchlist(accountId, sessionId),
      payload
    )
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
