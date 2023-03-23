<template>
  <article class="type">
    <div class="type__main">
      <section class="module">
        <div class="module__top">
          <div class="title">{{ $route.params.title.toLowerCase() }} GAMES</div>
          <div class="category">
            <div class="item">
              <div class="item__left">
                <nuxt-img
                  :src="item.bg_icon"
                  fit="cover"
                  width="96"
                  height="96"
                  :alt="item.name"
                ></nuxt-img>
              </div>
              <div class="item__right">
                <p class="p1">{{ item.name }}</p>
                <p class="p2">{{ item.total }} Games</p>
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
        </div>
        <div class="list">
          <home-hot
            v-for="item in gameList"
            :item="item"
            :key="item.id"
          ></home-hot>
        </div>
      </section>
      <google-auto-ad :id="'2024949372'" classNames="ad" />
      <section class="module">
        <div class="module__top">
          <div class="title">MORE GAMES</div>
        </div>
        <div class="list more">
          <home-hot
            v-for="item in allList"
            :item="item"
            :key="item.id"
          ></home-hot>
        </div>
        <div class="common__loading" v-scroll v-if="search.page < totalPage">
          <div class="common__loading__loader" v-if="loading"></div>
        </div>
      </section>
    </div>
    <lazy-dialog-category
      :category="category"
      :info="item"
      :visible="visible"
      @close="visible = false"
    ></lazy-dialog-category>
  </article>
</template>

<script>
export default {
  name: 'CategoryTitle',
  data() {
    return {
      loading: false,
      status: false,
      visible: false,
    }
  },
  async asyncData({ error, $apiList, params }) {
    try {
      let item = null,
        totalNum = 0,
        totalPage = 1,
        search = {
          page: 1,
          size: 42,
        }
      let [category, gameList, allList] = await Promise.all([
        $apiList.home
          .getCategory({
            origin: process.env.origin,
            page: 1,
            size: 1000,
            rec: true,
          })
          .then((res) => {
            return res || []
          }),
        $apiList.home
          .getGameCategory({
            origin: process.env.origin,
            cate_name: params.title.toLowerCase(),
            size: 2100,
          })
          .then((res) => {
            return res.list || []
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
      item = category.find(
        (el) => el.name.toLowerCase() === params.title.toLowerCase()
      )
      return {
        item,
        totalNum,
        totalPage,
        search,
        category,
        gameList,
        allList,
      }
    } catch (e) {
      error({ statusCode: e.code, message: e.message })
    }
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
      }
      &:first-child {
        padding-top: 34px;
        .module__top {
          .category {
            display: none;
          }
        }
      }
      .common__loading {
        margin-top: 20px;
      }
    }
    .ad {
      margin-top: 30px;
      width: 100%;
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
        }
        &:first-child {
          padding-top: 24 * $pr;
          .module__top {
            height: 60 * $pr;
            .title {
              display: none;
            }
            .category {
              width: 100%;
              height: 100%;
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
                    color: #aaabbd;
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
          }
          .list {
            margin-top: 20 * $pr;
          }
        }
        .common__loading {
          margin-top: 20 * $pr;
        }
      }
      .ad {
        margin-top: 20 * $pr;
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
