<template>
  <div :class="classNames" class="googleAdStyle" ref="googleAdStyle">
    <p class="title">Advertisement</p>
    <ins
      v-if="visible"
      class="adsbygoogle"
      style="
        display: block;
        margin: 0 auto;
        max-width: 1200px;
        min-width: 300px;
        min-height: 100px;
      "
      data-ad-client="ca-pub-6430486603399192"
      :data-ad-slot="id"
      data-ad-format="rectangle"
      data-full-width-responsive="true"
    ></ins>
  </div>
</template>
<script>
export default {
  name: 'GoogleAutoAd',
  props: {
    classNames: String,
    id: String,
  },
  data() {
    return {
      erd: null,
      googleInit: null,
      visible: false,
    }
  },
  mounted() {
    let cookiesPrivacySes = sessionStorage.getItem('cookiesPrivacy')
    if (window.getComputedStyle(this.$refs.googleAdStyle).display !== 'none') {
      this.visible = true
      this.googleInit = setTimeout(() => {
        if (typeof window !== 'undefined')
          try {
            const requestNonPersonalizedAds = cookiesPrivacySes ? 1 : 0
            ;(adsbygoogle =
              window.adsbygoogle || []).requestNonPersonalizedAds =
              requestNonPersonalizedAds
            ;(adsbygoogle = window.adsbygoogle || []).push({})
          } catch (error) {}
      }, 500)
    } else {
      const elementResizeDetectorMaker = require('element-resize-detector')
      this.erd = elementResizeDetectorMaker()
      this.erd.listenTo(this.$refs.googleAdStyle, (ele) => {
        if (window.getComputedStyle(ele).display !== 'none') {
          this.visible = true
          this.googleInit = setTimeout(() => {
            if (typeof window !== 'undefined')
              try {
                const requestNonPersonalizedAds = cookiesPrivacySes ? 1 : 0
                ;(adsbygoogle =
                  window.adsbygoogle || []).requestNonPersonalizedAds =
                  requestNonPersonalizedAds
                ;(adsbygoogle = window.adsbygoogle || []).push({})
              } catch (error) {}
          }, 500)
          this.erd.uninstall(this.$refs.googleAdStyle)
        }
      })
    }
  },
  destroyed() {
    if (this.googleInit) clearTimeout(this.googleInit)
    if (this.erd) this.erd.uninstall(this.$refs.googleAdStyle)
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.googleAdStyle {
  .title {
    font-size: 20px;
    line-height: 25px;
    background: #282a31;
    text-align: center;
  }
}

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .googleAdStyle {
    .title {
      font-size: 12 * $pr;
      line-height: 17 * $pr;
    }
  }
}
</style>
