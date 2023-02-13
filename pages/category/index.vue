<template>
  <article class="category">
    <div class="category__main">
      <div class="nav">
        <img class="first" src="~/assets/img/game/nav.svg" alt="nav" />
        <a :href="`${getIntersperseUrl}/?from=category`" title="HOME">Home</a>
        <img class="arrow" src="~/assets/img/game/arrow.png" alt="nav" />
        <p class="name">Games categories</p>
      </div>
      <section class="module active">
        <div class="categories">
          <category-classify
            v-for="item in category"
            :item="item"
            :key="item.id"
          ></category-classify>
        </div>
        <div class="categoriesH5">
          <div class="item">
            <div class="item__left">
              <img src="~/assets/img/category/all.png" alt="All Games" />
            </div>
            <div class="item__right">
              <p class="p1">All Games</p>
              <p class="p2">{{ totalNum }} Games</p>
            </div>
          </div>
          <div
            class="item show"
            :class="{ active: visible }"
            @click="visible = true"
          >
            <img
              class="moreImg"
              src="~/assets/img/category/more.png"
              alt="more"
            />
            <span class="text">More</span>
            <img
              class="arrow"
              src="~/assets/img/category/arrow.png"
              alt="arrow"
            />
          </div>
        </div>
      </section>
      <section class="module">
        <div class="module__top">
          <div class="title">ALL GAMES</div>
        </div>
        <div class="list">
          <home-hot
            v-for="item in gameList"
            :item="item"
            :key="item.id"
          ></home-hot>
        </div>
        <div class="loading" v-scroll v-if="search.page < totalPage">
          <div class="loader" v-if="loading"></div>
        </div>
      </section>
    </div>
    <lazy-dialog-category
      :category="category"
      :info="null"
      :visible="visible"
      @close="visible = false"
    ></lazy-dialog-category>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Category',
  data() {
    return {
      loading: false,
      status: false,
      visible: false,
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
      let [category, gameList] = await Promise.all([
        $apiList.home
          .getCategory({
            origin: process.env.origin,
            page: 1,
            size: 1000,
          })
          .then((res) => {
            return res || []
          }),
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
        category,
        totalNum,
        totalPage,
        search,
        gameList,
      }
    } catch (e) {
      error({ statusCode: e.code, message: e.message })
    }
  },
  computed: {
    ...mapGetters(['getIntersperseUrl']),
  },
  methods: {
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
              this.gameList.push(item)
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
.category {
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
    .module {
      padding-top: 60px;
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
      .categories {
        margin-top: 24px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 20px;
      }
      .categoriesH5 {
        display: none;
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
      &.active {
        padding-top: 0;
      }
    }
  }
}
@media (max-width: 1370px) {
  .category {
    &__main {
      padding: 0 30px;
      width: 100%;
      .module {
        .categories {
          grid-template-columns: repeat(4, 1fr);
        }
        .list {
          grid-template-columns: repeat(6, 1fr);
        }
      }
    }
  }
}
@media (max-width: 1104px) {
  .category {
    &__main {
      .module {
        .categories {
          grid-template-columns: repeat(3, 1fr);
        }
        .list {
          grid-template-columns: repeat(5, 1fr);
        }
      }
    }
  }
}
@media (max-width: 890px) {
  .category {
    &__main {
      .module {
        .categories {
          grid-template-columns: repeat(2, 1fr);
        }
        .list {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .category {
    &__main {
      padding: 0 23 * $pr;
      .nav {
        display: none;
      }
      .module {
        padding-top: 0;
        &__top {
          display: none;
        }
        .categories {
          display: none;
        }
        .categoriesH5 {
          margin-top: 24 * $pr;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 10 * $pr;
          .item {
            overflow: hidden;
            appearance: none;
            backface-visibility: hidden;
            transform: translate(0, 0, 0);
            -webkit-appearance: none;
            -webkit-backface-visibility: hidden;
            -webkit-transform: translate3d(0, 0, 0);
            height: 60 * $pr;
            padding: 6 * $pr 0 6 * $pr 6 * $pr;
            border-radius: 12 * $pr;
            background-color: #282a31;
            display: flex;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            cursor: pointer;
            &__left {
              -webkit-flex-shrink: 0;
              flex-shrink: 0;
              width: 48 * $pr;
              border-radius: 8 * $pr;
              height: 100%;
              img {
                border-radius: 8 * $pr;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            &__right {
              -webkit-box-flex: 1;
              -moz-box-flex: 1;
              -webkit-flex: 1;
              -ms-flex: 1;
              flex: 1;
              min-width: 0;
              display: flex;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              padding-left: 11 * $pr;
              padding-top: 11 * $pr;
              .p1 {
                font-size: 10 * $pr;
                line-height: 13 * $pr;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
              .p2 {
                font-size: 10 * $pr;
                line-height: 13 * $pr;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                color: #808191;
              }
            }
            &.show {
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              padding: 0 6 * $pr 0 16 * $pr;
              .moreImg {
                width: 28 * $pr;
                height: 28 * $pr;
              }
              .text {
                margin: 2 * $pr 37 * $pr 0 16 * $pr;
                font-size: 16 * $pr;
                line-height: 1;
              }
              .arrow {
                width: 10 * $pr;
                -webkit-transition: -webkit-transform 0.3s;
                transition: transform 0.3s;
              }
              &.active {
                .arrow {
                  -webkit-transform: rotate(180deg);
                  transform: rotate(180deg);
                }
              }
            }
          }
        }
        .list {
          margin-top: 20 * $pr;
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
