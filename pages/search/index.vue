<template>
  <article class="type">
    <div class="type__main">
      <div class="nav">
        <img class="first" src="~/assets/img/game/nav.svg" alt="nav" />
        <a :href="`${getIntersperseUrl}/?from=search`" title="HOME">Home</a>
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
        <button class="button common__btn" @click="searchResult"></button>
      </div>
      <section class="search" v-if="gameList.length > 0">
        <p class="title">
          <span>"{{ searchInput }}" </span>,
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
        Sorry, No <span>"{{ searchInputResult }}"</span> found
      </p>
      <section class="module">
        <div class="module__top">
          <div class="title">More Games</div>
        </div>
        <div class="list">
          <home-hot
            v-for="item in allList"
            :item="item"
            :key="item.id"
          ></home-hot>
        </div>
        <div class="loading" v-scroll v-if="search.page < totalPage">
          <div class="loader" v-if="loading"></div>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Search',
  data() {
    return {
      loading: false,
      status: false,
      gameList: [],
      searchInput: '',
      searchInputResult: '',
    }
  },
  async asyncData({ error, $apiList }) {
    try {
      let totalNum = 0,
        totalPage = 1,
        search = {
          page: 1,
          size: 42,
        }
      let [allList] = await Promise.all([
        $apiList.home
          .getAllGame({
            origin: process.env.origin,
            ...search,
          })
          .then((res) => {
            totalNum = res.count
            totalPage =
              Math.ceil(totalNum / search.size) === 0
                ? 1
                : Math.ceil(totalNum / search.size)
            return res.list || []
          }),
      ])
      return {
        totalNum,
        totalPage,
        search,
        allList,
      }
    } catch (e) {
      error({ statusCode: e.code, message: e.message })
    }
  },
  computed: {
    ...mapGetters(['getIntersperseUrl']),
  },
  mounted() {
    if (this.$route.query.input) {
      this.searchInput = this.$route.query.input
      this.searchResult()
    }
  },
  methods: {
    searchResult() {
      let regSearch = /^.{2,}$/
      if (!this.searchInput || !regSearch.test(this.searchInput)) {
        this.$store.dispatch('toast', {
          type: 'warning',
          msg: 'Search is required and the length cannot be less than 2',
        })
      } else {
        this.$apiList.home
          .getGameSearch({
            origin: process.env.origin,
            name: this.searchInput,
          })
          .then((res) => {
            this.searchInputResult = this.searchInput
            res &&
              res.map((item) => {
                item.updated = this.$utils.formatPast(
                  item.updated * 1000,
                  'dd AA,YYYY'
                )
              })
            this.gameList = res
          })
          .catch((error) => {
            this.$store.dispatch('toast', {
              type: 'error',
              msg: error.msg,
            })
            this.status = false
          })
      }
    },
    showMoreGame() {
      this.loading = true
      this.status = true
      this.search.page += 1
      this.$apiList.home
        .getAllGame({
          origin: process.env.origin,
          ...this.search,
        })
        .then((res) => {
          res.list &&
            res.list.map((item) => {
              this.allList.push(item)
            })
          this.totalNum = res.count
          this.totalPage =
            Math.ceil(this.totalNum / this.search.size) === 0
              ? 1
              : Math.ceil(this.totalNum / this.search.size)
          this.loading = false
          this.status = false
        })
        .catch((error) => {
          console.log(error)
          this.search.page -= 1
          this.loading = false
          this.status = false
        })
    },
    scrollLoad() {
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      let bodyHeight =
        document.body.scrollHeight || document.documentElement.scrollHeight
      if (scrollTop + window.innerHeight >= bodyHeight - 150) {
        if (this.loading) return
        this.showMoreGame()
      }
    },
  },
  directives: {
    scroll: {
      bind: function (el, binding, vnode) {
        window.addEventListener('scroll', vnode.context.scrollLoad)
      },
      unbind: function (el, binding, vnode) {
        window.removeEventListener('scroll', vnode.context.scrollLoad)
      },
    },
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
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      a {
        font-size: 14px;
        line-height: 18px;
        color: #808191;
        -webkit-transition: color 0.3s;
        transition: color 0.3s;
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
      appearance: none;
      backface-visibility: hidden;
      transform: translate(0, 0, 0);
      -webkit-appearance: none;
      -webkit-backface-visibility: hidden;
      -webkit-transform: translate3d(0, 0, 0);
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
      }
      .loading {
        width: 100%;
        height: 2em;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-top: 20px;
        [class*='loader'] {
          display: inline-block;
          width: 2em;
          height: 2em;
          color: inherit;
          vertical-align: middle;
          pointer-events: none;
        }
        .loader {
          background: #808191;
          position: relative;
          -webkit-animation: loader 1s ease-in-out infinite;
          animation: loader 1s ease-in-out infinite;
          -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
          width: 0.5em;
          height: 1em;
        }
        .loader:before,
        .loader:after {
          content: '';
          position: absolute;
          width: inherit;
          height: inherit;
          background: inherit;
          -webkit-animation: inherit;
          animation: inherit;
        }
        .loader:before {
          right: 1em;
          -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
        }
        .loader:after {
          left: 1em;
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
        }
        @-webkit-keyframes loader {
          0%,
          100% {
            -webkit-box-shadow: 0 0 0 #808191, 0 0 0 #808191;
            box-shadow: 0 0 0 #808191, 0 0 0 #808191;
          }
          50% {
            -webkit-box-shadow: 0 -0.25em 0 #808191, 0 0.25em 0 #808191;
            box-shadow: 0 -0.25em 0 #808191, 0 0.25em 0 #808191;
          }
        }
        @keyframes loader {
          0%,
          100% {
            -webkit-box-shadow: 0 0 0 #808191, 0 0 0 #808191;
            box-shadow: 0 0 0 #808191, 0 0 0 #808191;
          }
          50% {
            -webkit-box-shadow: 0 -0.25em 0 #808191, 0 0.25em 0 #808191;
            box-shadow: 0 -0.25em 0 #808191, 0 0.25em 0 #808191;
          }
        }
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
        border-radius: 23 * $pr;
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
          border-radius: 21 * $pr;
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
        }
        .loading {
          margin-top: 20 * $pr;
        }
      }
    }
  }
}
</style>
