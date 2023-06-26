<template>
  <div class="pop_maximum">
    <div class="pop_main">
      <h3 :class="{ h5_size: $route.path !== '/' }">Popular Articles</h3>
      <div class="pop_news">
        <div class="news_left">
          <a
            :href="`${getIntersperseUrl}/resources/details/${getHomeNewsData[0]?.name
              .trim()
              .replace(/[^\w\d]/g, '-')
              .toLowerCase()}-${getHomeNewsData[0]?.id}/${getCurrentRoute}`"
          >
            <div class="left_img">
              <nuxt-img
                :src="getHomeNewsData[0]?.icon || '/'"
                fit="cover"
                width="691"
                height="320"
                :alt="getHomeNewsData[0]?.name"
              ></nuxt-img>
            </div>
            <div class="news_left_text">
              <div class="text_cont">
                <p class="cont_title">{{ getHomeNewsData[0]?.name }}</p>
                <p class="cont_more" v-html="getHomeNewsData[0]?.text"></p>
              </div>
              <div class="text_time">
                {{ $utils.formatMMDD(getHomeNewsData[0]?.created_at) }}
              </div>
            </div>
          </a>
        </div>
        <ul class="news_right">
          <li v-for="(item, index) in normalList" :key="index">
            <a
              class="resources_main_top_left"
              :href="`${getIntersperseUrl}/resources/details/${item.name
                .trim()
                .replace(/[^\w\d]/g, '-')
                .toLowerCase()}-${item.id}/${getCurrentRoute}`"
            >
              <div class="news_right_img">
                <nuxt-img
                  :src="item.icon || '/'"
                  fit="cover"
                  width="118"
                  height="96"
                  :alt="item.name"
                ></nuxt-img>
              </div>
              <div class="news_right_text">
                <p>{{ item.name }}</p>
                <p v-if="item.kind == 0" v-html="item.text"></p>
              </div>
              <div class="news_right_time">
                {{ $utils.formatMMDD(item.created_at) }}
              </div>
            </a>
          </li>
        </ul>
      </div>
      <button class="button" @click="pathToPage">Read More</button>
      <img class="bg_main" src="~/assets/img/home/pop_bg.png" alt="#" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PopArticles',
  props: ['homeNews'],
  data() {
    return {
      getHomeNewsData: [],
    }
  },
  async fetch() {
    let [getHomeNewsData] = await Promise.all([
      this.$apiList.articles
        .getNewsRec({
          origin: process.env.origin,
        })
        .then((res) => {
          return res.slice(0, 5) || []
        }),
    ])
    this.getHomeNewsData = getHomeNewsData
  },
  computed: {
    normalList() {
      return this.getHomeNewsData?.filter((_, index) => index !== 0)
    },
    ...mapGetters(['getIntersperseUrl']),
    getCurrentRoute() {
      return this.$route.path === '/' ? '?from=home' : ''
    },
  },
  methods: {
    pathToPage() {
      window.location =
        window.location.pathname === '/'
          ? '/resources/?from=home'
          : '/resources/'
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.pop_maximum {
  width: 1400px;
  margin: 96px auto 0;
  .pop_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .bg_main {
      position: absolute;
      top: -80px;
      left: -157px;
      width: 438px;
      height: 438px;
      z-index: -1;
    }
    h3 {
      font-family: 'Cinzel Decorative';
      font-weight: 700;
      font-size: 46px;
      line-height: 64px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }
    .pop_news {
      flex: 1;
      width: 100%;
      padding: 48px 0 36px;
      display: flex;
      .news_left {
        width: 691px;
        height: 100%;
        margin-right: 32px;
        cursor: pointer;
        transition: background-color 0.3s;
        .left_img {
          width: 100%;
          min-height: 320px;
          margin-bottom: 16px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        &_text {
          display: flex;
          align-items: center;
          .text_cont {
            flex: 1;
            font-family: 'Rubik';
            padding-right: 50px;
            .cont_title {
              font-size: 22px;
              line-height: 30px;
              color: #ffffff;
            }
            .cont_more {
              font-size: 14px;
              line-height: 18px;
              color: rgba(255, 255, 255, 0.85);
              margin: 8px 0;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            a {
              font-family: 'Rubik';
              font-size: 14px;
              line-height: 18px;
              color: #9747ff;
            }
          }
          .text_time {
            width: 65px;
            font-family: 'Rubik';
            font-size: 22px;
            line-height: 30px;
            color: #ffffff;
          }
        }
        &:hover {
          background-color: rgba(255, 255, 255, 0.08);
        }
      }
      .news_right {
        flex: 1;
        width: 100%;
        & > :last-child {
          margin-bottom: 0;
        }
        li {
          width: 100%;
          margin-bottom: 16px;
          transition: background-color 0.3s;
          a {
            width: 100%;
            height: 96px;
            display: flex;
            justify-content: space-between;
            .news_right_img {
              width: 118px;
              height: 100%;
              margin-right: 16px;
              box-sizing: border-box;
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }

            .news_right_text {
              width: 424px;
              font-family: 'Rubik';
              padding: 8px 0 0;
              & > :nth-child(1) {
                font-size: 22px;
                line-height: 30px;
                color: #ffffff;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
              }
              & > :nth-child(2) {
                font-size: 16px;
                line-height: 22px;
                margin-top: 8px;
                color: rgba(255, 255, 255, 0.85);
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
            }

            .news_right_time {
              margin-left: auto;
              font-family: 'Rubik';
              font-size: 16px;
              line-height: 22px;
              color: #ffffff;
              padding: 6px 10px 0 0;
            }
          }
          &:hover {
            background-color: rgba(255, 255, 255, 0.08);
          }
        }
      }
    }
    .button {
      width: 220px;
      height: 44px;
      border: 1px solid #45454d;
      border-radius: 42px;
      font-family: 'Rubik';
      color: rgba(255, 255, 255, 0.85);
      font-size: 16px;
      line-height: 22px;
      -webkit-transition: background-color 0.3s, -webkit-color 0.3s;
      transition: background-color 0.3s, color 0.3s;
      &:hover {
        color: #000;
        background-color: #fff;
      }
    }
  }
}

@media (max-width: 1435px) {
  .pop_maximum {
    width: 1200px;
  }
}

@media (max-width: 1250px) {
  .pop_maximum {
    width: 100%;
    padding: 0 30px;
    .pop_main {
      .pop_news {
        padding: 48px 30px 36px;
        .news_left {
          flex: 1;
          width: auto;
          margin-right: 16px;
          .left_img {
            min-height: auto;
          }
        }
        .news_right {
          li {
            a {
              height: auto;
              .news_right_img {
                width: 95px;
              }

              .news_right_text {
                width: auto;
                flex: 1;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .pop_maximum {
    width: 1000px;
  }
}

@media (max-width: (1024px)) {
  .pop_maximum {
    width: 100%;
    margin: 80px auto 0;
  }
}

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .pop_maximum {
    margin: 48 * $pr auto 0;
    padding: 0 16 * $pr;
    .pop_main {
      .bg_main {
        position: absolute;
        top: 0;
        left: -50 * $pr;
        width: 290 * $pr;
        height: 290 * $pr;
        z-index: -1;
      }
      h3 {
        font-size: 36 * $pr;
        line-height: 48 * $pr;
      }
      .h5_size {
        font-size: 26 * $pr;
        line-height: 36 * $pr;
      }
      .pop_news {
        flex: 1;
        width: 100%;
        padding: 16 * $pr 0 0;
        display: block;
        .news_left {
          width: 100%;
          height: 100%;
          margin-right: 0;
          .left_img {
            width: 100%;
            min-height: 159 * $pr;
            margin-bottom: 16 * $pr;
            img {
              width: 100%;
              height: 100%;
            }
          }
          &_text {
            position: relative;
            .text_cont {
              flex: 1;
              padding-right: 0;
              .cont_title {
                font-size: 22 * $pr;
                line-height: 30 * $pr;
                color: #ffffff;
              }
              .cont_more {
                font-size: 14 * $pr;
                line-height: 18 * $pr;
                margin: 8 * $pr 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
              }
              a {
                font-size: 14 * $pr;
                line-height: 18 * $pr;
              }
            }
            .text_time {
              display: none;
              position: absolute;
              top: 10 * $pr;
              right: 0;
              width: 40 * $pr;
              font-size: 14 * $pr;
              line-height: 18 * $pr;
              color: rgba(255, 255, 255, 0.85);
            }
          }
        }
        .news_right {
          flex: 1;
          width: 100%;
          margin: 32 * $pr 0;
          & > :last-child {
            margin-bottom: 0;
          }
          li {
            width: 100%;
            margin-bottom: 24 * $pr;
            transition: background-color 0.3s;
            a {
              width: 100%;
              height: 62 * $pr;
              display: flex;
              justify-content: space-between;
              .news_right_img {
                width: 107 * $pr;
                height: 62 * $pr;
                margin-right: 11 * $pr;
                box-sizing: border-box;
                img {
                  width: 100%;
                  height: 100%;
                }
              }

              .news_right_text {
                width: auto;
                flex: 1;
                margin: 0;
                padding: 0;
                & > :nth-child(1) {
                  font-size: 14 * $pr;
                  line-height: 18 * $pr;
                  //   padding-right: 30 * $pr;
                }
                & > :nth-child(2) {
                  font-size: 12 * $pr;
                  line-height: 16 * $pr;
                  margin-top: 8 * $pr;
                }
              }

              .news_right_time {
                display: none;
                position: absolute;
                margin-left: 0;
                right: 0;
                font-family: 'Rubik';
                font-size: 12 * $pr;
                line-height: 16 * $pr;
                color: rgba(255, 255, 255, 0.85);
                padding: 0;
              }
            }
            &:hover {
              background-color: rgba(255, 255, 255, 0.08);
              .news_right_img {
                img {
                  filter: grayscale(0);
                }
              }
            }
          }
        }
      }
      .button {
        width: 295 * $pr;
        height: 44 * $pr;
        border-radius: 42 * $pr;
        font-size: 16 * $pr;
        line-height: 22 * $pr;
        background: #fff;
        color: #000;
      }
    }
  }
}
</style>
