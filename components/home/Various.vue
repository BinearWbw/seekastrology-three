<template>
  <div class="various">
    <div class="various__title">
      <h1>VARIOUS DIVINATION</h1>
      <p>it is possible to see what the sky says in the stars</p>
    </div>
    <ul class="various__main">
      <li v-for="(item, index) in divination" :key="index">
        <a
          class="fade various__main__li"
          :href="`${getIntersperseUrl + item.path + getCurrentRoute}`"
        >
          <img :src="item.imgUrl" alt="stars" />
          <p class="title">{{ item.title }}</p>
          <p class="text">{{ item.textCont }}</p>
          <button class="button">Read More</button>
          <div class="button_btm">
            <i class="button_icon" id="icon1"></i>
            <i class="button_icon" id="icon2"></i>
            <i class="button_icon" id="icon3"></i>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Various',
  data() {
    return {
      divination: [
        {
          title: 'Horoscope',
          textCont:
            'Pick your sign to read your Daily, Weekly or Monthly Horoscope.',
          imgUrl: require('~/assets/img/home/horoscope.png'),
          path: '/horroscope/aries-1/',
        },
        {
          title: 'Zodiac Signs',
          textCont:
            'Discover your cosmic identity by exploring your zodiac sign. Unveil your complete zodiac profile, your element and ruling planets.',
          imgUrl: require('~/assets/img/home/zodiac.png'),
          path: '/zodiac/',
        },
        {
          title: 'Tarot',
          textCont:
            'Tarot reading is a powerful form of divination that use an ancient deck of cards to help you find answers to your questions about your love, relationships, career, wellness and more.',
          imgUrl: require('~/assets/img/home/tarot.png'),
          path: '/tarot/',
        },
        {
          title: 'Compatibility',
          textCont:
            'How well do you get along with your partner according to their Sun Sign? Find out answers to these questions and more with our Zodiac Compatibility Calculator',
          imgUrl: require('~/assets/img/home/compatibility.png'),
          path: '/astrology/',
        },
        {
          title: 'Quizzes',
          textCont:
            'astrology quiz will help you to unlock the unique powers hidden within your soul. Results are free, instant, and eye-opening.',
          imgUrl: require('~/assets/img/home/quizzes.png'),
          path: '/test/',
        },
        {
          title: 'Articles',
          textCont:
            'Explore the latest astrology news. Here is what is happening in the Universe this week.',
          imgUrl: require('~/assets/img/home/articles.png'),
          path: '/resources/',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getIntersperseUrl']),
    getCurrentRoute() {
      return this.$route.path === '/' ? '?from=home' : ''
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.various {
  width: 100%;
  &__title {
    margin-bottom: 60px;
    h1 {
      font-family: 'Cinzel Decorative';
      font-weight: 700;
      font-size: 82px;
      line-height: 106px;
      color: #fff;
      text-align: center;
    }
    p {
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 30px;
      color: #ffffffb3;
      text-align: center;
    }
  }
  &__main {
    display: grid;
    height: 370px;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
    li {
      height: 100%;
    }
    &__li {
      height: 100%;
      display: flex;
      padding-top: 34px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      font-family: 'Rubik';
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 6px;
      background: linear-gradient(
        0.13deg,
        #08070f 0.11%,
        rgba(6, 5, 6, 0) 99.89%
      );
      backdrop-filter: blur(4px);
      cursor: pointer;
      -webkit-transition: transform 0.3s ease-in-out;
      transition: transform 0.3s ease-in-out;
      img {
        width: 152px;
        height: 152px;
        object-fit: cover;
        margin-bottom: 14px;
      }
      .title {
        font-size: 22px;
        line-height: 30px;
        color: #fff;
      }
      .text {
        margin-top: 8px;
        padding: 0 22px;
        font-size: 14px;
        line-height: 18px;
        color: #ffffffb3;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        position: relative;
      }
      .button {
        margin-top: 18px;
        width: 124px;
        height: 32px;
        border: 1px solid #45454d;
        border-radius: 42px;
        font-family: 'Rubik';
        color: rgba(255, 255, 255, 0.85);
        font-size: 14px;
        line-height: 18px;
        -webkit-transition: background-color 0.3s, -webkit-color 0.3s;
        transition: background-color 0.3s, color 0.3s;
      }
      .button_btm {
        display: none;
      }
      &:hover {
        transform: translateY(-20px);
        .button {
          color: #000;
          background-color: #fff;
        }
      }
    }
  }
}

@media (max-width: 1435px) {
  .various {
    &__title {
      h1 {
        padding: 0 20px;
      }
    }
    &__main {
      height: auto;
      grid-template-columns: repeat(3, 220px);
      justify-content: center;
      &__li {
        height: 370px;
      }
    }
  }
}

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .various {
    &__title {
      margin-bottom: 24 * $pr;
      h1 {
        font-size: 46 * $pr;
        line-height: 64 * $pr;
        padding: 0;
      }
      p {
        font-size: 14 * $pr;
        line-height: 18 * $pr;
      }
    }
    &__main {
      height: auto;
      grid-template-columns: repeat(2, 1fr);
      gap: 11 * $pr;
      li {
        height: auto;
      }
      &__li {
        padding: 13 * $pr 0 16 * $pr;
        border: 1 * $pr solid rgba(255, 255, 255, 0.6);
        height: auto;
        img {
          width: 93 * $pr;
          height: 93 * $pr;
          object-fit: cover;
          margin-bottom: 9 * $pr;
        }
        .title {
          font-size: 22 * $pr;
          line-height: 30 * $pr;
          padding: 0 10 * $pr;
        }
        .text {
          display: none;
        }
        .button {
          display: none;
        }
        .button_btm {
          display: flex;
          width: 100%;
          justify-content: center;
          .button_icon {
            display: inline-block;
            width: 7 * $pr;
            height: 22 * $pr;
            background: url('~/assets/img/home/xiaojiantou.png') no-repeat
              center;
            animation: icon-arrow 1.5s infinite ease-in-out;
          }
          #icon1 {
            animation-delay: 0s;
          }
          #icon2 {
            animation-delay: 0.3s;
          }
          #icon3 {
            animation-delay: 0.7s;
          }
          @keyframes icon-arrow {
            0% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.6;
            }
            70% {
              opacity: 1;
            }
            100% {
              opacity: 0.3;
            }
          }
        }
        &:hover {
          transform: translateY(0);
        }
      }
    }
  }
}
</style>
