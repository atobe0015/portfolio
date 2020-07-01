<template lang="pug">
nav.h-menu
  ul.h-menu_list
    li.h-menu_list_item
      nuxt-link(to="/").h-menu_list_item_link.mod-active-extra_only HOME
    li.h-menu_list_item
      nuxt-link(to="/profile").h-menu_list_item_link PROFILE
    li.h-menu_list_item
      nuxt-link(to="/works").h-menu_list_item_link WORKS
    li.h-menu_list_item
      nuxt-link(to="/contact").h-menu_list_item_link CONTACT
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.h-menu {
  position: fixed;
  right: rem(50);
  bottom: 0;
  z-index: 100;
  width: 0;
  transform: rotate(-90deg);
  transform-origin: left top;
  @media screen and (max-width: $screen-xs-max) {
    right: rem($gap * 3);
  }
  .h-menu_list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    width: 100vh;
    height: 1em;
    .h-menu_list_item {
      height: 1em;
      .h-menu_list_item_link {
        display: block;
        position: relative;
        font-size: rem(16);
        font-weight: 300;
        line-height: 1;
        letter-spacing: 0.2em;
        max-width: 0;
        opacity: 0;
        transform: translateY(2em);
        transition: max-width 0.6s ease 0.5s, margin 0.6s ease 0.5s,
          opacity 0.5s linear, transform 0.3s linear;
        &.nuxt-link-active {
          &:not(.mod-active-extra_only) {
            width: auto;
            transform: scale(1);
            max-width: rem(200);
            transform: translateY(0);
            opacity: 1;
            &:before {
              opacity: 1;
            }
          }
        }
        &.mod-active-extra_only {
          &.nuxt-link-exact-active {
            width: auto;
            transform: scale(1);
            max-width: rem(200);
            transform: translateY(0);
            opacity: 1;
            &:before {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>
