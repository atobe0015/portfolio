<template lang="pug">
  main.works
    .works-pagination
      ul.works-pagination_list
        li.works-pagination_item(data-item).js-hover(
          v-for="(work,i) in works"
          @click="goTo(i)"
          )
    ul.works-list(ref="list")
      li.works-list_item.js-slide(v-for="work in works")
        .works-list_item_elem(:style="mousePoint")
          nuxt-link(:to="'/works/'+work.id")
            WorksBox
</template>

<script lang="ts">
import Vue from 'vue'
import Types from 'types/works'
import WorksBox from '@/components/molecules/WorksBox.vue'
import VerticalSlide from '@/assets/ts/func/verticalSlide.ts'

export default Vue.extend({
  components: {
    WorksBox
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
      },
      works: [
        {
          id: 1,
          thumb: 'images/myson.png'
        },
        {
          id: 2,
          thumb: 'images/myson.png'
        },
        {
          id: 3,
          thumb: 'images/myson.png'
        },
        {
          id: 4,
          thumb: 'images/myson.png'
        },
        {
          id: 5,
          thumb: 'images/myson.png'
        }
      ],
      slide: null
    }
  },

  mounted() {
    if (this.$device == 'pc') {
      window.addEventListener('mousemove', this.setMousePoint)
    }
    const elem = this.$refs.list
    const opts = {
      container: elem,
      pagination: 'works-pagination_list',
      duration: 800
    }
    this.slide = new VerticalSlide(opts)
    window.addEventListener('resize', this.slide.resize())
  },

  computed: {
    mousePoint(): Types.Computed['mousePoint'] {
      const X = (this.window.w / 2 - this.pointer.y) / 500
      const Y = (this.pointer.x - this.window.h / 2) / 400
      const properties: string =
        'transform: rotateX(' + X + 'deg) rotateY(' + Y + 'deg) rotateZ(0deg);'
      return properties
    }
  },

  methods: {
    setMousePoint(evt): Types.Methods['setMousePoint'] {
      this.pointer.x = evt.clientX
      this.pointer.y = evt.clientY
    },

    goTo(num): Types.Methods['goTo'] {
      this.slide.goTo(num)
    }
  }
})
</script>

<style lang="scss" scoped>
.works {
  .works-list {
    width: 100%;
    margin: 0 auto;
    position: fixed;
    top: rem(55);
    left: 0;
    overflow: hidden;
    will-change: auto;
    .works-list_item {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 40%;
      margin: 0 auto;
      height: calc(100vh - #{rem(110)});
      perspective: 50px;
      opacity: 0;
      .works-list_item_elem {
        width: 100%;
      }
    }
  }
  .works-pagination {
    position: fixed;
    right: rem(80);
    top: calc(50% - 30vh);
    height: 60vh;
    display: flex;
    justify-content: center;
    z-index: 10;
    @media screen and (max-width: $screen-xs-max) {
      width: 80%;
      height: rem($gap);
      right: calc(50% - 40%);
      top: auto;
      bottom: rem($gap * 2);
    }
    .works-pagination_list {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: rem(16);
      position: relative;
      @media screen and (max-width: $screen-xs-max) {
        flex-direction: row;
        width: 80%;
      }
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: rem(7);
        z-index: 1;
        width: 1px;
        height: 100%;
        background-color: $c_base;
        @media screen and (max-width: $screen-xs-max) {
          width: 100%;
          height: 1px;
          top: rem($gap/2);
          left: 0;
        }
      }
    }
    .works-pagination_item {
      position: relative;
      z-index: 2;
      width: rem(8);
      height: rem(8);
      border-radius: 50%;
      background-color: $c_main;
      border: 1px solid $c_base;
      transition: 0.5s ease;
      transform-origin: center;
      &.is-active {
        width: rem(16);
        height: rem(16);
        background-color: $c_sub;
      }
    }
  }
}
</style>
