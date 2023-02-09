<template>
  <article class="home">
    <div class="home__main">
      <section class="rec">
        <div
          class="rec__item"
          :class="`rec${index + 1}`"
          v-for="(item, index) in gameList['rec'].slice(0, 5)"
          :key="item.id"
          @click="goRec(item)"
        >
          <img class="bg" :src="$config.imgUrl + item.icon" :alt="item.name" />
          <div class="info">
            <p class="info__title">{{ item.name }}</p>
            <div class="info__bottom">
              <div class="category">{{ item.category }}</div>
              <div class="company">{{ item.company_id }}</div>
            </div>
          </div>
        </div>
        <google-ad :id="'ID1-pc'" classNames="rec__item ad" />
      </section>
      <section class="module best">
        <div class="module__top">
          <div class="title">BEST GAMES</div>
          <a href="/best" class="more" title="BEST GAMES">MORE GAMES</a>
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
          <a href="/new" class="more" title="LATEST GAMES">MORE GAMES</a>
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
          <a href="/hot" class="more" title="HOT GAMES">MORE GAMES</a>
        </div>
        <div class="list">
          <home-hot
            v-for="item in gameList['hot-games']"
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
  async asyncData({ error, $apiList, $utils }) {
    try {
      let gameList
      const res = await $apiList.home.getGameHome({
        origin: process.env.origin,
      })
      res['best-games'] &&
        res['best-games'].map((item) => {
          item.updated = $utils.formatDate(
            new Date(item.updated * 1000),
            'EE dd, YYYY'
          )
        })
      res['latest-games'] &&
        res['latest-games'].map((item) => {
          item.updated = $utils.formatPast(item.updated * 1000, 'dd AA, YYYY')
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
      grid-template-columns: 214px auto 196px 196px;
      &__item {
        background: #000;
        border-radius: 16px;
        position: relative;
        overflow: hidden;
        appearance: none;
        backface-visibility: hidden;
        transform: translate(0, 0, 0);
        -webkit-appearance: none;
        -webkit-backface-visibility: hidden;
        -webkit-transform: translate3d(0, 0, 0);
        cursor: pointer;
        .bg {
          border-radius: 16px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          -webkit-transition: -webkit-transform 0.3s;
          transition: transform 0.3s;
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
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-align-items: flex-start;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
            .category {
              background: #783beb;
              border-radius: 48px;
              padding: 0 10px;
              height: 18px;
              line-height: 18px;
              font-size: 12px;
              -webkit-transition: background 0.3s;
              transition: background 0.3s;
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
              -webkit-transition: color 0.3s;
              transition: color 0.3s;
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
              .category {
                background: #d23beb;
              }
              .company {
                color: #fff;
              }
            }
          }
        }
      }
      .rec1 {
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
              -webkit-flex-shrink: 0;
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
        grid-row-end: 2;
        grid-column-end: 5;
      }
    }
    .module {
      &__top {
        width: 100%;
        height: 41px;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        .title {
          font-size: 34px;
          line-height: 41px;
          -webkit-flex-shrink: 0;
          flex-shrink: 0;
          font-family: BebasNeue-Regular;
        }
        .more {
          margin-top: 2px;
          font-size: 22px;
          line-height: 26px;
          -webkit-flex-shrink: 0;
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
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          -webkit-box-pack: justify;
          -webkit-justify-content: space-between;
          -ms-flex-pack: justify;
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
@media (max-width: 1370px) {
  .home {
    &__main {
      padding: 0 30px;
      width: 100%;
      .module {
        &.best {
          .list1 {
            :deep(.item:nth-child(7)) {
              display: none;
            }
          }
          .list2 {
            grid-template-columns: repeat(4, 1fr);
            :deep(.item:nth-child(n + 9)) {
              display: none;
            }
          }
        }
        &.latest {
          .list {
            grid-template-columns: repeat(9, 1fr);
            :deep(.item:nth-child(n + 19)) {
              display: none;
            }
          }
        }
        &.hot {
          .list {
            grid-template-columns: repeat(6, 1fr);
          }
        }
      }
    }
  }
}
@media (max-width: 1154px) {
  .home {
    &__main {
      .rec {
        grid-template-columns: 214px auto 196px;
        .rec3,
        .rec4 {
          display: none;
        }
        .ad {
          grid-column-end: 4;
        }
      }
    }
  }
}
@media (max-width: 1104px) {
  .home {
    &__main {
      .module {
        &.best {
          .list1 {
            :deep(.item:nth-child(6)) {
              display: none;
            }
          }
          .list2 {
            grid-template-columns: repeat(3, 1fr);
            :deep(.item:nth-child(n + 7)) {
              display: none;
            }
          }
        }
        &.latest {
          .list {
            grid-template-columns: repeat(8, 1fr);
            :deep(.item:nth-child(n + 17)) {
              display: none;
            }
          }
        }
        &.hot {
          .list {
            grid-template-columns: repeat(5, 1fr);
          }
        }
      }
    }
  }
}
@media (max-width: 890px) {
  .home {
    &__main {
      .module {
        &.best {
          .list1 {
            :deep(.item:nth-child(5)) {
              display: none;
            }
          }
          .list2 {
            grid-template-columns: repeat(2, 1fr);
            :deep(.item:nth-child(n + 5)) {
              display: none;
            }
          }
        }
        &.latest {
          .list {
            grid-template-columns: repeat(6, 1fr);
            :deep(.item:nth-child(n + 13)) {
              display: none;
            }
          }
        }
        &.hot {
          .list {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      }
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .home {
    &__main {
      padding: 0 10 * $pr;
      .rec {
        height: auto;
        padding: 26 * $pr 13 * $pr;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        gap: 0;
        &__item {
          -webkit-flex-shrink: 0;
          flex-shrink: 0;
          width: 156 * $pr;
          height: 170 * $pr;
          border-radius: 13 * $pr;
          .bg {
            border-radius: 13 * $pr;
          }
          .info {
            height: 70 * $pr;
            border-radius: 0 0 13 * $pr 13 * $pr;
            backdrop-filter: blur(10 * $pr);
            -webkit-backdrop-filter: blur(10 * $pr);
            &__bottom {
              margin-top: 3 * $pr;
              .category {
                border-radius: 13 * $pr;
                padding: 0 7 * $pr;
                height: 15 * $pr;
                line-height: 17 * $pr;
                font-size: 9 * $pr;
              }
              .company {
                margin-top: 6 * $pr;
                font-size: 12 * $pr;
                line-height: 15 * $pr;
              }
            }
          }
        }
        .rec1 {
          display: none;
        }
        .rec2 {
          width: 100%;
          height: 228 * $pr;
          .info {
            padding-top: 22 * $pr;
            padding-left: 17 * $pr;
            height: 81 * $pr;
            &__title {
              font-size: 16 * $pr;
              line-height: 16 * $pr;
            }
            &__bottom {
              margin-top: 8 * $pr;
              .category {
                height: 16 * $pr;
                line-height: 16 * $pr;
                padding: 0 9 * $pr;
              }
              .company {
                margin-left: 9 * $pr;
                font-size: 12 * $pr;
                line-height: 18 * $pr;
              }
            }
          }
        }
        .rec3,
        .rec4,
        .rec5 {
          .info {
            padding-top: 6 * $pr;
            padding-left: 12 * $pr;
            height: 70 * $pr;
            &__title {
              font-size: 11 * $pr;
              line-height: 15 * $pr;
            }
          }
        }
        .rec4 {
          margin-top: 15 * $pr;
          display: block;
        }
        .rec5 {
          margin-top: 15 * $pr;
        }
        .ad {
          margin-top: 15 * $pr;
          width: 100%;
          height: 63 * $pr;
        }
      }
      .module {
        &__top {
          height: 41 * $pr;
          .title {
            font-size: 34 * $pr;
            line-height: 41 * $pr;
          }
          .more {
            margin-top: 8 * $pr;
            font-size: 22 * $pr;
            line-height: 26 * $pr;
          }
        }
        &.best {
          padding: 0 13 * $pr;
          .list1 {
            margin-top: 24 * $pr;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            gap: 0;
            :deep(.item:nth-child(5)) {
              display: block;
            }
            :deep(.item:nth-child(6)) {
              display: block;
            }
            :deep(.item:nth-child(n + 4)) {
              margin-top: 34 * $pr;
            }
          }
          .list2 {
            margin-top: 28 * $pr;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 20 * $pr 0;
            :deep(.item:nth-child(n + 3)) {
              display: none;
            }
          }
        }
        &.latest {
          margin-top: 40 * $pr;
          .module__top {
            padding: 0 13 * $pr;
          }
          .list {
            margin-top: 15 * $pr;
            border-radius: 16 * $pr;
            padding: 35 * $pr 17 * $pr 32 * $pr;
            grid-template-rows: repeat(3, 1fr);
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 28 * $pr 30 * $pr;
            :deep(.item:nth-child(n + 10)) {
              display: none;
            }
          }
        }
        &.hot {
          margin-top: 41 * $pr;
          padding: 0 13 * $pr;
          .list {
            margin-top: 15 * $pr;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 14 * $pr 12 * $pr;
          }
        }
      }
    }
  }
}
</style>
