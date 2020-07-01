import Vue from 'vue'
import { mapGetters } from 'Vuex'

export default Vue.extend({
  computed: {
    ...mapGetters({
      scheme: 'colorScheme/getScheme',
      schemeClasses: 'colorScheme/getClassByScheme'
    }),
    colors() {
      const dark =
        '--color-base: #fff; --color-main: #130455; --color-sub: #bcb72e;'
      return dark
    }
  }
})
