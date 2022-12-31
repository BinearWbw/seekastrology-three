<template>
  <article class="type">
    <div class="type__main">
      <div class="nav">
        <img class="first" src="~/assets/img/game/nav.svg" alt="nav" />
        <a href="/" title="HOME">Home</a>
        <img class="arrow" src="~/assets/img/game/arrow.png" alt="nav" />
        <p class="name">Search</p>
      </div>
      <section class="search" v-if="gameList.length > 0">
        <p class="title">
          <span>"{{ $route.params.title }}" </span>,
          {{ gameList.length > 1 ? gameList.length + ' results' : '1 result' }}
          found
        </p>
        <div class="list">
          <home-latest
            v-for="item in gameList"
            :key="item.id"
            :item="item"
          ></home-latest>
        </div>
      </section>
      <p class="none" v-else>
        Sorry, No <span>"{{ $route.params.title }}"</span> found
      </p>
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
  name: 'SearchTitle',
  async asyncData({ error, $apiList, params }) {
    try {
      let [gameList, recommendList] = await Promise.all([
        $apiList.home
          .getGameSearch({
            origin: process.env.origin,
            name: params.title,
          })
          .then((res) => {
            console.log(res)
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
    .nav {
      margin-top: 23px;
      padding-left: 3px;
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      a {
        font-size: 14px;
        line-height: 18px;
        color: #808191;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        &:hover {
          color: #fff;
        }
      }
      .first {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        margin-bottom: 2px;
      }
      .arrow {
        margin: 0 14px 2px 11px;
        width: 6px;
        height: 9px;
      }
      .name {
        font-size: 14px;
        line-height: 18px;
        margin-left: -2px;
      }
    }
    .search {
      width: 100%;
      background: #282a31;
      border-radius: 18px;
      margin-top: 21px;
      padding-top: 35px;
      .title {
        text-align: center;
        font-size: 20px;
        span {
          color: #ffc908;
        }
      }
      .list {
        background-color: #282a31;
        border-radius: 16px;
        padding: 41px 51px 35px;
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-gap: 28px 30px;
      }
    }
    .none {
      width: 100%;
      height: 200px;
      background: #282a31;
      border-radius: 18px;
      margin-top: 21px;
      font-size: 24px;
      text-align: center;
      line-height: 204px;
      padding: 0 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        color: #ffc908;
      }
    }
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
@media (max-width: 1370px) {
  .type {
    &__main {
      padding: 0 30px;
      width: 100%;
      .search {
        .list {
          grid-template-columns: repeat(8, 1fr);
        }
      }
      .module {
        .list {
          grid-template-columns: repeat(6, 1fr);
          :deep(.item:nth-last-child(4) ~ .item) {
            display: none;
          }
        }
      }
    }
  }
}
@media (max-width: 1104px) {
  .type {
    &__main {
      .search {
        .list {
          grid-template-columns: repeat(7, 1fr);
        }
      }
      .module {
        .list {
          grid-template-columns: repeat(5, 1fr);
          :deep(.item:nth-last-child(7) ~ .item) {
            display: none;
          }
        }
      }
    }
  }
}
@media (max-width: 890px) {
  .type {
    &__main {
      .search {
        .list {
          grid-template-columns: repeat(6, 1fr);
        }
      }
      .module {
        .list {
          grid-template-columns: repeat(4, 1fr);
          :deep(.item:nth-last-child(10) ~ .item) {
            display: none;
          }
        }
      }
    }
  }
}
</style>
