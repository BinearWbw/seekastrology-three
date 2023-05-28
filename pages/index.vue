<template>
  <article class="home">
    <div class="home__main">
      <section class="various_ment">
        <home-various></home-various>
      </section>
      <section class="module choice">
        <home-your-choice></home-your-choice>
        <div class="google_ad">AD</div>
      </section>
      <section class="module tarot">
        <home-tarot></home-tarot>
      </section>
      <section class="module quizzes">
        <home-quizzes></home-quizzes>
      </section>
      <section class="module kundli">
        <home-kundli></home-kundli>
        <div class="google_ad">AD</div>
      </section>
      <section class="module new_pop">
        <home-pop-articles></home-pop-articles>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Home',
  computed: {},
  methods: {},
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.home {
  &__main {
    margin: 0 auto;
    width: 1400px;
    position: relative;
    .various_ment {
      margin-top: 100px;
    }
    .module {
      margin-top: 100px;

      .google_ad {
        width: 924px;
        max-height: 114px;
        height: 114px;
        background-color: #555761;
        color: #808080;
      }
      &.choice {
        .google_ad {
          margin: 40px auto 0;
        }
      }
      &.kundli {
        .google_ad {
          margin: 80px auto 0;
        }
      }
      &.new_pop {
        margin-top: 80px;
      }
    }
  }
}
@media (max-width: 1370px) {
  .home {
    &__main {
      padding: 0 30px;
      width: 100%;
      .module {
      }
    }
  }
}
@media (max-width: 1154px) {
  .home {
    &__main {
    }
  }
}
@media (max-width: 1104px) {
  .home {
    &__main {
      .module {
        &.best {
          .list1 {
            :deep(.item:nth-child(6)) {
              display: none;
            }
          }
          .list2 {
            grid-template-columns: repeat(3, 1fr);
            :deep(.item:nth-child(n + 7)) {
              display: none;
            }
          }
        }
        &.latest {
          .list {
            grid-template-columns: repeat(8, 1fr);
            :deep(.item:nth-child(n + 17)) {
              display: none;
            }
          }
        }
        &.hot {
          .list {
            grid-template-columns: repeat(5, 1fr);
          }
        }
      }
    }
  }
}
@media (max-width: 890px) {
  .home {
    &__main {
      .module {
        &.best {
          .list1 {
            :deep(.item:nth-child(5)) {
              display: none;
            }
          }
          .list2 {
            grid-template-columns: repeat(2, 1fr);
            :deep(.item:nth-child(n + 5)) {
              display: none;
            }
          }
        }
        &.latest {
          .list {
            grid-template-columns: repeat(6, 1fr);
            :deep(.item:nth-child(n + 13)) {
              display: none;
            }
          }
        }
        &.hot {
          .list {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      }
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .home {
    &__main {
      padding: 0 10 * $pr;
      .rec {
        height: auto;
        padding: 26 * $pr 13 * $pr;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        gap: 0;
        &__item {
          -webkit-flex-shrink: 0;
          flex-shrink: 0;
          width: 156 * $pr;
          height: 169 * $pr;
          border-radius: 13 * $pr;
          .bg {
            border-radius: 13 * $pr;
          }
          .info {
            height: 70 * $pr;
            border-radius: 0 0 13 * $pr 13 * $pr;
            backdrop-filter: blur(10 * $pr);
            -webkit-backdrop-filter: blur(10 * $pr);
            &__bottom {
              margin-top: 3 * $pr;
              .category {
                border-radius: 13 * $pr;
                padding: 0 7 * $pr;
                height: 15 * $pr;
                line-height: 17 * $pr;
                font-size: 9 * $pr;
              }
              .company {
                margin-top: 6 * $pr;
                font-size: 12 * $pr;
                line-height: 15 * $pr;
              }
            }
          }
        }
        .rec1 {
          display: none;
        }
        .rec2 {
          width: 100%;
          height: 235 * $pr;
          .info {
            padding-top: 22 * $pr;
            padding-left: 17 * $pr;
            height: 81 * $pr;
            &__title {
              font-size: 16 * $pr;
              line-height: 16 * $pr;
            }
            &__bottom {
              margin-top: 8 * $pr;
              .category {
                height: 16 * $pr;
                line-height: 16 * $pr;
                padding: 0 9 * $pr;
              }
              .company {
                margin-left: 9 * $pr;
                font-size: 12 * $pr;
                line-height: 18 * $pr;
              }
            }
          }
        }
        .rec3,
        .rec4 {
          margin-top: 15 * $pr;
          .info {
            padding-top: 6 * $pr;
            padding-left: 12 * $pr;
            height: 70 * $pr;
            &__title {
              font-size: 11 * $pr;
              line-height: 15 * $pr;
            }
          }
        }
      }
      .module {
        &__top {
          height: 41 * $pr;
          .title {
            font-size: 34 * $pr;
            line-height: 41 * $pr;
          }
          .more {
            margin-top: 8 * $pr;
            font-size: 22 * $pr;
            line-height: 26 * $pr;
          }
        }
        &.best {
          padding: 0 13 * $pr;
          .list1 {
            margin-top: 24 * $pr;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            gap: 0;
            :deep(.item:nth-child(5)) {
              display: block;
            }
            :deep(.item:nth-child(6)) {
              display: block;
            }
            :deep(.item:nth-child(n + 4)) {
              margin-top: 34 * $pr;
            }
          }
          .list2 {
            margin-top: 28 * $pr;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 20 * $pr 0;
            :deep(.item:nth-child(n + 3)) {
              display: none;
            }
          }
        }
        &.latest {
          margin-top: 40 * $pr;
          .module__top {
            padding: 0 13 * $pr;
          }
          .list {
            margin-top: 15 * $pr;
            border-radius: 16 * $pr;
            padding: 35 * $pr 17 * $pr 32 * $pr;
            grid-template-rows: repeat(3, 1fr);
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 28 * $pr 30 * $pr;
            :deep(.item:nth-child(n + 10)) {
              display: none;
            }
          }
        }
        &.hot {
          margin-top: 40 * $pr;
          padding: 0 13 * $pr;
          .list {
            margin-top: 15 * $pr;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 14 * $pr 12 * $pr;
          }
        }
      }
    }
  }
}
</style>
