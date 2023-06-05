<template>
  <div class="quizzes">
    <h3>pOPULAR qUIZZES</h3>
    <div class="quizzes_sliding">
      <div class="banner banner_left">
        <button class="banner_prev"></button>
      </div>
      <div class="swiper_list">
        <swiper class="swiper" :options="swiperOptions">
          <swiper-slide
            class="swiper__item"
            v-for="item of homeQuizzes"
            :key="item.id"
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
          </swiper-slide>
        </swiper>
        <div class="swiper_pagination"></div>
      </div>
      <div class="banner banner_right">
        <button class="banner_next"></button>
      </div>
    </div>
    <button class="button">Read More</button>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'quizzes',
  props: ['homeQuizzes'],
  data() {
    return {
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

      swiperData: [
        {
          imgs: require('~/assets/img/home/swiper1.png'),
          text: 'Text AaBbCcDd 123456789',
          time: 'Rubik 16/22 Regular',
        },
        {
          imgs: require('~/assets/img/home/swiper2.png'),
          text: 'Text AaBbCcDd 123456789',
          time: 'Rubik 16/22 Regular',
        },
        {
          imgs: require('~/assets/img/home/swiper3.png'),
          text: 'Text AaBbCcDd 123456789',
          time: 'Rubik 16/22 Regular',
        },
        {
          imgs: require('~/assets/img/home/swiper4.png'),
          text: 'Text AaBbCcDd 123456789',
          time: 'Rubik 16/22 Regular',
        },
        {
          imgs: require('~/assets/img/home/swiper5.png'),
          text: 'Text AaBbCcDd 123456789',
          time: 'Rubik 16/22 Regular',
        },
      ],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
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
          color: rgba(255, 255, 255, 0.7);
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
            color: rgba(255, 255, 255, 0.7);
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
    background-color: #fff;
    border-radius: 42px;
    font-family: 'Rubik';
    color: #000;
    font-size: 16px;
    line-height: 22px;
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
    &:hover {
      transform: translate3d(0, -3px, 0);
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
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
    &_sliding {
      padding-top: 16 * $pr;
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
      background-color: transparent;
      border-radius: 42 * $pr;
      color: rgba(255, 255, 255, 0.7);
      font-size: 16 * $pr;
      line-height: 22 * $pr;
      border: 1px solid #45454d;
    }
  }
}
</style>
