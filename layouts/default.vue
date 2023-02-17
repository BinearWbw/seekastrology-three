<template>
  <main class="main" v-cloak>
    <Header></Header>
    <Nuxt class="main__page" />
    <Footer></Footer>
    <transition name="fade">
      <Privacy
        v-if="visiblePrivacy"
        @show="visibleDialogPrivacy = true"
        @close="visiblePrivacy = false"
      ></Privacy>
    </transition>
    <lazy-dialog-privacy
      :visible="visibleDialogPrivacy"
      @close="closeDialogPrivacy"
    >
    </lazy-dialog-privacy>
  </main>
</template>

<script>
export default {
  data() {
    return {
      visiblePrivacy: false,
      visibleDialogPrivacy: false,
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
    closeDialogPrivacy() {
      this.visibleDialogPrivacy = false
      this.visiblePrivacy = false
    },
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
  &__page {
    overflow: hidden;
    background: url('~assets/img/home/bg.png') no-repeat center top;
    background-size: 100% 750px;
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .main {
    &__page {
      background: url('~assets/img/home/h5bg.png') no-repeat center top;
      background-size: 375 * $pr 520 * $pr;
    }
  }
}
</style>
