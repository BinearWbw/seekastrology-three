<template>
  <div class="install">
    <button class="desktop common__btn" v-if="prompt" @click="download">
      <span class="pc">TO DESKTOP</span>
      <span class="h5">INSTALL</span>
    </button>
  </div>
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
.install {
  margin-left: 20px;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  width: 110px;
  .desktop {
    width: 100%;
    height: 34px;
    background: linear-gradient(90deg, #c14afe 0%, #7a79ff 100%), #6c5dd3;
    border-radius: 6px;
    text-align: center;
    line-height: 34px;
    font-size: 12px;
    &:hover {
      background: linear-gradient(90deg, #cb68fc 0%, #8484fd 100%), #6c5dd3;
    }
    .h5 {
      display: none;
    }
  }
}
@media (max-width: (1600px)) {
  .install {
    width: 96px;
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .install {
    width: 96 * $pr;
    .desktop {
      height: 34 * $pr;
      border-radius: 6 * $pr;
      line-height: 36 * $pr;
      font-size: 10 * $pr;
      .pc {
        display: none;
      }
      .h5 {
        display: block;
      }
    }
  }
}
</style>
