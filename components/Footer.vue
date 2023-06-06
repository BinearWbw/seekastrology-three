<template>
  <footer class="footer">
    <div class="footer__main">
      <img
        class="logo_mobile_img"
        src="~/assets/img/header/logoImg.png"
        alt="logo"
      />
      <div class="top">
        <button class="arrow common__btn" @click="goTop">
          <img src="~/assets/img/footer/arrow.svg" alt="arrow" />
        </button>
        <div class="top_link">
          <div class="top_list" v-for="item in footer_link" :key="item.id">
            <a href="#" v-for="(cont, index) in item.content" :key="index">
              {{ cont.link }}
            </a>
          </div>
        </div>
        <div class="top_last">
          <img
            class="logo_img"
            src="~/assets/img/header/logoImg.png"
            alt="logo"
          />
          <div class="media">
            <a
              :href="item.link"
              v-for="(item, index) in footer_media"
              :key="index"
              target="_blank"
            >
              <img :src="item.imgs" :alt="item.link" />
            </a>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p>©2022 NetStorm, All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Footer',
  data() {
    return {
      email: '',
      status: false,
      footer_link: [
        {
          id: '1',
          content: [
            {
              link: 'Astrology',
            },
            {
              link: 'Zodiac Signs',
            },
            {
              link: 'Birth Chart',
            },
            {
              link: 'Astrology Horosscope',
            },
            {
              link: 'Astrologica Compatibility',
            },
          ],
        },
        {
          id: '2',
          content: [
            {
              link: 'Tarot',
            },
            {
              link: 'Daily Tarot',
            },
            {
              link: 'Love Tarot',
            },
            {
              link: 'Career Tarot',
            },
            {
              link: 'Tarot Meaning',
            },
          ],
        },
        {
          id: '3',
          content: [
            {
              link: 'Quizzes',
            },
            {
              link: 'Personality Test',
            },
            {
              link: 'Career Tarot',
            },
            {
              link: 'Animal Quiz',
            },
            {
              link: 'Trivia Quiz',
            },
          ],
        },
        {
          id: '4',
          content: [
            {
              link: 'Information',
            },
            {
              link: 'Astrology',
            },
            {
              link: 'Study',
            },
            {
              link: 'Astrology Horosscope',
            },
            {
              link: 'Study',
            },
          ],
        },
        {
          id: '5',
          content: [
            {
              link: 'About Us',
            },
            {
              link: 'Zodiac Signs',
            },
            {
              link: 'Advertise Ment',
            },
            {
              link: 'Privacy',
            },
            {
              link: 'Partner With Us',
            },
          ],
        },
      ],
      footer_media: [
        {
          imgs: require('~/assets/img/footer/instagram.png'),
          link: 'https://www.instagram.com',
        },
        {
          imgs: require('~/assets/img/footer/facebook.png'),
          link: 'https://www.facebook.com',
        },
        {
          imgs: require('~/assets/img/footer/twitter.png'),
          link: 'https://twitter.com',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getIntersperseUrl']),
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
  width: 100%;
  background: rgba(0, 0, 0, 0.65);
  &__main {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding-top: 48px;
    .logo_mobile_img {
      display: none;
    }
    .top {
      display: flex;
      padding-bottom: 32px;
      border-bottom: 1px solid rgba(217, 217, 217, 0.1);
      position: relative;
      .arrow {
        position: absolute;
        right: 0;
        top: 0;
        width: 32px;
        height: 32px;
        background: #242731;
        border-radius: 6px;
        &:hover {
          background: #7a78ff;
        }
      }
      &_link {
        flex: 1;
        display: flex;
        .top_list {
          flex: 1;
          padding-right: 20px;
          & > :first-child {
            margin-top: 0;
            font-size: 16px;
            line-height: 22px;
            color: #ffffff;
          }
          a {
            display: block;
            margin-top: 20px;
            font-family: 'Rubik';
            font-size: 14px;
            line-height: 18px;
            color: rgba(255, 255, 255, 0.6);
            transition: color 0.3s;
            &:hover {
              color: #fff;
            }
          }
        }
      }
      &_last {
        margin-left: auto;
        width: 220px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .logo_img {
          width: 108px;
          margin-bottom: 30px;
        }
        .media {
          width: 100%;
          display: flex;
          align-items: center;
          a {
            display: block;
            margin-right: 20px;
            transition: transform 0.3s ease-out;
            &:hover {
              transform: scale(1.2);
            }
          }
        }
      }
    }
    .bottom {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        text-align: center;
        font-family: 'Rufina';
        font-size: 12px;
        line-height: 16px;
        color: rgba(255, 255, 255, 0.7);
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
@media (max-width: (900px)) {
  .footer {
    &__main {
      .link {
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: flex-start;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        span {
          margin-top: 17px;
          margin-left: 0;
        }
      }
    }
  }
}
@media (max-width: (750px)) {
  $pr: math.div(1vw, 3.75);

  .footer {
    width: 100%;
    background: rgba(0, 0, 0, 0.65);
    &__main {
      width: 100%;
      margin: 0 auto;
      padding: 48 * $pr 16 * $pr 0;
      .logo_mobile_img {
        display: block;
        width: 107 * $pr;
        margin: 0 auto 32 * $pr;
      }
      .top {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 0;
        border-bottom: none;
        position: relative;
        .arrow {
          display: none;
        }
        &_link {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          .top_list {
            flex-basis: 50%;
            padding-right: 0;
            padding: 16 * $pr 0;
            border-bottom: 1 * $pr solid rgba(217, 217, 217, 0.1);
            & > :first-child {
              margin-top: 0;
              font-size: 16 * $pr;
              line-height: 22 * $pr;
            }
            a {
              display: block;
              margin-top: 20 * $pr;
              font-family: 'Rubik';
              font-size: 14 * $pr;
              line-height: 18 * $pr;
            }
          }
        }
        &_last {
          margin-left: auto;
          width: auto;
          position: absolute;
          right: 0;
          bottom: 16 * $pr;
          .logo_img {
            display: none;
          }
          .media {
            a {
              margin-right: 24 * $pr;
              img {
                width: 33 * $pr;
              }
            }
          }
        }
      }
      .bottom {
        width: 100%;
        height: 64 * $pr;
        p {
          font-size: 12 * $pr;
          line-height: 16 * $pr;
        }
      }
    }
  }
}
</style>
