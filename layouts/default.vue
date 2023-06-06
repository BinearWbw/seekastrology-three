<template>
  <main class="main" v-cloak>
    <Header></Header>
    <Nuxt class="main__page" />
    <Footer></Footer>
    <transition name="fade">
      <i class="home_bg" v-if="$route.path == '/'"></i>
    </transition>
    <transform name="fade">
      <button v-if="showScrollToTop" @click="scrollToTop" class="scroll_to_top">
        <img src="~/assets/img/footer/arrow.svg" alt="totop" />
      </button>
    </transform>
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
      showScrollToTop: false,
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
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
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
    handleScroll() {
      const scrollThreshold = 500
      this.showScrollToTop =
        document.documentElement.scrollTop > scrollThreshold
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // 平滑滚动到顶部
      })
      setTimeout(() => {
        this.showScrollToTop = false
      }, 500)
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

  .scroll_to_top {
    position: fixed;
    z-index: 99;
    border-radius: 50%;
    background-color: #9747ff;
    transition: display 0.3s;
    display: none;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
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
    .scroll_to_top {
      display: block;
      top: 200 * $pr;
      right: 5 * $pr;
      width: 48 * $pr;
      height: 48 * $pr;
      img {
        width: 20 * $pr;
      }
    }
  }
}
</style>
