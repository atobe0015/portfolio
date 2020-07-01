<template lang="pug">
  main.work
    .u-container
      .work_inner

        .work-title
          .work-title_text
            Head(label="My Portfolio Site")

        .work-body(ref="content")
          .work-body_thumb
            img(:src="$path('images/works/thisSite.png')" alt="")
          .work-body_contents
            .u-edit
        .work-body__dummy(:style="'height:' + dummyHeight + 'px'")

</template>

<script lang="ts">
import Vue from 'vue'
import Types from 'types/works'
export default Vue.extend({
  data() {
    return {
      dummyHeight: 0
    }
  },
  mounted() {
    this.setDummyHeight()
    window.addEventListener('scroll', this.scroll)
  },
  methods: {
    scroll(evt) {
      // console.log(evt)
    },
    setDummyHeight() {
      this.dummyHeight = this.$refs.content.clientHeight
    },
    computed: {
      contentHeight() {
        return this.$refs.content.clientHeight
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.work {
}
</style>
