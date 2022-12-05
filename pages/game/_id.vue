<template>
  <article class="game">
    <div class="game__main">
      <section class="game__main__left">
        <div class="nav">
          <img class="first" src="~/assets/img/game/nav.png" alt="nav" />
          <a href="/">Home</a>
          <img class="arrow" src="~/assets/img/game/arrow.png" alt="nav" />
          <a href="/">Home SSS</a>
          <img class="arrow" src="~/assets/img/game/arrow.png" alt="nav" />
          <p class="name">{{ gameInfo.name }}</p>
        </div>
        <div class="main">
          <div class="banner">
            <swiper class="swiper" :options="swiperOptions">
              <swiper-slide
                class="swiper__item"
                v-for="(item, index) in banners"
                :key="index"
              >
                <img :src="item.img" alt="obskins" />
              </swiper-slide>
            </swiper>
          </div>
          <div class="pagination">
            <button class="btn pagination__prev"></button>
            <div class="pagination__page"></div>
            <button class="btn pagination__next"></button>
          </div>
          <game-info class="explain1"></game-info>
          <div class="ad"></div>
          <game-info class="explain2"></game-info>
          <div class="info">
            <p class="info__title">Get The Game</p>
            <div class="info__main">
              <p>
                <span>Version :</span>
                <span>12.61/1.1.2</span>
              </p>
              <p>
                <span>Size :</span>
                <span>238.8MB/32.73MB</span>
              </p>
              <p>
                <span>Updated :</span>
                <span>May 26, 2020/December 20, 2019</span>
              </p>
            </div>
            <div class="info__download">
              <a href="/">
                <img src="~/assets/img/game/andriod.png" alt="andriod" />
                <span>Andriod</span>
              </a>
              <a href="/">
                <img src="~/assets/img/game/ios.png" alt="ios" />
                <span>IOS</span>
              </a>
            </div>
            <p class="info__remark">
              * For reference, The Fortnite game websites are all approved,
              there are no viruses and malware.
            </p>
          </div>
          <section class="module">
            <div class="module__top">
              <div class="title">RELATED GAMES</div>
              <div class="page">
                <button class="page__button prev"></button>
                <button class="page__button next"></button>
              </div>
            </div>
            <div class="list">
              <home-latest
                v-for="item in gameList.slice(0, 6)"
                :key="item.id"
                :item="item"
              ></home-latest>
            </div>
          </section>
        </div>
      </section>
      <section class="game__main__right">
        <home-search></home-search>
        <div class="ad"></div>
        <div class="best">Best Games</div>
        <div class="list">
          <home-best2
            v-for="item in gameList"
            :item="item"
            :key="item.id"
          ></home-best2>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Game',
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.pagination__page',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            var customPaginationHtml = ''
            for (var i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if (i == current - 1) {
                customPaginationHtml +=
                  '<div class="swiper-pagination-customs swiper-pagination-customs-active"></div>'
              } else {
                customPaginationHtml +=
                  '<div class="swiper-pagination-customs"></div>'
              }
            }
            return customPaginationHtml
          },
        },
        navigation: {
          nextEl: '.pagination__next',
          prevEl: '.pagination__prev',
        },
        speed: 500,
        grabCursor: true,
      },
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
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  validate({ query }) {
    if (
      query.id &&
      typeof Number(query.id) === 'number' &&
      !isNaN(Number(query.id))
    ) {
      return true
    }
    return false
  },
  async asyncData({ error, $apiList, query }) {
    try {
      let gameList = [],
        gameInfo = null
      const res = await $apiList.home.getGameDetail({
        site_id: process.env.origin,
        game_id: query.id,
      })
      res.detail.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${res.detail.icon}`
      gameInfo = res.detail
      res.relate.map((item) => {
        item.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${item.icon}`
        gameList.push(item)
      })
      return {
        gameInfo,
        gameList,
      }
    } catch (e) {
      error({ statusCode: e.code, message: e.message })
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
$block: 140px;
$spacing: 16px;
.game {
  &__main {
    margin: 0 auto;
    width: 1218px;
    display: flex;
    justify-content: space-between;
    padding-top: 36px;
    &__left {
      flex: 1;
      min-width: 0;
      .nav {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        a {
          font-size: 14px;
          line-height: 1;
          color: #808191;
          &:hover {
            color: #fff;
          }
        }
        .first {
          width: 21px;
          height: 21px;
          margin-right: 15px;
          margin-bottom: 2px;
        }
        .arrow {
          margin: 0 16px 0 20px;
          width: 8px;
          height: 12px;
        }
        .name {
          font-size: 14px;
          color: #ffffff;
          line-height: 1;
        }
      }
      .main {
        margin-top: 36px;
        padding-right: 52px;
        width: 100%;
        overflow: hidden;
        .banner {
          width: 100%;
          height: 460px;
          background-color: #111216;
          border-radius: 24px;
          overflow: hidden;
          .swiper {
            width: 100%;
            height: 100%;
            &__item {
              width: 100%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
        .pagination {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 34px;
          .btn {
            width: 34px;
            height: 100%;
            border-radius: 50%;
            background-color: #242731;
            background-repeat: no-repeat;
            background-position: center;
          }
          &__prev {
            background-image: url('~assets/img/home/prev.png');
          }
          &__next {
            background-image: url('~assets/img/home/next.png');
          }
          &__page {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-gap: 0 10px;
            width: auto;
            min-width: 126px;
            padding: 0 30px;
          }
          :deep(.swiper-pagination-customs) {
            width: 10px;
            height: 10px;
            border: solid 2px transparent;
            border-radius: 50%;
            position: relative;
            transition-duration: 0.3s;
            &::before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              background-color: #808191;
            }
          }
          :deep(.swiper-pagination-customs-active) {
            border-color: #fe27ee;
            &::before {
              background-color: #000000;
            }
          }
        }
        .explain1 {
          margin-top: 20px;
        }
        .ad {
          margin-top: 25px;
          width: 100%;
          height: 200px;
          background-color: #111216;
          border-radius: 24px;
        }
        .explain2 {
          margin-top: 25px;
        }
        .info {
          margin-top: 30px;
          height: 270px;
          background-color: #282a31;
          border-radius: 24px;
          padding: 36px 44px;
          &__title {
            font-size: 24px;
            line-height: 1;
            color: #ffffff;
          }
          &__main {
            margin-top: 19px;
            display: flex;
            flex-wrap: wrap;
            grid-gap: 20px 83px;
            p {
              font-size: 14px;
              line-height: 20px;
              span:first-child {
                color: #fff;
              }
              span:last-child {
                color: #808191;
                padding-left: 7px;
              }
            }
          }
          &__download {
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-gap: 20px;
            a {
              width: 164px;
              height: 42px;
              border-radius: 21px;
              display: flex;
              align-items: center;
              justify-content: center;
              img {
                margin-bottom: 2px;
              }
              span {
                padding-left: 10px;
                margin-top: 2px;
                font-size: 14px;
                color: #ffffff;
                line-height: 1;
              }
              &:first-child {
                background-color: #7ac450;
              }
              &:nth-child(2) {
                background-color: #3f8cff;
              }
            }
          }
          &__remark {
            margin-top: 38px;
            font-size: 14px;
            color: #808191;
            line-height: 20px;
          }
        }
        .module {
          margin-top: 32px;
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
              font-size: 28px;
              color: #ffffff;
              margin-top: 5px;
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
          .list {
            margin-top: 24px;
            background-color: #282a31;
            border-radius: 16px;
            display: flex;
            flex-wrap: wrap;
            padding: 4px 24px 55px;
          }
        }
      }
    }
    &__right {
      width: 286px;
      .search {
        position: relative;
      }
      .ad {
        margin-top: 36px;
        height: 250px;
        background-color: #282a31;
        border-radius: 16px;
      }
      .best {
        font-family: BebasNeue-Regular;
        font-size: 28px;
        line-height: 1;
        margin: 38px 0 24px;
      }
      .list {
        width: 100%;
        .item {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
@media (max-width: (11 * $block + 10 * $spacing+60px)) {
}
@media (max-width: (10 * $block + 9 * $spacing+60px)) {
}
@media (max-width: (9 * $block + 8 * $spacing+60px)) {
}
@media (max-width: (8 * $block + 7 * $spacing+60px)) {
}
@media (max-width: (7 * $block + 6 * $spacing+60px)) {
}
@media (max-width: (6 * $block + 5 * $spacing+60px)) {
}
@media (max-width: 828px) {
  $pr: math.div(1vw, 8.28);
}
</style>
