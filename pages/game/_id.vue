<template>
  <article class="game">
    <Loading v-show="show"></Loading>
    <div class="game__main">
      <section class="game__main__left">
        <div class="nav">
          <img class="first" src="~/assets/img/game/nav.svg" alt="nav" />
          <a :href="`${getIntersperseUrl}/#from=${$route.name}`" title="HOME"
            >Home</a
          >
          <img class="arrow" src="~/assets/img/game/arrow.png" alt="nav" />
          <a
            :href="`${getIntersperseUrl}/category/${gameInfo.category.toLowerCase()}/#from=${
              $route.name
            }`"
            >{{ gameInfo.category }}</a
          >
          <img class="arrow" src="~/assets/img/game/arrow.png" alt="nav" />
          <p class="name">{{ gameInfo.name }}</p>
        </div>
        <div class="main">
          <div class="banner">
            <swiper class="swiper" :options="swiperOptions">
              <swiper-slide
                class="swiper__item"
                v-for="(item, index) in gameInfo.banner"
                :key="index"
              >
                <nuxt-img
                  :src="item"
                  fit="cover"
                  width="640"
                  height="360"
                  alt="swiper"
                ></nuxt-img>
              </swiper-slide>
            </swiper>
          </div>
          <div class="pagination">
            <button class="btn pagination__prev common__btn"></button>
            <div class="pagination__page"></div>
            <button class="btn pagination__next common__btn"></button>
          </div>
          <game-info
            class="parent"
            :name="gameInfo.name"
            :desc="gameInfo.desc"
            @goToPage="goToPage"
          ></game-info>
          <google-auto-ad :id="'6150976776'" classNames="leftAd1" />
          <div class="module">
            <div class="module__title">RELATED GAMES</div>
            <div class="related">
              <home-latest
                v-for="item in gameList"
                :key="item.id"
                :item="item"
              ></home-latest>
            </div>
          </div>
          <google-auto-ad :id="'3524813435'" classNames="leftAd2" />
          <div class="info" id="download">
            <p class="info__title">Get The Game</p>
            <div class="info__main">
              <p>
                <span>OS :</span>
                <img
                  v-if="gameOs[0].visible"
                  src="~/assets/img/game/android.svg"
                  alt="android"
                />
                <img
                  v-if="gameOs[1].visible"
                  src="~/assets/img/game/ios.svg"
                  alt="ios"
                />
              </p>
              <p>
                <span>Version :</span>
                <span
                  >{{ gameOs[0].ver }}{{ gameOs | detectionArr
                  }}{{ gameOs[1].ver }}</span
                >
              </p>
              <p>
                <span>Size :</span>
                <span
                  >{{ gameOs[0].size }}{{ gameOs | detectionArr
                  }}{{ gameOs[1].size }}</span
                >
              </p>
              <p>
                <span>Updated :</span>
                <span
                  >{{ gameOs[0].updated }}{{ gameOs | detectionArr
                  }}{{ gameOs[1].updated }}</span
                >
              </p>
            </div>
            <div class="info__download">
              <a
                class="download"
                :href="`${getIntersperseUrl}/download/${href}-${gameInfo.id}`"
              >
                <img src="~/assets/img/game/download.svg" alt="download" />
                <span>Download</span>
              </a>
            </div>
            <p
              class="info__remark"
              :title="`* For reference, The ${gameInfo.name} game websites are all approved, there are no viruses and malware.`"
            >
              * For reference, The {{ gameInfo.name }} game websites are all
              approved, there are no viruses and malware.
            </p>
          </div>
          <div class="module">
            <div class="module__title">RECOMMEND GAMES</div>
            <div class="recommend">
              <home-hot
                v-for="item in recList"
                :key="item.id"
                :item="item"
              ></home-hot>
            </div>
            <div
              class="more"
              @click="
                searchRec.page < totalPageRec && !status && showMoreGame()
              "
              v-if="searchRec.page < totalPageRec || loadingRec"
            >
              <p class="more__text" v-if="!loadingRec">MORE GAMES</p>
              <div class="common__loading" v-else>
                <div class="common__loading__loader"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="game__main__right">
        <google-auto-ad :id="'2317890582'" classNames="rightAd" />
        <div class="best">Best Games</div>
        <div class="list">
          <home-best2
            class="active"
            v-for="item in bestList"
            :item="item"
            :key="item.id"
          ></home-best2>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Game',
  head() {
    return {
      title:
        'Taptogame－dedicated to the dreams and wonders of the young crowd, play with your own colors in the ' +
        this.gameInfo.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.gameInfo.desc,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.gameInfo.desc,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.gameInfo.desc,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'Taptogame－dedicated to the dreams and wonders of the young crowd, play with your own colors in the ' +
            this.gameInfo.name,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content:
            'Taptogame－dedicated to the dreams and wonders of the young crowd, play with your own colors in the ' +
            this.gameInfo.name,
        },
      ],
    }
  },
  data() {
    return {
      loadingRec: false,
      show: true,
      status: false,
      swiperOptions: {
        slidesPerView: 'auto',
        autoplay: {
          delay: 8000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.pagination__page',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            var customPaginationHtml = ''
            for (var i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if (i == current - 1) {
                customPaginationHtml +=
                  '<div class="swiper-pagination-customs swiper-pagination-customs-active"></div>'
              } else {
                customPaginationHtml +=
                  '<div class="swiper-pagination-customs"></div>'
              }
            }
            return customPaginationHtml
          },
        },
        navigation: {
          nextEl: '.pagination__next',
          prevEl: '.pagination__prev',
        },
        speed: 500,
        grabCursor: true,
      },
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  async asyncData({ error, $apiList, params, $utils }) {
    try {
      let gameList = [],
        gameInfo = null,
        gameOs = [
          {
            visible: false,
            name: 'Android',
            ver: null,
            size: null,
            updated: null,
            url: null,
          },
          {
            visible: false,
            name: 'IOS',
            ver: null,
            size: null,
            updated: null,
            url: null,
          },
        ],
        totalNumRec = 0,
        totalPageRec = 1,
        searchRec = {
          page: 1,
          size: 15,
        }
      let [appInfo, recList, bestList] = await Promise.all([
        $apiList.home
          .getGameDetail({
            origin: process.env.origin,
            site_id: process.env.origin,
            game_id: params.id.replace(
              /^.*?(\d*)$/,
              (str, match, index) => match || '0'
            ),
          })
          .then((res) => {
            return res || null
          }),
        $apiList.home
          .getGameRec({
            origin: process.env.origin,
            ...searchRec,
          })
          .then((res) => {
            totalNumRec = res.count
            totalPageRec =
              Math.ceil(totalNumRec / searchRec.size) === 0
                ? 1
                : Math.ceil(totalNumRec / searchRec.size)
            return $utils.shuffleArr(res.list) || []
          }),
        $apiList.home
          .getGameMenu({
            origin: process.env.origin,
            menu: 'best-games',
          })
          .then((res) => {
            res.list &&
              res.list.map((item) => {
                item.updated = $utils.formatDate(
                  new Date(item.updated * 1000),
                  'EE dd, YYYY'
                )
              })
            return res.list || []
          }),
      ])
      if (!appInfo.detail.banner) {
        appInfo.detail.banner = []
      } else {
        appInfo.detail.banner = appInfo.detail.banner.split(',')
      }
      appInfo.detail.os.split(',').map((item, index) => {
        if (item.toLowerCase() == 'android') {
          gameOs[0].visible = true
          gameOs[0].ver = appInfo.detail.version.split('/')[index]
          gameOs[0].size = appInfo.detail.apk_size.split('/')[index]
          gameOs[0].updated = $utils.formatDate(
            new Date(appInfo.detail.apk_updated.split('/')[index] * 1000),
            'EE dd, YYYY'
          )
        } else if (item.toLowerCase() == 'ios') {
          gameOs[1].visible = true
          gameOs[1].ver = appInfo.detail.version.split('/')[index]
          gameOs[1].size = appInfo.detail.apk_size.split('/')[index]
          gameOs[1].updated = $utils.formatDate(
            new Date(appInfo.detail.apk_updated.split('/')[index] * 1000),
            'EE dd, YYYY'
          )
        }
      })
      gameInfo = appInfo.detail
      gameList = appInfo.relate || []
      gameList &&
        gameList.map((item) => {
          item.updated = $utils.formatPast(item.updated * 1000, 'dd AA,YYYY')
        })
      return {
        gameOs,
        gameInfo,
        gameList,
        totalNumRec,
        totalPageRec,
        searchRec,
        recList,
        bestList,
      }
    } catch (e) {
      error({ statusCode: e.code, message: e.msg })
    }
  },
  computed: {
    ...mapGetters(['getIntersperseUrl']),
    href() {
      let href = this.gameInfo.name
        .replace(/[^a-zA-Z0-9\\s]/g, '-')
        .toLowerCase()
      return href
    },
  },
  mounted() {
    this.bestList = this.$utils.shuffleArr(this.bestList).slice(0, 10)
    this.$nextTick(() => {
      this.show = false
    })
  },
  methods: {
    showMoreGame() {
      this.loadingRec = true
      this.status = true
      this.searchRec.page += 1
      this.$apiList.home
        .getGameRec({
          origin: process.env.origin,
          ...this.searchRec,
        })
        .then((res) => {
          this.totalNumRec = res.count
          this.totalPageRec =
            Math.ceil(this.totalNumRec / this.searchRec.size) === 0
              ? 1
              : Math.ceil(this.totalNumRec / this.searchRec.size)
          res.list &&
            res.list.map((item) => {
              this.recList.push(item)
            })
          this.loadingRec = false
          this.status = false
        })
        .catch((error) => {
          console.log(error)
          this.searchRec.page -= 1
          this.loadingRec = false
          this.status = false
        })
    },
    goToPage() {
      let offsetTop =
        document.querySelector('#download').offsetTop -
        document.getElementsByClassName('leftAd2')[0].clientHeight
      window.scrollTo(0, offsetTop)
    },
  },
  filters: {
    detectionArr(arr) {
      let active = ''
      let index = arr.findIndex(({ visible }) => !visible)
      if (index !== -1) {
        active = ''
      } else {
        active = '/'
      }
      return active
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.game {
  &__main {
    margin: 0 auto;
    width: 1310px;
    padding-top: 33px;
    padding-right: 336px;
    position: relative;
    &__left {
      width: 100%;
      .nav {
        width: 100%;
        height: 40px;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        a {
          font-size: 14px;
          line-height: 18px;
          color: #aaabbd;
          -webkit-transition: color 0.3s;
          transition: color 0.3s;
          &:hover {
            color: #fff;
          }
        }
        .first {
          width: 20px;
          height: 20px;
          margin-right: 10px;
          margin-bottom: 2px;
        }
        .arrow {
          margin: 0 14px 2px 11px;
          width: 6px;
          height: 9px;
        }
        .name {
          font-size: 14px;
          line-height: 18px;
          margin-left: -2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .main {
        margin-top: 20px;
        padding-right: 80px;
        width: 100%;
        overflow: hidden;
        .banner {
          padding: 20px;
          width: 100%;
          height: 310px;
          background-color: #111216;
          border-radius: 24px;
          overflow: hidden;
          appearance: none;
          backface-visibility: hidden;
          transform: translate(0, 0, 0);
          -webkit-appearance: none;
          -webkit-backface-visibility: hidden;
          -webkit-transform: translate3d(0, 0, 0);
          .swiper {
            width: 100%;
            height: 100%;
            &__item {
              width: 480px;
              height: 100%;
              border-radius: 24px;
              overflow: hidden;
              appearance: none;
              backface-visibility: hidden;
              transform: translate(0, 0, 0);
              -webkit-appearance: none;
              -webkit-backface-visibility: hidden;
              -webkit-transform: translate3d(0, 0, 0);
              margin-right: 20px;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
              &:last-child {
                margin-right: 0;
              }
            }
          }
        }
        .pagination {
          margin-top: 10px;
          display: flex;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          height: 34px;
          .btn {
            width: 34px;
            height: 100%;
            border-radius: 50%;
            background-color: #242731;
            background-repeat: no-repeat;
            background-position: center;
            &:hover {
              background-color: #7a78ff;
            }
          }
          &__prev {
            background-image: url('~assets/img/home/prev.svg');
          }
          &__next {
            background-image: url('~assets/img/home/next.svg');
          }
          &__page {
            height: 100%;
            display: flex;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            width: auto;
            min-width: 126px;
            padding: 0 30px;
          }
          :deep(.swiper-pagination-customs) {
            width: 10px;
            height: 10px;
            margin-right: 10px;
            border: solid 2px transparent;
            border-radius: 50%;
            position: relative;
            &::before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              background-color: #aaabbd;
            }
            &:last-child {
              margin-right: 0;
            }
          }
          :deep(.swiper-pagination-customs-active) {
            border-color: #fe27ee;
            &::before {
              background-color: #000000;
            }
          }
        }
        .parent {
          margin-top: 20px;
        }
        .info {
          margin-top: 30px;
          background-color: #282a31;
          border-radius: 24px;
          padding: 37px 36px 25px;
          &__title {
            font-size: 24px;
            line-height: 1;
            color: #ffffff;
          }
          &__main {
            margin-top: 24px;
            display: flex;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            grid-gap: 20px 76px;
            p {
              display: flex;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              font-size: 14px;
              line-height: 20px;
              span:first-child {
                -webkit-flex-shrink: 0;
                flex-shrink: 0;
                color: #fff;
              }
              span:last-child {
                color: #aaabbd;
                padding-left: 7px;
              }
              img {
                height: 20px;
                margin-left: 7px;
              }
            }
          }
          &__download {
            margin-top: 40px;
            display: flex;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            .download {
              width: 164px;
              height: 42px;
              border-radius: 21px;
              display: flex;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: center;
              -webkit-justify-content: center;
              -ms-flex-pack: center;
              justify-content: center;
              background-color: #7a78ff;
              cursor: pointer;
              position: relative;
              span {
                padding-left: 10px;
                margin-top: 2px;
                font-size: 14px;
                color: #ffffff;
                line-height: 1;
              }
              &:hover {
                background-color: #8a88fc;
              }
            }
          }
          &__remark {
            margin-top: 38px;
            font-size: 14px;
            color: #aaabbd;
            line-height: 20px;
          }
        }
        .module {
          margin-top: 30px;
          &__title {
            height: 34px;
            line-height: 34px;
            font-family: BebasNeue-Regular;
            font-size: 28px;
            color: #ffffff;
          }
          .related {
            margin-top: 20px;
            background-color: #282a31;
            border-radius: 24px;
            padding: 40px 36px 30px;
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            grid-gap: 48px 30px;
            :deep(.item:nth-child(n + 15)) {
              display: none;
            }
          }
          .recommend {
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 30px;
          }
          .more {
            width: 164px;
            height: 42px;
            background: #111216;
            border-radius: 21px;
            margin: 20px auto 0;
            cursor: pointer;
            -webkit-transition: background 0.3s;
            transition: background 0.3s;
            display: flex;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            &__text {
              font-size: 12px;
              line-height: 1;
            }
            &:hover {
              background: #15161a;
            }
          }
        }
        .leftAd1 {
          margin-top: 30px;
        }
        .leftAd2 {
          margin-top: 30px;
        }
      }
    }
    &__right {
      padding-top: 94px;
      position: absolute;
      right: 0;
      top: 0;
      width: 336px;
      .rightAd {
        width: 100%;
      }
      .best {
        font-family: BebasNeue-Regular;
        font-size: 34px;
        line-height: 41px;
        margin: 40px 0 20px;
      }
      .list {
        width: 100%;
        .item {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
@media (max-width: 1370px) {
  .game {
    &__main {
      padding: 33px 380px 0 30px;
      width: 100%;
      &__left {
        .main {
          padding-right: 5.772vw;
          .module {
            .related {
              grid-template-columns: repeat(6, 1fr);
              :deep(.item:nth-child(n + 13)) {
                display: none;
              }
            }
            .recommend {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        }
      }
      &__right {
        right: 30px;
      }
    }
  }
}
@media (max-width: 1237px) {
  .game {
    &__main {
      &__left {
        .main {
          .module {
            .related {
              grid-template-columns: repeat(5, 1fr);
              :deep(.item:nth-child(n + 11)) {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1104px) {
  .game {
    &__main {
      &__left {
        .main {
          .module {
            .related {
              grid-template-columns: repeat(4, 1fr);
              :deep(.item:nth-child(n + 9)) {
                display: none;
              }
            }
            .recommend {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        }
      }
    }
  }
}
@media (max-width: 980px) {
  .game {
    &__main {
      padding: 33px 30px 0 30px;
      &__left {
        .main {
          padding-right: 0;
          .module {
            .related {
              grid-template-columns: repeat(7, 1fr);
              :deep(.item:nth-child(n + 9)) {
                display: block;
              }
              :deep(.item:nth-child(n + 15)) {
                display: none;
              }
            }
            .recommend {
              grid-template-columns: repeat(5, 1fr);
            }
          }
        }
      }
      &__right {
        display: none;
      }
    }
  }
}
@media (max-width: 865px) {
  .game {
    &__main {
      &__left {
        .main {
          .module {
            .related {
              grid-template-columns: repeat(6, 1fr);
              :deep(.item:nth-child(n + 13)) {
                display: none;
              }
            }
            .recommend {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        }
      }
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .game {
    &__main {
      padding: 0;
      &__left {
        .nav {
          display: none;
        }
        .main {
          margin-top: 24 * $pr;
          .banner {
            width: calc(100% - 55 * $pr);
            margin: 0 auto;
            padding: 0;
            height: 180 * $pr;
            border-radius: 16 * $pr;
            .swiper {
              &__item {
                width: 100%;
                border-radius: 16 * $pr;
                margin-right: 10 * $pr;
              }
            }
          }
          .pagination {
            margin-top: 8 * $pr;
            height: 10 * $pr;
            .btn {
              display: none;
            }
            &__page {
              min-width: auto;
              padding: 0;
            }
            :deep(.swiper-pagination-customs) {
              width: 10 * $pr;
              height: 10 * $pr;
              margin-right: 8 * $pr;
              border: solid 2 * $pr transparent;
              border-radius: 50%;
              position: relative;
              &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #aaabbd;
              }
            }
            :deep(.swiper-pagination-customs-active) {
              border-color: #fe27ee;
              &::before {
                background-color: #000000;
              }
            }
          }
          .parent {
            margin: 20 * $pr auto 0;
            width: calc(100% - 46 * $pr);
          }
          .info {
            width: calc(100% - 46 * $pr);
            margin: 20 * $pr auto 0;
            border-radius: 16 * $pr;
            padding: 28 * $pr 23 * $pr 31 * $pr;
            &__title {
              font-size: 20 * $pr;
            }
            &__main {
              margin-top: 21 * $pr;
              grid-gap: 0;
              p {
                min-width: 100%;
                font-size: 14 * $pr;
                line-height: 30 * $pr;
                -webkit-align-items: flex-start;
                -webkit-box-align: start;
                -ms-flex-align: start;
                align-items: flex-start;
                span:last-child {
                  padding-left: 9 * $pr;
                }
                img {
                  margin-top: 5 * $pr;
                  height: 20 * $pr;
                  margin-left: 9 * $pr;
                }
              }
            }
            &__download {
              margin-top: 24 * $pr;
              .download {
                width: 164 * $pr;
                height: 42 * $pr;
                border-radius: 21 * $pr;
                img {
                  height: 20 * $pr;
                }
                span {
                  padding-left: 10 * $pr;
                  margin-top: 2 * $pr;
                  font-size: 14 * $pr;
                }
              }
            }
            &__remark {
              margin-top: 32 * $pr;
              font-size: 14 * $pr;
              line-height: 20 * $pr;
            }
          }
          .leftAd2 {
            margin-top: 20 * $pr;
            :deep(.title) {
              padding-left: 23 * $pr;
            }
          }
          .module {
            width: calc(100% - 46 * $pr);
            margin: 20 * $pr auto 0;
            &__title {
              height: 34 * $pr;
              line-height: 34 * $pr;
              font-size: 28 * $pr;
            }
            .related {
              margin-top: 6 * $pr;
              border-radius: 16 * $pr;
              padding: 35 * $pr 17 * $pr 32 * $pr;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 28 * $pr 30 * $pr;
              :deep(.item) {
                .name {
                  margin-bottom: 0;
                }
                .time {
                  display: none;
                }
              }
              :deep(.item:nth-child(n + 10)) {
                display: none;
              }
            }
            .recommend {
              margin-top: 6 * $pr;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 14 * $pr 12 * $pr;
            }
            .more {
              width: 120 * $pr;
              height: 30 * $pr;
              border-radius: 15 * $pr;
              margin: 10 * $pr auto 0;
              &__text {
                font-size: 12 * $pr;
              }
            }
          }
          .leftAd1 {
            margin-top: 20 * $pr;
            :deep(.title) {
              padding-left: 23 * $pr;
            }
          }
        }
      }
    }
  }
}
</style>
