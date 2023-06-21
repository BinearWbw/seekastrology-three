<!--
 * @Date: 2023-06-06 14:21:49
 * @LastEditors: tian 249682049@qq.com
 * @LastEditTime: 2023-06-19 11:17:49
 * @FilePath: /seekastrology/components/tarot/MoreTarot.vue
 * @Description: 
-->
<template>
  <div class="container">
    <div class="title">
      {{
        $route.path.includes('/tarot') ? 'More Tarot Readings' : 'Tarot Reading'
      }}
    </div>
    <div class="more-tarot">
      <div class="more-tarot-items" v-show="showTarotType != 4">
        <a :href="`${getIntersperseUrl}/tarot/`" class="link">
          <img src="~/assets/img/tarot/day.png" alt="" />
          <p class="item-title">Daily Tarot</p>
          <p class="item-sub-title">
            What does the future have in store for you? Now is time to discover
            the day’s possibilities!
          </p>
          <button class="button">Read More</button>
        </a>
      </div>

      <div class="more-tarot-items" v-show="showTarotType != 1">
        <a :href="`${getIntersperseUrl}/tarot/type/?type=1`" class="link">
          <img src="~/assets/img/tarot/love.png" alt="" />
          <p class="item-title">LOVE Tarot Reading</p>
          <p class="item-sub-title">
            Receive personalized advice for your romantic dilemmas
          </p>
          <button class="button">Read More</button>
        </a>
      </div>

      <div class="more-tarot-items" v-show="showTarotType != 2">
        <a :href="`${getIntersperseUrl}/tarot/type/?type=2`" class="link">
          <img src="~/assets/img/tarot/rich.png" alt="" />
          <p class="item-title">Tarot Career Reading</p>
          <p class="item-sub-title">
            This free career Tarot reading is here to help you find success
          </p>
          <button class="button">Read More</button>
        </a>
      </div>

      <div class="more-tarot-items" v-show="showTarotType != 3">
        <a :href="`${getIntersperseUrl}/tarot/type/?type=3`" class="link">
          <img src="~/assets/img/tarot/general.png" alt="" />
          <p class="item-title">Universal Tarot Reading</p>
          <p class="item-sub-title">
            Get the answers you need with this 3-card Tarot spread
          </p>
          <button class="button">Read More</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MoreTarot',
  computed: {
    showTarotType() {
      let type = this.$route.query.type || '4'
      return type
    },
    ...mapGetters(['getIntersperseUrl']),
  },
  data() {
    return {

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
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, 456px);
  justify-content: center;
  grid-gap: 16px;
  max-width: 1400px;
  margin: 34px auto 48px;
  .more-tarot-items {
    // width: 456px;
    // height: 376px;
    padding: 16px 16px 40px;
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
    &:hover {
      transform: translateY(-20px);
      .button {
        color: #000;
        background-color: #fff;
      }
    }
    .link {
      display: block;
      width: 100%;
      height: 100%;
    }
    img {
      // width: 100%;
      // height: 190px;
      width: 424px;
      height: 174px;
      object-fit: cover;
    }
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
  margin-top: 24px;
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
  .container {
    padding: 16 * $pr;
  }
  .title {
    font-family: 'Cinzel Decorative';
    font-style: normal;
    font-weight: 700;
    font-size: 26 * $pr;
    line-height: 36 * $pr;
    text-align: center;
  }
  .more-tarot {
    grid-template-columns: repeat(auto-fill, 100%);
    margin: 16 * $pr auto 48 * $pr;
    .more-tarot-items {
      width: 100%;
      margin-left: 0;
      padding: 16 * $pr 16 * $pr 24 * $pr;
      border-radius: 6 * $pr;
      img {
        // height: 180px;
        width: 100%;
        height: 127 * $pr;
      }
      .item-title {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400 * $pr;
        font-size: 22 * $pr;
        line-height: 30 * $pr;
        margin-top: 16 * $pr;
      }
      .item-sub-title {
        font-size: 14 * $pr;
        line-height: 18 * $pr;
        margin-top: 8 * $pr;
      }
      .button {
        width: 220 * $pr;
        height: 32 * $pr;
        border-radius: 42 * $pr;
        font-size: 14 * $pr;
        line-height: 18 * $pr;
        margin-top: 24 * $pr;
      }
    }
    .link:not(:first-child) {
      margin-left: 0;
      margin-top: 24 * $pr;
    }
  }
}
</style>
