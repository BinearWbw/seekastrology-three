<template>
  <main class="main">
    <page-header></page-header>
    <Nuxt />
    <page-footer></page-footer>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
</style>
