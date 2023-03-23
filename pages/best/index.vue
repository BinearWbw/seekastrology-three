<template>
  <article class="type">
    <div class="type__main">
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
          <google-auto-ad :id="'2930821029'" classNames="ad ad1" />
          <google-auto-ad :id="'2448439440'" classNames="ad ad2" />
        </div>
      </section>
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
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Best',
  async asyncData({ error, $apiList, $utils }) {
    try {
      let [gameList, recommendList] = await Promise.all([
        $apiList.home
          .getGameMenu({ origin: process.env.origin, menu: 'best-games' })
          .then((res) => res.list || []),
        $apiList.home
          .getGameRec({ origin: process.env.origin, size: 10 })
          .then((res) => {
            if (res.list) {
              res.list.forEach(
                (item) =>
                  (item.updated = $utils.formatDate(
                    new Date(item.updated * 1000),
                    'EE dd, YYYY'
                  ))
              )
            }
            return res.list || []
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
  mounted() {
    if (this.$route.hash.includes('position')) {
      this.$el.querySelector(`.ad1`).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
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
      padding-top: 30px;
      &__top {
        width: 100%;
        height: 41px;
        .title {
          font-size: 34px;
          line-height: 41px;
          -webkit-flex-shrink: 0;
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
          grid-column-end: span 7;
          &.ad1 {
            grid-row-end: 5;
          }
        }
      }
      &:first-child {
        padding-top: 34px;
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
            :deep(.item:nth-child(n + 9)) {
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
            :deep(.item:nth-child(n + 7)) {
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
            :deep(.item:nth-child(n + 5)) {
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
            grid-column-end: span 3;
          }
        }
        &:first-child {
          padding-top: 30 * $pr;
        }
      }
    }
  }
}
@media (max-width: 487px) {
  $pr: math.div(1vw, 3.75);
  .type {
    &__main {
      .ad {
        :deep(.title) {
          width: 100vw;
          margin-left: -23 * $pr;
        }
      }
    }
  }
}
</style>
