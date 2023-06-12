<template>
  <div class="daily_horoscope" v-if="horoscopeData[0]">
    <div class="daily_horoscope_main">
      <div class="main_primary">
        <div class="main_primary_content">
          <a
            :href="`${getIntersperseUrl}/zodiac/details/${horoscopeData[0]?.name
              .replace(/[^a-zA-Z0-9\\s]/g, '-')
              .toLowerCase()}-${horoscopeData[0]?.id}/`"
          >
            <p class="title">{{ horoscopeData[0]?.name }}</p>
            <div class="main_img">
              <nuxt-img
                :src="horoscopeData[0]?.banner || '/'"
                fit="cover"
                height="210"
                :alt="horoscopeData[0]?.name"
              ></nuxt-img>
            </div>
            <p class="main_text">{{ horoscopeData[0]?.desc }}</p>
          </a>
        </div>
        <div class="main_primary_content">
          <a
            :href="`${getIntersperseUrl}/zodiac/details/${horoscopeData[1]?.name
              .replace(/[^a-zA-Z0-9\\s]/g, '-')
              .toLowerCase()}-${horoscopeData[1]?.id}/`"
          >
            <p class="title">{{ horoscopeData[1]?.name }}</p>
            <div class="main_img">
              <nuxt-img
                :src="horoscopeData[1]?.banner || '/'"
                fit="cover"
                height="210"
                :alt="horoscopeData[1]?.name"
              ></nuxt-img>
            </div>
            <p class="main_text">{{ horoscopeData[1]?.desc }}</p>
          </a>
        </div>
      </div>
      <div class="main_btn">
        <button class="button" @click="pathToPage">Read More</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'daily_horoscope',
  data() {
    return {
      horoscopeData: [],
    }
  },
  mounted() {
    this.getHoroscopeData()
  },
  computed: {
    ...mapGetters(['getIntersperseUrl']),
  },
  methods: {
    async getHoroscopeData() {
      await this.$apiList.home
        .getZodiacAll({
          origin: process.env.origin,
        })
        .then((res) => {
          this.horoscopeData = res.sort(() => Math.random() - 0.5)
        })
    },
    pathToPage() {
      this.$router.push('/zodiac')
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.daily_horoscope {
  &_main {
    width: 1400px;
    margin: 96px auto 0;
    .main_primary {
      width: 100%;
      padding-bottom: 24px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 48px;
      &_content {
        > a {
          display: block;
          width: 100%;
        }
        .title {
          font-family: 'Cinzel Decorative';
          font-style: normal;
          font-weight: 700;
          font-size: 26px;
          line-height: 36px;
          color: #fff;
        }
        .main_img {
          width: 100%;
          height: 210px;
          margin: 24px 0;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .main_text {
          font-family: 'Rubik';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: rgba(255, 255, 255, 0.7);
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
    .main_btn {
      display: grid;
      place-items: center;
      .button {
        width: 220px;
        height: 44px;
        border: 1px solid #45454d;
        border-radius: 42px;
        font-family: 'Rubik';
        color: rgba(255, 255, 255, 0.7);
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
}

@media (max-width: 1450px) {
  .daily_horoscope {
    &_main {
      width: 100%;
      padding: 0 30px;
    }
  }
}

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .daily_horoscope {
    &_main {
      margin: 96 * $pr auto 0;
      padding: 0 16 * $pr;
      .main_primary {
        padding-bottom: 24 * $pr;
        grid-template-columns: repeat(1, 1fr);
        gap: 20 * $pr;
        &_content {
          > a {
            width: 100%;
          }
          .title {
            font-family: 'Cinzel Decorative';
            font-style: normal;
            font-weight: 700;
            font-size: 22 * $pr;
            line-height: 30 * $pr;
            color: #fff;
          }
          .main_img {
            width: 100%;
            height: 106 * $pr;
            margin: 10 * $pr 0;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .main_text {
            font-size: 16 * $pr;
            line-height: 22 * $pr;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
          }
        }
      }
      .main_btn {
        display: grid;
        place-items: center;
        padding: 0 25 * $pr;
        .button {
          width: 100%;
          height: 44 * $pr;
          border: 1 * $pr solid #45454d;
          border-radius: 42 * $pr;
          font-size: 16 * $pr;
          line-height: 22 * $pr;
        }
      }
    }
  }
}
</style>
