<template>
  <div class="zodiac">
    <div class="zodiac_main">
      <div class="zodiac_main_top">
        <div class="top_text">
          <h3>Zodiac Signs Meanings and Characteristics</h3>
          <p>
            By knowing the date of your zodiac sign, you can discover the
            personality and main characteristics of your zodiac sign. The day
            you were born places you in a horoscope that can tell you a lot
            about your ideology, attitude and general approach to everything in
            life.
          </p>
          <p>
            How do you find your zodiac sign? Here you can find your zodiac sign
            from the 12 signs and dates. Choose your sun sign from the 12 signs
            and explore your complete astrological profile, the elements you
            belong to, the planets that rule your sign and much more!
          </p>
        </div>
        <google-ad class="google_ad"></google-ad>
      </div>
      <div class="zodiac_main_list">
        <div class="zodiac_signs">
          <div class="each" v-for="(item, index) in zodiacSigns" :key="index">
            <a href="zodiac/details">
              <h4>{{ item.name }}</h4>
              <p class="time">{{ item.time }}</p>
              <p class="text">
                {{ item.text }}
              </p>
              <img :src="item.imgs" alt="#" />
            </a>
          </div>
        </div>
        <google-ad class="google_ad"></google-ad>
      </div>
    </div>
    <transition name="fade">
      <InternalSite></InternalSite>
    </transition>
  </div>
</template>

