<template>
  <div class="zodiac_details">
    <div class="zodiac_details_main">
      <div class="part_details">
        <h3>Zodiac Signs Features</h3>
        <div class="pull_down">
          <el-selected
            :options="tabList"
            @change="handleDropdownChange"
          ></el-selected>
        </div>
        <div class="introduce">
          <div class="left_tab">
            <div
              class="left_tab_list"
              v-for="(item, index) in tabList"
              :key="index"
            >
              <div class="imgs">
                <img :src="item.imgUrl" alt="#" />
              </div>
              <p class="active">{{ item.name }}</p>
            </div>
          </div>
          <div class="right_cont">
            <h4>The taurus Zodiac Sign</h4>
            <p class="right_various">
              The kundis mosty rered to as 'anam Patirka’or Hcrosope. t would
              contain the details ofll mnajor asrological aspects of a person at
              the time of hisherbirth.hischartels the location of various zodiac
              signs, planet and other aspect which are considered in an
              astrological analyis.Kundiceation is to be onlydone by an expert
              andexperienced
            </p>
            <div class="img_cont">
              <img src="~/assets/img/zodiac/details.png" alt="#" />
            </div>
            <div class="right_minute">
              <h4>OVERVIEW OF ARIES</h4>
              <div class="right_minute_min">
                <div class="part_one">
                  <div
                    class="contents"
                    v-for="(items, index) in partOne"
                    :key="index"
                  >
                    <span>{{ items.name }}:</span>
                    <p>{{ items.text }}</p>
                  </div>
                </div>
                <div class="part_two">
                  <div
                    class="contents"
                    v-for="(items, index) in partTwo"
                    :key="index"
                  >
                    <span>{{ items.name }}:</span>
                    <p>{{ items.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <google-ad class="google_ad"></google-ad>
      </div>
      <div class="tab_control">
        <div class="tab_main">
          <el-tabs :tabs="tabTextContent">
            <template v-slot="{ activeTab }">
              <div
                v-for="(item, index) in tabTextContent"
                :key="index"
                v-show="activeTab === index"
              >
                <div
                  class="tab_main_list"
                  v-for="(conts, index_i) in item.datas"
                  :key="index_i"
                >
                  <h4>{{ conts.name }}</h4>
                  <p>{{ conts.texts }}</p>
                </div>
              </div>
            </template>
          </el-tabs>
        </div>
        <div class="tabs_max"></div>
        <google-ad class="google_ad"></google-ad>
      </div>
    </div>
    <transition name="fade">
      <InternalSite></InternalSite>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'zodiac_details',
  data() {
    return {
      tabs: [
        { title: 'Tab 1', content: 'Content of Tab 1' },
        { title: 'Tab 2', content: 'Content of Tab 2' },
        { title: 'Tab 3', content: 'Content of Tab 3' },
        { title: 'Tab 4', content: 'Content of Tab 4' },
        { title: 'Tab 5', content: 'Content of Tab 5' },
        { title: 'Tab 6', content: 'Content of Tab 6' },
        { title: 'Tab 7', content: 'Content of Tab 7' },
        { title: 'Tab 8', content: 'Content of Tab 8' },
        { title: 'Tab 9', content: 'Content of Tab 9' },
      ],
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
      partOne: [
        {
          name: 'Tauaus Date',
          text: '4.20 - 5.20',
        },
        {
          name: 'Symbil',
          text: 'The Bull',
        },
        {
          name: 'Ruler Planet',
          text: 'Venus',
        },
        {
          name: 'Basic Color',
          text: 'Green, Pink',
        },
        {
          name: 'Mode And Elemnt',
          text: 'Fixed Earth',
        },
      ],
      partTwo: [
        {
          name: 'Best Compatibility',
          text: 'Scorpio and Cancer',
        },
        {
          name: 'Lucky Metal',
          text: 'Copper',
        },
        {
          name: 'Ruler Worthy Days',
          text: 'Monday and Friday',
        },
        {
          name: 'Lucky Numbers',
          text: '2, 6, 9, 12, 24',
        },
        {
          name: 'Ruler Worthy Days',
          text: 'Emerald, Chrysoprase',
        },
      ],
      tabTextContent: [
        {
          tabs: 'Aries',
          datas: [
            {
              name: 'Aries Traits',
              texts:
                'How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,youcan find your sign from 12 zodiacsins.',
            },
            {
              name: 'ARIES Career',
              texts:
                'How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign?',
            },
            {
              name: 'ARIES Lover',
              texts:
                'How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign?',
            },
            {
              name: 'ARIES Healthy',
              texts:
                'How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. ',
            },
            {
              name: 'ARIES Lover',
              texts:
                'How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. ',
            },
          ],
        },
        {
          tabs: 'Aries Woman',
          datas: [
            {
              name: 'Aries Traits',
              texts:
                'How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,youcan find your sign from 12 zodiacsins.',
            },
            {
              name: 'ARIES Caree',
              texts:
                'How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign?',
            },
            {
              name: 'ARIES Lover',
              texts:
                'How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign?',
            },
            {
              name: 'ARIES Healthy',
              texts:
                'How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. ',
            },
            {
              name: 'ARIES Lover',
              texts:
                'How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. ',
            },
          ],
        },
        {
          tabs: 'Aries Man',
          datas: [
            {
              name: 'Aries Traits',
              texts:
                'How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,youcan find your sign from 12 zodiacsins.',
            },
            {
              name: 'ARIES Career',
              texts: 'How do you find your zodiac sign?',
            },
            {
              name: 'ARIES Lover',
              texts:
                'How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign?',
            },
            {
              name: 'ARIES Healthy',
              texts:
                'How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. ',
            },
            {
              name: 'ARIES Lover',
              texts:
                'How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. ',
            },
          ],
        },
        {
          tabs: 'Mans',
          datas: [
            {
              name: 'Aries Traits',
              texts:
                'How do you find your zodiac sign? Here,you can find your sign from 12 zodiacsins. How do you find your zodiac sign? Here,youcan find your sign from 12 zodiacsins.',
            },
            {
              name: 'ARIES Career',
              texts: 'How do you find your zodiac sign?',
            },
          ],
        },
      ],
    }
  },
  methods: {
    handleDropdownChange(option) {
      console.log('Selected :', option)
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.zodiac_details {
  &_main {
    margin: 0 auto;
    width: 1400px;
    .part_details {
      width: 100%;
      padding-top: 48px;
      position: relative;
      h3 {
        font-family: 'Cinzel Decorative';
        font-style: normal;
        font-weight: 700;
        font-size: 46px;
        line-height: 64px;
        text-align: center;
        color: #ffffff;
        margin-bottom: 64px;
      }
      .pull_down {
        width: 338px;
        display: none;
      }
      .introduce {
        width: 100%;
        display: flex;
        .left_tab {
          width: 338px;
          margin-right: 16px;
          &_list {
            width: 100%;
            height: 68px;
            display: flex;
            align-items: center;
            position: relative;
            cursor: pointer;
            transition: background-color 0.3s;
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
            .imgs {
              width: 96px;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                filter: grayscale(100%);
              }
            }
            p {
              flex: 1;
              font-family: 'Rubik';
              font-size: 22px;
              line-height: 30px;
              color: #ffffff;
              position: relative;
              &::after {
                content: '';
                display: inline-block;
                position: absolute;
                right: 16px;
                bottom: -4px;
                width: 2px;
                height: 38px;
                background-color: #9747ff;
                transform: scaleX(0);
                -webkit-transition: transform 0.3s ease-in-out;
                transition: transform 0.3s ease-in-out;
              }
              &.active {
                &::after {
                  -webkit-transform: scaleX(1);
                  transform: scaleX(1);
                }
              }
            }
            &:hover {
              background-color: rgba(123, 136, 205, 0.1);
              img {
                filter: grayscale(0);
              }
            }
          }
        }
        .right_cont {
          flex: 1;
          h4 {
            font-family: 'Cinzel Decorative';
            font-style: normal;
            font-weight: 700;
            font-size: 26px;
            line-height: 36px;
            color: #ffffff;
          }
          .right_various {
            font-family: 'Rubik';
            font-size: 16px;
            line-height: 22px;
            color: rgba(255, 255, 255, 0.7);
            margin-top: 16px;
          }
          .img_cont {
            width: 100%;
            height: 325px;
            margin: 24px 0;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .right_minute {
            &_min {
              display: flex;
              padding-top: 28px;
              .part_one {
                flex: 1;
              }
              .part_two {
                flex: 1;
              }
              .contents {
                display: flex;
                align-items: center;
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 400;
                margin-bottom: 16px;
                > span {
                  display: inline-block;
                  width: 170px;
                  font-size: 16px;
                  line-height: 22px;
                  color: rgba(255, 255, 255, 0.7);
                }
                > p {
                  font-size: 22px;
                  line-height: 30px;
                  color: #ffffff;
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
        margin: 48px auto;
        overflow: hidden;
      }
    }
    .tab_control {
      width: 100%;
      .tab_main {
        width: 100%;
        padding: 0 118px;

        ::v-deep(.tab-header) {
          justify-content: center;
        }

        &_list {
          margin-top: 24px;
          h4 {
            font-family: 'Cinzel Decorative';
            font-style: normal;
            font-weight: 700;
            font-size: 26px;
            line-height: 36px;
            color: #ffffff;
          }
          p {
            font-family: 'Rubik';
            font-size: 16px;
            line-height: 22px;
            margin-top: 8px;
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
      .google_ad {
        width: 924px;
        height: 114px;
        background-color: #555761;
        margin: 95px auto 48px;
      }
    }
  }
}

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .zodiac_details {
    &_main {
      width: 100%;
      padding: 0 16 * $pr;
      .part_details {
        width: 100%;
        padding-top: 48 * $pr;
        h3 {
          font-size: 36 * $pr;
          line-height: 48 * $pr;
          margin-bottom: 16 * $pr;
        }
        .pull_down {
          width: 100%;
          display: block;
          margin-bottom: 48 * $pr;
        }
        .introduce {
          width: 100%;
          display: flex;
          .left_tab {
            display: none;
          }
          .right_cont {
            width: 100%;
            h4 {
              font-size: 26 * $pr;
              line-height: 36 * $pr;
            }
            .right_various {
              font-size: 16 * $pr;
              line-height: 22 * $pr;
              margin-top: 16 * $pr;
            }
            .img_cont {
              height: auto;
              margin: 24 * $pr 0;
            }
            .right_minute {
              &_min {
                flex-direction: column;
                padding-top: 18 * $pr;
                padding-left: 8 * $pr;
                .contents {
                  margin-bottom: 16 * $pr;
                  > span {
                    width: 140 * $pr;
                    font-size: 14 * $pr;
                    line-height: 18 * $pr;
                  }
                  > p {
                    font-size: 16 * $pr;
                    line-height: 22 * $pr;
                  }
                }
              }
            }
          }
        }
        .google_ad {
          width: 100%;
          height: 299 * $pr;
          margin: 32 * $pr auto 48 * $pr;
          overflow: hidden;
        }
      }
      .tab_control {
        .tab_main {
          padding: 0;

          ::v-deep(.tab-header) {
            justify-content: initial;
          }

          &_list {
            margin-top: 24 * $pr;
            h4 {
              font-size: 26 * $pr;
              line-height: 36 * $pr;
            }
            p {
              font-size: 16 * $pr;
              line-height: 22 * $pr;
              margin-top: 8 * $pr;
            }
          }
        }
        .google_ad {
          width: 100%;
          height: 299 * $pr;
          margin: 48 * $pr 0;
        }
      }
    }
  }
}
</style>
