<template>
  <main class="main" :class="{ home_bg: $route.path == '/' }" v-cloak>
    <Header></Header>
    <Nuxt class="main__page" :class="{ home_bg: $route.path == '/' }" />
    <Footer></Footer>
    <transition name="fade">
      <Privacy v-if="visiblePrivacy" @close="visiblePrivacy = false"></Privacy>
    </transition>
  </main>
</template>

<script>
export default {
  data() {
    return {
      visiblePrivacy: false,
    }
  },
  mounted() {
    let url = 'https://taptogame.com'
    if (window.location.host == 'taptogame.com') {
      url = 'https://www.taptogame.com'
    } else if (window.location.host == 'www.taptogame.com') {
      url = 'https://taptogame.com'
    } else {
      url = `http://${window.location.host}`
    }
    this.$store.commit('UPDATE_INTERSPERSE_URL', url)
    this.getLocation()
    console.log(this.$route.path)
  },
  methods: {
    getLocation() {
      let cookiesPrivacyLoc = localStorage.getItem('cookiesPrivacy')
      let cookiesPrivacySes = sessionStorage.getItem('cookiesPrivacy')
      if (!cookiesPrivacyLoc && !cookiesPrivacySes) {
        this.$apiList.home
          .getGameLocation()
          .then((res) => {
            if (!res.loc) {
              localStorage.setItem(
                'cookiesPrivacy',
                JSON.stringify({ accept: 0 })
              )
            } else {
              this.visiblePrivacy = true
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
[v-cloak] {
  display: none !important;
}
.main {
  min-height: 100vh;
  background: url('/img/bg.jpg') no-repeat center top;
  background-size: cover 1160px;
  &.home_bg {
    background: url('/img/bg_home.jpg') no-repeat center top;
    background-size: cover 1160px;
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .main {
    // &__page {
    background: url('/img/h5bg.jpg') no-repeat center top;
    background-size: 375 * $pr 812 * $pr;
    &.home_bg {
      background: url('/img/h5bg_home.jpg') no-repeat center top;
      background-size: 375 * $pr 812 * $pr;
    }
    // }
  }
}
</style>
