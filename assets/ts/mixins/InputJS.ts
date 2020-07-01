import Vue from 'vue'

export default Vue.extend({
  props: {
    id: [String, Number],
    value: [String, Number],
    label: [String, Number],
    placeholder: [String, Number],
    rules: String,
    disabled: Boolean,
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    innerVal: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('on-update', v)
      }
    },

    classes() {
      const rules = this.rules.split('|')
      return {
        'mod-rules-required': rules.filter(rule => rule == 'required')[0]
      }
    }
  }
})
