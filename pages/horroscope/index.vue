<template>
  <div class="horroscope">
    <div class="horroscope_main">
      <div class="horoscope_details">
        <google-ad class="google_ad"></google-ad>
        <div class="datails_list">
          <div class="list_top">
            <h3>
              Sagittarius
              <br />
              Daily Horoscope
            </h3>
            <div class="pull_down">
              <el-selected
                :options="tabList"
                @change="handleDropdownChange"
              ></el-selected>
            </div>
          </div>
          <div class="list_main">
            <div class="list_tabs">
              <el-tabs :tabs="horroData">
                <template v-slot="{ activeTab }">
                  <div
                    v-for="(item, index) in horroData"
                    :key="index"
                    v-show="activeTab === index"
                  >
                    <p class="texts">{{ item.texts }}</p>
                  </div>
                </template>
              </el-tabs>
            </div>
          </div>
          <google-ad classNames="google_ad"></google-ad>
        </div>
      </div>
      <div class="horoscope_more">
        <h3>Read More Horoscope</h3>
        <div class="more_main">
          <div class="more_list" v-for="(item, index) in moreData" :key="index">
            <a href="#">
              <div class="more_title">
                <p>{{ item.title }}</p>
              </div>
              <div class="more_text">
                <p>{{ item.texts }}</p>
                <button class="button">Get Your Horoscope</button>
              </div>
            </a>
          </div>
        </div>
        <google-ad classNames="google_ad"></google-ad>
      </div>
    </div>
    <transition name="fade">
      <InternalSite></InternalSite>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Horroscope',
  data() {
    return {
      tabList: [
        {
          name: 'Aries',
          imgUrl: require('~/assets/img/home/choice/Aries.png'),
        },
        {
          name: 'Taurus',
          imgUrl: require('~/assets/img/home/choice/Taurus.png'),
        },
        {
          name: 'Gemini',
          imgUrl: require('~/assets/img/home/choice/Gemini.png'),
        },
        {
          name: 'Cancer',
          imgUrl: require('~/assets/img/home/choice/Cancer.png'),
        },
        {
          name: 'Leo',
          imgUrl: require('~/assets/img/home/choice/Leo.png'),
        },
        {
          name: 'Virgo',
          imgUrl: require('~/assets/img/home/choice/Virgo.png'),
        },
        {
          name: 'Libra',
          imgUrl: require('~/assets/img/home/choice/Libra.png'),
        },
        {
          name: 'Scorpic',
          imgUrl: require('~/assets/img/home/choice/Scorpio.png'),
        },
        {
          name: 'Sagittarius',
          imgUrl: require('~/assets/img/home/choice/Sagittarius.png'),
        },
        {
          name: 'Capricorn',
          imgUrl: require('~/assets/img/home/choice/Capricorn.png'),
        },
        {
          name: 'Aquarius',
          imgUrl: require('~/assets/img/home/choice/Aquarius.png'),
        },
        {
          name: 'Pisces',
          imgUrl: require('~/assets/img/home/choice/Pisces.png'),
        },
      ],
      horroData: [
        {
          tabs: 'Today',
          texts:
            'Personal: Single signs are going to have a wonderful day. Wear something that will make you feel confident and ready to take on the day. Taken signs will feel the passion that Venus is sending them.Travel: If you are traveling sometime soon, remember to buy some space saver bags. It’s going to make a huge difference when you’re packing your bagsMoney: The number 77 is going to bring you lots of good luck today.Career: A co-worker might flirt with you today. You are going to receive some money that you weren’t expecting, and it’s going to be very welcome.Health: Your health is good but you need to start paying more attention to the food that you are eating. Avoid eating a lot of processed foods.Emotions: Today, it might be a little harder for you to maintain a positive mindset. A family get together might help you relax.',
        },
        {
          tabs: 'Weekly',
          texts:
            'Personal: Single signs are going to have a wonderful day. Wear something that will make you feel confident and ready to take on the day. Taken signs will feel the passion that Venus is sending them.Travel: If you are traveling sometime soon, remember to buy some space saver bags. It’s going to make a huge difference when you’re packing your bagsMoney: The number 77 is going to bring you lots of good luck today.Career: A co-worker might flirt with you today. You are going to receive some money that you weren’t expecting, and it’s going to be very welcome.Health: Your health is good but you need to start paying more attention to the food that you are eating. Avoid eating a lot of processed foods.',
        },
        {
          tabs: 'Monthly',
          texts:
            'Personal: Single signs are going to have a wonderful day. Wear something that will make you feel confident and ready to take on the day. Taken signs will feel the passion that Venus is sending them.Travel: If you are traveling sometime soon, remember to buy some space saver bags. but you need to start paying more attention to the food that you are eating. Avoid eating a lot of processed foods.Emotions: Today, it might be a little harder for you to maintain a positive mindset. A family get together might help you relax.',
        },
        {
          tabs: '2023',
          texts:
            'Personal: Single signs are going to have a wonderful day. Wear something that will make you feel confident and ready to take on the day. Taken signs will feel the passion that Venus is sending them.Travel: If you are traveling sometime soon, remember to buy some space saver bags. It’s going to make a huge difference when you’re packing your bagsMoney: The number 77 is going to bring you lots of good luck today.Career: A co-worker might flirt with you today. You are going to receive some money that you weren’t expecting, and it’s going to be very welcome.Health: Your health is good but you need to start paying more attention to the food that you are eating. Avoid eating a lot of processed foods.Emotions: Today, it might be a little harder for you to maintain a positive mindset. A family get together',
        },
      ],
      moreData: [
        {
          title: 'Love Horoscope',
          texts:
            'Personal: Single signs are going to have a wonderful day.Wear something that will make you feel confident and ready to take on the day.',
        },
        {
          title: 'Healthy Horoscope',
          texts:
            'Personal: Single signs are going to have a wonderful day.Wear something that will make you feel confident and ready to take on the day.',
        },
        {
          title: 'Work Horoscope',
          texts:
            'Personal: Single signs are going to have a wonderful day.Wear something that will make you feel confident and ready to take on the day.',
        },
        {
          title: 'Fortune Horoscope',
          texts:
            'Personal: Single signs are going to have a wonderful day.Wear something that will make you feel confident and ready to take on the day.',
        },
      ],
    }
  },
  methods: {
    handleDropdownChange(option) {
      console.log('selectd :', option)
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.horroscope {
  &_main {
    margin: 0 auto;
    width: 1400px;
    .horoscope_details {
      display: flex;
      padding: 48px 0;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.2) 50.52%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      .google_ad {
        width: 300px;
        height: 600px;
        background-color: #555761;
      }
      .datails_list {
        flex: 1;
        padding-left: 54px;
        .list_top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 48px;
          h3 {
            font-family: 'Cinzel Decorative';
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 48px;
            color: #ffffff;
          }
          .pull_down {
            width: 338px;
            height: 60px;
          }
        }
        .list_main {
          width: 100%;
          .list_tabs {
            width: 100%;
            .texts {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 28px;
              color: rgba(255, 255, 255, 0.7);
              padding-top: 24px;
            }
          }
        }
        .google_ad {
          width: 924px;
          height: 114px;
          background-color: #555761;
          margin: 48px auto 0;
          overflow: hidden;
        }
      }
    }
    .horoscope_more {
      padding: 48px 0 0;
      h3 {
        font-family: 'Cinzel Decorative';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 48px;
        text-align: center;
        color: #ffffff;
      }
      .more_main {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        padding: 48px 0;
        .more_list {
          padding: 34px 24px 24px;
          box-sizing: border-box;
          border: 1px solid transparent;
          border-radius: 6px;
          cursor: pointer;
          transition: transform 0.3s ease-in-out;
          a {
            display: inline-block;
            .more_title {
              padding-bottom: 16px;
              position: relative;
              &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background: linear-gradient(
                  90deg,
                  rgba(255, 255, 255, 0) 0%,
                  rgba(255, 255, 255, 0.2) 50.52%,
                  rgba(255, 255, 255, 0) 100%
                );
              }
              p {
                font-family: 'Rubik';
                font-size: 22px;
                line-height: 30px;
                text-align: center;
                color: #ffffff;
                padding: 0 70px;
              }
            }
            .more_text {
              display: flex;
              flex-direction: column;
              align-items: center;
              p {
                font-family: 'Rubik';
                font-size: 16px;
                line-height: 22px;
                text-align: center;
                color: rgba(255, 255, 255, 0.7);
                padding: 16px 0;
              }
              .button {
                width: 220px;
                height: 32px;
                border: 1px solid #45454d;
                border-radius: 42px;
                font-family: 'Rubik';
                font-size: 14px;
                line-height: 18px;
                color: rgba(255, 255, 255, 0.7);
                -webkit-transition: background-color 0.3s, -webkit-color 0.3s;
                transition: background-color 0.3s, color 0.3s;
              }
            }
          }
          &:hover {
            transform: translateY(-10px);
            border-color: rgba(255, 255, 255, 0.7);
            a {
              .more_text {
                .button {
                  color: #000;
                  background-color: #fff;
                }
              }
            }
          }
        }
      }
      .google_ad {
        width: 924px;
        height: 114px;
        background-color: #555761;
        margin: 0 auto;
      }
    }
  }
}

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .horroscope {
    &_main {
      width: 100%;
      padding: 0 16 * $pr;
      .horoscope_details {
        display: flex;
        padding: 48 * $pr 0 24 * $pr;
        position: relative;
        &::after {
          height: 1 * $pr;
        }
        > .google_ad {
          display: none;
        }
        .datails_list {
          flex: 1;
          padding-left: 0;
          .list_top {
            display: flex;
            justify-content: initial;
            flex-direction: column-reverse;
            margin-bottom: 32 * $pr;
            h3 {
              font-size: 36 * $pr;
              line-height: 48 * $pr;
              text-align: center;
            }
            .pull_down {
              width: 100%;
              height: auto;
              margin-bottom: 16 * $pr;
            }
          }
          .list_main {
            width: 100%;
            .list_tabs {
              .texts {
                font-size: 16 * $pr;
                line-height: 28 * $pr;
                padding-top: 24 * $pr;
              }
              ::v-deep(.tab-header) {
                justify-content: space-around;
                .tab-item {
                  flex: 1;
                  margin: 0;
                  padding: 7 * $pr 0;
                }
              }
            }
          }
          .google_ad {
            width: 100%;
            height: 299 * $pr;
            background-color: #555761;
            margin: 23 * $pr auto 0;
          }
        }
      }
      .horoscope_more {
        padding: 24 * $pr 0 0;
        h3 {
          font-size: 26 * $pr;
          line-height: 36 * $pr;
        }
        .more_main {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24 * $pr;
          padding: 24 * $pr 0 49 * $pr;
          .more_list {
            padding: 24 * $pr;
            border: 1 * $pr solid rgba(255, 255, 255, 0.7);
            border-radius: 6 * $pr;
            a {
              .more_title {
                padding-bottom: 16 * $pr;
                &::after {
                  height: 1 * $pr;
                }
                p {
                  font-size: 22 * $pr;
                  line-height: 30 * $pr;
                  padding: 0 70 * $pr;
                }
              }
              .more_text {
                p {
                  font-size: 16 * $pr;
                  line-height: 22 * $pr;
                  padding: 16 * $pr 0;
                }
                .button {
                  width: 220 * $pr;
                  height: 32 * $pr;
                  border: 1 * $pr solid #45454d;
                  border-radius: 42 * $pr;
                  font-size: 14 * $pr;
                  line-height: 18 * $pr;
                }
              }
            }
            &:hover {
              transform: translateY(0);
            }
          }
        }
        .google_ad {
          width: 100%;
          height: 299 * $pr;
        }
      }
    }
  }
}
</style>
