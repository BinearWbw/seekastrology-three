<template>
  <div class="internal">
    <div class="internal__main">
      <el-card
        v-for="(item, index) in divination"
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
      divination: [
        {
          title: 'Horoscope',
          textCont: 'Read your freedaily horoscopes and learn more about your',
        },
        {
          title: 'Zodiac Signs',
          textCont:
            'Read your freedaily horoscopes and learn more about yourasadsadasdadasasda',
        },
        {
          title: 'Tarot',
          textCont: 'Read your freedaily horoscopes and learn more about your',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.internal {
  background: url('../assets/img/home/page_bottom.png') no-repeat center;
  background-size: cover;
  &__main {
    width: 100%;
    padding: 15px 0;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, auto);
    gap: 48px;
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .internal {
    background: url('../assets/img/home/page_bottom.png') no-repeat center;
    background-size: cover;
    &__main {
      width: 100%;
      padding: 16 * $pr;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(2, 1fr);
      gap: 16 * $pr;
    }
  }
}
</style>
