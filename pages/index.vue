<template>
  <article class="home">
    <div class="home__main">
      <div class="search">
        <input
          class="input"
          type="text"
          v-model="searchInput"
          placeholder="Search"
        />
        <button class="button" @click="search"></button>
      </div>
      <section class="banner">
        <div class="banner__left">
          <div class="info" v-if="visible">
            <p class="info__p1">{{ banners[bannersActive].title }}</p>
            <p class="info__p2">
              <span>CASH PRIZE</span><span>$</span><span>free</span>
            </p>
            <p class="info__p3">
              {{ banners[bannersActive].text }}
            </p>
            <button class="info__btn" @mouseenter="enter" @mouseleave="leave">
              PLAY FOR FREE
            </button>
          </div>
          <div class="box">
            <div class="box__main">
              <img
                :src="banners[bannersActive].img"
                alt="game"
                v-if="visible"
              />
            </div>
          </div>
        </div>
        <div class="pagination">
          <div
            class="pagination__item"
            v-for="(item, index) in banners"
            :key="index"
          >
            <button
              v-if="bannersActive !== index"
              class="circle"
              @click="changeBanner(index)"
            ></button>
            <div v-else class="rect">
              <div class="rect__img">
                <img :src="item.img" alt="game" />
              </div>
              <div class="rect__name">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </section>
      <section class="module best">
        <div class="module__top">
          <div class="title">BEST GAMES</div>
          <a href="/" class="more">MORE GAME</a>
        </div>
        <div class="best1">
          <a
            class="item"
            v-for="item in gameList.comm.slice(0, 7)"
            :key="item.id"
            :title="item.name"
          >
            <div class="item__top">
              <img :src="item.icon" :alt="item.name" />
            </div>
            <p class="item__title">
              {{ item.name }}
            </p>
          </a>
        </div>
        <div class="best2">
          <a
            class="item"
            v-for="item in gameList.comm.slice(0, 8)"
            :key="item.id"
            :title="item.name"
          >
            <div class="item__left">
              <img :src="item.icon" :alt="item.name" />
            </div>
            <div class="item__right">
              <p class="p1">{{ item.name }}</p>
              <p class="p2">Shooting</p>
              <p class="p3">May 26,2020</p>
            </div>
          </a>
        </div>
      </section>
      <section class="module latest">
        <div class="module__top">
          <div class="title">LATEST GAMES</div>
          <div class="page">
            <button class="page__button prev"></button>
            <button class="page__button next"></button>
          </div>
        </div>
        <div class="list">
          <a
            class="item"
            v-for="item in gameList.comm.slice(0, 18)"
            :key="item.id"
            :title="item.name"
          >
            <div class="item__top">
              <img :src="item.icon" :alt="item.name" />
            </div>
            <div class="item__bottom">
              <p class="name">{{ item.name }}</p>
              <p class="time">14m ago</p>
            </div>
          </a>
        </div>
      </section>
      <section class="module hot">
        <div class="module__top">
          <div class="title">HOT GAMES</div>
          <div class="page">
            <button class="page__button prev"></button>
            <button class="page__button next"></button>
          </div>
        </div>
        <div class="list">
          <a
            class="item"
            :class="{ free: index > 6 }"
            v-for="(item, index) in gameList.comm.slice(0, 21)"
            :key="item.id"
            :title="item.name"
          >
            <div class="item__top">
              <img :src="item.icon" :alt="item.name" />
            </div>
            <div class="item__bottom">
              <p class="name">{{ item.name }}</p>
              <button class="btn" v-if="index > 6">FREE</button>
            </div>
          </a>
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
          text: 'Pre-Purchase Now to unlock early game content, including two-suit pack, early access to the Gravity Well gadget and Three Skill Points.',
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
      searchInput: '',
    }
  },
  async asyncData({ error, $apiList }) {
    try {
      let gameList
      const res = await $apiList.home.getGameHome({
        origin: process.env.origin,
      })
      res.list.comm.map((item) => {
        item.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${item.icon}`
      })
      res.list.medium.map((item, index) => {
        item.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${item.icon}`
      })
      res.list.max.map((item, index) => {
        item.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${item.icon}`
      })
      res.list.category.map((item, index) => {
        item.data.map((el) => {
          el.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${el.icon}`
        })
      })
      gameList = res.list
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
    console.log(this.gameList)
    this.setTimer()
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
    search() {
      console.log(this.searchInput)
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
    width: 1218px;
    position: relative;
    .search {
      position: absolute;
      top: 36px;
      right: 0;
      width: 270px;
      height: 40px;
      background-color: rgba(0, 0, 0, 0.45);
      border-radius: 20px;
      input {
        width: 100%;
        height: 100%;
        font-size: 14px;
        color: #808191;
        padding: 0 51px 0 19px;
      }
      button {
        position: absolute;
        top: 12px;
        right: 17px;
        width: 15px;
        height: 15px;
        background: url('~assets/img/home/search.png') no-repeat center center;
        background-size: contain;
      }
    }
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
          background-image: linear-gradient(80deg, #512351 0%, #1f2732 100%),
            linear-gradient(#212936, #212936);
          background-blend-mode: normal, normal;
          box-shadow: 0px 30px 40px 0px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          &__main {
            width: calc(100% - 20px);
            height: calc(100% - 20px);
            border-radius: 50%;
            background-image: linear-gradient(60deg, #161527 70%, #3b47b3 100%),
              linear-gradient(#212936, #212936);
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
        height: 34px;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title {
          flex-shrink: 0;
          font-family: BebasNeue-Regular;
          font-size: 34px;
          color: #ffffff;
        }
        .more {
          margin-top: 8px;
          flex-shrink: 0;
          font-family: BebasNeue-Regular;
          font-size: 20px;
          color: #808191;
        }
        .page {
          flex-shrink: 0;
          height: 100%;
          &__button {
            width: 34px;
            height: 100%;
            border-radius: 50%;
            background-color: #242731;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            background-repeat: no-repeat;
            background-position: center;
            &.active {
              background-color: #6c5dd3;
            }
          }
          .prev {
            background-image: url('~assets/img/home/prev.png');
            margin-right: 6px;
          }
          .next {
            background-image: url('~assets/img/home/next.png');
          }
        }
      }
      .best1 {
        margin-top: 38px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .item {
          flex-shrink: 0;
          width: 140px;
          cursor: pointer;
          &__top {
            height: 140px;
            background-color: #3c375f;
            border-radius: 24px;
            position: relative;
            img {
              position: absolute;
              bottom: 0;
              left: 0;
              max-width: 100%;
              border-radius: 0 0 24px 24px;
            }
          }
          &__title {
            margin-top: 10px;
            font-size: 14px;
            color: #808191;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      .best2 {
        margin-top: 30px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px 25px;
        .item {
          overflow: hidden;
          height: 96px;
          background-color: #282a31;
          border-radius: 16px;
          display: flex;
          cursor: pointer;
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
          &__left {
            flex-shrink: 0;
            width: 72px;
            height: 100%;
            border-radius: 16px;
            img {
              -webkit-transition-duration: 0.3s;
              transition-duration: 0.3s;
              border-radius: 16px;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          &__right {
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
            padding-left: 18px;
            padding-top: 19px;
            .p1 {
              font-size: 14px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .p2 {
              font-size: 14px;
              color: #808191;
              line-height: 1;
              margin-top: -1px;
            }
            .p3 {
              font-size: 12px;
              color: #808191;
              position: relative;
              padding-left: 16px;
              margin-top: 6px;
              &::before {
                content: '';
                position: absolute;
                top: calc(50% - 4px);
                left: 0;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #ff754c;
              }
              &.active {
                &:before {
                  background-color: #76ff4c;
                }
              }
            }
          }
          &:hover {
            background-color: #6c5dd3;
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
            .item__left {
              img {
                -webkit-transform: scale(0.9);
                transform: scale(0.9);
              }
            }
          }
        }
      }
      &.latest {
        margin-top: 82px;
        .list {
          margin-top: 34px;
          background-color: #282a31;
          border-radius: 16px;
          display: flex;
          flex-wrap: wrap;
          padding: 4px 24px 64px;
          .item {
            width: 94px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 50px 18px 0;
            cursor: pointer;
            &__top {
              width: 74px;
              height: 74px;
              background-color: #808191;
              border-radius: 16px;
              flex-shrink: 0;
              margin-bottom: 16px;
              img {
                border-radius: 16px;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            &__bottom {
              width: 100%;
              display: flex;
              flex-direction: column;
              .name {
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                margin-bottom: 10px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .time {
                font-size: 14px;
                color: #808191;
                text-align: center;
                line-height: 1;
              }
            }
          }
        }
      }
      &.hot {
        margin-top: 73px;
        .list {
          margin-top: 33px;
          width: 100%;
          grid-gap: 20px 21px;
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          .item {
            overflow: hidden;
            position: relative;
            padding-top: 29px;
            &__top {
              position: absolute;
              top: 0;
              left: calc(50% - 54px);
              width: 108px;
              height: 108px;
              background-color: #3c375f;
              box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
              border-radius: 24px;
              img {
                width: 100%;
                height: 100%;
                border-radius: 24px;
                object-fit: cover;
              }
            }
            &__bottom {
              width: 100%;
              height: 100%;
              background-color: #282a31;
              border-radius: 16px;
              padding-top: 94px;
              padding-bottom: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              .name {
                flex-shrink: 0;
                padding: 0 24px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                margin-bottom: auto;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
            &.free {
              padding-top: 145px;
              background-color: #282a31;
              border-radius: 24px;
              .item__top {
                top: 19px;
              }
              .item__bottom {
                padding-top: 0;
                .btn {
                  flex-shrink: 0;
                  width: 86px;
                  height: 30px;
                  background-color: #1f2128;
                  border-radius: 15px;
                  font-size: 12px;
                  color: #808191;
                  -webkit-transition-duration: 0.3s;
                  transition-duration: 0.3s;
                  margin-top: 11px;
                  margin-bottom: 8px;
                }
              }
            }
            &:hover {
              .item__bottom {
                .btn {
                  background-color: #6c5dd3;
                  color: #fff;
                }
              }
            }
          }
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
// @media (max-width: 828px) {
//   $pr: math.div(1vw, 8.28);
//   .home {
//     padding: 0;
//     .list {
//       grid-template-columns: repeat(4, 176 * $pr);
//       grid-gap: 16 * $pr;
//     }
//   }
// }
</style>
