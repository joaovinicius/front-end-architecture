import axios from 'axios'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

import MovieService
  from '~/../../Application/TheMovieDb/Service/MovieService'
import SearchMoviesDTO
  from '~/../../Application/TheMovieDb/DataTransferObject/SearchMoviesDTO'

import Catalog from '~/../../Domain/MovieCatalog/Entity/Catalog'
import Movie from '~/../../Domain/Movie/Entity/Movie'

import { RootState } from '~/store'

const axiosInstance = axios.create()
const movieService = new MovieService(axiosInstance)

export const state = () => ({
  movie: null,
  catalog: null,
  loading: false,
  errors: null
})

export type MovieState = ReturnType<typeof state>

export const getters: GetterTree<MovieState, RootState> = {
  movie: state => state.movie,
  catalog: state => state.catalog,
  loading: state => state.loading,
  errors: state => state.errors
}

export const mutations: MutationTree<MovieState> = {
  SET_MOVIE: (state, payload) => (state.movie = payload),
  SET_CATALOG: (state, payload) => (state.catalog = payload),
  SET_LOADING: (state, payload) => (state.loading = payload),
  SET_ERRORS: (state, payload) => (state.errors = payload)
}

export const actions: ActionTree<MovieState, RootState> = {
  fetchPopularMovies ({ commit }, page: number = 1) {
    commit('SET_LOADING', false)
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

  fetchNextPopularMovies ({ dispatch, getters }) {
    dispatch('fetchPopularMovies', getters.catalog.page + 1)
  },

  fetchPreviousPopularMovies ({ dispatch, getters }) {
    dispatch('fetchPopularMovies', getters.catalog.page - 1)
  },

  fetchPagePopularMovies ({ dispatch }, page: number) {
    dispatch('fetchPopularMovies', page)
  },

  searchMovies ({ commit }, props: SearchMoviesDTO) {
    commit('SET_LOADING', false)
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

  fetchMovieDetails ({ commit }, movieId: number) {
    commit('SET_MOVIE', null)
    commit('SET_LOADING', false)
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
  }
}
