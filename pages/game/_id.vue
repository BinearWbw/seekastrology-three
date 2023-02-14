<template>
  <article class="game">
    <Loading v-show="show"></Loading>
    <div class="game__main">
      <section class="game__main__left">
        <div class="nav">
          <img class="first" src="~/assets/img/game/nav.svg" alt="nav" />
          <a :href="`${getIntersperseUrl}/?from=${path}`" title="HOME">Home</a>
          <img class="arrow" src="~/assets/img/game/arrow.png" alt="nav" />
          <a
            :href="`${getIntersperseUrl}/category/${gameInfo.category}/?from=${path}`"
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
                <img :src="$config.cdnUrl + item" alt="swiper" />
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
          ></game-info>
          <home-list class="module" :title="'RELATED GAMES'">
            <home-latest
              v-for="item in gameList"
              :item="item"
              :key="item.id"
            ></home-latest>
          </home-list>
          <div class="info">
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
              <div class="download">
                <img src="~/assets/img/game/download.svg" alt="download" />
                <span>Download</span>
                <div class="code">
                  <div class="code__item" v-if="gameOs[0].url">
                    <p>Android</p>
                    <div class="code__img" id="androidCode"></div>
                  </div>
                  <div class="code__item" v-if="gameOs[1].url">
                    <p>IOS</p>
                    <div class="code__img" id="iosCode"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="info__download h5">
              <a
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
          <google-ad :id="'ID1-h5'" classNames="h5ad" />
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
        <google-ad :id="'ID1-pc'" classNames="ad" />
        <div class="best">Best Games</div>
        <div class="list">
          <home-best2
            class="active"
            v-for="item in recommendList.slice(0, 10)"
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
        }
      let [appInfo, recommendList, commentList] = await Promise.all([
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
            size: 6,
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
        recommendList,
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
    path() {
      let path = ''
      if (this.$route.path == '/') {
        path = 'home'
      } else {
        path = this.$route.path.replace(/[^a-zA-Z0-9\\s]/g, '-').toLowerCase()
        path = path.substring(1, path.length)
      }
      return path
    },
    ...mapGetters(['getIntersperseUrl']),
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
  },
  mounted() {
    this.$nextTick(() => {
      if (this.gameOs[0].url) {
        this.qrcodeObj1 = new QRCode('androidCode', {
          text: this.gameOs[0].url,
          width: 90,
          height: 90,
          colorDark: '#000',
          colorLight: '#fff',
          correctLevel: QRCode.CorrectLevel.H,
        })
      }
      if (this.gameOs[1].url) {
        this.qrcodeObj2 = new QRCode('iosCode', {
          text: this.gameOs[1].url,
          width: 90,
          height: 90,
          colorDark: '#000',
          colorLight: '#fff',
          correctLevel: QRCode.CorrectLevel.H,
        })
      }
      this.show = false
    })
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
          color: #808191;
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
              background-color: #808191;
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
                color: #808191;
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
                .code {
                  opacity: 1;
                  visibility: visible;
                  z-index: 1;
                }
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
            color: #808191;
            line-height: 20px;
          }
        }
        .h5ad {
          display: none;
        }
        .module {
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
              color: #808191;
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
              color: #808191;
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
                    color: #808191;
                  }
                }
                .text {
                  padding-left: 5px;
                  margin-top: 14px;
                  font-size: 14px;
                  line-height: 18px;
                  color: #808191;
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
      .ad {
        height: 305px;
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
            :deep(.scroll__bottom .list) {
              --grid-num: 6;
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
@media (max-width: 1104px) {
  .game {
    &__main {
      &__left {
        .main {
          .module {
            :deep(.scroll__bottom .list) {
              --grid-num: 5;
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
            :deep(.scroll__bottom .list) {
              --grid-num: 7;
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
            padding: 0;
            height: 171 * $pr;
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
                background-color: #808191;
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
          .h5ad {
            margin-top: 20 * $pr;
            display: block;
            width: 100%;
            height: 100 * $pr;
            border-radius: 16 * $pr;
            background: #000000;
          }
          .module {
            margin-top: 20 * $pr;
            :deep(.scroll__bottom .list) {
              --grid-num: 3;
            }
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
