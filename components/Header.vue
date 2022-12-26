<template>
  <header class="header">
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
        {{ item.title }}
      </a>
    </nav>
    <!-- <div class="nav__top">
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
        :title="item.title"
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
      <li
        class="nav__category__li"
        v-for="(item, index) in category"
        :key="index"
      >
        <div class="icon">
          <img src="~/assets/111.png" alt="" />
        </div>
        <span class="name">{{ item.name }}</span>
      </li>
    </ul> -->
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menu: [
        {
          title: 'HOME',
          href: '/',
        },
        {
          title: 'HOT GAMES',
          href: '/hot',
        },
        {
          title: 'BEST GAMES',
          href: '/best',
        },
        {
          title: 'TOP GAMES',
          href: '/top',
        },
        {
          title: 'NEW GAMES',
          href: '/new',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.header {
  height: 90px;
  width: 100%;
  background: #18191d;
  display: flex;
  align-items: center;
  .logo {
    height: 40px;
    margin-right: 20px;
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
      margin: 9px 0 0 14px;
      width: 117px;
      height: 20px;
    }
  }
  .nav {
    flex-shrink: 0;
    height: 22px;
    display: flex;
    align-items: center;
    &__item {
      color: #808191;
      font-family: 'Bahnschrift';
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
      margin-right: 50px;
      padding: 0 2px;
      position: relative;
      transition-duration: 0.3s;
      &::after {
        content: '';
        width: 0;
        height: 2px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        background: #ffc908;
        transition-duration: 0.3s;
      }
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        color: #fff;
        &::after {
          width: 100%;
        }
      }
      &.active {
        color: #fff;
        &::after {
          width: 100%;
        }
      }
    }
  }
}
</style>
