import createPersistedState from "vuex-persistedstate";
import colorScheme from "./modules/colorScheme"

export default {
  modules: {
    colorScheme
  },

  plugins: [
    createPersistedState({
      key: 'nuxtStates',
      storage: window.localStorage,
    }),
    (context) => {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const schemeStatus = context.state.colorScheme.scheme ? context.state.colorScheme.scheme : isDark
      if (schemeStatus) {
        context.dispatch('colorScheme/setScheme', true)
      }
    }
  ]
}