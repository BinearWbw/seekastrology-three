<template>
  <article class="game">
    <div class="game__main">
      <section class="game__main__left">
        <div class="nav">
          <img class="first" src="~/assets/img/game/nav.svg" alt="nav" />
          <a href="/" title="HOME">Home</a>
          <img class="arrow" src="~/assets/img/game/arrow.png" alt="nav" />
          <a :href="`/category/${gameInfo.category}`">{{
            gameInfo.category
          }}</a>
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
                <img :src="$config.imgUrl + item" alt="swiper" />
              </swiper-slide>
            </swiper>
          </div>
          <div class="pagination">
            <button class="btn pagination__prev common__btn"></button>
            <div class="pagination__page"></div>
            <button class="btn pagination__next common__btn"></button>
          </div>
          <game-info
            class="explain1"
            :name="gameInfo.name"
            :desc="gameInfo.desc"
          ></game-info>
          <div class="info">
            <p class="info__title">Get The Game</p>
            <div class="info__main">
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
                class="andriod common__btn"
                :href="gameOs[0].url"
                title="Andriod"
                v-if="gameOs[0].visible"
              >
                <img src="~/assets/img/game/andriod.png" alt="andriod" />
                <span>Andriod</span>
              </a>
              <a
                class="ios common__btn"
                :href="gameOs[1].url"
                title="IOS"
                v-if="gameOs[1].visible"
              >
                <img src="~/assets/img/game/ios.png" alt="ios" />
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
          <home-list class="module" :title="'RELATED GAMES'">
            <home-latest
              v-for="item in bestList"
              :item="item"
              :key="item.id"
            ></home-latest>
          </home-list>
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
        <google-ad :id="'ID1-pc'" :timeout="200" classNames="ad" />
        <div class="best">Best Games</div>
        <div class="list">
          <home-best2
            class="active"
            v-for="item in bestList.slice(0, 6)"
            :item="item"
            :key="item.id"
          ></home-best2>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
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
      status: false,
      form: {
        nick: '',
        comment: '',
      },
      swiperOptions: {
        autoplay: {
          delay: 5000,
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
  validate({ params }) {
    if (params.id) {
      let id = params.id.replace(
        /^.*?(\d*)$/,
        (str, match, index) => match || '0'
      )
      if (id) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  },
  async asyncData({ error, $apiList, params, $utils }) {
    try {
      let gameList = [],
        gameInfo = null,
        gameOs = [
          {
            visible: false,
            name: 'Andriod',
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
      let [appInfo, bestList, commentList] = await Promise.all([
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
          .getGameMenu({
            origin: process.env.origin,
            menu: 'best-games',
            size: 10,
          })
          .then((res) => {
            return res || []
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
        if (item.toLowerCase() == 'andriod') {
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
        bestList,
        totalNum,
        totalPage,
        search,
        commentList,
      }
    } catch (e) {
      error({ statusCode: e.code, message: e.msg })
    }
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
          game_id: this.params.id.replace(
            /^.*?(\d*)$/,
            (str, match, index) => match || '0'
          ),
          ...search,
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
    padding-right: 350px;
    position: relative;
    &__left {
      width: 100%;
      .nav {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        a {
          font-size: 14px;
          line-height: 18px;
          color: #808191;
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
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
        }
      }
      .main {
        margin-top: 20px;
        padding-right: 80px;
        width: 100%;
        overflow: hidden;
        .banner {
          width: 100%;
          height: 460px;
          background-color: #111216;
          border-radius: 24px;
          overflow: hidden;
          .swiper {
            width: 100%;
            height: 100%;
            &__item {
              width: 100%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
        .pagination {
          margin-top: 10px;
          display: flex;
          align-items: center;
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
            background-image: url('~assets/img/home/prev.png');
          }
          &__next {
            background-image: url('~assets/img/home/next.png');
          }
          &__page {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-gap: 0 10px;
            width: auto;
            min-width: 126px;
            padding: 0 30px;
          }
          :deep(.swiper-pagination-customs) {
            width: 10px;
            height: 10px;
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
          }
          :deep(.swiper-pagination-customs-active) {
            border-color: #fe27ee;
            &::before {
              background-color: #000000;
            }
          }
        }
        .explain1 {
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
            flex-wrap: wrap;
            grid-gap: 20px 76px;
            p {
              font-size: 14px;
              line-height: 20px;
              span:first-child {
                color: #fff;
              }
              span:last-child {
                color: #808191;
                padding-left: 7px;
              }
            }
          }
          &__download {
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-gap: 20px;
            a {
              width: 164px;
              height: 42px;
              border-radius: 21px;
              display: flex;
              align-items: center;
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
              &.andriod {
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
            }
          }
          &__remark {
            margin-top: 38px;
            font-size: 14px;
            color: #808191;
            line-height: 20px;
          }
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
      width: 350px;
      .ad {
        height: 300px;
        background-color: #282a31;
        border-radius: 16px;
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
          .banner {
            height: 26.885vw;
          }
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
          .banner {
            height: 48vw;
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
// @media (max-width: 750px) {
//   $pr: math.div(1vw, 3.75);
//   .game {
//     &__main {
//       width: 100%;
//       padding: 0 24px;
//       &__left {
//         width: 100%;
//         .nav {
//           display: none;
//         }
//         .main {
//           margin-top: 0;
//           padding-right: 0;
//           .banner {
//             height: 171px;
//           }
//           .pagination {
//             margin-top: 10px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             height: 34px;
//             .btn {
//               display: none;
//             }
//             &__page {
//               height: 100%;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               grid-gap: 0 10px;
//               width: auto;
//               min-width: 126px;
//               padding: 0 30px;
//             }
//             :deep(.swiper-pagination-customs) {
//               width: 10px;
//               height: 10px;
//               border: solid 2px transparent;
//               border-radius: 50%;
//               position: relative;
//               &::before {
//                 content: '';
//                 position: absolute;
//                 left: 0;
//                 top: 0;
//                 width: 100%;
//                 height: 100%;
//                 border-radius: 50%;
//                 background-color: #808191;
//               }
//             }
//             :deep(.swiper-pagination-customs-active) {
//               border-color: #fe27ee;
//               &::before {
//                 background-color: #000000;
//               }
//             }
//           }
//           .explain1 {
//             margin-top: 20px;
//           }
//           .info {
//             margin-top: 30px;
//             height: 270px;
//             background-color: #282a31;
//             border-radius: 24px;
//             padding: 36px 44px;
//             &__title {
//               font-size: 24px;
//               line-height: 1;
//               color: #ffffff;
//             }
//             &__main {
//               margin-top: 19px;
//               display: flex;
//               flex-wrap: wrap;
//               grid-gap: 20px 83px;
//               p {
//                 font-size: 14px;
//                 line-height: 20px;
//                 span:first-child {
//                   color: #fff;
//                 }
//                 span:last-child {
//                   color: #808191;
//                   padding-left: 7px;
//                 }
//               }
//             }
//             &__download {
//               margin-top: 40px;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               grid-gap: 20px;
//               a {
//                 width: 164px;
//                 height: 42px;
//                 border-radius: 21px;
//                 display: flex;
//                 align-items: center;
//                 justify-content: center;
//                 img {
//                   margin-bottom: 2px;
//                 }
//                 span {
//                   padding-left: 10px;
//                   margin-top: 2px;
//                   font-size: 14px;
//                   color: #ffffff;
//                   line-height: 1;
//                 }
//                 &:first-child {
//                   background-color: #7ac450;
//                 }
//                 &:nth-child(2) {
//                   background-color: #3f8cff;
//                 }
//               }
//             }
//             &__remark {
//               margin-top: 38px;
//               font-size: 14px;
//               color: #808191;
//               line-height: 20px;
//             }
//           }
//           .module {
//             margin-top: 32px;
//             &__top {
//               width: 100%;
//               height: 34px;
//               line-height: 1;
//               display: flex;
//               align-items: center;
//               justify-content: space-between;
//               .title {
//                 flex-shrink: 0;
//                 font-family: BebasNeue-Regular;
//                 font-size: 28px;
//                 color: #ffffff;
//                 margin-top: 5px;
//               }
//               .page {
//                 flex-shrink: 0;
//                 height: 100%;
//                 &__button {
//                   width: 34px;
//                   height: 100%;
//                   border-radius: 50%;
//                   background-color: #242731;
//                   -webkit-transition-duration: 0.3s;
//                   transition-duration: 0.3s;
//                   background-repeat: no-repeat;
//                   background-position: center;
//                   &.active {
//                     background-color: #7a78ff;
//                   }
//                 }
//                 .prev {
//                   background-image: url('~assets/img/home/prev.png');
//                   margin-right: 6px;
//                 }
//                 .next {
//                   background-image: url('~assets/img/home/next.png');
//                 }
//               }
//             }
//             .list {
//               margin-top: 24px;
//               background-color: #282a31;
//               border-radius: 16px;
//               padding: 54px 54px 55px;
//               .scroll {
//                 --grid-num: 6;
//                 display: grid;
//                 grid-template-rows: repeat(1, 1fr);
//                 grid-auto-flow: column;
//                 grid-auto-columns: calc(
//                   100% / var(--grid-num) - (var(--grid-num) - 1) * 18px /
//                     var(--grid-num)
//                 );
//                 grid-gap: 18px;
//                 -webkit-scroll-snap-type: x mandatory;
//                 -moz-scroll-snap-type: x mandatory;
//                 -ms-scroll-snap-type: x mandatory;
//                 scroll-snap-type: x mandatory;
//                 -webkit-scroll-behavior: smooth;
//                 -moz-scroll-behavior: smooth;
//                 -ms-scroll-behavior: smooth;
//                 scroll-behavior: smooth;
//                 overflow-x: auto;
//                 overflow-y: hidden;
//               }
//             }
//           }
//           .comment {
//             margin-top: 39px;
//             &__title {
//               font-family: BebasNeue-Regular;
//               font-size: 28px;
//               line-height: 1;
//               color: #ffffff;
//             }
//             &__box {
//               margin-top: 24px;
//               background-color: #282a31;
//               border-radius: 16px;
//               padding: 55px 70px 57px;
//               display: flex;
//               flex-direction: column;
//               input {
//                 width: 270px;
//                 height: 40px;
//                 background-color: rgba(0, 0, 0, 0.45);
//                 border-radius: 20px;
//                 font-size: 14px;
//                 color: #808191;
//                 padding: 0 20px;
//               }
//               textarea {
//                 margin-top: 20px;
//                 width: 100%;
//                 background-color: rgba(0, 0, 0, 0.45);
//                 height: 147px;
//                 border-radius: 20px;
//                 font-size: 14px;
//                 line-height: 18px;
//                 color: #808191;
//                 padding: 12px 20px;
//                 resize: none;
//               }
//               button {
//                 margin-top: 25px;
//                 width: 192px;
//                 height: 46px;
//                 background-color: #6c5dd3;
//                 border-radius: 4px;
//                 font-size: 14px;
//                 color: #ffffff;
//               }
//               .message {
//                 width: 100%;
//                 margin-top: 30px;
//                 &__li {
//                   margin-top: 30px;
//                   border-bottom: 1px solid #2e323d;
//                   padding-bottom: 24px;
//                   .top {
//                     display: flex;
//                     font-size: 14px;
//                     line-height: 1;
//                     span:first-child {
//                       color: #ffffff;
//                       padding-left: 6px;
//                     }
//                     span:last-child {
//                       padding-left: 8px;
//                       color: #808191;
//                     }
//                   }
//                   .text {
//                     padding-left: 5px;
//                     margin-top: 14px;
//                     font-size: 14px;
//                     line-height: 18px;
//                     color: #808191;
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//       &__right {
//         display: none;
//       }
//     }
//   }
// }
</style>
