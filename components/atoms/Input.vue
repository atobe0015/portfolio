<template lang="pug">
.input(:class="classes")
  ValidationProvider(v-slot="{ errors }" :rules="rules" :name="label" :vid="id" tag="div").input-inner
    .input_head(v-if="label"): span {{label}}
    .input_elem
      input(
        :type="type"
        v-model="innerVal"
        :disabled="disabled"
        :placeholder="placeholder"
        )
    .input_errors
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
.input {
  width: 100%;
  margin-bottom: rem($gap * 2);
  .input-inner {
    padding-top: rem($gap * 3);
    padding-bottom: 1.4em;
    position: relative;
  }
  .input_head {
    position: absolute;
    top: 0;
    left: 0;
    font-size: rem(14);
  }
  .input_errors {
    position: absolute;
    bottom: 0;
  }
  .input_elem {
    position: relative;
    width: 100%;
    height: rem(30);
    border: 1px solid #ccc;
    input {
      position: absolute;
      width: 100%;
      height: 100%;
      border: none;
      padding: rem(4) rem(8);
    }
  }

  &.mod-rules-required {
    .input_head {
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
