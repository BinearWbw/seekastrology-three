<template>
  <header class="header">
    <a class="logo" href="/">
      <img src="~/assets/img/header/logo.png" alt="logo" />
    </a>
    <nav class="menu">
      <a
        class="menu-item"
        :class="{ active: item.path == $route.path }"
        :href="item.path"
        v-for="(item, index) in menu"
        :key="index"
      >
        <img
          class="img"
          :src="item.path == $route.path ? item.srcActive : item.src"
          :alt="`unity-${item.name}`"
        />
        <p class="path">{{ item.name }}</p>
      </a>
    </nav>
    <button
      class="search-btn common-btn"
      @click="$store.commit('UPDATE_VISIBLE_SEARCH', true)"
    >
      <img src="~/assets/img/header/iconSearch.png" alt="sarch" />
      <span>Search</span>
      <span class="italic">!!</span>
    </button>
    <lazy-dialog-search></lazy-dialog-search>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      menu: [
        {
          name: 'Home',
          src: require('~/assets/img/header/icon1.png'),
          srcActive: require('~/assets/img/header/icon1Active.png'),
          path: '/',
        },
        {
          name: 'Category',
          src: require('~/assets/img/header/icon2.png'),
          srcActive: require('~/assets/img/header/icon2Active.png'),
          path: '/category',
        },
        {
          name: 'Mmo',
          src: require('~/assets/img/header/icon3.png'),
          srcActive: require('~/assets/img/header/icon3Active.png'),
          path: '/game/1',
        },
        {
          name: 'Sports',
          src: require('~/assets/img/header/icon4.png'),
          srcActive: require('~/assets/img/header/icon4Active.png'),
          path: '/game/2',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
$block: 140px;
$spacing: 16px;
.header {
  height: 170px;
  padding-bottom: 53px;
  width: 100%;
  max-width: 1700px;
  display: flex;
  align-items: flex-end;
  .logo {
    width: 282px;
    height: 72px;
    flex-shrink: 0;
    margin-right: auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .menu {
    padding-bottom: 18px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    &-item {
      margin-right: 24px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      .img {
        height: 24px;
        margin-right: 10px;
        display: block;
        object-fit: contain;
      }
      .path {
        font-size: 24px;
        line-height: 17px;
        font-family: Heebo-Bold;
        color: #746e8b;
      }
      &.active {
        .path {
          color: #ffffff;
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .search-btn {
    margin-left: 35px;
    margin-bottom: 8px;
    border-radius: 20px;
    padding: 5px 41px 5px 14px;
    background-color: #ef2391;
    display: flex;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
      margin-bottom: 3px;
      margin-right: 20px;
    }
    span {
      line-height: 32px;
      font-size: 20px;
      font-family: Heebo-Bold;
      &.italic {
        font-style: italic;
      }
    }
  }
}
@media (max-width: (11 * $block + 10 * $spacing+60px)) {
  .header {
    max-width: 10 * $block + 9 * $spacing;
  }
}
@media (max-width: (10 * $block + 9 * $spacing+60px)) {
  .header {
    max-width: 9 * $block + 8 * $spacing;
  }
}
@media (max-width: (9 * $block + 8 * $spacing+60px)) {
  .header {
    max-width: 8 * $block + 7 * $spacing;
  }
}
@media (max-width: (8 * $block + 7 * $spacing+60px)) {
  .header {
    max-width: 7 * $block + 6 * $spacing;
  }
}
@media (max-width: (7 * $block + 6 * $spacing+60px)) {
  .header {
    max-width: 6 * $block + 5 * $spacing;
    .menu {
      &-item {
        &:nth-child(3) {
          display: none;
        }
        &:nth-child(4) {
          display: none;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
@media (max-width: (6 * $block + 5 * $spacing+60px)) {
  .header {
    max-width: 5 * $block + 4 * $spacing;
    .menu {
      display: none;
    }
  }
}
@media (max-width: 828px) {
  $pr: math.div(1vw, 8.28);
  .header {
    height: 170 * $pr;
    max-width: 752 * $pr;
    padding-bottom: 53 * $pr;
    .logo {
      width: 282 * $pr;
      height: 72 * $pr;
      flex-shrink: 0;
      margin-right: auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .menu {
      display: none;
    }
    .search-btn {
      margin-left: 0;
      margin-bottom: 8 * $pr;
      border-radius: 0;
      padding: 5 * $pr 0 5 * $pr 0;
      background-color: transparent;
      img {
        max-width: 48 * $pr;
        max-height: 48 * $pr;
        margin-bottom: 3 * $pr;
        margin-right: 0;
      }
      span {
        display: none;
      }
    }
  }
}
</style>
