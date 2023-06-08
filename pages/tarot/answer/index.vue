<!--
 * @Date: 2023-06-06 16:51:37
 * @LastEditors: tianjun
 * @LastEditTime: 2023-06-08 16:33:19
 * @FilePath: /seekastrology/pages/tarot/answer/index.vue
 * @Description: 
-->
<template>
  <div class="tarot-container">
    <div class="title">What the Tarot Cards Mean in This Reading</div>
    <div class="ad-box_row mt-48"></div>
    <div class="tarot-section">
      <div class="ad-box"></div>
      <div class="main-content">
        <ul class="content-list">
          <li
            class="content-list-item"
            v-for="(item, index) in cardsInfo"
            :key="index"
          >
            <div class="card-wrapper">
              <nuxt-img
                class="card-img"
                :class="{ 'card-img-rotate': item.type == 2 }"
                :src="item.icon"
                fit="cover"
                height="390"
                width="220"
                :alt="item.name"
                loading="lazy"
              ></nuxt-img>
              <div class="card-text">{{ item.card_name }}</div>
            </div>
            <div class="desc">
              <div class="desc-title">{{ subTitleText[type][index] }}</div>
              <div class="desc-text">{{ item.desc }}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="ad-box"></div>
    </div>
    <div class="ad-box_row mt-48"></div>
    <more-tarot class="mt-48"></more-tarot>
    <div class="ad-box_row mt-32"></div>
  </div>
</template>

<script>
import MoreTarot from '../../../components/tarot/MoreTarot.vue'
export default {
  name: 'answer',
  components: {
    MoreTarot,
  },
  data() {
    return {
      cardsInfo: [],
      type: 1,
      titleText: {
        1: 'Love Tarot Reading',
        2: 'Tarot Career Reading',
        3: 'Universal Tarot Reading',
        4: 'Choose 1 Cards From The Deck Below:',
      },
      subTitleText: {
        //类型:1-爱情、2-事业、3-通用、4-日常
        1: [
          'First Position: Do Our Souls Already Know Each Other',
          'Second Position: Should I Invest My Time in This Relationship',
          'Third Position: How Does the Future of This Relationship Look',
        ],
        2: [
          'purpose ： Why did you choose this job in the first place?',
          'responsibilities：- What is your role here?',
          'Progress - Your current state - How do you feel about the work?',
          'rewards - What you stand to gain from this job, financially, spiritually, or otherwise?',
          'future - What is a possible future that is coming from all of this',
        ],
        3: ['Past', 'Present', 'Future'],
        4: ['card name'],
      },
    }
  },
  mounted() {
    this.type = this.$route.query.type
    const cardsInfo = sessionStorage.getItem('cardsInfo')
    if (cardsInfo) {
      this.cardsInfo = JSON.parse(cardsInfo)
    }
    if (this.type == 4) {
      this.subTitleText[this.type][0] = this.cardsInfo[0].card_name
    }
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
  display: flex;
  justify-content: center;
  .ad-box {
    width: 160px;
    height: 600px;
    background-color: #555761;
  }
}
.ad-box_row {
  width: 924px;
  height: 114px;
  margin: 0 auto;
  background-color: #555761;
}
.main-content {
  margin: 124px 32px 0;
  flex: 1;
  max-width: 1400px;
  .content-list-item {
    display: flex;
    &:not(:first-child) {
      margin-top: 97px;
    }
    .card-wrapper {
      margin-right: 137px;
    }
    .card-img-rotate {
      transform: rotate(180deg);
    }
    .card-text {
      text-align: center;
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 30px;
      color: rgba(255, 255, 255, 0.7);
      margin-top: 12px;
    }
    .desc-title {
      font-family: 'Cinzel Decorative';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 48px;
    }
    .desc-text {
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      margin-top: 40px;
    }
  }
}
.mt-48 {
  margin-top: 48px;
}
.mt-32 {
  margin-top: 32px;
}
.mt-200 {
  margin-top: 200px;
}
</style>
