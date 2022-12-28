<template>
  <article class="home">
    <div class="home__main">
      <section class="banner"></section>
      <section class="module best">
        <div class="module__top">
          <div class="title">BEST GAMES</div>
          <a href="/best" class="more" title="BEST GAMES">MORE GAME</a>
        </div>
        <div class="list1">
          <home-best1
            v-for="item in gameList['best-games'].slice(0, 7)"
            :item="item"
            :key="item.id"
          ></home-best1>
        </div>
        <div class="list2">
          <home-best2
            v-for="item in gameList['best-games'].slice(7, 17)"
            :item="item"
            :key="item.id"
          ></home-best2>
        </div>
      </section>
      <section class="module latest">
        <div class="module__top">
          <div class="title">LATEST GAMES</div>
          <a href="/new" class="more" title="LATEST GAMES">MORE GAME</a>
        </div>
        <div class="list">
          <home-latest
            v-for="item in gameList['latest-games'].slice(0, 20)"
            :key="item.id"
            :item="item"
          ></home-latest>
        </div>
      </section>
      <section class="module hot">
        <div class="module__top">
          <div class="title">HOT GAMES</div>
          <a href="/hot" class="more" title="HOT GAMES">MORE GAME</a>
        </div>
        <div class="list">
          <home-hot
            v-for="item in gameList['hot-games'].slice(0, 21)"
            :item="item"
            :key="item.id"
          ></home-hot>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      timer: null,
      bannersActive: 0,
      visible: true,
      banners: [
        {
          name: 'Cyberpunk 2077',
          title: 'tournament3',
          text: 'Pre-Purchase Now to unlock early game content, including two-suit pack, early access',
          img: require('~/assets/111.png'),
        },
        {
          name: 'Cyberpunk 2077',
          title: 'tournament1',
          text: 'Pre-Purchase Now to unlock early game content, including two-suit pack, early access to the Gravity Well gadget and Three Skill Points.',
          img: require('~/assets/222.png'),
        },
        {
          name: 'Cyberpunk 2077',
          title: 'tournament2',
          text: 'Pre-Purchase Now to unlock early game content, including two-suit pack, early access to the Gravity Well gadget and Three Skill Points.',
          img: require('~/assets/111.png'),
        },
      ],
    }
  },
  async asyncData({ error, $apiList }) {
    try {
      let gameList
      const res = await $apiList.home.getGameHome({
        origin: process.env.origin,
      })
      gameList = res
      return {
        gameList,
      }
    } catch (e) {
      error({ statusCode: e.code, message: e.message })
    }
  },
  watch: {
    bannersActive() {
      this.visible = false
      this.$nextTick(() => {
        this.visible = true
      })
    },
  },
  mounted() {
    // this.setTimer()
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    handleSwiperSlideClick(index) {
      if (
        (index && this.banners[index].url) ||
        (index === 0 && this.banners[0].url)
      ) {
        this.$router.push(this.banners[index].url)
      }
    },
    changeBanner(index) {
      this.bannersActive = index
      this.setTimer()
    },
    enter() {
      this.timer && clearInterval(this.timer)
      this.timer = null
    },
    leave() {
      this.setTimer()
    },
    setTimer() {
      this.timer && clearInterval(this.timer)
      this.timer = setInterval(() => {
        if (this.bannersActive < this.banners.length - 1) {
          this.bannersActive += 1
        } else {
          this.bannersActive = 0
        }
      }, 5000)
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
@-webkit-keyframes rect_enter {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }
}
@keyframes rect_enter {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }
}
@-webkit-keyframes lightSpeedInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100px, 0, 0);
    transform: translate3d(-100px, 0, 0);
  }
}
@keyframes lightSpeedInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100px, 0, 0);
    transform: translate3d(-100px, 0, 0);
  }
}
.home {
  &__main {
    margin: 0 auto;
    width: 1310px;
    position: relative;
    .banner {
      width: 100%;
      height: 538px;
      display: flex;
      &__left {
        flex: 1;
        min-width: 0;
        display: flex;
        .info {
          flex: 1;
          min-width: 0;
          margin-top: 114px;
          -webkit-animation: lightSpeedInLeft 1s ease;
          animation: lightSpeedInLeft 1s ease;
          &__p1 {
            font-family: GothicOutTitD;
            font-size: 64px;
            letter-spacing: -3px;
            color: #5d5972;
            line-height: 1;
          }
          &__p2 {
            margin-top: 7px;
            line-height: 1;
            span:nth-child(1) {
              font-family: BebasNeue-Regular;
              font-size: 64px;
            }
            span:nth-child(2) {
              font-family: GothicOutTitD;
              font-size: 70px;
              letter-spacing: -3px;
              color: #f928f3;
              padding-left: 16px;
            }
            span:nth-child(3) {
              font-family: BebasNeue-Regular;
              font-size: 64px;
              color: #fe27ee;
              padding-left: 6px;
            }
          }
          &__p3 {
            padding-right: 70px;
            margin-top: 16px;
            font-size: 15px;
            line-height: 22px;
          }
          &__btn {
            margin-top: 28px;
            width: 202px;
            height: 50px;
            background-color: #ffffff;
            border-radius: 4px;
            font-size: 14px;
            color: #000000;
          }
        }
        .box {
          margin-top: 75px;
          flex-shrink: 0;
          width: 428px;
          height: 428px;
          border-radius: 50%;
          background-image: linear-gradient(80deg, #512351 0%, #1f2732 100%);
          background-blend-mode: normal, normal;
          box-shadow: 0 30px 40px 0 rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          &__main {
            width: calc(100% - 20px);
            height: calc(100% - 20px);
            border-radius: 50%;
            background-image: linear-gradient(60deg, #161527 70%, #3b47b3 100%);
            background-blend-mode: normal, normal;
            position: relative;
            img {
              -webkit-animation: fade_enter 1s ease;
              animation: fade_enter 1s ease;
              position: absolute;
              left: 0;
              bottom: 0;
              max-width: 100%;
            }
          }
        }
      }
      .pagination {
        flex-shrink: 0;
        margin-top: 258px;
        margin-left: 95px;
        width: 168px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        &__item {
          width: 168px;
          height: 6px;
          display: flex;
          justify-content: flex-end;
          margin-bottom: 33px;
          position: relative;
          .circle {
            margin-right: 20px;
            width: 6px;
            height: 6px;
            background: #545972;
            border-radius: 50%;
            cursor: pointer;
            -webkit-animation: fade_enter 1s ease;
            animation: fade_enter 1s ease;
          }
          .rect {
            background-color: rgba(0, 0, 0, 0.45);
            width: 100%;
            height: 48px;
            border-radius: 24px;
            overflow: hidden;
            display: flex;
            position: absolute;
            right: 0;
            top: -24px;
            -webkit-animation: rect_enter 1s ease;
            animation: rect_enter 1s ease;
            &__img {
              width: 48px;
              height: 48px;
              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                object-fit: cover;
              }
            }
            &__name {
              padding-left: 11px;
              width: calc(100% - 48px);
              line-height: 48px;
              font-size: 12px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    .module {
      &__top {
        width: 100%;
        height: 41px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title {
          font-size: 34px;
          line-height: 41px;
          flex-shrink: 0;
          font-family: BebasNeue-Regular;
          color: #ffffff;
        }
        .more {
          margin-top: 2px;
          font-size: 22px;
          line-height: 26px;
          flex-shrink: 0;
          font-family: BebasNeue-Regular;
          color: #808191;
        }
      }
      &.best {
        .list1 {
          margin-top: 26px;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        .list2 {
          margin-top: 30px;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-gap: 20px;
        }
      }
      &.latest {
        margin-top: 48px;
        .list {
          margin-top: 20px;
          background-color: #282a31;
          border-radius: 16px;
          padding: 55px 12px 53px;
          display: grid;
          grid-template-rows: repeat(2, 1fr);
          grid-template-columns: repeat(10, 1fr);
          grid-gap: 48px 30px;
        }
      }
      &.hot {
        margin-top: 50px;
        .list {
          margin-top: 20px;
          display: grid;
          grid-template-rows: repeat(3, auto);
          grid-template-columns: repeat(7, 1fr);
          grid-gap: 30px;
        }
      }
    }
  }
}
// .home {
//   width: 100%;
//   .list {
//     grid-template-columns: repeat(11, 140px);
//     grid-gap: 16px;
//     display: grid;
//     grid-auto-flow: dense;
//     justify-content: center;
//   }
// }
// @media (max-width: (11 * $block + 10 * $spacing+60px)) {
//   .home {
//     .list {
//       grid-template-columns: repeat(10, 140px);
//     }
//   }
// }
// @media (max-width: (10 * $block + 9 * $spacing+60px)) {
//   .home {
//     .list {
//       grid-template-columns: repeat(9, 140px);
//     }
//   }
// }
// @media (max-width: (9 * $block + 8 * $spacing+60px)) {
//   .home {
//     .list {
//       grid-template-columns: repeat(8, 140px);
//     }
//   }
// }
// @media (max-width: (8 * $block + 7 * $spacing+60px)) {
//   .home {
//     .list {
//       grid-template-columns: repeat(7, 140px);
//     }
//   }
// }
// @media (max-width: (7 * $block + 6 * $spacing+60px)) {
//   .home {
//     .list {
//       grid-template-columns: repeat(6, 140px);
//     }
//   }
// }
// @media (max-width: (6 * $block + 5 * $spacing+60px)) {
//   .home {
//     .list {
//       grid-template-columns: repeat(5, 140px);
//     }
//   }
// }
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .home {
    &__main {
      width: 100%;
      &__search {
        display: none;
      }
      .banner {
        height: auto;
        &__left {
          flex-direction: column-reverse;
          align-items: center;
          .info {
            background: url('~assets/img/home/mask.png') repeat-x left top;
            background-size: 362 * $pr 201 * $pr;
            position: relative;
            z-index: 1;
            margin-top: -139 * $pr;
            padding-top: 46 * $pr;
            padding-left: 24 * $pr;
            padding-right: 24 * $pr;
            &__p1 {
              font-size: 54 * $pr;
            }
            &__p2 {
              margin-top: 1 * $pr;
              line-height: 1;
              span:nth-child(1) {
                font-size: 54 * $pr;
              }
              span:nth-child(2) {
                font-size: 58 * $pr;
                padding-left: 6 * $pr;
              }
              span:nth-child(3) {
                font-size: 54 * $pr;
                padding-left: 10 * $pr;
              }
            }
            &__p3 {
              padding-right: 0;
              margin-top: 10 * $pr;
              font-size: 15 * $pr;
              line-height: 22 * $pr;
            }
            &__btn {
              margin-top: 18 * $pr;
              width: 202 * $pr;
              height: 50 * $pr;
              border-radius: 4 * $pr;
              font-size: 14 * $pr;
            }
          }
          .box {
            margin-top: 87 * $pr;
            width: 313 * $pr;
            height: 313 * $pr;
            box-shadow: 0 30 * $pr 40 * $pr 0 rgba(0, 0, 0, 0.2);
            border-radius: 50%;
            &__main {
              width: calc(100% - 16 * $pr);
              height: calc(100% - 16 * $pr);
              img {
                width: 100%;
              }
            }
          }
        }
        .pagination {
          display: none;
        }
      }
      .module {
        &__top {
          padding: 0 24 * $pr;
          height: 40 * $pr;
          .title {
            font-size: 34 * $pr;
          }
          .more {
            margin-top: 0;
            font-size: 20 * $pr;
          }
        }
        &.best {
          margin-top: 64 * $pr;
          .list1 {
            padding: 0 24 * $pr;
            margin-top: 30 * $pr;
            flex-wrap: wrap;
            gap: 34 * $pr 0;
          }
          .list2 {
            padding: 0 24 * $pr;
            margin-top: 24 * $pr;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 20 * $pr 25 * $pr;
          }
        }
        &.latest {
          margin-top: 54 * $pr;
          .list {
            margin: 20 * $pr auto 0;
            width: calc(100% - 20 * $pr);
            border-radius: 16 * $pr;
            padding: 35 * $pr 10 * $pr;
            grid-template-rows: repeat(3, 1fr);
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 30 * $pr 18 * $pr;
          }
        }
        &.hot {
          margin-top: 54 * $pr;
          .list {
            padding: 0 24 * $pr;
            margin-top: 20 * $pr;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 14 * $pr 13.5 * $pr;
          }
        }
      }
    }
  }
}
</style>
