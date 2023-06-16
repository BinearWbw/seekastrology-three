<!--
 * @Date: 2023-06-06 14:21:49
 * @LastEditors: tian 249682049@qq.com
 * @LastEditTime: 2023-06-16 10:52:56
 * @FilePath: /seekastrology/components/tarot/MoreTarot.vue
 * @Description: 
-->
<template>
  <div class="container">
    <div class="title">More Tarot Readings</div>
    <div class="more-tarot">
      <a href="/tarot" class="link" v-show="showTarotType != 4">
        <div class="more-tarot-items">
          <img src="~/assets/img/tarot/daily.png" alt="" />
          <p class="item-title">Daily Tarot</p>
          <p class="item-sub-title">
            What does the future have in store for you? Now is time to discover
            the day’s possibilities!
          </p>
          <button class="button">Read More</button>
        </div></a
      >
      <a :href="'/tarot/type?type=' + 1" class="link" v-show="showTarotType != 1">
        <div class="more-tarot-items">
          <img src="~/assets/img/tarot/love.png" alt="" />
          <p class="item-title">LOVE Tarot Reading</p>
          <p class="item-sub-title">
            Receive personalized advice for your romantic dilemmas
          </p>
          <button class="button">Read More</button>
        </div></a
      >
      <a :href="'/tarot/type?type=' + 2" class="link" v-show="showTarotType != 2">
        <div class="more-tarot-items">
          <img src="~/assets/img/tarot/cause.png" alt="" />
          <p class="item-title">Tarot Career Reading</p>
          <p class="item-sub-title">
            This free career Tarot reading is here to help you find success
          </p>
          <button class="button">Read More</button>
        </div></a
      >
      <a :href="'/tarot/type?type=' + 3" class="link" v-show="showTarotType != 3">
        <div class="more-tarot-items">
          <img src="~/assets/img/tarot/general.png" alt="" />
          <p class="item-title">Universal Tarot Reading</p>
          <p class="item-sub-title">
            Get the answers you need with this 3-card Tarot spread
          </p>
          <button class="button">Read More</button>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoreTarot',
  computed: {
    showTarotType() {
      let type = this.$route.query.type || '4'
      return type
    },
  },
  data() {
    return {
      more: [
        {
          img: 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
          title: 'LOVE Tarot Reading',
          text: 'We have so many opportunities for love in our lifetimes! You can consul',
        },
        {
          img: 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
          title: 'LOVE Tarot Reading',
          text: 'We have so many opportunities for love in our lifetimes! You can consul',
        },
        {
          img: 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
          title: 'LOVE Tarot Reading',
          text: 'We have so many opportunities for love in our lifetimes! You can consul',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.title {
  font-family: 'Cinzel Decorative';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 64px;
  text-align: center;
}
.more-tarot {
  margin-top: 34px;
  display: flex;
  justify-content: center;
  text-align: center;
  .more-tarot-items {
    width: 456px;
    height: 376px;
    padding: 16px;
    box-sizing: border-box;
    background: linear-gradient(
      0.13deg,
      #08070f 0.11%,
      rgba(6, 5, 6, 0) 99.89%
    );
    border: 1px solid rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(4px);
    border-radius: 6px;
    -webkit-transition: transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out;
    img {
      width: 100%;
      height: 178px;
    }
    &:hover {
      transform: translateY(-20px);
      .button {
        color: #000;
        background-color: #fff;
      }
    }
  }
  .link:not(:first-child) {
    margin-left: 16px;
  }
  .item-title {
    font-family: 'Rubik';
    font-size: 22px;
    line-height: 30px;
    color: #ffffff;
    margin-top: 16px;
  }
  .item-sub-title {
    margin-top: 8px;
    font-family: 'Rubik';
    font-size: 14px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.7);
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
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  // .container {
  // padding: 16 * $pr;
  // }
  .title {
    font-family: 'Cinzel Decorative';
    font-style: normal;
    font-weight: 700;
    font-size: 26 * $pr;
    line-height: 36 * $pr;
    text-align: center;
  }
  .more-tarot {
    flex-direction: column;
    .more-tarot-items {
      width: 100%;
      margin-left: 0;
      .item-title {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400 * $pr;
        font-size: 22 * $pr;
        line-height: 30 * $pr;
      }
      .item-sub-title {
        font-size: 14 * $pr;
        line-height: 18 * $pr;
      }
    }
    .link:not(:first-child) {
      margin-left: 0;
      margin-top: 24 * $pr;
    }
  }
}
</style>
