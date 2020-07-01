import Vue from 'vue'
import dayjs from 'dayjs'
import ColorScheme from '@/assets/ts/mixins/ColorScheme'

Vue.mixin(ColorScheme)

export default (context, inject) => {
  inject('device', context.app.$ua.deviceType())
  inject('path', (v) => {
    return context.app.router.options.base + v
  })
  inject('dayjs', dayjs)
}
