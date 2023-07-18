<template>
  <div class="details_content">
    <div class="details_type">
      <div class="details_type_main">
        <div class="pull_down">
          <el-selected
            :options="tabList"
            :pint="ids"
            @change="handleDropdownChange"
          ></el-selected>
        </div>
        <div class="details">
          <div class="details_left">
            <p class="title">
              {{
                zodiacIData.name.toUpperCase() +
                '&ensp;' +
                setTitleCrumbs().title
              }}
            </p>
            <a :href="`${getIntersperseUrl}${$route.path}`" class="crumbs">
              {{
                setTitleCrumbs(zodiacIData.name).crumbs + pairingDetailsCrumbs
              }}
            </a>
            <div class="details_left_text">
              <div class="_item" v-if="$route.path.includes('career')">
                <h4>{{ `${zodiacIData.name.toUpperCase()} Career` }}</h4>
                <div class="p_text" v-html="tabsDataList[0].career"></div>
              </div>
              <div class="lover" v-if="$route.path.includes('lover')">
                <div class="_item" v-show="tabsDataList[0].lover">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Lover` }}</h4>
                  <div class="p_text" v-html="tabsDataList[0].lover"></div>
                </div>
                <div class="_item" v-show="tabsDataList[0].love_reasons">
                  <h4>
                    {{
                      `The 5 Top Reasons to Love Being an ${zodiacIData.name.toUpperCase()}`
                    }}
                  </h4>
                  <div
                    class="p_text"
                    v-html="tabsDataList[0].love_reasons"
                  ></div>
                </div>
              </div>
              <div class="healthy" v-if="$route.path.includes('health')">
                <div class="_item" v-show="tabsDataList[0].health">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Healthy` }}</h4>
                  <div class="p_text" v-html="tabsDataList[0].health"></div>
                </div>
              </div>
              <div class="man" v-if="$route.path.includes('male')">
                <div class="_item" v-if="tabsDataList[1].traits">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Traits` }}</h4>
                  <div class="p_text" v-html="tabsDataList[1].traits"></div>
                </div>
                <div class="_item" v-if="tabsDataList[1].career">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Career` }}</h4>
                  <div class="p_text" v-html="tabsDataList[1].career"></div>
                </div>
                <div class="_item" v-if="tabsDataList[1].lover">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Lover` }}</h4>
                  <div class="p_text" v-html="tabsDataList[1].lover"></div>
                </div>
                <div class="_item" v-if="tabsDataList[1].health">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Healthy` }}</h4>
                  <div class="p_text" v-html="tabsDataList[1].health"></div>
                </div>
                <div class="_item" v-if="tabsDataList[1].love_reasons">
                  <h4>
                    {{
                      `The 5 Top Reasons to Love Being an ${zodiacIData.name.toUpperCase()}`
                    }}
                  </h4>
                  <div
                    class="p_text"
                    v-html="tabsDataList[1].love_reasons"
                  ></div>
                </div>
                <div class="_item" v-if="tabsDataList[1].positives">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Positivesy` }}</h4>
                  <div class="p_text" v-html="tabsDataList[1].positives"></div>
                </div>
                <div class="_item" v-if="tabsDataList[1].negatives">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Negativesy` }}</h4>
                  <div class="p_text" v-html="tabsDataList[1].negatives"></div>
                </div>
                <div class="_item" v-if="tabsDataList[1].in_love">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} In Love` }}</h4>
                  <div class="p_text" v-html="tabsDataList[1].in_love"></div>
                </div>
                <div class="_item" v-if="tabsDataList[1].attract">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Attracty` }}</h4>
                  <div class="p_text" v-html="tabsDataList[1].attract"></div>
                </div>
              </div>
              <div class="woman" v-if="$route.path.includes('woman')">
                <div class="_item" v-if="tabsDataList[2].traits">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Traits` }}</h4>
                  <div class="p_text" v-html="tabsDataList[2].traits"></div>
                </div>
                <div class="_item" v-if="tabsDataList[2].career">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Career` }}</h4>
                  <div class="p_text" v-html="tabsDataList[2].career"></div>
                </div>
                <div class="_item" v-if="tabsDataList[2].lover">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Lover` }}</h4>
                  <div class="p_text" v-html="tabsDataList[2].lover"></div>
                </div>
                <div class="_item" v-if="tabsDataList[2].health">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Healthy` }}</h4>
                  <div class="p_text" v-html="tabsDataList[2].health"></div>
                </div>
                <div class="_item" v-if="tabsDataList[2].love_reasons">
                  <h4>
                    {{
                      `The 5 Top Reasons to Love Being an ${zodiacIData.name.toUpperCase()}`
                    }}
                  </h4>
                  <div
                    class="p_text"
                    v-html="tabsDataList[2].love_reasons"
                  ></div>
                </div>
                <div class="_item" v-if="tabsDataList[2].positives">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Positivesy` }}</h4>
                  <div class="p_text" v-html="tabsDataList[2].positives"></div>
                </div>
                <div class="_item" v-if="tabsDataList[2].negatives">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Negativesy` }}</h4>
                  <div class="p_text" v-html="tabsDataList[2].negatives"></div>
                </div>
                <div class="_item" v-if="tabsDataList[2].in_love">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} In Love` }}</h4>
                  <div class="p_text" v-html="tabsDataList[2].in_love"></div>
                </div>
                <div class="_item" v-if="tabsDataList[2].attract">
                  <h4>{{ `${zodiacIData.name.toUpperCase()} Attracty` }}</h4>
                  <div class="p_text" v-html="tabsDataList[2].attract"></div>
                </div>
              </div>
              <div
                class="comratible"
                v-if="
                  $route.path.includes('comratible') &&
                  !currentPairingDetailsData
                "
              >
                <div class="comratible_select">
                  <el-sign-comratible
                    :ids="ids"
                    v-for="(item, index) in signComp"
                    :key="index"
                    :sub="item"
                    @click="currentPairingDetails"
                  ></el-sign-comratible>
                </div>
              </div>
              <div class="comratible_details" v-if="currentPairingDetailsData">
                <div class="_item">
                  <h4>
                    {{
                      `${zodiacIData.name.toUpperCase()} & ${
                        pairingDetailsText || ''
                      }`
                    }}
                  </h4>
                  <div
                    class="p_text"
                    v-html="currentPairingDetailsData[1] || ''"
                  ></div>
                </div>
                <div class="back">
                  <button class="button" @click="onBack">Back</button>
                </div>
              </div>
            </div>
            <google-ad classNames="google_ad"></google-ad>
          </div>
          <div class="details_right">
            <el-select-menu
              :names="zodiacIData.name"
              :paths="zodiacIData.name"
              :ids="ids"
            ></el-select-menu>
            <google-auto-ad classNames="google_ad" />
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <el-loading v-if="isLoading"></el-loading>
    </transition>
    <tarot-all-tarot></tarot-all-tarot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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
      currentPairingDetailsData: null,
      isLoading: false,
      isSetTimes: null,
      pairingDetailsCrumbs: '',
      pairingDetailsText: '',
    }
  },
  async asyncData({ error, $apiList, params }) {
    try {
      let ids = params.id.replace(
          /^.*?(\d*)$/,
          (str, match, index) => match || '0'
        ),
        tabsDataList = null,
        pathName = params.id,
        signComp = null
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
            signComp = Object.entries(res?.comp)
            return res
          }),
      ])
      return {
        zodiacIData,
        ids,
        tabsDataList,
        pathName,
        signComp,
      }
    } catch (e) {
      error({ statusCode: e.code, message: e.message })
    }
  },
  computed: {
    ...mapGetters(['getIntersperseUrl']),
  },
  mounted() {},
  methods: {
    handleDropdownChange(option) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      this.isLoading = true
      const pathNames = this.pathName.substring(0, this.pathName.indexOf('-'))
      window.location.href = `${this.getIntersperseUrl}/zodiac/type/${pathNames}-${option.id}/`
    },

    setTitleCrumbs(name = 'aries') {
      const text = {
        title: '',
        crumbs: '',
      }
      const pathNames = this.pathName.substring(0, this.pathName.indexOf('-'))
      const libra = pathNames == 'male' ? 'man' : pathNames
      text.title = libra.charAt(0).toUpperCase() + libra.slice(1)
      const namep = name?.charAt(0).toUpperCase() + name?.slice(1)
      text.crumbs = namep + ' / ' + namep + ' ' + text.title
      return text
    },

    currentPairingDetails(text) {
      this.isLoading = true
      this.isSetTimes = setTimeout(() => {
        this.currentPairingDetailsData = text
        this.isLoading = false
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }, 500)
      this.currentPairingDetailsCrumbs(text)
    },
    onBack() {
      this.isLoading = true
      window.location.href = `${this.getIntersperseUrl}${this.$route.path}`
    },
    currentPairingDetailsCrumbs(text) {
      this.pairingDetailsCrumbs = ` / ${
        text[0].charAt(0).toUpperCase() + text[0].slice(1)
      }`
      this.pairingDetailsText =
        text[0].charAt(0).toUpperCase() + text[0].slice(1)
    },
  },
  destroyed() {
    if (this.isSetTimes) clearTimeout(this.isSetTimes)
  },
}
</script>

<style lang="scss" scoped>
.details_content {
  width: 100%;
  padding-bottom: 96px;
  .details_type {
    margin: 0 auto;
    width: 1400px;
    padding-top: 48px;
    &_main {
      position: relative;
      .pull_down {
        width: 220px;
        position: absolute;
        top: 0;
        left: 708px;
      }
      .details {
        display: flex;
        height: auto;
        &_left {
          width: 928px;
          .title {
            color: #fff;
            font-family: 'Cinzel Decorative';
            font-size: 36px;
            font-style: normal;
            font-weight: 700;
            line-height: 48px;
          }
          .crumbs {
            color: var(--9747-ff, #9747ff);
            font-family: 'Rubik';
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 30px;
          }
          &_text {
            ._item {
              padding-top: 24px;
              text-align: initial;
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
                color: rgba(255, 255, 255, 0.85);
                :deep(h1),
                :deep(h2),
                :deep(h3),
                :deep(h4),
                :deep(h5) {
                  color: #fff;
                }
                :deep(span),
                :deep(p) {
                  color: rgba(255, 255, 255, 0.85) !important;
                }
              }
            }
            .comratible {
              padding-top: 24px;
              &_select {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 24px 48px;
              }
            }
            .comratible_details {
              .back {
                display: grid;
                place-items: center;
                .button {
                  padding: 8px 50px;
                  border-radius: 42px;
                  background: #fff;
                  color: #000;
                  font-family: 'Rubik';
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 18px;
                }
              }
            }
          }
          .google_ad {
            width: 100%;
            height: 250px;
            margin-top: 96px;
          }
        }
        &_right {
          flex: 1;
          padding-left: 48px;
          .google_ad {
            width: 100%;
            margin-top: 24px;
            background-color: rgba(255, 255, 255, 0.2);
          }
        }
      }
    }
  }
}
</style>
