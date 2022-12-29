<template>
  <article class="type">
    <div class="type__main">
      <section class="module">
        <div class="module__top">
          <div class="title">{{ $route.params.title.toLowerCase() }} GAMES</div>
        </div>
        <div class="list">
          <home-hot
            v-for="item in recommendList.slice(0, 21)"
            :item="item"
            :key="item.id"
          ></home-hot>
        </div>
      </section>
      <section class="module">
        <div class="module__top">
          <div class="title">MORE GAMES</div>
        </div>
        <div class="list">
          <home-hot
            v-for="item in recommendList.slice(0, 21)"
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
  name: 'CategoryTitle',
  async asyncData({ error, $apiList, params }) {
    try {
      let [gameList, recommendList] = await Promise.all([
        $apiList.home
          .getGameCategory({
            origin: process.env.origin,
            cate_name: params.title.toLowerCase(),
          })
          .then((res) => {
            console.log(res)
            return res.list || []
          }),
        $apiList.home
          .getGameMenu({
            origin: process.env.origin,
            menu: 'best-games',
            size: 10,
          })
          .then((res) => {
            console.log(res)
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
      }
      &:first-child {
        padding-top: 34px;
      }
    }
  }
}
</style>
