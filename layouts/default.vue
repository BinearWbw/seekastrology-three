<template>
  <main class="main" :class="{ mainActive: getSlideActive }">
    <div class="main__nav">
      <page-left class="main__nav__slide"></page-left>
    </div>
    <Nuxt class="main__page" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getSlideActive']),
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.main {
  min-height: 100vh;
  display: flex;
  &__nav {
    flex-shrink: 0;
    width: 255px;
    height: 100%;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    &__slide {
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      position: fixed;
      left: 0;
      top: 0;
      width: 255px;
      height: 100%;
      background-color: #1f2128;
      box-shadow: 1px 0px 0px 0px #2e313d;
      z-index: 1;
    }
  }
  &__page {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    background: url('~assets/img/home/bg.jpg') no-repeat center top;
    background-size: cover;
  }
  &.mainActive {
    .main__nav {
      width: 80px;
      &__slide {
        width: 80px;
      }
    }
  }
}
</style>
