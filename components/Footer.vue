<template>
  <footer class="footer"></footer>
</template>

<script>
export default {
  name: 'Footer',
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
      category: [],
    }
  },
  async fetch() {
    const res = await this.$apiList.home.getCategory({ page: 1, size: 10000 })
    this.category = res
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.footer {
  margin-top: 90px;
  width: 100%;
  height: 264px;
  background: #18191d;
}
</style>
