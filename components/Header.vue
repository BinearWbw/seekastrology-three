<template>
  <header class="header">
    <div class="header__main">
      <div>
        <a :href="getIntersperseUrl" class="logo">
          <img
            class="img"
            src="~/assets/img/header/logoImg.png"
            alt="logoImg"
          />
        </a>
        <nav class="nav">
          <a
            class="nav__item"
            :href="`${getIntersperseUrl + item.href}`"
            :class="{
              active:
                item.path == $route.path ||
                (item.path !== '/' && $route.path.includes(item.path)),
            }"
            :title="item.title"
            v-for="(item, index) in menu"
            :key="index"
          >
            <span> {{ item.title }}</span>
          </a>
        </nav>
        <div class="menu common__btn" @click="visibleMenu = true"></div>
        <lazy-dialog-menu
          :menu="menu"
          :visible="visibleMenu"
          @close="visibleMenu = false"
        >
        </lazy-dialog-menu>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      visibleMenu: false,
      searchInput: '',
      menu: [
        {
          title: 'Home',
          path: '/',
          href: '',
        },
        {
          title: 'Zodiac Signs',
          path: '/zodiac',
          href: '/zodiac',
        },
        {
          title: 'Astrology',
          path: '/best',
          href: '/best',
        },
        {
          title: 'Tarot',
          path: '/top',
          href: '/top',
        },
        {
          title: 'Quizzes',
          path: '/new',
          href: '/new',
        },
        {
          title: 'Resources',
          path: '/category',
          href: '/category',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getIntersperseUrl']),
  },
  methods: {
    search() {
      let regSearch = /^.{2,}$/
      let search = this.searchInput
      if (!search || !regSearch.test(search)) {
        this.$store.dispatch('toast', {
          type: 'warning',
          msg: 'Search is required and the length cannot be less than 2',
        })
      } else {
        window.location = `/search/?input=${search}`
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.header {
  height: 90px;
  width: 100%;
  &__main {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    > div {
      margin: 0 auto;
      width: 100%;
      max-width: 1400px;
      height: 100%;
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      justify-content: space-between;
      .logo {
        height: 100%;
        display: flex;
        align-items: center;
        padding-bottom: 6px;
        img {
          display: block;
          object-fit: contain;
        }
        .img {
          width: 72px;
          height: 23px;
        }
      }
      .nav {
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        -webkit-flex-shrink: 0;
        flex-shrink: 0;
        padding-top: 28px;
        &__item {
          padding-left: 50px;
          span {
            font-family: 'Cinzel Decorative';
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
            color: #fff;
            position: relative;
            &::after {
              content: '';
              position: absolute;
              left: 0;
              bottom: -7px;
              width: 100%;
              height: 2px;
              background-color: #fff;
              transform: scaleX(0);
              -webkit-transition: transform 0.3s ease-in-out;
              transition: transform 0.3s ease-in-out;
            }
          }
          &:hover {
            span {
              &::after {
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
              }
            }
          }
          &.active {
            span {
              &::after {
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
              }
            }
          }
        }
      }
      .menu {
        display: none;
      }
    }
  }
}
@media (max-width: (1600px)) {
  .header {
    &__main {
      > div {
        padding: 0 30px;
        .nav {
          &__item {
            padding: 0 10px;
          }
        }
      }
    }
  }
}
@media (max-width: (1366px)) {
  .header {
    height: 60px;
    &__main {
      > div {
        .nav {
          padding-top: 18px;
          &__item {
            img {
              display: none;
            }
            span {
              margin-top: 0;
              font-size: 12px;
              padding-left: 0;
            }
          }
        }
      }
    }
  }
}
@media (max-width: (1024px)) {
  .header {
    &__main {
      > div {
        .logo {
          margin-right: auto;
        }
        .nav {
          display: none;
        }
        .menu {
          margin-left: 30px;
          display: block;
          width: 30px;
          background: url('~assets/img/header/menu.png') no-repeat center center;
          background-size: contain;
        }
      }
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .header {
    height: 46 * $pr;
    &__main {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 6;
      height: 46 * $pr;
      > div {
        padding: 0 17 * $pr 0 16 * $pr;
        .logo {
          padding-bottom: 0;
          .img {
            width: 48 * $pr;
            height: 15 * $pr;
          }
        }
        .menu {
          margin-left: 14 * $pr;
          width: 14 * $pr;
        }
      }
    }
  }
}
</style>
