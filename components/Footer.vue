<template>
  <footer class="footer">
    <div class="footer__main">
      <div class="top">
        <div class="top__left">
          <a
            :href="item.path"
            v-for="(item, index) in menu"
            :key="index"
            :title="item.name"
          >
            <img :src="item.src" :alt="item.name" />
          </a>
        </div>
        <button class="arrow common__btn" @click="goTop">
          <img src="~/assets/img/footer/arrow.svg" alt="arrow" />
        </button>
      </div>
      <div class="bottom">
        <div class="left">
          <p class="p1">
            Taptogame.com is a game aggregation platform. Through this platform,
            you can play games on different devices that support Android and
            iOS. Our team goal is to enable all players to find a game they
            love.We offer many types of games. Including but not limited to
            puzzle games, action games, sports games, racing games, shooting
            games, arcade games, makeup games, matching games, cooking games,
            etc. <br />Taptogame.com has collected the hottest, most classic and
            most fun mobile games, each of which is handpicked by us.<br />Taptogame.com
            is a website that supports genuine games. The website does not
            provide game downloads, and our game download links will jump to
            formal platforms such as Google Play and Apple Store. Players can
            find the most suitable games in Taptogame.com for the first time.<br />Hope
            you can find the best game for you on Taptogame.com platform. If you
            have any feedback on us, please feel free to contact us by email:
            Service@taptogame.com
          </p>
          <p class="p2">copyright © 2022 Taptogame All rights reserved.</p>
        </div>
        <div class="right">
          <p class="title">SUBSCRIPTION</p>
          <div class="handle">
            <input type="text" v-model="email" placeholder="Email address" />
            <button class="common__btn" @click="!status && subscribeEmaill()">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      email: '',
      status: false,
      menu: [
        {
          name: 'Facebook',
          src: require('~/assets/img/footer/Facebook.svg'),
          path: '/',
        },
        {
          name: 'Twitter',
          src: require('~/assets/img/footer/Twitter.svg'),
          path: '/',
        },
        {
          name: 'Youtube',
          src: require('~/assets/img/footer/Youtube.svg'),
          path: '/',
        },
      ],
    }
  },
  methods: {
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    subscribeEmaill() {
      if (
        this.email.search(
          /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
        ) != -1
      ) {
        this.status = true
        let data = {
          email: this.email,
          origin: process.env.origin,
        }
        this.$apiList.home
          .postSubscribe(data)
          .then(() => {
            this.$store.dispatch('toast', {
              type: 'success',
              msg: 'Subscribed email successfully',
            })
            this.status = false
          })
          .catch((error) => {
            this.$store.dispatch('toast', {
              type: 'error',
              msg: error.msg,
            })
            this.status = false
          })
      } else {
        this.$store.dispatch('toast', {
          type: 'warning',
          msg: 'Please enter the correct email address',
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.footer {
  margin-top: 80px;
  width: 100%;
  background: #18191d;
  &__main {
    max-width: 1310px;
    width: 100%;
    margin: 0 auto;
    .top {
      width: 100%;
      height: 88px;
      border-bottom: 1px solid #282a31;
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      &__left {
        height: 100%;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        a {
          flex-shrink: 0;
          margin-right: 20px;
          display: flex;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .arrow {
        width: 32px;
        height: 32px;
        background: #242731;
        border-radius: 4px;
        &:hover {
          background: #7a78ff;
        }
      }
    }
    .bottom {
      padding: 25px 0 24px;
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      .left {
        width: 759px;
        p {
          font-size: 14px;
          line-height: 22px;
        }
        .p1 {
          color: #808191;
        }
        .p2 {
          margin-top: 17px;
        }
      }
      .right {
        flex-shrink: 0;
        padding-top: 7px;
        width: 401px;
        .title {
          font-size: 14px;
          line-height: 17px;
          padding-left: 6px;
        }
        .handle {
          margin-top: 13px;
          display: flex;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          height: 44px;
          input {
            -webkit-box-flex: 1;
            -moz-box-flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            min-width: 0;
            height: 100%;
            background: rgba(0, 0, 0, 0.45);
            border-radius: 48px;
            font-size: 14px;
            color: #808191;
            padding: 0 16px;
            margin-right: 20px;
          }
          button {
            flex-shrink: 0;
            width: 104px;
            height: 100%;
            background: #6c5dd3;
            border-radius: 6px;
            font-size: 14px;
            &:hover {
              background-color: #7a78ff;
            }
          }
        }
      }
    }
  }
}
@media (max-width: (1370px)) {
  .footer {
    &__main {
      padding: 0 30px;
    }
  }
}
@media (max-width: (1250px)) {
  .footer {
    &__main {
      .bottom {
        flex-direction: column-reverse;
        .left {
          margin-top: 30px;
          width: 100%;
        }
        .right {
          padding-top: 0;
          width: 100%;
        }
      }
    }
  }
}
@media (max-width: (750px)) {
  $pr: math.div(1vw, 3.75);
  .footer {
    margin-top: 40 * $pr;
    &__main {
      padding: 0;
      .top {
        padding: 0 23 * $pr;
        height: 47 * $pr;
        border-bottom: 1 * $pr solid #282a31;
        &__left {
          a {
            margin-right: 15 * $pr;
            img {
              width: 20 * $pr;
            }
          }
        }
        .arrow {
          width: 20 * $pr;
          height: 20 * $pr;
          border-radius: 4 * $pr;
          img {
            height: 6 * $pr;
          }
        }
      }
      .bottom {
        padding: 14 * $pr 23 * $pr 17 * $pr;
        .left {
          margin-top: 20 * $pr;
          p {
            font-size: 9 * $pr;
            line-height: 14 * $pr;
          }
          .p2 {
            margin-top: 13 * $pr;
          }
        }
        .right {
          .title {
            font-size: 14 * $pr;
            line-height: 17 * $pr;
            padding-left: 0;
          }
          .handle {
            margin-top: 15 * $pr;
            height: 90 * $pr;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
            input {
              flex: none;
              height: 40 * $pr;
              border-radius: 48 * $pr;
              font-size: 12 * $pr;
              padding: 0 17 * $pr;
              margin-right: 0;
            }
            button {
              width: 104 * $pr;
              height: 40 * $pr;
              border-radius: 6 * $pr;
              font-size: 14 * $pr;
              line-height: 44 * $pr;
            }
          }
        }
      }
    }
  }
}
</style>
