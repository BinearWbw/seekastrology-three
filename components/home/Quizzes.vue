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
            v-for="(item, index) of swiperData"
            :key="index"
          >
            <img class="banner_img" :src="item.imgs" alt="#" />
            <p>{{ item.text }}</p>
            <p>{{ item.time }}</p>
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
      position: relative;
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
            object-fit: contain;
            margin-bottom: 6px;
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
        position: absolute;
        bottom: 0;
        left: 0;
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
</style>
