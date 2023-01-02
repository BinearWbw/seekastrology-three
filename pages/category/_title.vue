<template>
  <article class="type">
    <div class="type__main">
      <section class="module">
        <div class="module__top">
          <div class="title">{{ $route.params.title.toLowerCase() }} GAMES</div>
          <div class="category">
            <div class="item">
              <div class="item__left">
                <img
                  v-lazy="$config.imgUrl + item.bg_icon"
                  :key="item.bg_icon"
                  :alt="item.name"
                />
              </div>
              <div class="item__right">
                <p class="p1">{{ item.name }}</p>
                <p class="p2">48 Games</p>
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
        <div class="list more">
          <home-hot
            v-for="item in recommendList.slice(0, 21)"
            :item="item"
            :key="item.id"
          ></home-hot>
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
      visible: false,
    }
  },
  async asyncData({ error, $apiList, params }) {
    try {
      let item = null
      let [category, gameList, recommendList] = await Promise.all([
        $apiList.home
          .getCategory({
            page: 1,
            size: 10000,
          })
          .then((res) => {
            return res || []
          }),
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
      item = category.find(
        (el) => el.name.toLowerCase() === params.title.toLowerCase()
      )
      return {
        item,
        category,
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
        .module__top {
          .category {
            display: none;
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
      .module {
        .list {
          grid-template-columns: repeat(6, 1fr);
        }
        .more {
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
      .module {
        .list {
          grid-template-columns: repeat(5, 1fr);
        }
        .more {
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
      .module {
        .list {
          grid-template-columns: repeat(4, 1fr);
        }
        .more {
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
      padding: 0 23 * $pr;
      .module {
        padding-top: 40 * $pr;
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
        .more {
          :deep(.item:nth-last-child(13) ~ .item) {
            display: none;
          }
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
                height: 60 * $pr;
                padding: 6 * $pr 0 6 * $pr 6 * $pr;
                border-radius: 12 * $pr;
                background-color: #282a31;
                display: flex;
                cursor: pointer;
                &__left {
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
                  flex: 1;
                  min-width: 0;
                  display: flex;
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
                    -webkit-transition-duration: 0.3s;
                    transition-duration: 0.3s;
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
      }
    }
  }
}
</style>
