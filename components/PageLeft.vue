<template>
  <div class="nav" :class="{ navActive: getSlideActive }">
    <div class="nav__top">
      <img class="logo" src="~/assets/img/nav/logo.png" alt="logo" />
      <button class="menu" @click="$store.commit('UPDATE_SLIDE_ACTIVE')">
        <img src="~/assets/img/nav/menu.png" alt="menu" />
      </button>
    </div>
    <div class="nav__title">Navigation</div>
    <nav class="nav__menu">
      <nuxt-link
        class="nav__menu__a"
        :to="item.href"
        :class="{ active: item.href == $route.path }"
        v-for="(item, index) in menu"
        :key="index"
      >
        <div class="icon">
          <img
            :src="item.href == $route.path ? item.imgActive : item.img"
            alt="home"
          />
        </div>
        <span>{{ item.title }}</span>
      </nuxt-link>
    </nav>
    <div class="nav__title active">Category</div>
    <ul class="nav__category">
      <li class="nav__category__li">
        <div class="icon">
          <img src="~/assets/img/nav/best-active.png" alt="" />
        </div>
        <span class="name">Minecraft</span>
      </li>
      <li class="nav__category__li">
        <div class="icon">
          <img src="~/assets/img/nav/best-active.png" alt="" />
        </div>
        <span class="name">Minecraft</span>
      </li>
      <li class="nav__category__li">
        <div class="icon">
          <img src="~/assets/img/nav/best-active.png" alt="" />
        </div>
        <span class="name">Minecraft</span>
      </li>
      <li class="nav__category__li">
        <div class="icon">
          <img src="~/assets/img/nav/best-active.png" alt="" />
        </div>
        <span class="name">Minecraft</span>
      </li>
      <li class="nav__category__li">
        <div class="icon">
          <img src="~/assets/img/nav/best-active.png" alt="" />
        </div>
        <span class="name">Minecraft</span>
      </li>
      <li class="nav__category__li">
        <div class="icon">
          <img src="~/assets/img/nav/best-active.png" alt="" />
        </div>
        <span class="name">Minecraft</span>
      </li>
      <li class="nav__category__li">
        <div class="icon">
          <img src="~/assets/img/nav/best-active.png" alt="" />
        </div>
        <span class="name">Minecraft</span>
      </li>
      <li class="nav__category__li">
        <div class="icon">
          <img src="~/assets/img/nav/best-active.png" alt="" />
        </div>
        <span class="name">Minecraft</span>
      </li>
      <li class="nav__category__li">
        <div class="icon">
          <img src="~/assets/img/nav/best-active.png" alt="" />
        </div>
        <span class="name">Minecraft</span>
      </li>
      <li class="nav__category__li">
        <div class="icon">
          <img src="~/assets/img/nav/best-active.png" alt="" />
        </div>
        <span class="name">Minecraft</span>
      </li>
      <li class="nav__category__li">
        <div class="icon">
          <img src="~/assets/img/nav/best-active.png" alt="" />
        </div>
        <span class="name">Minecraft</span>
      </li>
      <li class="nav__category__li">
        <div class="icon">
          <img src="~/assets/img/nav/best-active.png" alt="" />
        </div>
        <span class="name">Minecraft</span>
      </li>
      <li class="nav__category__li">
        <div class="icon">
          <img src="~/assets/img/nav/best-active.png" alt="" />
        </div>
        <span class="name">Minecraft</span>
      </li>
      <li class="nav__category__li">
        <div class="icon">
          <img src="~/assets/img/nav/best-active.png" alt="" />
        </div>
        <span class="name">Minecraft</span>
      </li>
      <li class="nav__category__li">
        <div class="icon">
          <img src="~/assets/img/nav/best-active.png" alt="" />
        </div>
        <span class="name">Minecraft</span>
      </li>
      <li class="nav__category__li">
        <div class="icon">
          <img src="~/assets/img/nav/best-active.png" alt="" />
        </div>
        <span class="name">Minecraft</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageLeft',
  computed: {
    ...mapGetters(['getSlideActive']),
  },
  data() {
    return {
      menu: [
        {
          title: 'HOME',
          href: '/',
          img: require('~/assets/img/nav/home.png'),
          imgActive: require('~/assets/img/nav/home-active.png'),
        },
        {
          title: 'HOT GAMES',
          href: '/hot',
          img: require('~/assets/img/nav/hot.png'),
          imgActive: require('~/assets/img/nav/hot-active.png'),
        },
        {
          title: 'BEST GAMES',
          href: '/best',
          img: require('~/assets/img/nav/best.png'),
          imgActive: require('~/assets/img/nav/best-active.png'),
        },
        {
          title: 'TOP GAMES',
          href: '/top',
          img: require('~/assets/img/nav/top.png'),
          imgActive: require('~/assets/img/nav/top-active.png'),
        },
        {
          title: 'NEW GAMES',
          href: '/new',
          img: require('~/assets/img/nav/new.png'),
          imgActive: require('~/assets/img/nav/new-active.png'),
        },
      ],
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.nav {
  display: flex;
  flex-direction: column;
  &__top {
    flex-shrink: 0;
    width: 100%;
    height: 82px;
    padding: 41px 40px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
      height: 100%;
      object-fit: cover;
    }
    .menu {
      margin-left: auto;
      height: 10px;
    }
  }
  &__title {
    white-space: nowrap;
    flex-shrink: 0;
    padding: 28px 0 17px 41px;
    font-size: 13px;
    line-height: 1;
    color: #808191;
    &.active {
      padding: 33px 0 17px 41px;
    }
  }
  &__menu {
    flex-shrink: 0;
    width: 100%;
    padding: 0 20px 33px;
    position: relative;
    &__a {
      width: 100%;
      height: 56px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      overflow: hidden;
      .icon {
        flex-shrink: 0;
        width: 60px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      span {
        white-space: nowrap;
        margin-top: 3px;
        font-size: 14px;
        line-height: 1;
        color: #808191;
      }
      &.active {
        background-color: #6c5dd3;
        span {
          color: #fff;
        }
      }
    }
    &::after {
      content: '';
      position: absolute;
      left: 40px;
      bottom: 0;
      width: calc(100% - 80px);
      height: 1px;
      background: #33353b;
    }
  }
  &__category {
    flex: 1;
    min-height: 0;
    width: 100%;
    padding: 0 20px;
    overflow-y: auto;
    &__li {
      width: 100%;
      padding: 15px 0;
      border-radius: 12px;
      height: 56px;
      display: flex;
      align-items: center;
      cursor: pointer;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      overflow: hidden;
      .icon {
        flex-shrink: 0;
        width: 60px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          border-radius: 5px;
          background-color: #808191;
          width: 26px;
          height: 100%;
          object-fit: cover;
        }
      }
      .name {
        white-space: nowrap;
        font-size: 14px;
        line-height: 1;
        color: #808191;
      }
      &:hover {
        background-color: #6c5dd3;
        .name {
          color: #fff;
        }
      }
    }
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  &.navActive {
    .nav__top {
      padding: 41px 0 12px;
      .logo {
        display: none;
      }
      .menu {
        margin-left: 0;
      }
    }
    .nav__title {
      padding: 28px 0 17px 5px;
      &.active {
        padding: 33px 0 17px 5px;
      }
    }
    .nav__menu {
      padding: 0 10px 50px;
      &__a {
        span {
          visibility: hidden;
        }
      }
      &::after {
        left: 0;
        width: 100%;
      }
    }
    .nav__category {
      padding: 0 10px;
      &__li {
        .name {
          visibility: hidden;
        }
      }
    }
  }
}
</style>
