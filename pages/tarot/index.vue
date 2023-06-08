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
    <div class="cards-box">
      <div class="card-wrapper">
        <div class="card-title">
          The 78 Tarot cards are divided into two main <br />sections, the Major
          Arcana and Minor Arcana, <br />and further into four suits:
        </div>
        <nuxt-link to="/tarot/cards">
          <button class="button">View All</button>
        </nuxt-link>
      </div>

      <ul class="card-list">
        <li class="card-items">
          <img
            src="~/assets/img/tarot/card0.png"
            alt=""
            class="card-item-img"
          />
          <div class="card-text">The Fool</div>
        </li>
        <li class="card-items">
          <img
            src="~/assets/img/tarot/card1.png"
            alt=""
            class="card-item-img"
          />
          <div class="card-text">The Magician</div>
        </li>
        <li class="card-items">
          <img
            src="~/assets/img/tarot/card2.png"
            alt=""
            class="card-item-img"
          />
          <div class="card-text">The High Priestess</div>
        </li>
        <li class="card-items">
          <img
            src="~/assets/img/tarot/card3.png"
            alt=""
            class="card-item-img"
          />
          <div class="card-text">The Empress</div>
        </li>
        <li class="card-items">
          <img
            src="~/assets/img/tarot/card4.png"
            alt=""
            class="card-item-img"
          />
          <div class="card-text">The Emperor</div>
        </li>
      </ul>
    </div>
    <div class="ad-box_row mt-32"></div>
  </div>
</template>

<script>
import MoreTarot from '../../components/tarot/MoreTarot.vue'
import TarotPlay from '../../components/tarot/TarotPlay.vue'
export default {
  name: 'tarot',
  components: {
    MoreTarot,
    TarotPlay,
  },
  data() {
    return {

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
.cards-box {
  padding-top: 96px;
  margin-top: 48px;
  background-image: url('~assets/img/tarot/card_bg.png');
  background-size: 100%;
  background-repeat: no-repeat;
  .card-wrapper {
    display: flex;
    width: 1400px;
    margin: 0 auto;
    .button {
      margin-left: 315px;
    }
  }
  .card-title {
    font-family: 'Cinzel Decorative';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
  }
  .card-list {
    width: 1400px;
    margin: 60px auto 0;
    display: grid;
    grid-gap: 75px;
    grid-template-columns: repeat(5, 220px);
    text-align: center;
    .card-item-img {
      height: 440px;
      width: 100%;
    }
    .card-text {
      margin-top: 16px;
    }
  }
}
.mt-48 {
  margin-top: 48px;
}
.mt-32 {
  margin-top: 32px;
}
</style>
