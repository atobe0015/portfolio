import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import ColorScheme from '@/assets/ts/mixins/ColorScheme'
Vue.mixin(ColorScheme)

declare module 'vue/types/vue' {
  interface Vue {
    $device: string
  }
}

const plugins: Plugin = (ctx, inject) => {
  inject('device', ctx.app.$ua.deviceType())
  inject('path', (v: string) => {
    return ctx.base + v
  })
}
export default plugins
