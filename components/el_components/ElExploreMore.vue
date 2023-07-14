<template>
  <div class="explore">
    <div class="explore_main">
      <p class="title">Explore More</p>
      <div class="explore_main_tag">
        <div class="tag_list" v-for="(item, index) in moreData" :key="index">
          <a
            :href="`${getIntersperseUrl + item.path}`"
            class="tag_list_aos"
            data-aos="fade-left"
            :data-aos-duration="`${index}00`"
          >
            <div class="tag_list_aos_round">
              <img :src="item.imgUrl" alt="#" />
            </div>
            <p>{{ item.name }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'explore_more',
  data() {
    return {
      moreData: [
        {
          name: "Today's Horoscope",
          path: '/horroscope/aries-1/',
          imgUrl: require('~/assets/img/horroscope/today.svg'),
        },
        {
          name: 'Money Horoscope',
          path: '/horroscope/aries-1/',
          imgUrl: require('~/assets/img/horroscope/wealth_sign.svg'),
        },
        {
          name: 'Love Horoscope',
          path: '/horroscope/aries-1/',
          imgUrl: require('~/assets/img/horroscope/love_sign.svg'),
        },
        {
          name: 'Health Horoscope',
          path: '/horroscope/aries-1/',
          imgUrl: require('~/assets/img/horroscope/healthy_sign.svg'),
        },
        {
          name: 'Career Horoscope',
          path: '/horroscope/aries-1/',
          imgUrl: require('~/assets/img/horroscope/cupational_sign.svg'),
        },
        {
          name: '2023 Horoscope',
          path: '/horroscope/aries-1/',
          imgUrl: require('~/assets/img/horroscope/2023.svg'),
        },
        {
          name: 'Zodiac Signs',
          path: '/zodiac/',
          imgUrl: require('~/assets/img/horroscope/sign_all.svg'),
        },
        {
          name: 'The daily tarot',
          path: '/tarot/',
          imgUrl: require('~/assets/img/horroscope/today_tarot.svg'),
        },
        {
          name: 'Love Matcher',
          path: '/astrology/',
          imgUrl: require('~/assets/img/horroscope/love_pairing.svg'),
        },
        {
          name: 'Free Quizzes',
          path: '/test/',
          imgUrl: require('~/assets/img/horroscope/free_test.svg'),
        },
        {
          name: 'Articles',
          path: '/resources/',
          imgUrl: require('~/assets/img/horroscope/article.svg'),
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
.explore {
  width: 100%;
  &_main {
    .title {
      color: #fff;
      text-align: center;
      font-family: 'Cinzel Decorative';
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 48px;
    }
    &_tag {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      .tag_list {
        cursor: pointer;
        border-radius: 44px;
        margin-right: 16px;
        margin-top: 16px;
        &:nth-child(6),
        &:last-child {
          margin-right: 0;
        }
        transition: background-color 0.3s;
        &:hover {
          background-color: #a5a5a5;
          p {
            color: #fff;
          }
        }

        &_aos {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px 16px;
          border-radius: 44px;
          background: rgba(255, 255, 255, 0.08);

          &_round {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            fill: #d9d9d9;
            opacity: 0.5;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          p {
            color: rgba(255, 255, 255, 0.6);
            font-family: 'Rubik';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
            padding-left: 6px;
          }
        }
      }
    }
  }
}
</style>
