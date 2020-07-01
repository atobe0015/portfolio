<template lang="pug">
.cursor(:class="classes")
  .cursor-pointer(:style="pointer")
  .cursor-pointer__hover(:style="pointer__hover")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      x: 0,
      y: 0,
      link: {
        x: 0,
        y: 0
      },
      linkHover: false
    }
  },

  mounted() {
    const list = document.querySelectorAll('a, .js-hover')
    list.forEach(e => {
      e.addEventListener('mouseover', e => this.getPoint(e), false)
      e.addEventListener('mouseout', e => this.setState(false), false)
    })

    window.addEventListener('mousemove', this.setMousePoint)
  },
  computed: {
    pointer(): string {
      return 'transform: translate(' + this.x + 'px, ' + this.y + 'px)'
    },
    pointer__hover(): string {
      const scale = this.linkHover ? 1 : 0
      return (
        'transform: translate(' +
        this.x +
        'px, ' +
        this.y +
        'px) scale(' +
        scale +
        ');'
      )
    },
    classes(): any {
      return {
        'is-hover': this.linkHover
      }
    }
  },
  methods: {
    setMousePoint(evt: any): void {
      this.x = evt.clientX
      this.y = evt.clientY
    },
    getPoint(evt) {
      const target = evt.srcElement.getBoundingClientRect()
      this.link.x = target.left - 12 + target.width
      this.link.y = target.top - 8 + target.height
      this.setState(true)
    },
    setState(flg) {
      this.linkHover = flg
    }
  }
})
</script>

<style lang="scss" scoped>
.cursor {
  position: fixed;
  z-index: 1001;
  cursor: none;
  pointer-events: none;
  .cursor-pointer {
    position: fixed;
    top: 0;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: $c_sub;
    transition: opacity 0.2s ease;
  }
  .cursor-pointer__hover {
    position: fixed;
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    left: -24px;
    top: -24px;
    border-radius: 50%;
    border: 1px solid $c_base;
    transform: scale(0);
    transition: all 0.1s ease;
    transform-origin: center;
  }

  &.is-hover {
    .cursor-pointer {
      opacity: 0.3;
    }
  }
}
</style>
