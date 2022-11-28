<template>
  <div class="none"></div>
</template>

<script>
export default {
  name: 'CommonNone',
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.none {
  height: 140px;
  grid-row-start: span 1;
  grid-column-start: span 1;
  width: 100%;
}
@media (max-width: 828px) {
  $pr: math.div(1vw, 8.28);
  .none {
    height: 176 * $pr;
  }
}
</style>
