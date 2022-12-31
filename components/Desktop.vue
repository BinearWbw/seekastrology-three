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
  font-size: 12px;
  &:hover {
    background: linear-gradient(90deg, #cb68fc 0%, #8484fd 100%), #6c5dd3;
  }
}
@media (max-width: (1600px)) {
  .desktop {
    width: 96px;
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .desktop {
    width: 96 * $pr;
    height: 34 * $pr;
    border-radius: 6 * $pr;
    line-height: 36 * $pr;
    font-size: 10 * $pr;
  }
}
</style>
