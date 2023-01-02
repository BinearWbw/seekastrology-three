<template>
  <article class="type">
    <div class="type__main">
      <section class="module">
        <div class="module__top">
          <div class="title">RECOMMEND GAMES</div>
        </div>
        <div class="list rec">
          <home-best2
            v-for="item in recommendList.slice(0, 10)"
            :item="item"
            :key="item.id"
          ></home-best2>
        </div>
        <google-ad :id="'ID1-pc'" :timeout="200" classNames="h5ad" />
      </section>
      <section class="module">
        <div class="module__top">
          <div class="title">BEST GAMES</div>
        </div>
        <div class="list">
          <home-hot
            v-for="item in gameList"
            :item="item"
            :key="item.id"
          ></home-hot>
          <google-ad :id="'ID1-pc'" :timeout="200" classNames="ad" />
        </div>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Best',
  async asyncData({ error, $apiList }) {
    try {
      let [gameList, recommendList] = await Promise.all([
        $apiList.home
          .getGameMenu({
            origin: process.env.origin,
            menu: 'best-games',
            size: 10,
          })
          .then((res) => {
            return res || []
          }),
        $apiList.home
          .getGameMenu({
            origin: process.env.origin,
            menu: 'best-games',
            size: 10,
          })
          .then((res) => {
            return res || []
          }),
      ])
      return {
        gameList,
        recommendList,
      }
    } catch (e) {
      error({ statusCode: e.code, message: e.message })
    }
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.type {
  &__main {
    margin: 0 auto;
    width: 1310px;
    position: relative;
    .module {
      padding-top: 40px;
      &__top {
        width: 100%;
        height: 41px;
        .title {
          font-size: 34px;
          line-height: 41px;
          flex-shrink: 0;
          font-family: BebasNeue-Regular;
        }
      }
      .list {
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-gap: 30px;
        &.rec {
          grid-template-columns: repeat(5, 1fr);
          grid-gap: 20px;
        }
        .ad {
          height: 250px;
          background: #000000;
          border-radius: 16px;
          grid-column-end: span 7;
          grid-row-end: 5;
        }
      }
      &:first-child {
        padding-top: 34px;
      }
      .h5ad {
        display: none;
      }
    }
  }
}
@media (max-width: 1370px) {
  .type {
    &__main {
      padding: 0 30px;
      width: 100%;
      .module {
        .list {
          grid-template-columns: repeat(6, 1fr);
          &.rec {
            grid-template-columns: repeat(4, 1fr);
            :deep(.item:nth-last-child(3) ~ .item) {
              display: none;
            }
          }
          .ad {
            grid-column-end: span 6;
          }
        }
      }
    }
  }
}
@media (max-width: 1104px) {
  .type {
    &__main {
      .module {
        .list {
          grid-template-columns: repeat(5, 1fr);
          &.rec {
            grid-template-columns: repeat(3, 1fr);
            :deep(.item:nth-last-child(5) ~ .item) {
              display: none;
            }
          }
          .ad {
            grid-column-end: span 5;
          }
        }
      }
    }
  }
}
@media (max-width: 890px) {
  .type {
    &__main {
      .module {
        .list {
          grid-template-columns: repeat(4, 1fr);
          &.rec {
            grid-template-columns: repeat(2, 1fr);
            :deep(.item:nth-last-child(7) ~ .item) {
              display: none;
            }
          }
          .ad {
            grid-column-end: span 4;
          }
        }
      }
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .type {
    &__main {
      padding: 0 23 * $pr;
      .module {
        padding-top: 20 * $pr;
        &__top {
          height: 41 * $pr;
          .title {
            font-size: 34 * $pr;
            line-height: 41 * $pr;
          }
        }
        .list {
          margin-top: 15 * $pr;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 14 * $pr 12 * $pr;
          &.rec {
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 20 * $pr 0;
          }
          .ad {
            display: none;
          }
        }
        &:first-child {
          padding-top: 30 * $pr;
        }
        .h5ad {
          margin-top: 25 * $pr;
          display: block;
          width: 100%;
          height: 100 * $pr;
          border-radius: 24 * $pr;
          background: #000000;
        }
      }
    }
  }
}
</style>
