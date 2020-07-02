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
export default Vue.extend({})
</script>

<style lang="scss" scoped></style>
