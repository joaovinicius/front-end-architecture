import { GetterTree, ActionTree, MutationTree } from 'vuex'
const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {}

export const mutations: MutationTree<RootState> = {}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit ({ commit }, { req }) {
    if (req.headers.cookie) {
      const {
        token,
        session,
        account
      } = cookieparser.parse(req.headers.cookie)

      try {
        await commit('authentication/SET_TOKEN', JSON.parse(token), { root: true })
        await commit('authentication/SET_SESSION', JSON.parse(session), { root: true })
        await commit('account/SET_ACCOUNT', JSON.parse(account), { root: true })
      } catch (err) { }
    }
  }
}
