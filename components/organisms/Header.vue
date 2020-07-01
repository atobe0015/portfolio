<template lang="pug">
header.h(:class="classes")
  .h-inner
    .h-Logo
      nuxt-link(to="/")
        Logo

    .h-trigger(
      @click="menu_toggle"
      class="js-hover"
      )

    HeaderMenu
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '@/components/svg/Logo.vue'
import HeaderMenu from '@/components//molecules/HeaderMenu.vue'

type Data = {
  menuState: Boolean
}

export default Vue.extend({
  components: {
    Logo,
    HeaderMenu
  },
  data(): Data {
    return {
      menuState: false
    }
  },
  computed: {
    classes(): any {
      return {
        'mod-open-menu': this.menuState
      }
    }
  },
  watch: {
    $route(to, from) {
      this.menu_close()
    }
  },
  methods: {
    menu_toggle(): void {
      this.menuState = !this.menuState
    },
    menu_close(): void {
      this.menuState = false
    }
  }
})
</script>

<style lang="scss" scoped>
.h {
  .h-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: rem(55);
    position: relative;
    z-index: 100;
    padding: 0 rem($gap * 6);
    @media screen and (max-width: $screen-xs-max) {
      padding: 0 rem($gap * 2);
    }
  }
  .h-overlay {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50% 0 50% 10%;
    mix-blend-mode: multiply;
    transform: scale(0, 0);
    transition: all 0.7s ease;
    transform-origin: right top;
  }

  .h-trigger {
    width: rem(20);
    height: rem(8);
    position: relative;
    z-index: 101;
    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      z-index: 101;
      width: 100%;
      height: rem(1);
      background-color: $c_base;
      transition: all 0.1s ease-in;
      transform-origin: center center;
    }
    &:before {
      transform: translate(#{rem(-2)}, #{rem(-4)});
    }
    &:after {
      transform: translate(#{rem(2)}, #{rem(4)});
    }
    &:hover {
      &:before {
        transform: translate(0, #{rem(-4)});
      }
      &:after {
        transform: translate(0, #{rem(4)});
      }
    }
  }

  &.mod-open-menu {
    .h-trigger {
      &:before {
        transform: translate(0, 0) rotate(45deg);
      }
      &:after {
        transform: translate(0, 0) rotate(-45deg);
      }
    }
    /deep/ .h-menu {
      .h-menu_list {
        .h-menu_list_item {
          .h-menu_list_item_link {
            margin: 0 rem($gap * 4);
            max-width: rem(200);
            opacity: 1;
            transform: translateY(0);
            transition: max-width 0.8s ease, margin 0.8s ease,
              opacity 0.4s linear 0.5s, transform 0.5s linear 0.4s;
            @media screen and (max-width: $screen-xs-max) {
              margin: 0 rem($gap * 2);
            }
          }
        }
      }
    }
  }
}
</style>
