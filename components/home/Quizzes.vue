<template>
  <div class="quizzes_own">
    <div class="quizzes">
      <h3 :class="{ h5_size: $route.path !== '/' }">pOPULAR qUIZZES</h3>
      <div class="quizzes_sliding">
        <div class="banner banner_left">
          <button class="banner_prev"></button>
        </div>
        <div class="swiper_list">
          <swiper class="swiper" :options="swiperOptions">
            <swiper-slide
              class="swiper__item"
              v-for="item of homeQuizzesData"
              :key="item.id"
            >
              <a
                :href="`${getIntersperseUrl}/test/details/${item.name
                  .trim()
                  .replace(/[^\w\d]/g, '-')
                  .toLowerCase()}-${item.id}/${getCurrentRoute}`"
              >
                <div class="banner_img">
                  <nuxt-img
                    :src="item.icon || '/'"
                    fit="cover"
                    width="220"
                    height="220"
                    :alt="item.name"
                  ></nuxt-img>
                </div>
                <p>{{ item.name }}</p>
              </a>
            </swiper-slide>
          </swiper>
          <div class="swiper_pagination"></div>
        </div>
        <div class="banner banner_right">
          <button class="banner_next"></button>
        </div>
      </div>
      <button class="button" @click="pathToTestPage">Read More</button>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { mapGetters } from 'vuex'
export default {
  name: 'quizzes',
  props: ['homeQuizzes'],
  data() {
    return {
      homeQuizzesData: [],
      swiperOptions: {
        slidesPerView: 'auto',
        loop: true,
        direction: 'horizontal',
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper_pagination',
        },
        navigation: {
          nextEl: '.banner_next',
          prevEl: '.banner_prev',
        },
        speed: 500,
        grabCursor: true,
      },
    }
  },
  async fetch() {
    let [homeQuizzesData] = await Promise.all([
      this.$apiList.home
        .getZodiacHomeQuiz({
          origin: process.env.origin,
        })
        .then((res) => {
          return res.list || []
        }),
    ])
    this.homeQuizzesData = homeQuizzesData
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters(['getIntersperseUrl']),
    getCurrentRoute() {
      return this.$route.path === '/' ? '?from=home' : ''
    },
  },
  methods: {
    pathToTestPage() {
      window.location =
        window.location.pathname === '/' ? '/test/?from=home' : '/test/'
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.quizzes_own {
  width: 1400px;
  margin: 30px auto 0;
  .quizzes {
    width: 100%;
    height: 493px;
    padding: 25px 19px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: url('../../assets/img/home/home_quizzes.png') no-repeat center;
    background-size: contain;
    h3 {
      font-family: 'Cinzel Decorative';
      font-weight: 700;
      font-size: 46px;
      line-height: 64px;
      color: #fff;
    }
    &_sliding {
      width: 100%;
      flex: 1;
      padding-top: 48px;
      display: flex;
      .banner {
        width: 64px;
        height: 220px;
        text-align: center;
        position: relative;
        button {
          position: absolute;
          top: calc(50% - 32px);
          left: 0;
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          width: 100%;
          height: 64px;
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
          &:hover {
            transform: scale(1.2);
          }
        }
        &.banner_left {
          button {
            background: url('../../assets/img/home/point.png') no-repeat center;
            background-position-x: 20px;
          }
        }
        &.banner_right {
          button {
            background: url('../../assets/img/home/point_right.png') no-repeat
              center;
          }
        }
      }
      .swiper_list {
        flex: 1;
        margin: 0 35px;
        height: 100%;
        overflow: hidden;
        appearance: none;
        backface-visibility: hidden;
        -webkit-appearance: none;
        -webkit-backface-visibility: hidden;
        .swiper {
          width: 100%;
          height: 100%;
          &__item {
            width: 220px;
            height: 280px;
            color: rgba(255, 255, 255, 0.85);
            overflow: hidden;
            appearance: none;
            backface-visibility: hidden;
            transform: translate(0, 0, 0);
            -webkit-appearance: none;
            -webkit-backface-visibility: hidden;
            -webkit-transform: translate3d(0, 0, 0);
            margin-right: 16px;
            .banner_img {
              width: 220px;
              height: 220px;
              margin-bottom: 6px;
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
            p {
              font-family: 'Rubik';
              font-size: 16px;
              line-height: 22px;
              text-align: center;
              color: rgba(255, 255, 255, 0.85);
              padding: 0 20px !important;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
        .swiper_pagination {
          display: none;
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
  .quizzes_own {
    width: 1200px;
    .quizzes {
      &_sliding {
        .banner {
          button {
            width: 54px;
            height: 54px;
          }
          &.banner_left {
            button {
              background-position-x: 15px;
            }
          }
          &.banner_right {
            button {
              right: 0;
              left: initial;
            }
          }
        }
        .swiper_list {
          .swiper {
            &__item {
              width: 230px;
              .banner_img {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .quizzes_own {
    width: 1000px;
    .quizzes {
      &_sliding {
        .swiper_list {
          .swiper {
            &__item {
              width: 245px;
            }
            p {
              padding: 0 12px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: (1024px)) {
  .quizzes_own {
    width: 100%;
    .quizzes {
      padding: 0;
      &_sliding {
        width: 730px;
        padding: 48px 50px 0;
        .swiper_list {
          margin: 0 15px;
          .swiper {
            &__item {
              width: 227px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .quizzes_own {
    width: 100%;
    margin: 48 * $pr auto 0;
    .quizzes {
      width: 100%;
      height: 100%;
      padding: 0 24 * $pr 0;
      background-size: cover;
      h3 {
        font-size: 36 * $pr;
        line-height: 48 * $pr;
        text-align: center;
      }
      .h5_size {
        font-size: 26 * $pr;
        line-height: 36 * $pr;
      }
      &_sliding {
        width: 100%;
        padding: 16 * $pr 0 0;
        display: flex;
        .banner {
          display: none;
        }
        .swiper_list {
          margin: 0;
          .swiper {
            width: 100%;
            height: 100%;
            &__item {
              width: 100%;
              height: 100%;
              .banner_img {
                width: 100%;
                height: 295 * $pr;
                margin-bottom: 16 * $pr;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
              p {
                font-size: 16 * $pr;
                line-height: 22 * $pr;
                padding: 0 !important;
              }
            }
          }
          .swiper_pagination {
            display: block;
            text-align: center;
            padding: 15 * $pr 0 32 * $pr;
            :deep(swiper-pagination-bullet) {
              padding: 0 5px;
            }
          }
          :deep(.swiper-pagination-bullet) {
            width: 6 * $pr;
            height: 6 * $pr;
            margin-right: 8 * $pr;
            border-radius: 50%;
            position: relative;
            transition: transform 0.5s ease;
            &::before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              background-color: #fff;
            }
          }
          :deep(.swiper-pagination-bullet-active) {
            border-color: #fff;
            transform: scale(1.2);
            &::before {
              background-color: #ffffff;
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
        border: 1 * $pr solid #45454d;
        background: #fff;
        color: #000;
      }
    }
  }
}
</style>
