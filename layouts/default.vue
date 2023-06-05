<template>
  <main class="main" v-cloak>
    <Header></Header>
    <Nuxt class="main__page" />
    <Footer></Footer>
    <transition name="fade">
      <i class="home_bg" v-if="$route.path == '/'"></i>
    </transition>
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
  background: url('/img/bg.png');
  position: relative;
  .home_bg {
    display: inline-block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 613px;
    z-index: -1;
    background: url('/img/bg_home.png') no-repeat center;
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .main {
    background: url('/img/bg.png');
    .home_bg {
      height: 613 * $pr;
      background: url('/img/h5bg_home.png') no-repeat top;
      background-size: contain;
    }
  }
}
</style>
