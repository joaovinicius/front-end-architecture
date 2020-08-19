import axios from 'axios'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

import { MovieRepository }
  from '../../Domain/Repository/MovieRepository'
import { PopularMoviesUseCase }
  from '../../Domain/UseCase/PopularMovies/PopularMoviesUseCase'
import { SearchMoviesUseCase }
  from '../../Domain/UseCase/SearchMovies/SearchMoviesUseCase'
import { MovieDetailsUseCase }
  from '../../Domain/UseCase/MovieDetails/MovieDetailsUseCase'
import { UseCaseFactory }
  from '../../Domain/Support/UseCaseFactory'
import { ICatalog } from '../../Domain/Entity/Catalog'
import { TMDBRoutes } from '../../Domain/Support/TheMovieDbRoutes'
import { RootState } from '~/store'
import { IMovie } from '~/../Domain/Entity/Movie'

const axiosInstance = axios.create()
const movieRepository = new MovieRepository(axiosInstance)
const popularMoviesUseCase = UseCaseFactory(
  movieRepository,
  PopularMoviesUseCase
)
const searchMoviesUseCase = UseCaseFactory(
  movieRepository,
  SearchMoviesUseCase
)
const movieDetailsUseCase = UseCaseFactory(
  movieRepository,
  MovieDetailsUseCase
)

interface SearchParams {
  query: string,
  page: number
}

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
  popularMovies ({ commit }, page: number = 1) {
    commit('SET_LOADING', false)
    popularMoviesUseCase.execute(TMDBRoutes.popularMovies(page))
      .then((data: ICatalog) => {
        commit('SET_CATALOG', data)
      })
      .catch((error: any) => {
        commit('SET_ERRORS', error)
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  },

  search ({ commit }, props: SearchParams) {
    commit('SET_LOADING', false)
    searchMoviesUseCase.execute(TMDBRoutes.searchMovie(props.query, props.page))
      .then((data: ICatalog) => {
        commit('SET_CATALOG', data)
      })
      .catch((error: any) => {
        commit('SET_ERRORS', error)
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  },

  movieDetails ({ commit }, movieId: number) {
    commit('SET_LOADING', false)
    movieDetailsUseCase.execute(TMDBRoutes.movieDetails(movieId))
      .then((data: IMovie) => {
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
