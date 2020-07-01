<template lang="pug">
  button.button(
    type="button"
    :class="classes"
    :disabled="disabled"
    v-on="$listeners"
    )
    .button_inner
      v-icon(:icon="['fas',icon]" class="button-icon" v-if="icon")
      .button_text(v-html="label")
</template>

<script>
export default {
  props: {
    label: String,
    icon: String,
    flat: Boolean,
    fill: Boolean,
    small: Boolean,
    disabled: Boolean
  },
  computed: {
    classes() {
      return {
        'mod-theme-flat': this.flat && !this.disabled,
        'mod-theme-fill': this.fill && !this.disabled,
        'mod-small': this.small,
        'mod-theme-disabled': this.disabled,
        'js-hover': !this.disabled
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  min-width: rem(200);
  .button_inner {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: rem($gap) rem(8);
    background-color: $c_sub;
    font-weight: bold;
  }
  .button_text {
    letter-spacing: 0.07em;
    // margin-top: rem();
  }
}
</style>
