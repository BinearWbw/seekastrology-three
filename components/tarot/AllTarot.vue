<!--
 * @Date: 2023-06-06 14:21:49
 * @LastEditors: tian 249682049@qq.com
 * @LastEditTime: 2023-06-14 17:50:26
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
    <ul class="card-list-mobile">
      <li class="list-mobile">
        <img
          src="~/assets/img/home/tarot_card.png"
          alt=""
          class="list-mobile-img"
        />
      </li>
      <li class="list-mobile">
        <img
          src="~/assets/img/home/tarot_card.png"
          alt=""
          class="list-mobile-img"
        />
      </li>
      <li class="list-mobile">
        <img
          src="~/assets/img/home/tarot_card.png"
          alt=""
          class="list-mobile-img"
        />
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
@use 'sass:math';
.cards-box {
  padding-top: 96px;
  background-image: url('~assets/img/tarot/card_bg.png');
  background-size: 100%;
  background-repeat: no-repeat;
  margin-top: 48px;
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
    .card-items {
      -webkit-transition: transform 0.3s ease-in-out;
      transition: transform 0.3s ease-in-out;
      &:hover {
        transform: translateY(-20px);
      }
    }
    .card-item-img {
      height: 440px;
      width: 100%;
    }
    .card-text {
      margin-top: 16px;
    }
  }
  .card-list-mobile {
    display: none;
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
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .cards-box {
    background: url('~assets/img/tarot/card_bg_mobile.png');
    background-size: 100%;
    margin-left: -16 * $pr;
    margin-right: -16 * $pr;
    padding-top: 32 * $pr;
    height: 480px;
    .card-wrapper {
      width: 100%;
      flex-direction: column;
      align-items: center;
      .button {
        margin-left: 0;
      }
    }
    .card-title {
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 22 * $pr;
      line-height: 30 * $pr;
      text-align: center;
    }
    .card-list {
      display: none;
    }
    .card-list-mobile {
      display: flex;
      justify-content: center;
      transform: translateY(40px);
      background-image: url('~assets/img/tarot/card_bg_list.png');
      background-size: 100%;
      background-repeat: no-repeat;
      .list-mobile {
        width: 114px;
      }
      .list-mobile:nth-child(1) {
        transform: translateX(50%) rotate(-5deg);
      }
      .list-mobile:nth-child(2) {
        transform: translateY(-16px) rotate(7deg);
      }
      .list-mobile:nth-child(3) {
        transform: translate(-50%, 16px) rotate(15deg);
      }
      .list-mobile-img {
        width: 100%;
      }
    }
  }
}
</style>
