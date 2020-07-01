export default {
  namespaced: true,
  state: {
    scheme: false,
  },
  mutations: {
    setScheme(state, payload) {
      state.scheme = payload
    },
  },
  actions: {
    setScheme(context, payload) {
      if (payload) {
        document.body.classList.add('theme__dark')
      } else {
        document.body.classList.remove('theme__dark')
      }
      context.commit('setScheme', payload)
    }
  },
  getters: {
    getScheme(state) {
      return state.scheme
    },
    getClassByScheme(state) {
      return {
        'theme__dark': state.scheme
      }
    }
  },
}