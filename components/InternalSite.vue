<template>
  <div class="internal">
    <div class="internal__main">
      <el-card
        v-for="(item, index) in screeningData"
        :item="item"
        :key="index"
      ></el-card>
    </div>
  </div>
</template>

<script>
import ElCard from './el_components/ElCard.vue'
export default {
  components: { ElCard },
  name: 'site',
  data() {
    return {
      divinations: [
        {
          title: 'Horoscope',
          textCont: 'Read your freedaily horoscopes and learn more about your',
          imgUrl: require('~/assets/img/home/horoscope.png'),
          path: '/horroscope',
        },
        {
          title: 'Zodiac Signs',
          textCont: 'Read your freedaily horoscopes and learn more about your',
          imgUrl: require('~/assets/img/home/zodiac.png'),
          path: '/zodiac',
        },
        {
          title: 'Tarot',
          textCont: 'Read your freedaily horoscopes and learn more about your',
          imgUrl: require('~/assets/img/home/tarot.png'),
          path: '#',
        },
        {
          title: 'Compatibility',
          textCont: 'Read your freedaily horoscopes and learn more about your',
          imgUrl: require('~/assets/img/home/compatibility.png'),
          path: '/astrology',
        },
        {
          title: 'Quizzes',
          textCont: 'Read your freedaily horoscopes and learn more about your',
          imgUrl: require('~/assets/img/home/quizzes.png'),
          path: '#',
        },
        {
          title: 'Articles',
          textCont: 'Read your freedaily horoscopes and learn more about your',
          imgUrl: require('~/assets/img/home/articles.png'),
          path: '/resources',
        },
      ],
    }
  },
  computed: {
    screeningData() {
      this.divinations.sort(() => Math.random() - 0.5)
      return this.divinations
        .filter((i) => i.path != this.$route.path)
        .slice(0, 3)
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.internal {
  margin-top: 113px;
  width: 100%;
  height: 293px;
  position: relative;
  background: url('../assets/img/home/page_bottom.png') no-repeat center center;
  background-size: cover;
  &__main {
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, auto);
    gap: 48px;
    position: absolute;
    top: -49px;
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .internal {
    margin-top: 86 * $pr;
    height: 293 * $pr;
    background: url('../assets/img/home/page_bottomh5.png') no-repeat center
      center;
    background-size: cover;
    &__main {
      top: -38 * $pr;
      width: 100%;
      display: grid;
      padding: 0 20 * $pr;
      justify-content: center;
      grid-template-columns: repeat(1, 1fr);
      gap: 12 * $pr;
    }
  }
}
</style>
