<template lang="pug">
.error
  ul.error_list
    li.error_item(v-for="error in errors")
      span {{error}}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    errors: [Array]
  }
})
</script>

<style lang="scss" scoped>
.error {
  .error_list {
  }
  .error_item {
    span {
      font-size: rem(12);
      color: $c_base;
    }
  }
}
</style>
