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
          :class="{ active: item.href == $route.path }"
          :title="item.title"
          v-for="(item, index) in menu"
          :key="index"
        >
          <img :src="item.img" alt="item.title" />
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
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      searchInput: '',
      menu: [
        {
          title: 'Home',
          href: '/',
          img: require('~/assets/img/header/navHome.svg'),
        },
        {
          title: 'Hot Games',
          href: '/hot',
          img: require('~/assets/img/header/navHot.svg'),
        },
        {
          title: 'Best Games',
          href: '/best',
          img: require('~/assets/img/header/navBest.svg'),
        },
        {
          title: 'Top Games',
          href: '/top',
          img: require('~/assets/img/header/navTop.svg'),
        },
        {
          title: 'New Games',
          href: '/new',
          img: require('~/assets/img/header/navNew.svg'),
        },
        {
          title: 'Category',
          href: '/category',
          img: require('~/assets/img/header/navCategory.svg'),
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
    align-items: center;
    .logo {
      height: 40px;
      display: flex;
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
      align-items: center;
      flex-shrink: 0;
      margin-left: auto;
      margin-right: auto;
      &__item {
        padding: 0 18px;
        border-radius: 6px;
        height: 100%;
        display: flex;
        align-items: center;
        span {
          margin-top: 2px;
          padding-left: 10px;
          font-size: 15px;
          line-height: 1;
          color: #808191;
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
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
  }
}
// @media (max-width: (1500px)) {
//   .header {
//     > div {
//       .search {
//         width: 250px;
//       }
//     }
//   }
// }
</style>
