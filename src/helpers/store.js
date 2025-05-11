import { Store } from 'vuex'
import config from '../helpers/config'
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'

const persistState = () => ({})

const state = {
  homeTrigger: false,
  footerTrigger: false,
  isLoadingCount: 0,
  error: {
    status: 200,
    message: ''
  }
}

const actions = {
  updateFooterTrigger (context, state) {
    context.commit('updateFooterTrigger', true)
  },
  updateHomeTrigger (context, state) {
    context.commit('updateHomeTrigger', true)
  },
  isLoading (context, isLoading) {
    context.commit('updateIsLoading', isLoading)
  },
  updateError (context, error) {
    context.commit('updateError', error)
  }
}

const getters = {
  showApps: (state) => state.footerTrigger && state.homeTrigger,
  isLoading: (state) => state.isLoadingCount > 0,
  error: (state) => state.error,
  errorMessage: (state, getters) => getters.error.message,
  errorStatus: (state, getters) => getters.error.status
}

const mutations = {
  updateFooterTrigger (state, newState) {
    state.footerTrigger = newState
  },
  updateHomeTrigger (state, newState) {
    state.homeTrigger = newState
  },
  updateIsLoading (state, changeAmount) {
    state.isLoadingCount = state.isLoadingCount + changeAmount
  },
  updateError (state, error) {
    let errorStatus = 200
    let errorMessage = ''

    if (error) {
      if (Object.prototype.hasOwnProperty.call(error, 'status')) {
        errorStatus = error.status
      }

      if (Object.prototype.hasOwnProperty.call(error, 'message')) {
        errorMessage = error.message
      }
    }

    state.error = {
      status: errorStatus,
      message: errorMessage
    }
  }
}

const persistStatePlugin = [
  createPersistedState({
    reducer: persistState,
    getState: (key) => JSON.parse(localStorage.getItem(key)),
    setState: (key, state) => localStorage.setItem(key, JSON.stringify(state))
  })
]

const plugins = config.isDev
  ? persistStatePlugin.concat([createLogger()])
  : persistStatePlugin

export default () =>
  new Store({
    plugins,
    state,
    actions,
    getters,
    mutations
  })
