<template>
  <div :class="classNames">
    <ins
      className="adsbygoogle"
      :style="{
        display: 'flex',
        width: '100%',
        height: '100%',
        'align-items': 'center',
        'justify-content': 'center',
      }"
      :data-ad-client="googleAdId"
      :data-ad-slot="id"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  </div>
</template>
<script>
export default {
  name: 'GoogleAd',
  props: {
    timeout: Number,
    classNames: String,
    id: String,
  },
  data() {
    return {
      googleInit: null,
      googleAdId: 'ca-pub-6430486603399192',
    }
  },
  mounted() {
    let timeout = 200
    if (this.timeout) timeout = this.timeout
    this.googleInit = setTimeout(() => {
      if (typeof window !== 'undefined')
        try {
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (error) {}
    }, timeout)
  },
  destroyed() {
    if (this.googleInit) clearTimeout(this.googleInit)
  },
}
</script>
