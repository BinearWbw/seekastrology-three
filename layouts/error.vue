<template>
  <article class="error">
    <p class="error-title">{{ statusCode }} - {{ message }}</p>
    <button class="error-link common-btn" @click="handlePage">
      {{
        $route.name === 'index' ? 'Refresh the page' : 'Rendering page error'
      }}
    </button>
  </article>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || 'Error'
    },
  },
  head() {
    return {
      title: `${
        this.statusCode === 404 ? 'Refresh the page' : 'Rendering page error'
      } - gameseeks`,
    }
  },
  methods: {
    handlePage() {
      if (this.$route.name === 'index') {
        this.$router.go(0)
      } else {
        this.$router.push('/')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.error {
  width: 100%;
  min-height: calc(100vh - 566px);
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  &-title {
    font-size: 22px;
    line-height: 32px;
    padding: 0 5%;
    text-align: center;
    font-weight: bold;
    color: #fff;
  }
  &-link {
    margin-top: 30px;
    width: 320px;
    height: 60px;
    background-color: #ffff00;
    border-radius: 12px;
    display: block;
    font-weight: bold;
    font-size: 15px;
    color: #2a2d80;
    text-decoration: none;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .error {
    &-title {
      font-size: 16 * $pr;
      line-height: 24 * $pr;
    }
    &-link {
      margin-top: 15 * $pr;
      width: 180 * $pr;
      height: 34 * $pr;
      border-radius: 10 * $pr;
      font-size: 12 * $pr;
    }
  }
}
</style>
