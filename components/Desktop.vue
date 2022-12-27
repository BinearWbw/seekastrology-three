<template>
  <button class="desktop common__btn" v-if="prompt" @click="download">
    TO DESKTOP
  </button>
</template>
<script>
export default {
  name: 'Desktop',
  data() {
    return {
      prompt: null,
    }
  },
  mounted() {
    window.addEventListener('beforeinstallprompt', this.beforeinstallprompt)
  },
  methods: {
    beforeinstallprompt(e) {
      this.prompt = e
      e.preventDefault()
      return false
    },
    download() {
      if (this.prompt) {
        this.prompt.prompt()
        this.prompt.userChoice
          .then((res) => {
            console.log(res)
            // {outcome: "dismissed", platform: ""} // cancel
            // {outcome: "accepted", platform: "web"} // complete
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.desktop {
  margin-left: 20px;
  flex-shrink: 0;
  width: 110px;
  height: 34px;
  background: linear-gradient(90deg, #c14afe 0%, #7a79ff 100%), #6c5dd3;
  border-radius: 6px;
  text-align: center;
  line-height: 34px;
  font-weight: 700;
  font-size: 12px;
}
// @media (max-width: (1500px)) {
//   .desktop {
//     width: 96px;
//   }
// }
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .download {
    width: 86 * $pr;
    height: 34 * $pr;
    padding-left: 15 * $pr;
    margin-left: auto;
    margin-bottom: 7 * $pr;
    border-radius: 48 * $pr;
    img {
      width: 10 * $pr;
      height: 10 * $pr;
      margin-right: 6 * $pr;
      margin-bottom: 2 * $pr;
    }
    span {
      font-size: 10 * $pr;
      line-height: 15 * $pr;
      &.pc {
        display: none;
      }
      &.h5 {
        display: block;
      }
    }
  }
}
</style>
