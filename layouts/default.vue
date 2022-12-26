<template>
  <main class="main">
    <Header></Header>
    <Nuxt class="main__page" />
    <Footer></Footer>
  </main>
</template>

<script>
export default {
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.main {
  min-height: 100vh;
  &__page {
    overflow: hidden;
    background: url('~assets/img/home/bg.png') no-repeat center -45px;
    background-size: 100% 1000px;
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .main {
    &__page {
      background: url('~assets/img/home/bg.png') no-repeat center -45px;
      background-size: 100% 1000px;
    }
  }
}
</style>
