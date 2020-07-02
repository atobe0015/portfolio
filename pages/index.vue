<template lang="pug">
main.m
  .m-main
    .m-main_anime(:style="mousePoint")
      MainVisual
</template>

<script lang="ts">
import Vue from 'vue'
import Types from 'types/home'
import MainVisual from '@/components/svg/Main.vue'

export default Vue.extend({
  components: {
    MainVisual
  },
  data(): Types.Data {
    const winW = window.innerWidth
    const winH = window.innerHeight
    return {
      window: {
        w: winW,
        h: winH
      },
      pointer: {
        x: 0,
        y: 0,
        z: 0
      }
    }
  },
  mounted() {
    if (this.$device === 'pc') {
      window.addEventListener('mousemove', this.setMousePoint)
    }
  },
  computed: {
    mousePoint(): string {
      const X = this.pointer.y ? (this.window.w / 2 - this.pointer.y) / 800 : 0
      const Y = this.pointer.x ? (this.pointer.x - this.window.h / 2) / 800 : 0
      const properties: string =
        'transform: rotateX(' + X + 'deg) rotateY(' + Y + 'deg) rotateZ(0deg);'
      return properties
    }
  },

  methods: {
    setMousePoint(evt: any): void {
      this.pointer.x = evt.pageX
      this.pointer.y = evt.pageY
    }
  }
})
</script>

<style lang="scss" scoped>
.m-main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - #{rem(55)});
  perspective: 30px;
  transform-style: preserve-3d;
  .m-main_anime {
    width: rem(600);
    margin: 0 auto;
    will-change: auto;
    transform-origin: center center;
    @media screen and (max-width: $screen-xs-max) {
      width: calc(100% - #{rem($gap * 4)});
    }
  }
}
</style>
