<!--
 * @Date: 2023-06-09 09:27:30
 * @LastEditors: tian 249682049@qq.com
 * @LastEditTime: 2023-06-15 10:57:26
 * @FilePath: /seekastrology/pages/tarot/index.vue
 * @Description: 
-->
<template>
  <div class="tarot-container">
    <div class="title">Choose 1 Cards From The Deck Below:</div>
    <div class="tarot-section">
      <div class="add-box-wrapper">
        <google-ad classNames="ad-box" id="4068446091"></google-ad>
      </div>
      <div class="tarot-box">
        <tarot-play type="4"></tarot-play>
      </div>
      <div class="add-box-wrapper">
        <google-ad classNames="ad-box" id="9572904273"></google-ad>
      </div>
    </div>
    <google-ad classNames="ad-box_row mt-48" id="4356182716"></google-ad>
    <more-tarot class="mt-48"></more-tarot>
    <google-ad classNames="ad-box_row mt-32" id="7816119415"></google-ad>
    <all-tarot class="mt-48"></all-tarot>
    <google-ad classNames="ad-box_row mt-32 mt-120 mb-32" id="6503037744"></google-ad>
  </div>
</template>

<script>
import MoreTarot from '../../components/tarot/MoreTarot.vue'
import TarotPlay from '../../components/tarot/TarotPlay.vue'
import AllTarot from '../../components/tarot/AllTarot.vue'
// import GoogleAd from '../../components/GoogleAd.vue'
export default {
  name: 'tarot',
  components: {
    MoreTarot,
    TarotPlay,
    AllTarot,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.tarot-container {
  color: #fff;
}
.tarot-container {
  margin-top: 40px;
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
  .add-box-wrapper {
    width: 160px;
    height: 600px;
  }
  .ad-box {
    width: 160px;
    height: 600px;
    background-color: #555761;
    position: fixed;
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
  overflow: hidden;
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
.mb-32 {
  margin-bottom: 32px;
}
@media (max-width: 940px) {
  .ad-box_row {
    width: 90%;
    margin: 0 auto;
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .tarot-container {
    padding: 16 * $pr;
    > .container {
      padding: 0;
    }
  }
  .title {
    font-family: 'Cinzel Decorative';
    font-style: normal;
    font-weight: 700 * $pr;
    font-size: 26 * $pr;
    line-height: 36 * $pr;
    text-align: center;
  }
  .add-box-wrapper {
    display: none;
  }
  .ad-box_row {
    width: 100%;
    height: 300 * $pr;
  }
  .mt-120 {
    margin-top: 120 * $pr;
  }
  .mt-48 {
    margin-top: 48 * $pr;
  }
}
</style>
