<!--
 * @Date: 2023-06-09 09:27:30
 * @LastEditors: tianjun
 * @LastEditTime: 2023-06-12 11:05:31
 * @FilePath: /seekastrology/pages/tarot/index.vue
 * @Description: 
-->
<template>
  <div class="tarot-container">
    <div class="title">Choose 1 Cards From The Deck Below:</div>
    <div class="tarot-section">
      <div class="ad-box"></div>
      <div class="tarot-box">
        <tarot-play type="4"></tarot-play>
      </div>
      <div class="ad-box"></div>
    </div>
    <div class="ad-box_row mt-48"></div>
    <more-tarot class="mt-48"></more-tarot>
    <div class="ad-box_row mt-32"></div>
    <all-tarot class="mt-48"></all-tarot>
    <div class="ad-box_row mt-32"></div>
  </div>
</template>

<script>
import MoreTarot from '../../components/tarot/MoreTarot.vue'
import TarotPlay from '../../components/tarot/TarotPlay.vue'
import AllTarot from '../../components/tarot/AllTarot.vue'
export default {
  name: 'tarot',
  components: {
    MoreTarot,
    TarotPlay,
    AllTarot
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.tarot-container {
  color: #fff;
}
.title {
  font-family: 'Cinzel Decorative';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 64px;
  text-align: center;
}
.tarot-section {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  .ad-box {
    width: 160px;
    height: 600px;
    background-color: #555761;
  }
  .tarot-box {
    margin-left: 32px;
    margin-right: 32px;
    flex: 1;
    max-width: 1400px;
  }
}
.ad-box_row {
  width: 924px;
  height: 114px;
  margin: 0 auto;
  background-color: #555761;
}
.button {
  margin-top: 18px;
  width: 124px;
  height: 32px;
  border: 1px solid #45454d;
  border-radius: 42px;
  font-family: 'Rubik';
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 18px;
  -webkit-transition: background-color 0.3s, -webkit-color 0.3s;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    color: #000;
    background-color: #fff;
  }
}
.mt-48 {
  margin-top: 48px;
}
.mt-32 {
  margin-top: 32px;
}
</style>
