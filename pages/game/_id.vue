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
            <div class="info__download pc">
              <a class="download" :href="`${getIntersperseUrl}/download/${href}-${gameInfo.id}`">
                <img src="~/assets/img/game/download.svg" alt="download" />
                <span>Download</span>
                <!-- <div class="code">
                  <div class="code__item" v-if="gameOs[0].url">
                    <p>Android</p>
                    <div class="code__img" id="androidCode"></div>
                  </div>
                  <div class="code__item" v-if="gameOs[1].url">
                    <p>IOS</p>
                    <div class="code__img" id="iosCode"></div>
                  </div>
                </div> -->
              </a>
            </div>
            <div class="info__download h5">
              <a class="download" :href="`${getIntersperseUrl}/download/${href}-${gameInfo.id}`">
                <img src="~/assets/img/game/download.svg" alt="download" />
                <span>Download</span>
              </a>
              <!-- <a
                class="android common__btn"
                :href="gameOs[0].url"
                title="Android"
                v-if="gameOs[0].visible"
              >
                <img src="~/assets/img/game/android.svg" alt="android" />
                <span>Android</span>
              </a>
              <a
                class="ios common__btn"
                :href="gameOs[1].url"
                title="IOS"
                v-if="gameOs[1].visible"
              >
                <img src="~/assets/img/game/ios.svg" alt="ios" />
                <span>IOS</span>
              </a> -->
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
          <div class="comment">
            <p class="comment__title">COMMENT</p>
            <div class="comment__box">
              <input
                type="text"
                v-model="form.nick"
                placeholder="Fill in your name"
              />
              <textarea
                v-model="form.comment"
                cols="30"
                rows="10"
                placeholder="Add a comment..."
              ></textarea>
              <button class="common__btn" @click="!status && submit()">
                Submit
              </button>
              <ul class="message">
                <li
                  class="message__li"
                  v-for="(item, index) in commentList"
                  :key="index"
                >
                  <div class="top">
                    <span :title="item.nick">{{ item.nick }}</span>
                    <span>{{ item.updated_at }}</span>
                  </div>
                  <p class="text" :title="item.comment">{{ item.comment }}</p>
                </li>
              </ul>
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
      script: [
        {
          type: 'text/javascript',
          src: '/js/qrcode.min.js',
        },
      ],
    }
  },
  data() {
    return {
      loadingRec: false,
      show: true,
      status: false,
      form: {
        nick: '',
        comment: '',
      },
      qrcodeObj1: {},
      qrcodeObj2: {},
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
      bestList: [],
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
        totalNum = 0,
        totalPage = 1,
        search = {
          page: 1,
          size: 5,
        },
        totalNumRec = 0,
        totalPageRec = 1,
        searchRec = {
          page: 1,
          size: 15,
        }
      let [appInfo, recList, commentList] = await Promise.all([
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
          .getGameComment({
            origin: process.env.origin,
            game_id: params.id.replace(
              /^.*?(\d*)$/,
              (str, match, index) => match || '0'
            ),
            ...search,
          })
          .then((res) => {
            return res || []
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
          gameOs[0].url = appInfo.detail.url.split(',')[index]
        } else if (item.toLowerCase() == 'ios') {
          gameOs[1].visible = true
          gameOs[1].ver = appInfo.detail.version.split('/')[index]
          gameOs[1].size = appInfo.detail.apk_size.split('/')[index]
          gameOs[1].updated = $utils.formatDate(
            new Date(appInfo.detail.apk_updated.split('/')[index] * 1000),
            'EE dd, YYYY'
          )
          gameOs[1].url = appInfo.detail.url.split(',')[index]
        }
      })
      gameInfo = appInfo.detail
      gameList = appInfo.relate || []
      gameList &&
        gameList.map((item) => {
          item.updated = $utils.formatPast(item.updated * 1000, 'dd AA,YYYY')
        })
      commentList.map((item) => {
        item.updated_at = $utils.formatDate(
          new Date(item.updated_at * 1000),
          'dd AA,YYYY'
        )
      })
      return {
        gameOs,
        gameInfo,
        gameList,
        totalNumRec,
        totalPageRec,
        searchRec,
        recList,
        totalNum,
        totalPage,
        search,
        commentList,
      }
    } catch (e) {
      error({ statusCode: e.code, message: e.msg })
    }
  },
  computed: {
    ...mapGetters(['getIntersperseUrl']),
    href() {
      let href = this.gameInfo.name.replace(/[^a-zA-Z0-9\\s]/g, '-').toLowerCase()
      return href
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.show = false
    })
    this.getBestGame()
  },
  methods: {
    submit() {
      let regNick = /^.{2,}$/
      let regComment = /^.{6,}$/
      if (
        !this.form.nick.replace(/\s+/g, '') ||
        !regNick.test(this.form.nick.replace(/\s+/g, ''))
      ) {
        this.$store.dispatch('toast', {
          type: 'warning',
          msg: 'Name is required and the length cannot be less than 2',
        })
      } else if (
        !this.form.comment.replace(/\s+/g, '') ||
        !regComment.test(this.form.comment.replace(/\s+/g, ''))
      ) {
        this.$store.dispatch('toast', {
          type: 'warning',
          msg: 'Comment is required and the length cannot be less than 6',
        })
      } else {
        this.status = true
        let data = {
          origin: process.env.origin,
          game_id: Number(
            this.$route.params.id.replace(
              /^.*?(\d*)$/,
              (str, match, index) => match || '0'
            )
          ),
          ...this.form,
        }
        this.$apiList.home
          .postGameComment(data)
          .then(() => {
            this.$store.dispatch('toast', {
              type: 'success',
              msg: 'Comment successful',
            })
            this.getComment()
            this.status = false
          })
          .catch(() => {
            this.$store.dispatch('toast', {
              type: 'error',
              msg: 'Comment failure',
            })
            this.status = false
          })
      }
    },
    getComment() {
      this.$apiList.home
        .getGameComment({
          origin: process.env.origin,
          game_id: this.$route.params.id.replace(
            /^.*?(\d*)$/,
            (str, match, index) => match || '0'
          ),
          ...this.search,
        })
        .then((res) => {
          let list = res || []
          list.map((item) => {
            item.updated_at = this.$utils.formatDate(
              new Date(item.updated_at * 1000),
              'dd AA,YYYY'
            )
          })
          this.commentList = list
        })
        .catch(() => {
          this.$store.dispatch('toast', {
            type: 'error',
            msg: 'No comment data was obtained',
          })
          this.status = false
        })
    },
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
    getBestGame() {
      this.$apiList.home
        .getGameMenu({
          origin: process.env.origin,
          menu: 'best-games',
        })
        .then((res) => {
          if (res.list) {
            res.list.map((item) => {
              item.updated = this.$utils.formatDate(
                new Date(item.updated * 1000),
                'EE dd, YYYY'
              )
            })
            res.list = this.$utils.shuffleArr(res.list).slice(0, 10)
          }
          this.bestList = res.list || []
        })
        .catch((error) => {
          console.log(error)
        })
    },
    goToPage() {
      let offsetTop = document.querySelector('#download').offsetTop - document.getElementsByClassName("leftAd2")[0].clientHeight
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
              .code {
                -webkit-transition: opacity 0.3s, visibility 0.3s;
                transition: opacity 0.3s, visibility 0.3s;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                bottom: -170px;
                padding: 25px 30px 30px;
                height: 165px;
                border-radius: 16px;
                background-color: #fff;
                display: flex;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                gap: 0 30px;
                &__item {
                  width: 90px;
                  height: 100%;
                  p {
                    width: 100%;
                    font-size: 14px;
                    line-height: 20px;
                    color: #000000;
                    text-align: center;
                  }
                  .code__img {
                    width: 100%;
                    height: 90px;
                  }
                }
              }
              &:hover {
                background-color: #8a88fc;
                // .code {
                //   opacity: 1;
                //   visibility: visible;
                //   z-index: 1;
                // }
              }
            }
            a {
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
              img {
                margin-bottom: 2px;
              }
              span {
                padding-left: 10px;
                margin-top: 2px;
                font-size: 14px;
                color: #ffffff;
                line-height: 1;
              }
              &.android {
                background-color: #7ac450;
                &:hover {
                  background-color: #96ef63;
                }
              }
              &.ios {
                background-color: #3f8cff;
                &:hover {
                  background-color: #70a9ff;
                }
              }
              &:nth-child(2) {
                margin-left: 20px;
              }
            }
            &.h5 {
              display: none;
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
        .comment {
          margin-top: 30px;
          &__title {
            font-family: BebasNeue-Regular;
            font-size: 28px;
            line-height: 34px;
          }
          &__box {
            margin-top: 20px;
            background-color: #282a31;
            border-radius: 16px;
            padding: 56px 70px 34px;
            display: flex;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            input {
              width: 270px;
              height: 40px;
              background-color: rgba(0, 0, 0, 0.45);
              border-radius: 20px;
              font-size: 14px;
              color: #aaabbd;
              padding: 0 20px;
            }
            textarea {
              margin-top: 20px;
              width: 100%;
              background-color: rgba(0, 0, 0, 0.45);
              height: 147px;
              border-radius: 20px;
              font-size: 14px;
              line-height: 18px;
              color: #aaabbd;
              padding: 12px 20px;
              resize: none;
            }
            button {
              margin-top: 25px;
              width: 192px;
              height: 46px;
              background-color: #6c5dd3;
              border-radius: 4px;
              font-size: 14px;
              color: #ffffff;
              &:hover {
                background-color: #7a78ff;
              }
            }
            .message {
              width: 100%;
              margin-top: 30px;
              &__li {
                margin-top: 30px;
                border-bottom: 1px solid #2e323d;
                padding-bottom: 24px;
                .top {
                  display: flex;
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  font-size: 14px;
                  line-height: 1;
                  span:first-child {
                    color: #ffffff;
                    padding-left: 6px;
                  }
                  span:last-child {
                    padding-left: 8px;
                    color: #aaabbd;
                  }
                }
                .text {
                  padding-left: 5px;
                  margin-top: 14px;
                  font-size: 14px;
                  line-height: 18px;
                  color: #aaabbd;
                }
                &:last-child {
                  border-bottom: none;
                }
              }
            }
          }
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
          .comment {
            &__box {
              padding: 56px 36px 34px;
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
          .info {
            &__download {
              &.pc {
                display: none;
              }
              &.h5 {
                display: flex;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
              }
            }
          }
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
      padding: 0 23 * $pr;
      &__left {
        .nav {
          display: none;
        }
        .main {
          margin-top: 24 * $pr;
          .banner {
            width: calc(100% - 9 * $pr);
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
            margin-top: 20 * $pr;
          }
          .info {
            margin-top: 20 * $pr;
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
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              a {
                width: 164 * $pr;
                height: 42 * $pr;
                border-radius: 21 * $pr;
                img {
                  height: 20 * $pr;
                  margin-bottom: 2 * $pr;
                }
                span {
                  padding-left: 10 * $pr;
                  margin-top: 2 * $pr;
                  font-size: 14 * $pr;
                }
                &:nth-child(2) {
                  margin-left: 0;
                  margin-top: 20 * $pr;
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
          }
          .module {
            margin-top: 20 * $pr;
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
          }
          .comment {
            margin-top: 20 * $pr;
            &__title {
              font-size: 28 * $pr;
              line-height: 34 * $pr;
            }
            &__box {
              margin-top: 6 * $pr;
              border-radius: 16 * $pr;
              padding: 31 * $pr 23 * $pr 17 * $pr;
              input {
                width: 100%;
                height: 38 * $pr;
                border-radius: 19 * $pr;
                font-size: 14 * $pr;
                padding: 0 19 * $pr;
              }
              textarea {
                margin-top: 21 * $pr;
                height: 148 * $pr;
                border-radius: 20 * $pr;
                font-size: 14 * $pr;
                line-height: 20 * $pr;
                padding: 10 * $pr 19 * $pr;
              }
              button {
                margin-top: 24 * $pr;
                width: 100%;
                height: 46 * $pr;
                border-radius: 4 * $pr;
                font-size: 14 * $pr;
              }
              .message {
                margin-top: 30 * $pr;
                &__li {
                  margin-top: 30 * $pr;
                  border-bottom: 1 * $pr solid #2e323d;
                  padding-bottom: 16 * $pr;
                  .top {
                    font-size: 14 * $pr;
                    span:first-child {
                      padding-left: 0;
                    }
                    span:last-child {
                      padding-left: 8 * $pr;
                    }
                  }
                  .text {
                    padding-left: 0;
                    margin-top: 14 * $pr;
                    font-size: 14 * $pr;
                    line-height: 18 * $pr;
                  }
                  &:nth-child(n + 2) {
                    margin-top: 21 * $pr;
                  }
                  &:last-child {
                    border-bottom: 1 * $pr solid #2e323d;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