<script>
import GoogleAd from '../../components/GoogleAd.vue'
export default {
  components: { GoogleAd },
  name: 'Zodiac',
  data() {
    return {
      zodiacSigns: [
        {
          name: 'Aries',
          time: 'Mar 21 - Apr 20',
          text: 'Means you are a personwho dare to do anythingyou want, you do everything very straightly.And you are an honestperson.',
          imgs: require('~/assets/img/zodiac/Aries.png'),
        },
        {
          name: 'Taurus',
          time: 'Mar 21 - Apr 20',
          text: 'Means you are a personwho dare to do anythingyou want, you do everything very straightly.And you are an honestperson.',
          imgs: require('~/assets/img/zodiac/Taurus.png'),
        },
        {
          name: 'Gemini',
          time: 'Mar 21 - Apr 20',
          text: 'Means you are a personwho dare to do anythingyou want, you do everything very straightly.And you are an honestperson.',
          imgs: require('~/assets/img/zodiac/Gemini.png'),
        },
        {
          name: 'Cancer',
          time: 'Mar 21 - Apr 20',
          text: 'Means you are a personwho dare to do anythingyou want, you do everything very straightly.And you are an honestperson.',
          imgs: require('~/assets/img/zodiac/Cancer.png'),
        },
        {
          name: 'Leo',
          time: 'Mar 21 - Apr 20',
          text: 'Means you are a personwho dare to do anythingyou want, you do everything very straightly.And you are an honestperson.',
          imgs: require('~/assets/img/zodiac/Leo.png'),
        },
        {
          name: 'Virgo',
          time: 'Mar 21 - Apr 20',
          text: 'Means you are a personwho dare to do anythingyou want, you do everything very straightly.And you are an honestperson.',
          imgs: require('~/assets/img/zodiac/Virgo.png'),
        },
        {
          name: 'Libra',
          time: 'Mar 21 - Apr 20',
          text: 'Means you are a personwho dare to do anythingyou want, you do everything very straightly.And you are an honestperson.',
          imgs: require('~/assets/img/zodiac/Libra.png'),
        },
        {
          name: 'Scorpic',
          time: 'Mar 21 - Apr 20',
          text: 'Means you are a personwho dare to do anythingyou want, you do everything very straightly.And you are an honestperson.',
          imgs: require('~/assets/img/zodiac/Scorpio.png'),
        },
        {
          name: 'Sagittarius',
          time: 'Mar 21 - Apr 20',
          text: 'Means you are a personwho dare to do anythingyou want, you do everything very straightly.And you are an honestperson.',
          imgs: require('~/assets/img/zodiac/Sagittarius.png'),
        },
        {
          name: 'Capricorn',
          time: 'Mar 21 - Apr 20',
          text: 'Means you are a personwho dare to do anythingyou want, you do everything very straightly.And you are an honestperson.',
          imgs: require('~/assets/img/zodiac/Capricorn.png'),
        },
        {
          name: 'Aquarius',
          time: 'Mar 21 - Apr 20',
          text: 'Means you are a personwho dare to do anythingyou',
          imgs: require('~/assets/img/zodiac/Aquarius.png'),
        },
        {
          name: 'Pisces',
          time: 'Mar 21 - Apr 20',
          text: 'Means you are a personwho dare to do anythingyou want, you do everything very straightly.And you are an honestperson.',
          imgs: require('~/assets/img/zodiac/Pisces.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.zodiac {
  &_main {
    margin: 0 auto;
    width: 1400px;
    &_top {
      width: 100%;
      background: url('../../assets/img/zodiac/zodiac_top.png') no-repeat right;
      background-position-y: 48px;
      padding-bottom: 120px;
      mix-blend-mode: luminosity;
      position: relative;
      .top_text {
        width: 810px;
        padding: 96px 0;
        margin-right: auto;
        h3 {
          font-family: 'Cinzel Decorative';
          font-style: normal;
          font-weight: 700;
          font-size: 36px;
          line-height: 48px;
          color: #ffffff;
          margin-bottom: 24px;
        }
        p {
          font-family: 'Rubik';
          font-size: 16px;
          line-height: 22px;
          color: rgba(255, 255, 255, 0.7);
        }
      }
      .google_ad {
        width: 924px;
        height: 114px;
        background-color: #555761;
        margin: 0 auto;
      }
    }

    &_list {
      width: 100%;
      .zodiac_signs {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        .each {
          padding: 24px;
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0);
          border-radius: 6px;
          cursor: pointer;
          transition: border-color 0.3s ease-in-out;
          a {
            display: block;
            box-sizing: border-box;
            position: relative;
            transition: transform 0.3s ease-in-out;
            h4 {
              font-family: 'Cinzel Decorative';
              font-style: normal;
              font-weight: 700;
              font-size: 26px;
              line-height: 36px;
              color: #fff;
            }
            .time {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 22px;
              line-height: 30px;
              color: rgba(255, 255, 255, 0.7);
              margin-bottom: 16px;
            }
            .text {
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
            img {
              position: absolute;
              right: -24px;
              top: -24px;
              transition: transform 0.3s ease-in-out;
            }
          }

          &:hover {
            border-color: rgba(255, 255, 255, 0.7);
            a {
              transform: translateY(-5px);
              img {
                transform: scale(1.1) translateY(-3px);
              }
            }
          }
        }
      }
      .google_ad {
        width: 924px;
        height: 114px;
        background-color: #555761;
        margin: 96px auto;
      }
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .zodiac {
    &_main {
      width: 100%;
      &_top {
        padding: 0 16 * $pr 24 * $pr;
        width: 100%;
        background-position-y: 0;
        background-size: contain;
        position: relative;
        .top_text {
          width: 100%;
          padding: 188 * $pr 0 24 * $pr;
          margin-right: auto;
          text-align: center;
          h3 {
            font-size: 26 * $pr;
            line-height: 36 * $pr;
            margin-bottom: 16 * $pr;
          }
          p {
            font-size: 16 * $pr;
            line-height: 22 * $pr;
          }
        }
        .google_ad {
          width: 100%;
          height: 299 * $pr;
          background-color: #555761;
          margin: 0 auto;
        }
      }

      &_list {
        width: 100%;
        padding: 0 16 * $pr;
        .zodiac_signs {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 5 * $pr;
          .each {
            padding: 24 * $pr 16 * $pr;
            box-sizing: border-box;
            border: none;
            border-radius: 6 * $pr;
            background: rgba(255, 255, 255, 0.05);
            a {
              display: block;
              box-sizing: border-box;
              position: relative;
              transition: transform 0.3s ease-in-out;
              h4 {
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 400;
                font-size: 22 * $pr;
                line-height: 30 * $pr;
                color: rgba(255, 255, 255, 0.7);
              }
              .time {
                font-size: 16 * $pr;
                line-height: 22 * $pr;
              }
              .text {
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 400;
                font-size: 12 * $pr;
                line-height: 16 * $pr;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 6;
                -webkit-box-orient: vertical;
              }
              img {
                position: absolute;
                right: -24 * $pr;
                top: -24 * $pr;
                width: 111 * $pr;
              }
            }
          }
        }
        .google_ad {
          width: 100%;
          height: 299 * $pr;
          background-color: #555761;
          margin: 24 * $pr auto 32 * $pr;
        }
      }
    }
  }
}
</style>
