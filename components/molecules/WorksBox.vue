<template lang="pug">
.box
  .box_border
  .box_border
  .box_inner
    .box-image
      .box-image_elem(:style="'background-image: url(' + $path('images/myson.png') + ');'")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.box {
  color: $c_main;
  border-radius: rem(8);
  width: 100%;
  perspective: 50px;
  .box_border {
    position: absolute;
    left: rem($gap * -3);
    top: rem($gap * -3);
    width: calc(100% + #{rem($gap * 6)});
    height: calc(100% + #{rem($gap * 6)});
    border: 2px solid $c_base;
    transition: all 0.4s ease 0.2s;
    opacity: 0;
    &:nth-child(2) {
      transition: all 0.5s ease 0.5s;
    }
  }
  .box_inner {
    padding: rem($gap);
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      width: rem($gap * 3);
      height: rem($gap * 3);
      border-right: 2px solid $c_base;
      border-top: 2px solid $c_base;
      transition: all 0.3s ease;
    }
    &:before {
      right: 0;
      top: 0;
    }
    &:after {
      left: 0;
      bottom: 0;
      transform: rotate(180deg);
    }
  }
  .box-image {
    width: 100%;
    padding-bottom: aspect(3, 4);
    position: relative;
    .box-image_elem {
      position: absolute;
      top: 10%;
      left: 10%;
      width: 80%;
      height: 80%;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  &:hover {
    .box_border {
      opacity: 1;
      transform: scale(1.1);
      &:nth-child(2) {
        transform: scale(1.2);
      }
    }
    .box_inner {
      &:before {
        right: rem($gap * -1);
        top: rem($gap * -1);
        transform: scale(1.2);
      }
      &:after {
        left: rem($gap * -1);
        bottom: rem($gap * -1);
        transform: scale(1.2) rotate(180deg);
      }
    }
  }
}
</style>
