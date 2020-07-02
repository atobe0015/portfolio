<template lang="pug">
  main.profile
    .u-container
      section.s
        .s-image(:style="'background-image: url(' +$path('images/myson.png') + ')'")
        .s-body
          .s-body_inner
            Head Tatsuya Atobe
            p
              | フロントエンドエンジニア。<br>
              | ウェブ開発歴は大学時代も含めると {{since}} 年目。<br>
              | 2児の父 / {{age}}歳 / 血液型は B 型。

      section.s(v-for="history in histories")
        .s-image(:style="'background-image: url(' +$path(history.image) + ')'")
        .s-body
          .s-body_inner
            ul
              li(v-for="content in history.contents")
                span {{content.year}}
                div(v-html="content.body")

</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'
import historyJSON from '@/assets/json/history.json'

export default Vue.extend({
  data() {
    return {
      histories: historyJSON
    }
  },
  computed: {
    age() {
      const now = dayjs()
      const birth = dayjs('19930104')
      const thisYearBirth = birth.clone().format(dayjs().year() + '-01-04')
      const age = now.year() - birth.year()
      const res = now.isBefore(thisYearBirth) ? age - 1 : age
      return res
    },
    since() {
      const now = dayjs().year()
      const start = dayjs('2013').year()
      const res = now - start
      return res
    }
  }
})
</script>

<style lang="scss" scoped>
.profile {
  .s {
    display: flex;
    align-items: center;
    width: 100%;
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
    .s-image,
    .s-body {
      width: 50%;
      min-height: calc(100vh - #{rem(110)});
    }
    .s-image {
      // background-color: $c_sub;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .s-body {
      display: flex;
      align-items: center;
      padding: rem($gap * 4);
    }
  }
}
</style>
