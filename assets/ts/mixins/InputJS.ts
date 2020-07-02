import Vue from 'vue'
import VueComponent from 'vue-class-component'

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      type: String || Number,
      required: false,
      default: ''
    },
    label: {
      type: String || Number,
      required: false,
      default: ''
    },
    placeholder: {
      type: String || Number,
      required: false,
      default: ''
    },
    rules: {
      type: String,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    innerVal: {
      get() {
        const res = this.value
        return res
      },
      set(v: string | number) {
        this.onUpdate(v)
      }
    },

    classes() {
      const rules = this.rules.split('|')
      return {
        'mod-rules-required': rules.filter(
          (rule: string) => rule === 'required'
        )[0]
      }
    }
  },

  methods: {
    onUpdate(v: string | number) {
      this.$emit('on-update', v)
    }
  }
})
