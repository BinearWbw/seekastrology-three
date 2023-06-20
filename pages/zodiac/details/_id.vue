<template>
  <div class="zodiac_details">
    <div class="zodiac_details_main">
      <div class="part_details">
        <h3>Zodiac Signs Features</h3>
        <div class="pull_down">
          <el-selected
            :options="tabList"
            :pint="ids"
            @change="handleDropdownChange"
          ></el-selected>
        </div>
        <div class="introduce">
          <div class="left_tab">
            <div
              class="left_tab_list"
              v-for="(item, index) in tabList"
              :key="index"
              @click="handleDropdownChange(item.id)"
            >
              <div class="imgs">
                <img :src="item.imgUrl" alt="#" />
              </div>
              <p :class="{ active: item.id === ids }">
                {{ item.name }}
              </p>
            </div>
          </div>
          <div class="right_cont">
            <h4>{{ `The ${zodiacIData.name} Zodiac Sign` }}</h4>
            <p class="right_various" :class="{ unfold_active: openExpand }">
              {{ zodiacIData.desc }}
            </p>
            <button class="blank_space" @click="setOpenExpand">
              {{ openExpand ? 'SHOW LESS' : 'SHOW MORE' }}
            </button>
            <div class="img_cont">
              <nuxt-img
                :src="zodiacIData.banner || '/'"
                fit="cover"
                height="325"
                :alt="zodiacIData.name"
              ></nuxt-img>
            </div>
            <div class="right_minute">
              <h4>{{ `OVERVIEW OF ${zodiacIData.name}` }}</h4>
              <div class="right_minute_min">
                <div class="part_one">
                  <div class="contents">
                    <p class="p_title">Tauaus Date:</p>
                    <p class="p_texts">{{ zodiacIData.basic?.dates || '' }}</p>
                  </div>
                  <div class="contents">
                    <p class="p_title">Symbil:</p>
                    <p class="p_texts">{{ zodiacIData.basic?.symbol || '' }}</p>
                  </div>
                  <div class="contents">
                    <p class="p_title">Ruler Planet:</p>
                    <p class="p_texts">{{ zodiacIData.basic?.planet || '' }}</p>
                  </div>
                  <div class="contents">
                    <p class="p_title">Basic Color:</p>
                    <p class="p_texts">{{ zodiacIData.basic?.color || '' }}</p>
                  </div>
                  <div class="contents">
                    <p class="p_title">Mode And Elemnt:</p>
                    <p class="p_texts">
                      {{ zodiacIData.basic?.mode_element || '' }}
                    </p>
                  </div>
                  <div class="contents">
                    <p class="p_title">House:</p>
                    <p class="p_texts">{{ zodiacIData.basic?.house || '' }}</p>
                  </div>
                </div>
                <div class="part_two">
                  <div class="contents">
                    <p class="p_title">Best Compatibility:</p>
                    <p class="p_texts">
                      {{ zodiacIData.basic?.compatibility || '' }}
                    </p>
                  </div>
                  <div class="contents">
                    <p class="p_title">Lucky Metal:</p>
                    <p class="p_texts">
                      {{ zodiacIData.basic?.lucky_metal || '' }}
                    </p>
                  </div>
                  <div class="contents">
                    <p class="p_title">Ruler Worthy Days:</p>
                    <p class="p_texts">
                      {{ zodiacIData.basic?.worth_days || '' }}
                    </p>
                  </div>
                  <div class="contents">
                    <p class="p_title">Lucky Numbers:</p>
                    <p class="p_texts">
                      {{ zodiacIData.basic?.lucky_numbers || '' }}
                    </p>
                  </div>
                  <div class="contents">
                    <p class="p_title">Lucky Gem:</p>
                    <p class="p_texts">
                      {{ zodiacIData.basic?.lucky_gem || '' }}
                    </p>
                  </div>
                  <div class="contents">
                    <p class="p_title">Tarot Card:</p>
                    <p class="p_texts">
                      {{ zodiacIData.basic?.tarot_card || '' }}
                    </p>
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
          <el-tabs :tabs="tabTitle" :title="zodiacIData.name">
            <template v-slot="{ activeTab }">
              <div
                v-for="(item, index) in tabsDataList"
                :key="index"
                v-show="activeTab === index"
              >
                <div class="tab_main_list" v-if="item.traits">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Traits` }}</h4>
                  <div class="p_text" v-html="item.traits"></div>
                </div>
                <div class="tab_main_list" v-if="item.career">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Career` }}</h4>
                  <div class="p_text" v-html="item.career"></div>
                </div>
                <div class="tab_main_list" v-if="item.lover">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Lover` }}</h4>
                  <div class="p_text" v-html="item.lover"></div>
                </div>
                <div class="tab_main_list" v-if="item.health">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Healthy` }}</h4>
                  <div class="p_text" v-html="item.health"></div>
                </div>
                <div class="tab_main_list" v-if="item.love_reasons">
                  <h4>
                    {{
                      `The 5 Top Reasons to Love Being an ${zodiacIData.name.toUpperCase()}`
                    }}
                  </h4>
                  <div class="p_text" v-html="item.love_reasons"></div>
                </div>
                <div class="tab_main_list" v-if="item.positives">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Positivesy` }}</h4>
                  <div class="p_text" v-html="item.positives"></div>
                </div>
                <div class="tab_main_list" v-if="item.negatives">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Negativesy` }}</h4>
                  <div class="p_text" v-html="item.negatives"></div>
                </div>
                <div class="tab_main_list" v-if="item.in_love">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} In Love` }}</h4>
                  <div class="p_text" v-html="item.in_love"></div>
                </div>
                <div class="tab_main_list" v-if="item.attract">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Attracty` }}</h4>
                  <div class="p_text" v-html="item.attract"></div>
                </div>
                <div class="tab_main_list starsign" v-if="item.aquarius">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} & Aquarius` }}</h4>
                  <div
                    class="p_text"
                    :class="{ p_text_active: openStarsign[0].openIf }"
                    :ref="'starsign' + 0"
                    v-html="item.aquarius"
                  ></div>
                  <button class="openBtn" @click="setOpenStarsign(0)">
                    {{ openStarsign[0].openIf ? 'SHOW LESS' : 'SHOW MORE' }}
                  </button>
                </div>
                <div class="tab_main_list starsign" v-if="item.aries">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} & Aries` }}</h4>
                  <div
                    class="p_text"
                    :class="{ p_text_active: openStarsign[1].openIf }"
                    :ref="'starsign' + 1"
                    v-html="item.aries"
                  ></div>
                  <button class="openBtn" @click="setOpenStarsign(1)">
                    {{ openStarsign[1].openIf ? 'SHOW LESS' : 'SHOW MORE' }}
                  </button>
                </div>
                <div class="tab_main_list starsign" v-if="item.cancer">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} & Cancer` }}</h4>
                  <div
                    class="p_text"
                    :class="{ p_text_active: openStarsign[2].openIf }"
                    :ref="'starsign' + 2"
                    v-html="item.cancer"
                  ></div>
                  <button class="openBtn" @click="setOpenStarsign(2)">
                    {{ openStarsign[2].openIf ? 'SHOW LESS' : 'SHOW MORE' }}
                  </button>
                </div>
                <div class="tab_main_list starsign" v-if="item.capricorn">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} & Capricorn` }}</h4>
                  <div
                    class="p_text"
                    :class="{ p_text_active: openStarsign[3].openIf }"
                    :ref="'starsign' + 3"
                    v-html="item.capricorn"
                  ></div>
                  <button class="openBtn" @click="setOpenStarsign(3)">
                    {{ openStarsign[3].openIf ? 'SHOW LESS' : 'SHOW MORE' }}
                  </button>
                </div>
                <div class="tab_main_list starsign" v-if="item.gemini">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} & Gemini` }}</h4>
                  <div
                    class="p_text"
                    :class="{ p_text_active: openStarsign[4].openIf }"
                    :ref="'starsign' + 4"
                    v-html="item.gemini"
                  ></div>
                  <button class="openBtn" @click="setOpenStarsign(4)">
                    {{ openStarsign[4].openIf ? 'SHOW LESS' : 'SHOW MORE' }}
                  </button>
                </div>
                <div class="tab_main_list starsign" v-if="item.leo">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} & Leo` }}</h4>
                  <div
                    class="p_text"
                    :class="{ p_text_active: openStarsign[5].openIf }"
                    :ref="'starsign' + 5"
                    v-html="item.leo"
                  ></div>
                  <button class="openBtn" @click="setOpenStarsign(5)">
                    {{ openStarsign[5].openIf ? 'SHOW LESS' : 'SHOW MORE' }}
                  </button>
                </div>
                <div class="tab_main_list starsign" v-if="item.libra">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} & Libra` }}</h4>
                  <div
                    class="p_text"
                    :class="{ p_text_active: openStarsign[6].openIf }"
                    :ref="'starsign' + 6"
                    v-html="item.libra"
                  ></div>
                  <button class="openBtn" @click="setOpenStarsign(6)">
                    {{ openStarsign[6].openIf ? 'SHOW LESS' : 'SHOW MORE' }}
                  </button>
                </div>
                <div class="tab_main_list starsign" v-if="item.pisces">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} & Pisces` }}</h4>
                  <div
                    class="p_text"
                    :class="{ p_text_active: openStarsign[7].openIf }"
                    :ref="'starsign' + 7"
                    v-html="item.pisces"
                  ></div>
                  <button class="openBtn" @click="setOpenStarsign(7)">
                    {{ openStarsign[7].openIf ? 'SHOW LESS' : 'SHOW MORE' }}
                  </button>
                </div>
                <div class="tab_main_list starsign" v-if="item.sagittarius">
                  <h4>
                    {{ `${zodiacIData.name.toUpperCase()} & Sagittarius` }}
                  </h4>
                  <div
                    class="p_text"
                    :class="{ p_text_active: openStarsign[8].openIf }"
                    :ref="'starsign' + 8"
                    v-html="item.sagittarius"
                  ></div>
                  <button class="openBtn" @click="setOpenStarsign(8)">
                    {{ openStarsign[8].openIf ? 'SHOW LESS' : 'SHOW MORE' }}
                  </button>
                </div>
                <div class="tab_main_list starsign" v-if="item.scorpio">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} & Scorpio` }}</h4>
                  <div
                    class="p_text"
                    :class="{ p_text_active: openStarsign[9].openIf }"
                    :ref="'starsign' + 9"
                    v-html="item.scorpio"
                  ></div>
                  <button class="openBtn" @click="setOpenStarsign(9)">
                    {{ openStarsign[9].openIf ? 'SHOW LESS' : 'SHOW MORE' }}
                  </button>
                </div>
                <div class="tab_main_list starsign" v-if="item.taurus">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} & Taurus` }}</h4>
                  <div
                    class="p_text"
                    :class="{ p_text_active: openStarsign[10].openIf }"
                    :ref="'starsign' + 10"
                    v-html="item.taurus"
                  ></div>
                  <button class="openBtn" @click="setOpenStarsign(10)">
                    {{ openStarsign[10].openIf ? 'SHOW LESS' : 'SHOW MORE' }}
                  </button>
                </div>
                <div class="tab_main_list starsign" v-if="item.virgo">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} & Virgo` }}</h4>
                  <div
                    class="p_text"
                    :class="{ p_text_active: openStarsign[11].openIf }"
                    :ref="'starsign' + 11"
                    v-html="item.virgo"
                  ></div>
                  <button class="openBtn" @click="setOpenStarsign(11)">
                    {{ openStarsign[11].openIf ? 'SHOW LESS' : 'SHOW MORE' }}
                  </button>
                </div>
              </div>
            </template>
          </el-tabs>
        </div>
        <div class="tabs_max"></div>
        <google-ad classNames="google_ad"></google-ad>
      </div>
    </div>
    <transition name="fade">
      <home-pop-articles></home-pop-articles>
    </transition>
    <transition name="fade">
      <tarot-all-tarot></tarot-all-tarot>
    </transition>
    <transition name="fade">
      <el-pairing></el-pairing>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'zodiac_details',
  data() {
    return {
      tabList: [
        {
          name: 'Aries',
          imgUrl: require('~/assets/img/home/choice/Aries.png'),
          id: 1,
        },
        {
          name: 'Taurus',
          imgUrl: require('~/assets/img/home/choice/Taurus.png'),
          id: 2,
        },
        {
          name: 'Gemini',
          imgUrl: require('~/assets/img/home/choice/Gemini.png'),
          id: 3,
        },
        {
          name: 'Cancer',
          imgUrl: require('~/assets/img/home/choice/Cancer.png'),
          id: 4,
        },
        {
          name: 'Leo',
          imgUrl: require('~/assets/img/home/choice/Leo.png'),
          id: 5,
        },
        {
          name: 'Virgo',
          imgUrl: require('~/assets/img/home/choice/Virgo.png'),
          id: 6,
        },
        {
          name: 'Libra',
          imgUrl: require('~/assets/img/home/choice/Libra.png'),
          id: 7,
        },
        {
          name: 'Scorpio',
          imgUrl: require('~/assets/img/home/choice/Scorpio.png'),
          id: 8,
        },
        {
          name: 'Sagittarius',
          imgUrl: require('~/assets/img/home/choice/Sagittarius.png'),
          id: 9,
        },
        {
          name: 'Capricorn',
          imgUrl: require('~/assets/img/home/choice/Capricorn.png'),
          id: 10,
        },
        {
          name: 'Aquarius',
          imgUrl: require('~/assets/img/home/choice/Aquarius.png'),
          id: 11,
        },
        {
          name: 'Pisces',
          imgUrl: require('~/assets/img/home/choice/Pisces.png'),
          id: 12,
        },
      ],
      tabTitle: [
        { tabs: '' },
        { tabs: 'Man' },
        { tabs: 'Woman' },
        { tabs: 'Comratible' },
      ],
      openExpand: false,
      openStarsign: [
        { openIf: false },
        { openIf: false },
        { openIf: false },
        { openIf: false },
        { openIf: false },
        { openIf: false },
        { openIf: false },
        { openIf: false },
        { openIf: false },
        { openIf: false },
        { openIf: false },
        { openIf: false },
      ],
    }
  },
  async asyncData({ error, $apiList, params }) {
    try {
      let ids = params.id.replace(
          /^.*?(\d*)$/,
          (str, match, index) => match || '0'
        ),
        tabsDataList = null
      let [zodiacIData] = await Promise.all([
        $apiList.home
          .getZodiacDetails({
            origin: process.env.origin,
            id: params.id.replace(
              /^.*?(\d*)$/,
              (str, match, index) => match || '0'
            ),
          })
          .then((res) => {
            ids = res.id
            tabsDataList = res?.traits
            tabsDataList.push(res?.comp)
            return res
          }),
      ])
      return {
        zodiacIData,
        ids,
        tabsDataList,
      }
    } catch (e) {
      error({ statusCode: e.code, message: e.message })
    }
  },
  methods: {
    handleDropdownChange(option) {
      const selectValue =
        typeof option === 'object' && option !== null ? option.id : option
      this.getZodiacIData(selectValue)
      this.openExpand = false
      this.openStarsign.map((i) => (i.openIf = false))
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    getZodiacIData(id = null) {
      this.$apiList.home
        .getZodiacDetails({
          origin: process.env.origin,
          id: id,
        })
        .then((res) => {
          this.zodiacIData = res
          this.ids = res.id
          this.tabsDataList = res?.traits
          this.tabsDataList.push(res?.comp)
        })
    },
    setOpenExpand() {
      this.openExpand = !this.openExpand
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    setOpenStarsign(index) {
      this.openStarsign[index].openIf = !this.openStarsign[index].openIf
      const elements = this.$refs['starsign' + index][0]
      elements.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
          @keyframes fade-in {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              opacity: 1;
            }
          }
          .right_various {
            font-family: 'Rubik';
            font-size: 16px;
            line-height: 28px;
            color: rgba(255, 255, 255, 0.7);
            margin-top: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            position: relative;

            &.unfold_active {
              -webkit-line-clamp: unset;
              animation: fade-in 0.3s ease-in-out;
            }
          }
          .blank_space {
            color: #9747ff;
            text-decoration: underline;
            margin-top: 8px;
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
                .p_title {
                  display: inline-block;
                  width: 170px;
                  font-size: 16px;
                  line-height: 22px;
                  color: rgba(255, 255, 255, 0.7);
                }
                .p_texts {
                  flex: 1;
                  font-size: 20px;
                  line-height: 28px;
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
          .p_text {
            font-family: 'Rubik';
            font-size: 16px;
            line-height: 28px;
            margin-top: 8px;
            color: rgba(255, 255, 255, 0.7);
            :deep(h1),
            :deep(h2),
            :deep(h3),
            :deep(h4),
            :deep(h5) {
              color: #fff;
            }
            :deep(span),
            :deep(p) {
              color: rgba(255, 255, 255, 0.7) !important;
            }
          }
        }
        .starsign {
          .p_text {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            word-wrap: break-word;
            &.p_text_active {
              -webkit-line-clamp: unset;
            }
          }
          .openBtn {
            color: #9747ff;
            text-decoration: underline;
            margin-top: 8px;
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

@media (max-width: 1450px) {
  .zodiac_details {
    &_main {
      width: 100%;
      padding: 0 30px;
      .part_details {
        .introduce {
          .left_tab {
            width: 300px;
          }
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .zodiac_details {
    &_main {
      .part_details {
        .introduce {
          .left_tab {
            width: 230px;
          }
          .right_cont {
            flex: 1;
            .img_cont {
              height: 260px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1025px) {
  .zodiac_details {
    &_main {
      .part_details {
        .introduce {
          .left_tab {
            width: 170px;
            &_list {
              .imgs {
                display: none;
              }
            }
          }
        }
        .google_ad {
          width: 100%;
        }
      }
      .tab_control {
        width: 100%;
        .tab_main {
          width: 100%;
          padding: 0 50px;
        }
        .google_ad {
          width: 100%;
        }
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
              line-height: 24 * $pr;
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
                  .p_title {
                    width: 140 * $pr;
                    font-size: 14 * $pr;
                    line-height: 18 * $pr;
                  }
                  .p_texts {
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
            .p_text {
              font-size: 16 * $pr;
              line-height: 24 * $pr;
              margin-top: 8 * $pr;
            }
          }
          .starsign {
            .p_text {
              height: 120 * $pr;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 5;
              -webkit-box-orient: vertical;
              word-wrap: break-word;
              &.p_text_active {
                height: auto;
                -webkit-line-clamp: unset;
              }
            }
            .openBtn {
              color: #9747ff;
              text-decoration: underline;
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
