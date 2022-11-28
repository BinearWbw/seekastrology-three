<template>
  <div class="left"></div>
</template>

<script>
export default {
  name: 'PageLeft',
  data() {
    return {
      menu: [],
    }
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
$block: 140px;
$spacing: 16px;
.left {
  position: fixed;
  left: 0;
  top: 0;
  width: 255px;
  height: 100%;
  background-color: #1f2128;
  box-shadow: 1px 0px 0px 0px #2e313d;
}
</style>
