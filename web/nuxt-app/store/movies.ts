import axios from 'axios'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

import MovieService
  from '~/../../Application/TheMovieDb/Service/MovieService'
import SearchMoviesDTO
  from '~/../../Application/TheMovieDb/DataTransferObject/SearchMoviesDTO'

import Catalog from '~/../../Domain/Movie/Entity/Catalog'
import Movie from '~/../../Domain/Movie/Entity/Movie'
import State from '~/../../Domain/Movie/Entity/State'

import { RootState } from '~/store'

const axiosInstance = axios.create()
const movieService = new MovieService(axiosInstance)

export const state = () => ({
  movie: null,
  movieAccountState: null,
  catalog: null,
  loading: false,
  errors: null
})

export type MovieState = ReturnType<typeof state>

export const getters: GetterTree<MovieState, RootState> = {
  movie: state => state.movie,
  movieAccountState: state => state.movieAccountState,
  catalog: state => state.catalog,
  loading: state => state.loading,
  errors: state => state.errors,
  authenticated: (state, getters, rootState, rootGetters) => rootGetters['authentication/authenticated'],
  sessionId: (state, getters, rootState, rootGetters) => rootGetters['authentication/session'].session_id
}

export const mutations: MutationTree<MovieState> = {
  SET_MOVIE: (state, payload) => (state.movie = payload),
  SET_MOVIE_ACCOUNT_STATE: (state, payload) => (state.movieAccountState = payload),
  SET_CATALOG: (state, payload) => (state.catalog = payload),
  SET_LOADING: (state, payload) => (state.loading = payload),
  SET_ERRORS: (state, payload) => (state.errors = payload)
}

export const actions: ActionTree<MovieState, RootState> = {
  resetCatalog ({ commit }) {
    commit('SET_CATALOG', null)
  },

  fetchPopularMovies ({ commit, dispatch }, page: number = 1) {
    dispatch('resetCatalog')
    commit('SET_LOADING', true)
    movieService.getPopularMovies(page)
      .then((data: Catalog) => {
        commit('SET_CATALOG', data)
      })
      .catch((error: any) => {
        commit('SET_ERRORS', error)
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  },

  searchMovies ({ commit, dispatch }, props: SearchMoviesDTO) {
    dispatch('resetCatalog')
    commit('SET_LOADING', true)
    movieService.searchMovies(props)
      .then((data: Catalog) => {
        commit('SET_CATALOG', data)
      })
      .catch((error: any) => {
        commit('SET_ERRORS', error)
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  },

  fetchMovieDetails ({ commit, dispatch, getters }, movieId: number) {
    commit('SET_MOVIE', null)
    commit('SET_LOADING', true)

    if (getters.authenticated) {
      dispatch('fetchMovieAccountState', movieId)
    }

    movieService.getMovieDetails(movieId)
      .then((data: Movie) => {
        commit('SET_MOVIE', data)
      })
      .catch((error: any) => {
        commit('SET_ERRORS', error)
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  },

  fetchMovieAccountState ({ commit, getters }, movieId: number) {
    commit('SET_LOADING', true)
    movieService.getMovieAccountState(movieId, getters.sessionId)
      .then((data: State) => {
        commit('SET_MOVIE_ACCOUNT_STATE', data)
      })
      .catch((error: any) => {
        commit('SET_ERRORS', error)
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  }
}
