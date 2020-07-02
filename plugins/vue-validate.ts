import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend
} from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja.json'
import { email, numeric, required, max } from 'vee-validate/dist/rules'

extend('email', email)
extend('numeric', numeric)
extend('required', required)
extend('max', max)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

localize('ja', ja)
