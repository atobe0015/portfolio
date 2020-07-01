<template lang="pug">
.textarea(:class="classes")
  ValidationProvider(v-slot="{ errors }" :rules="rules" :name="label" :vid="id" tag="div").textarea-inner
    .textarea_head(v-if="label"): span {{label}}
    .textarea_elem
      textarea(
        :type="type"
        v-model="innerVal"
        :disabled="disabled"
        :placeholder="placeholder"
        )
    .textarea_errors
      transition(name="TopToDown")
        Errors(:errors="errors" v-if="errors.length")
</template>

<script lang="ts">
import Vue from 'vue'
import InputJS from '@/assets/ts/mixins/InputJS.ts'
export default Vue.extend({
  mixins: [InputJS]
})
</script>

<style lang="scss" scoped>
.textarea {
  width: 100%;
  margin-bottom: rem($gap * 2);
  .textarea-inner {
    padding-top: rem($gap * 3);
    padding-bottom: 1.4em;
    position: relative;
  }
  .textarea_head {
    position: absolute;
    top: 0;
    left: 0;
    font-size: rem(14);
  }
  .textarea_errors {
    position: absolute;
    bottom: 0;
  }
  .textarea_elem {
    position: relative;
    width: 100%;
    height: 9em;
    border: 1px solid #ccc;
    textarea {
      position: absolute;
      width: 100%;
      height: 100%;
      border: none;
      padding: rem(4) rem(8);
      resize: none;
    }
  }
  &.mod-rules-required {
    .textarea_head {
      span {
        &:after {
          content: '*';
          margin-left: rem($gap/2);
          color: $c_sub;
        }
      }
    }
  }
}
</style>
