<template lang="pug">
.switch(:class="schemeClasses")
  .switch_inner
    .switch_radio.js-hover(@click="change_mode")
</template>

<script>
import { mapActions } from 'Vuex'
export default {
  methods: {
    ...mapActions({
      setScheme: 'colorScheme/setScheme'
    }),
    change_mode() {
      this.setScheme(!this.scheme)
    }
  }
}
</script>

<style lang="scss" scoped>
.switch {
  position: fixed;
  top: 50%;
  left: rem(30);
  @media screen and (max-width: $screen-xs-max) {
    left: rem($gap);
  }

  &.theme__dark {
    .switch_radio {
      &:before {
        transform: translateY(#{rem(24)});
      }
    }
  }
  .switch_radio {
    width: rem(20);
    height: rem(40);
    border: 1px solid #ccc;
    border-radius: rem(70);
    background-color: $c_base;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      transform: translateY(#{rem(6)});
      left: calc(50% - #{rem(5)});
      width: rem(10);
      height: rem(10);
      border-radius: 50%;
      background-color: #ccc;
      transition: transform 0.3s ease;
    }
  }
}
</style>
