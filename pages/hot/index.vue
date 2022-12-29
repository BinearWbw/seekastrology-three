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
      </section>
      <section class="module">
        <div class="module__top">
          <div class="title">HOT GAMES</div>
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
  name: 'Hot',
  async asyncData({ error, $apiList }) {
    try {
      let [gameList, recommendList] = await Promise.all([
        $apiList.home
          .getGameMenu({
            origin: process.env.origin,
            menu: 'hot-games',
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
    }
  }
}
</style>
