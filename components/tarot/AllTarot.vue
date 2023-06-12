<!--
 * @Date: 2023-06-06 14:21:49
 * @LastEditors: tianjun
 * @LastEditTime: 2023-06-12 11:11:30
 * @FilePath: /seekastrology/components/tarot/AllTarot.vue
 * @Description: 
-->
<template>
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
        <img src="~/assets/img/tarot/card0.png" alt="" class="card-item-img" />
        <div class="card-text">The Fool</div>
      </li>
      <li class="card-items">
        <img src="~/assets/img/tarot/card1.png" alt="" class="card-item-img" />
        <div class="card-text">The Magician</div>
      </li>
      <li class="card-items">
        <img src="~/assets/img/tarot/card2.png" alt="" class="card-item-img" />
        <div class="card-text">The High Priestess</div>
      </li>
      <li class="card-items">
        <img src="~/assets/img/tarot/card3.png" alt="" class="card-item-img" />
        <div class="card-text">The Empress</div>
      </li>
      <li class="card-items">
        <img src="~/assets/img/tarot/card4.png" alt="" class="card-item-img" />
        <div class="card-text">The Emperor</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AllTarot',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.cards-box {
  padding-top: 96px;
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
</style>
