<template>
  <div class="various">
    <div class="various__title">
      <h1>VARIOUS DIVINATION</h1>
      <p>it is possible to see what the sky says in the stars</p>
    </div>
    <ul class="various__main">
      <li v-for="(item, index) in divination" :key="index">
        <a class="various__main__li" :href="`${getIntersperseUrl + item.path}`">
          <img :src="item.imgUrl" alt="stars" />
          <p class="title">{{ item.title }}</p>
          <p class="text">{{ item.textCont }}</p>
          <button class="button">Read More</button>
          <i class="button_icon"></i>
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
          textCont: 'Read your freedaily horoscopes and learn more about your',
          imgUrl: require('~/assets/img/home/horoscope.png'),
          path: '/horroscope',
        },
        {
          title: 'Zodiac Signs',
          textCont: 'Read your freedaily horoscopes and learn more about your',
          imgUrl: require('~/assets/img/home/zodiac.png'),
          path: '/zodiac',
        },
        {
          title: 'Tarot',
          textCont: 'Read your freedaily horoscopes and learn more about your',
          imgUrl: require('~/assets/img/home/tarot.png'),
          path: '/tarot',
        },
        {
          title: 'Compatibility',
          textCont: 'Read your freedaily horoscopes and learn more about your',
          imgUrl: require('~/assets/img/home/compatibility.png'),
          path: '/astrology',
        },
        {
          title: 'Quizzes',
          textCont: 'Read your freedaily horoscopes and learn more about your',
          imgUrl: require('~/assets/img/home/quizzes.png'),
          path: '#',
        },
        {
          title: 'Articles',
          textCont: 'Read your freedaily horoscopes and learn more about your',
          imgUrl: require('~/assets/img/home/articles.png'),
          path: '/resources',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getIntersperseUrl']),
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
      }
      .button {
        margin-top: 18px;
        width: 124px;
        height: 32px;
        border: 1px solid #45454d;
        border-radius: 42px;
        font-family: 'Rubik';
        color: rgba(255, 255, 255, 0.7);
        font-size: 14px;
        line-height: 18px;
        -webkit-transition: background-color 0.3s, -webkit-color 0.3s;
        transition: background-color 0.3s, color 0.3s;
      }
      .button_icon {
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

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .various {
    &__title {
      margin-bottom: 24 * $pr;
      h1 {
        font-size: 46 * $pr;
        line-height: 64 * $pr;
      }
      p {
        font-size: 22 * $pr;
        line-height: 30 * $pr;
      }
    }
    &__main {
      height: 100%;
      grid-template-columns: repeat(2, 1fr);
      gap: 11 * $pr;
      li {
        height: 100%;
      }
      &__li {
        padding: 13 * $pr 0 7 * $pr;
        img {
          width: 93 * $pr;
          height: 93 * $pr;
          object-fit: cover;
          margin-bottom: 9 * $pr;
        }
        .title {
          font-size: 16 * $pr;
          line-height: 22 * $pr;
          padding: 0 10 * $pr;
        }
        .text {
          display: none;
        }
        .button {
          display: none;
        }
        .button_icon {
          display: block;
          width: 100%;
          height: 22 * $pr;
          background: url('../../assets/img/home/var_button.png') no-repeat
            center;
        }
        &:hover {
          transform: translateY(0);
        }
      }
    }
  }
}
</style>
