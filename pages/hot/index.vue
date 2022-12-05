<template>
  <article class="type">
    <div class="type__main">
      <div class="type__main__search">
        <home-search></home-search>
      </div>
      <section class="module">
        <div class="module__top">
          <div class="title">HOT GAMES</div>
        </div>
        <div class="list">
          <home-hot
            v-for="item in gameList.comm.slice(0, 21)"
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
  name: 'Hot',
  data() {
    return {}
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
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
$block: 140px;
$spacing: 16px;
.type {
  &__main {
    margin: 0 auto;
    width: 1218px;
    position: relative;
    padding-top: 36px;
    &__search {
      position: absolute;
      top: 36px;
      right: 0;
      width: 270px;
    }
    .module {
      padding-top: 76px;
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
      }
      .list {
        margin-top: 33px;
        width: 100%;
        grid-gap: 20px 21px;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
      }
    }
  }
}
@media (max-width: 828px) {
}
</style>
