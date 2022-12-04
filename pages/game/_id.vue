<template>
  <article class="game">
    <div class="game__main">
      <div class="game__main__left">
        <div class="nav">
          <img class="first" src="~/assets/img/game/nav.png" alt="nav" />
          <a href="/">Home</a>
          <img class="arrow" src="~/assets/img/game/arrow.png" alt="nav" />
          <a href="/">Home SSS</a>
          <img class="arrow" src="~/assets/img/game/arrow.png" alt="nav" />
          <p class="name">{{ gameInfo.name }}</p>
        </div>
        <div class="info">
          <div class="info__banner">
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
          <div class="info__pagination">
            <button class="btn prev"></button>
            <div class="pagination"></div>
            <button class="btn next"></button>
          </div>
        </div>
      </div>
      <div class="game__main__right">
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
      </div>
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
          el: '.pagination',
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
          nextEl: '.next',
          prevEl: '.prev',
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
      .info {
        margin-top: 36px;
        padding-right: 52px;
        width: 100%;
        overflow: hidden;
        &__banner {
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
        &__pagination {
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
          .prev {
            background-image: url('~assets/img/home/prev.png');
          }
          .next {
            background-image: url('~assets/img/home/next.png');
          }
          .pagination{
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
