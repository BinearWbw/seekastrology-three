<template>
  <transition name="fade">
    <aside class="search" v-if="getVisibleSearch">
      <div class="search__mask" @click="closeVisibleMain"></div>
      <transition name="slide" @leave="leave">
        <div class="search__main" v-if="visibleMain">
          <div class="top">
            <div class="top__main">
              <input
                type="text"
                v-model="name"
                @input="searchGame"
                placeholder="What are you playing today?"
              />
              <div class="btn">
                <button class="common-btn" v-if="loading" key="loading">
                  <div class="loading"></div>
                  <span>Loading</span>
                </button>
                <button class="common-btn" v-else-if="name === ''" key="search">
                  <img src="~/assets/img/header/iconSearch.png" alt="search" />
                  <span>Search</span>
                  <span class="italic">!!</span>
                </button>
                <button
                  class="common-btn"
                  v-else
                  @click="clearInput"
                  key="clear"
                >
                  <img src="~/assets/img/search/clear.png" alt="search" />
                  <span>Clear</span>
                </button>
              </div>
            </div>
            <button class="top__return common-btn" @click="closeVisibleMain">
              <img src="~/assets/img/search/return.png" alt="return" />
            </button>
          </div>
          <div class="bottom">
            <div class="category">
              <ul class="list" v-dragscroll.x="true">
                <li
                  class="list__li common-btn"
                  :class="{ active: category.type == item.id }"
                  v-for="(item, index) in categoryList"
                  :key="index"
                  @click="searchCategory(item)"
                >
                  {{ item.name.name }}
                </li>
              </ul>
            </div>
            <div class="area" v-dragscroll.y="true">
              <div class="game" v-if="gameList.length > 0">
                <div class="game__list">
                  <common-normal
                    class="search__normal"
                    v-for="item in gameList"
                    :item="item"
                    :key="item.id"
                  ></common-normal>
                </div>
              </div>
              <template v-else>
                <div class="game">
                  <div
                    class="game__none"
                    v-if="
                      (!gameList.length && name !== '') ||
                      (!gameList.length && category.type !== '')
                    "
                  >
                    <h1>Hmm, nothing’s coming up for that.</h1>
                    <p>Try searching for something else?</p>
                  </div>
                  <p class="game__title">Popular Gsmes</p>
                  <div class="game__list">
                    <common-normal
                      class="search__normal"
                      v-for="item in popularList"
                      :item="item"
                      :key="item.id"
                    ></common-normal>
                  </div>
                </div>
                <div class="game active">
                  <p class="game__title">My Favorite Games</p>
                  <div class="game__list">
                    <common-normal
                      class="search__normal"
                      v-for="item in favoriteList"
                      :item="item"
                      :key="item.id"
                    ></common-normal>
                  </div>
                </div>
              </template>
            </div>
            <div class="subscription">
              <p class="subscription__title">Subscription</p>
              <p class="subscription__text">
                I would like to receive email notifications when new games are
                published.
              </p>
              <div class="subscription__handle">
                <input
                  type="text"
                  v-model="email"
                  placeholder="Email address..."
                />
                <button
                  class="common-btn"
                  @click="!status && subscribeEmaill()"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div class="follow">
              <p class="follow__title">Follow Us</p>
              <div class="follow__list">
                <a href="/">
                  <img src="~/assets/img/search/facebook.png" alt="facebook" />
                </a>
                <a href="/">
                  <img
                    src="~/assets/img/search/instagram.png"
                    alt="instagram"
                  />
                </a>
                <a href="/">
                  <img src="~/assets/img/search/youtube.png" alt="youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </aside>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DialogSearch',
  computed: {
    ...mapGetters(['getVisibleSearch']),
  },
  data() {
    return {
      loading: false,
      status: false,
      name: '',
      category: {
        type: '',
        label: '',
      },
      email: '',
      visibleMain: false,
      gameList: [],
      categoryList: [],
      popularList: [],
      favoriteList: [],
    }
  },
  watch: {
    getVisibleSearch(val) {
      if (val) {
        this.getCategory()
        this.getGameFavorite()
        this.getGamePopular()
        let bodyStyle = document.body.style
        bodyStyle.overflow = 'hidden'
        this.$nextTick(() => {
          this.visibleMain = val
        })
      } else {
        let bodyStyle = document.body.style
        bodyStyle.overflow = ''
      }
    },
  },
  methods: {
    clearInput() {
      this.name = ''
      this.gameList = []
    },
    getCategory() {
      if (!this.categoryList.length) {
        this.$apiList.home
          .getCategory({ page: 1, size: 10000 })
          .then((res) => {
            res.map((item) => {
              item.name = JSON.parse(item.name)
              item.name.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${item.name.icon}`
            })
            this.categoryList = res || []
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    getGameFavorite() {
      this.$apiList.home
        .getGameFavorite({ origin: process.env.origin })
        .then((res) => {
          res.favorite.map((item) => {
            item.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${item.icon}`
          })
          this.favoriteList = res.favorite
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getGamePopular() {
      let data = {
        origin: process.env.origin,
        page: 1,
        size: 12,
      }
      this.$apiList.home
        .getGameNew(data)
        .then((res) => {
          res.list.map((item) => {
            item.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${item.icon}`
          })
          this.popularList = res.list.slice(0, 12)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    searchGame() {
      this.category.type = ''
      this.category.label = ''
      this.loading = true
      this.$apiList.home
        .getGameSearch({ origin: process.env.origin, name: this.name })
        .then((res) => {
          res.map((item) => {
            item.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${item.icon}`
          })
          this.gameList = res
          this.loading = false
        })
        .catch((error) => {
          this.$store.dispatch('toast', {
            type: 'error',
            msg: error.msg,
          })
          this.loading = false
        })
    },
    searchCategory(item) {
      this.name = ''
      if (item.id == this.category.type) {
        this.category.type = ''
        this.category.label = ''
        this.gameList = []
      } else {
        this.category.type = item.id
        this.category.label = item.name.id
        this.$apiList.home
          .getGameCategory({
            origin: process.env.origin,
            type: item.id,
            label: item.name.id,
          })
          .then((res) => {
            res.list.map((item) => {
              item.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${item.icon}`
            })
            this.gameList = res.list
          })
          .catch((error) => {
            this.$store.dispatch('toast', {
              type: 'error',
              msg: error.msg,
            })
          })
      }
    },
    subscribeEmaill() {
      if (
        this.email.search(
          /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
        ) != -1
      ) {
        this.status = true
        let data = {
          email: this.email,
          origin: process.env.origin,
        }
        this.$apiList.home
          .postSubscribe(data)
          .then(() => {
            this.$store.dispatch('toast', {
              type: 'success',
              msg: 'Subscribed email successfully',
            })
            this.status = false
          })
          .catch((error) => {
            this.$store.dispatch('toast', {
              type: 'error',
              msg: error.msg,
            })
            this.status = false
          })
      } else {
        this.$store.dispatch('toast', {
          type: 'warning',
          msg: 'Please enter the correct email address',
        })
      }
    },
    closeVisibleMain() {
      this.visibleMain = false
    },
    leave() {
      this.$store.commit('UPDATE_VISIBLE_SEARCH', false)
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.search {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 7;
  &__mask {
    background-color: rgba(25, 20, 44, 0.8);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(27, 23, 43, 0.8);
    }
  }
  &__main {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    width: 688px;
    height: 100%;
    background-color: #3c2c6d;
    .top {
      position: absolute;
      left: 0;
      top: 30px;
      z-index: 2;
      width: 100%;
      height: 64px;
      padding-right: 28px;
      padding-left: 48px;
      flex-shrink: 0;
      &__main {
        width: 100%;
        height: 100%;
        background-color: #19142c;
        border-radius: 24px;
        position: relative;
        input {
          width: 100%;
          height: 100%;
          font-family: Heebo-Regular;
          font-size: 16px;
          color: #ae96ff;
          padding-left: 24px;
          padding-right: 186px;
        }
        .btn {
          position: absolute;
          top: 3px;
          right: 3px;
          width: 159px;
          height: 58px;
          overflow: hidden;
        }
        button {
          width: 100%;
          height: 100%;
          background-color: #ef2391;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 24px;
            height: 24px;
          }
          span {
            margin-left: 20px;
            margin-top: 4px;
            line-height: 1;
            font-size: 20px;
            font-family: Heebo-Bold;
            &.italic {
              margin-left: 0;
              font-style: italic;
            }
          }
        }
        .loading {
          border-radius: 50%;
          width: 24px;
          height: 24px;
          border: 0.25rem solid rgba(255, 255, 255, 0.2);
          border-top-color: #fff;
          animation: loading 0.3s infinite linear;
          -webkit-animation: loading 0.3s infinite linear;
        }
      }
      &__return {
        position: absolute;
        left: -32px;
        top: 0;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-color: #fff;
        img {
          width: 13px;
          height: 20px;
        }
      }
    }
    .bottom {
      padding: 110px 0 48px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .category {
        width: 100%;
        height: 36px;
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
        &::before {
          content: '';
          position: absolute;
          top: 0px;
          left: 0px;
          width: 20px;
          height: 100%;
          background: linear-gradient(
            270deg,
            rgba(131, 255, 231, 0) 0%,
            rgb(60 44 109) 100%
          );
          pointer-events: none;
          z-index: 1;
        }
        &::after {
          content: '';
          position: absolute;
          top: 0px;
          right: 0px;
          width: 120px;
          height: 100%;
          background: linear-gradient(
            270deg,
            rgb(60 44 109) 20%,
            rgba(131, 255, 231, 0) 50%
          );
          pointer-events: none;
        }
        .list {
          height: 100%;
          width: 100%;
          padding: 0 30px;
          display: flex;
          overflow: hidden;
          cursor: -webkit-grab;
          cursor: -moz-grab;
          cursor: -o-grab;
          cursor: grab;
          &__li {
            flex-shrink: 0;
            margin-right: 20px;
            padding: 0 24px;
            height: 36px;
            background-color: #23194b;
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Heebo-Medium;
            font-size: 12px;
            color: #ae96ff;
            cursor: pointer;
            -webkit-transition: color 0.3s var(--cubic-bezier),
              background-color 0.3s var(--cubic-bezier),
              -webkit-transform 0.3s var(--cubic-bezier);
            -webkit-transition: color 0.3s var(--cubic-bezier),
              background-color 0.3s var(--cubic-bezier),
              transform 0.3s var(--cubic-bezier);
            transition: color 0.3s var(--cubic-bezier),
              background-color 0.3s var(--cubic-bezier),
              transform 0.3s var(--cubic-bezier);
            line-height: 1;
            &:last-child {
              margin-right: 0;
            }
            &.active {
              background-color: #7a2ce5;
              color: #fff;
            }
          }
        }
      }
      .area {
        padding-top: 36px;
        padding-bottom: 36px;
        width: 100%;
        flex: 1;
        min-height: 0;
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
        overflow-y: auto;
        .game {
          width: 100%;
          padding-bottom: 36px;
          &__title {
            padding-left: 30px;
            margin-bottom: 18px;
            font-family: Heebo-Bold;
            font-size: 20px;
            line-height: 1;
          }
          &__none {
            width: calc(100% - 76px);
            background: #19142c;
            padding: 18px 24px;
            color: #ae96ff;
            margin-left: 48px;
            margin-bottom: 36px;
            border-radius: 24px;
            h1 {
              font-size: 24px;
            }
            p {
              font-size: 16px;
            }
          }
          &__list {
            display: grid;
            grid-auto-flow: dense;
            justify-content: center;
            grid-template-columns: repeat(6, 94px);
            grid-gap: 16px;
            .search__normal {
              height: 94px !important;
              :deep(.normal__span) {
                font-size: 12px;
                line-height: 16px;
              }
            }
          }
          &:last-child {
            padding-bottom: 0;
          }
        }
        &::-webkit-scrollbar {
          width: 0;
        }
      }
      .subscription {
        padding-left: 30px;
        padding-right: 30px;
        width: 100%;
        margin-top: auto;
        flex-shrink: 0;
        &__title {
          font-family: Heebo-Bold;
          font-size: 20px;
          line-height: 1;
        }
        &__text {
          margin-top: 8px;
          font-family: Heebo-Regular;
          font-size: 16px;
          line-height: 30px;
          color: #ae96ff;
        }
        &__handle {
          margin-top: 20px;
          height: 64px;
          display: flex;
          justify-content: space-between;
          input {
            flex: 1;
            min-width: 0;
            height: 100%;
            background-color: #23194b;
            border-radius: 24px;
            font-family: Heebo-Regular;
            font-size: 16px;
            color: #ae96ff;
            padding: 0 24px;
          }
          button {
            flex-shrink: 0;
            margin-left: 10px;
            width: 146px;
            height: 100%;
            background-color: #7a2ce5;
            border-radius: 24px;
            font-family: Heebo-Regular;
            font-size: 16px;
            color: #ffffff;
          }
        }
      }
      .follow {
        margin-top: 60px;
        padding-left: 30px;
        padding-right: 30px;
        width: 100%;
        flex-shrink: 0;
        &__title {
          font-family: Heebo-Bold;
          font-size: 20px;
          line-height: 1;
        }
        &__list {
          margin-top: 30px;
          display: flex;
          align-items: center;
          height: 46px;
          a {
            height: 100%;
            margin-right: 30px;
            img {
              height: 100%;
            }
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 828px) {
  $pr: math.div(1vw, 8.28);
  .search {
    &__main {
      width: 100%;
      .top {
        top: 30 * $pr;
        height: 64 * $pr;
        padding-right: 28 * $pr;
        padding-left: 112 * $pr;
        &__main {
          border-radius: 24 * $pr;
          input {
            font-size: 16 * $pr;
            padding-left: 24 * $pr;
            padding-right: 217 * $pr;
          }
          .btn {
            top: 3 * $pr;
            right: 3 * $pr;
            width: 190 * $pr;
            height: 58 * $pr;
          }
          button {
            border-radius: 22 * $pr;
            img {
              width: 24 * $pr;
              height: 24 * $pr;
            }
            span {
              margin-left: 20 * $pr;
              margin-top: 4 * $pr;
              font-size: 20 * $pr;
            }
          }
          .loading {
            width: 24 * $pr;
            height: 24 * $pr;
          }
        }
        &__return {
          left: 32 * $pr;
          width: 64 * $pr;
          height: 64 * $pr;
          img {
            width: 13 * $pr;
            height: 20 * $pr;
          }
        }
      }
      .bottom {
        padding: 124 * $pr 0 30 * $pr;
        .category {
          height: 48 * $pr;
          &::before {
            width: 20 * $pr;
          }
          &::after {
            width: 120 * $pr;
          }
          .list {
            padding: 0 30 * $pr;
            &__li {
              margin-right: 20 * $pr;
              padding: 0 35 * $pr;
              height: 48 * $pr;
              border-radius: 24 * $pr;
            }
          }
        }
        .area {
          padding-top: 30 * $pr;
          padding-bottom: 30 * $pr;
          .game {
            padding-bottom: 30 * $pr;
            &__title {
              padding-left: 30 * $pr;
              margin-bottom: 20 * $pr;
              font-size: 32 * $pr;
            }
            &__none {
              width: 100%;
              padding: 30 * $pr;
              margin-left: 0;
              margin-bottom: 40 * $pr;
              border-radius: 0;
              h1 {
                font-size: 32 * $pr;
              }
              p {
                font-size: 24 * $pr;
              }
            }
            &__list {
              grid-template-columns: repeat(4, 176 * $pr);
              grid-gap: 16 * $pr;
              .search__normal {
                height: 176 * $pr !important;
                :deep(.normal__span) {
                  font-size: 16 * $pr;
                  line-height: 24 * $pr;
                }
              }
            }
          }
        }
        .subscription {
          padding-left: 30 * $pr;
          padding-right: 30 * $pr;
          &__title {
            font-size: 32 * $pr;
          }
          &__text {
            margin-top: 12 * $pr;
            font-size: 24 * $pr;
            line-height: 36 * $pr;
          }
          &__handle {
            margin-top: 12 * $pr;
            height: 74 * $pr;
            input {
              border-radius: 24 * $pr;
              font-size: 24 * $pr;
              padding: 0 24 * $pr;
            }
            button {
              margin-left: 10 * $pr;
              width: 180 * $pr;
              height: 100%;
              border-radius: 24 * $pr;
              font-size: 24 * $pr;
            }
          }
        }
        .follow {
          margin-top: 30 * $pr;
          padding-left: 30 * $pr;
          padding-right: 30 * $pr;
          &__title {
            font-size: 32 * $pr;
          }
          &__list {
            margin-top: 12 * $pr;
            height: 46 * $pr;
            a {
              margin-right: 30 * $pr;
            }
          }
        }
      }
    }
  }
}
</style>
