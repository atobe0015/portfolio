<template lang="pug">
.l(:class="schemeClasses")
  
  .l-header
    Header(
      @on-open="overlay = true"
      @on-close="overlay = false"
      )

  .l-aside
    SwitchMode

  .l-main
    transition(name="page")
      nuxt

  .l-footer
  Stalker(v-if="$device == 'pc'")
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/organisms/Header.vue'
import SwitchMode from '@/components/organisms/SwitchMode.vue'
import ColorScheme from '@/assets/ts/mixins/ColorScheme'

export default Vue.extend({
  mixins: [ColorScheme],
  components: {
    Header,
    SwitchMode
  },

  data() {
    return {
      overlay: false
    }
  }
})
</script>

<style lang="scss">
.l {
  .l-header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .l-main {
    position: relative;
    z-index: 0;
  }
  .l-aside {
    position: relative;
    z-index: 98;
  }
}
</style>
