<template>
  <article class="type">
    <div class="type__main">
      <div class="nav">
        <img class="first" src="~/assets/img/game/nav.svg" alt="nav" />
        <a href="/" title="HOME">Home</a>
        <img class="arrow" src="~/assets/img/game/arrow.png" alt="nav" />
        <p class="name">Search</p>
      </div>
      <div class="h5search">
        <input
          class="input"
          type="text"
          v-model="searchInput"
          placeholder="Search"
        />
        <button class="button common__btn" @click="search"></button>
      </div>
      <section class="search" v-if="gameList.length > 0">
        <p class="title">
          <span>"{{ $route.params.title }}" </span>,
          {{ gameList.length > 1 ? gameList.length + ' results' : '1 result' }}
          found
        </p>
        <p class="h5title">Search Results</p>
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
          <div class="title">More Games</div>
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
  data() {
    return {
      searchInput: '',
    }
  },
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
  methods: {
    search() {
      let regSearch = /^.{2,}$/
      if (
        !this.searchInput.replace(/\s+/g, '') ||
        !regSearch.test(this.searchInput.replace(/\s+/g, ''))
      ) {
        this.$store.dispatch('toast', {
          type: 'warning',
          msg: 'Search is required and the length cannot be less than 2',
        })
      } else {
        window.location = `/search/${this.searchInput}`
      }
    },
  },
  mounted() {
    this.searchInput = this.$route.params.title || ''
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
    .h5search {
      display: none;
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
      .h5title {
        display: none;
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
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .type {
    &__main {
      padding: 0 10 * $pr;
      .nav {
        display: none;
      }
      .h5search {
        margin: 39 * $pr auto 0;
        display: block;
        width: calc(100% - 26 * $pr);
        height: 46 * $pr;
        border-radius: 24 * $pr;
        background: #111216;
        position: relative;
        input {
          width: 100%;
          height: 100%;
          font-size: 18 * $pr;
          padding: 2 * $pr 88 * $pr 0 22 * $pr;
        }
        button {
          position: absolute;
          top: calc(50% - 21 * $pr);
          right: 2 * $pr;
          width: 64 * $pr;
          height: 42 * $pr;
          border-radius: 24 * $pr;
          background-color: #6c5dd3;
          background-image: url('~assets/img/search/search.png');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 20 * $pr 20 * $pr;
          &:hover {
            background-color: #7a78ff;
          }
        }
      }
      .search {
        background: transparent;
        border-radius: 0;
        margin-top: 0;
        padding-top: 32 * $pr;
        .title {
          display: none;
        }
        .h5title {
          padding: 0 13 * $pr;
          display: block;
          font-size: 14 * $pr;
          line-height: 18 * $pr;
          color: #808191;
          font-family: 'Bahnschrift';
        }
        .list {
          margin-top: 15 * $pr;
          border-radius: 16 * $pr;
          padding: 35 * $pr 17 * $pr 32 * $pr;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 28 * $pr 30 * $pr;
        }
      }
      .none {
        height: 18 * $pr;
        border-radius: 0;
        background: transparent;
        margin-top: 63 * $pr;
        font-size: 18 * $pr;
        line-height: 18 * $pr;
        padding: 0 13 * $pr;
      }
      .module {
        padding: 59 * $pr 13 * $pr 0;
        &__top {
          height: 18 * $pr;
          .title {
            font-size: 14 * $pr;
            line-height: 18 * $pr;
            color: #808191;
            font-family: 'Bahnschrift';
          }
        }
        .list {
          margin-top: 15 * $pr;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 14 * $pr 12 * $pr;
          :deep(.item:nth-last-child(13) ~ .item) {
            display: none;
          }
        }
      }
    }
  }
}
</style>
