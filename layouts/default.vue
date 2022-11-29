<template>
  <main class="main">
    <page-left class="main__left"></page-left>
    <Nuxt class="main__page" />
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
.main {
  min-height: 100vh;
  &__left {
    position: fixed;
    left: 0;
    top: 0;
    width: 255px;
    height: 100%;
    background-color: #1f2128;
    box-shadow: 1px 0px 0px 0px #2e313d;
  }
  &__page {
    padding-left: 255px;
  }
}
</style>
