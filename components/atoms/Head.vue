<template lang="pug">
  component(:class="classes" :is="tag")
    span.head__text
      span(v-for="i in label") {{i}}

</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h2'
    },
    label: String,
    align: String
  },
  data() {
    return {
      showFlg: false
    }
  },
  computed: {
    classes() {
      return {
        head: true,
        ['mod-align-' + this.align]: this.align,
        'is-show': this.showFlg
      }
    }
  },
  mounted() {
    this.showFlg = true
  }
}
</script>

<style lang="scss" scoped>
.head {
  font-weight: 600;
  margin-bottom: rem($gap * 3);
  .head__text {
    display: flex;
    flex-wrap: wrap;
    font-size: rem(56);
    overflow: hidden;
    @media screen and (max-width: $screen-xs-max) {
      font-size: rem(36);
    }
    span {
      transition: transform 0.7s ease, opacity 0.8s ease;
      display: inline-block;
      min-width: 0.3em;
      opacity: 0;
      &:nth-child(odd) {
        transform: translate3d(0, 1.3em, 0);
      }
      &:nth-child(even) {
        transform: translate3d(0, -1.3em, 0);
      }
    }
  }

  &.is-show {
    .head__text span {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  &.mod-align-center {
    .head__text {
      justify-content: center;
    }
  }
}
</style>
