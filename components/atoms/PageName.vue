<template lang="pug">
.pageName
  h1.pageName_label {{label}}

</template>

<script>
export default {
  props: {
    label: String
  }
}
</script>

<style lang="scss" scoped>
.pageName {
  position: fixed;
  left: rem(25);
  top: 50%;
  transform: rotate(90deg);
  .pageName_label {
    position: relative;
    font-size: rem(20);
    line-height: 1;
    letter-spacing: 0.2em;
    font-weight: 300;
    &:before {
      content: '';
      position: absolute;
      left: 1.2em;
      top: 0.6em;
      width: calc(100% + 60px);
      height: 1px;
      background-color: $c_sub;
    }
  }
}
</style>
