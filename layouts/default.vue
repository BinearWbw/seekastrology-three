<template>
  <main class="main" v-cloak>
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
[v-cloak] {
  display: none !important;
}
.main {
  min-height: 100vh;
  &__page {
    overflow: hidden;
    background: url('~assets/img/home/bg.png') no-repeat center -45px;
    background-size: 100% 1000px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 360px;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .main {
    &__page {
      background: url('~assets/img/home/h5bg.png') no-repeat center 0;
      background-size: 100% 500 * $pr;
      &::before {
        height: 360 * $pr;
      }
    }
  }
}
</style>
