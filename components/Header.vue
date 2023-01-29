<template>
  <header class="header">
    <div>
      <a href="/" class="logo">
        <img class="img" src="~/assets/img/header/logoImg.png" alt="logoImg" />
        <img
          class="title"
          src="~/assets/img/header/logoTitle.png"
          alt="logoTitle"
        />
      </a>
      <Desktop></Desktop>
      <nav class="nav">
        <a
          class="nav__item"
          :href="item.href"
          :class="{
            active:
              item.href == $route.path ||
              (item.href !== '/' && $route.path.includes(item.href)),
          }"
          :title="item.title"
          v-for="(item, index) in menu"
          :key="index"
        >
          <img
            :src="
              item.href == $route.path ||
              (item.href !== '/' && $route.path.includes(item.href))
                ? item.imgActive
                : item.img
            "
            :alt="item.title"
          />
          <span> {{ item.title }}</span>
        </a>
      </nav>
      <div class="search">
        <input
          class="input"
          type="text"
          v-model="searchInput"
          placeholder="Search"
        />
        <button class="button" @click="search"></button>
      </div>
      <div class="menu common__btn" @click="visibleMenu = true"></div>
      <lazy-dialog-menu
        :menu="menu"
        :visible="visibleMenu"
        @close="visibleMenu = false"
      >
      </lazy-dialog-menu>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      visibleMenu: false,
      searchInput: '',
      menu: [
        {
          title: 'Home',
          href: '/',
          img: require('~/assets/img/header/navHome.svg'),
          imgActive: require('~/assets/img/header/navHomeActive.svg'),
          imgActive1: require('~/assets/img/header/navHomeActive1.svg'),
        },
        {
          title: 'Hot Games',
          href: '/hot',
          img: require('~/assets/img/header/navHot.svg'),
          imgActive: require('~/assets/img/header/navHotActive.svg'),
          imgActive1: require('~/assets/img/header/navHotActive1.svg'),
        },
        {
          title: 'Best Games',
          href: '/best',
          img: require('~/assets/img/header/navBest.svg'),
          imgActive: require('~/assets/img/header/navBestActive.svg'),
          imgActive1: require('~/assets/img/header/navBestActive1.svg'),
        },
        {
          title: 'Top Games',
          href: '/top',
          img: require('~/assets/img/header/navTop.svg'),
          imgActive: require('~/assets/img/header/navTopActive.svg'),
          imgActive1: require('~/assets/img/header/navTopActive1.svg'),
        },
        {
          title: 'New Games',
          href: '/new',
          img: require('~/assets/img/header/navNew.svg'),
          imgActive: require('~/assets/img/header/navNewActive.svg'),
          imgActive1: require('~/assets/img/header/navNewActive1.svg'),
        },
        {
          title: 'Category',
          href: '/category',
          img: require('~/assets/img/header/navCategory.svg'),
          imgActive: require('~/assets/img/header/navCategoryActive.svg'),
          imgActive1: require('~/assets/img/header/navCategoryActive1.svg'),
        },
      ],
    }
  },
  methods: {
    search() {
      let regSearch = /^.{2,}$/
      if (
        !this.searchInput.replace(/\s+/g, '') ||
        !regSearch.test(this.searchInput.replace(/\s+/g, ''))
      ) {
        this.$store.dispatch('toast', {
          type: 'warning',
          msg: 'Search is required and the length cannot be less than 2',
        })
      } else {
        window.location = `/search/${this.searchInput}`
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
  background: #21242e;
  > div {
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
    padding: 0 65px;
    height: 100%;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .logo {
      height: 40px;
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      -webkit-flex-shrink: 0;
      flex-shrink: 0;
      img {
        display: block;
        object-fit: contain;
      }
      .img {
        width: 40px;
        height: 40px;
      }
      .title {
        margin: 9px 0 0 15px;
        width: 129px;
        height: 22px;
      }
    }
    .nav {
      height: 44px;
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-flex-shrink: 0;
      flex-shrink: 0;
      margin-left: auto;
      margin-right: auto;
      &__item {
        padding: 0 18px;
        border-radius: 6px;
        height: 100%;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        span {
          margin-top: 2px;
          padding-left: 10px;
          font-size: 15px;
          line-height: 1;
          color: #808191;
          -webkit-transition: color 0.3s;
          transition: color 0.3s;
        }
        &:hover {
          span {
            color: #fff;
          }
        }
        &.active {
          background: rgba(255, 255, 255, 0.05);
          span {
            color: #fff;
          }
        }
      }
    }
    .search {
      width: 300px;
      height: 44px;
      background: rgba(0, 0, 0, 0.45);
      border-radius: 48px;
      position: relative;
      -webkit-flex-shrink: 0;
      flex-shrink: 0;
      input {
        width: 100%;
        height: 100%;
        font-size: 14px;
        color: #808191;
        padding: 2px 57px 0 23px;
      }
      button {
        position: absolute;
        top: calc(50% - 8px);
        right: 18px;
        width: 16px;
        height: 16px;
        background: url('~assets/img/header/search.svg') no-repeat center center;
        background-size: contain;
      }
    }
    .menu {
      display: none;
    }
  }
}
@media (max-width: (1600px)) {
  .header {
    > div {
      padding: 0 30px;
      .nav {
        &__item {
          padding: 0 10px;
        }
      }
      .search {
        width: 260px;
      }
    }
  }
}
@media (max-width: (1366px)) {
  .header {
    > div {
      .nav {
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
      .search {
        width: 180px;
      }
    }
  }
}
@media (max-width: (1024px)) {
  .header {
    > div {
      .logo {
        margin-right: auto;
      }
      .nav {
        display: none;
      }
      .search {
        display: none;
      }
      .menu {
        margin-left: 30px;
        display: block;
        width: 33px;
        height: 100%;
        background: url('~assets/img/header/menu.png') no-repeat center center;
        background-size: contain;
      }
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .header {
    height: 63 * $pr;
    border-bottom: 1 * $pr solid #2f303e;
    > div {
      padding: 0 24 * $pr 0 21 * $pr;
      .logo {
        height: 40 * $pr;
        .img {
          width: 40 * $pr;
          height: 40 * $pr;
        }
        .title {
          margin: 9 * $pr 0 0 11 * $pr;
          width: 119 * $pr;
          height: 22 * $pr;
        }
      }
      .menu {
        margin-left: 14 * $pr;
        width: 22 * $pr;
      }
    }
  }
}
</style>
