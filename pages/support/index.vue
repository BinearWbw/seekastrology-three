<template>
  <div class="support_main">
    <div class="support_content">
      <el-aboutus v-if="name === 'about'"></el-aboutus>
      <el-privacy v-if="name === 'privacy'"></el-privacy>
      <el-disclaimer v-if="name === 'disclaimer'"></el-disclaimer>
      <el-contact v-if="name === 'contact'"></el-contact>
    </div>
  </div>
</template>

<script>
export default {
  name: 'support',
  data() {
    return {
      name: '',
    }
  },
  mounted() {
    this.name = this.$route.query.name
  },
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
