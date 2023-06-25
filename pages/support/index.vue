<template>
  <div class="support_main">
    <div class="support_content">
      <el-aboutus v-if="$route.query.name === 'about'"></el-aboutus>
      <el-privacy v-if="$route.query.name === 'privacy'"></el-privacy>
      <el-disclaimer v-if="$route.query.name === 'disclaimer'"></el-disclaimer>
      <el-contact v-if="$route.query.name === 'contact'"></el-contact>
    </div>
  </div>
</template>

<script>
export default {
  name: 'support',
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.support_main {
  width: 1400px;
  margin: 0 auto;
  .support_content {
    width: 100%;
    padding: 75px 0 48px;
  }
}
@media (max-width: (1450px)) {
  .support_main {
    width: 100%;
    margin: 0 auto;
    .support_content {
      width: 100%;
      padding: 75px 30px 48px;
    }
  }
}

@media (max-width: (750px)) {
  $pr: math.div(1vw, 3.75);
  .support_main {
    width: 100%;
    margin: 0 auto;
    .support_content {
      width: 100%;
      padding: 44 * $pr 16 * $pr 48 * $pr;
    }
  }
}
</style>
