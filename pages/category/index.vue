<template>
  <article class="category">
    <div class="category__main">
      <div class="nav">
        <img class="first" src="~/assets/img/game/nav.svg" alt="nav" />
        <a href="/" title="HOME">Home</a>
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
  name: 'Category',
  async asyncData({ error, $apiList }) {
    try {
      let [category, recommendList] = await Promise.all([
        $apiList.home
          .getCategory({
            page: 1,
            size: 10000,
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
        category,
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
    .module {
      padding-top: 60px;
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
      .categories {
        margin-top: 24px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 20px;
      }
      .list {
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-gap: 30px;
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
          :deep(.item:nth-last-child(4) ~ .item) {
            display: none;
          }
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
          :deep(.item:nth-last-child(7) ~ .item) {
            display: none;
          }
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
  .category {
    &__main {
      padding: 0 23 * $pr;
      .nav {
        display: none;
      }
      .module {
        padding-top: 40 * $pr;
        &__top {
          height: 41 * $pr;
          .title {
            font-size: 34 * $pr;
            line-height: 41 * $pr;
          }
        }
        .categories {
          margin-top: 24 * $pr;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 10 * $pr;
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
