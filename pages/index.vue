<template>
  <article class="home">
    <div class="home__main">
      <section class="rec">
        <div
          class="rec__item"
          :class="`rec${index + 1}`"
          v-for="(item, index) in gameList['best-games'].slice(0, 5)"
          :key="item.id"
          @click="goRec(item)"
        >
          <img class="bg" :src="$config.imgUrl + item.icon" :alt="item.name" />
          <div class="info">
            <p class="info__title">{{ item.name }}</p>
            <div class="info__bottom">
              <div class="category">Action</div>
              <div class="company">EA</div>
            </div>
          </div>
        </div>
        <google-ad :id="'ID1-pc'" :timeout="200" classNames="rec__item ad" />
      </section>
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
    return {}
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
  methods: {
    goRec(item) {
      let href = item.name.replace(/[^a-zA-Z0-9\\s]/g, '-').toLowerCase()
      window.location = `/game/${href}-${item.id}`
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.home {
  &__main {
    margin: 0 auto;
    width: 1310px;
    position: relative;
    .rec {
      width: 100%;
      height: 538px;
      padding: 40px 0 50px;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-auto-flow: column;
      gap: 20px;
      &__item {
        background: #000;
        border-radius: 16px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        .bg {
          border-radius: 16px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
        }
        .info {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 90px;
          border-radius: 0 0 16px 16px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          &__title {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          &__bottom {
            margin-top: 2px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .category {
              background: #783beb;
              border-radius: 48px;
              padding: 0 10px;
              height: 18px;
              line-height: 18px;
              font-size: 12px;
            }
            .company {
              max-width: 100%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-top: 7px;
              font-size: 12px;
              line-height: 14px;
              color: #a9a9ac;
              -webkit-transition-duration: 0.3s;
              transition-duration: 0.3s;
            }
          }
        }
        &:hover {
          .bg {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
          }
          .info {
            &__bottom {
              .company {
                color: #fff;
              }
            }
          }
        }
      }
      .rec1 {
        width: 214px;
        grid-row-start: span 2;
        .info {
          padding-top: 32px;
          padding-left: 21px;
          height: 126px;
          background: linear-gradient(
            180deg,
            rgba(36, 38, 43, 0.2) 0%,
            rgba(36, 38, 43, 0.8) 100%
          );
          &__title {
            font-size: 18px;
            line-height: 19px;
          }
          &__bottom {
            .company {
              margin-top: 6px;
              font-size: 13px;
              line-height: 19px;
            }
          }
        }
      }
      .rec2 {
        width: 644px;
        grid-row-start: span 2;
        .info {
          padding-top: 26px;
          padding-left: 32px;
          height: 120px;
          background: linear-gradient(
            180deg,
            rgba(36, 38, 43, 0.2) 0%,
            #24262b 100%
          );
          &__title {
            font-size: 24px;
            line-height: 25px;
          }
          &__bottom {
            margin-top: 10px;
            flex-direction: row;
            .category {
              flex-shrink: 0;
              height: 24px;
              line-height: 24px;
              padding: 0 18px;
            }
            .company {
              margin-top: 0;
              margin-left: 18px;
              font-size: 14px;
              line-height: 24px;
            }
          }
        }
      }
      .rec3,
      .rec4,
      .rec5 {
        width: 196px;
        .info {
          padding-top: 14px;
          padding-left: 16px;
          height: 90px;
          &__title {
            font-size: 14px;
            line-height: 19px;
          }
        }
      }
      .rec3 {
        .info {
          background: linear-gradient(
            180deg,
            rgba(36, 38, 43, 0.2) 0%,
            rgba(36, 38, 43, 0.8) 100%
          );
        }
      }
      .rec4,
      .rec5 {
        background: linear-gradient(
          180deg,
          rgba(25, 26, 29, 0.2) 0%,
          rgba(25, 26, 29, 0.8) 100%
        );
      }
      .ad {
        width: 196px;
        grid-row-end: 2;
        grid-column-end: 5;
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
      .banner {
        height: auto;
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
