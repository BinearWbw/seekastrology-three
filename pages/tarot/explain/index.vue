<!--
 * @Date: 2023-06-06 16:51:37
 * @LastEditors: tianjun
 * @LastEditTime: 2023-06-06 17:31:17
 * @FilePath: /seekastrology/pages/tarot/explain/index.vue
 * @Description: 
-->
<template>
  <div class="tarot-container">
    <div class="title">Choose 1 Cards From The Deck Below:</div>
    <div class="ad-box_row mt-48"></div>
    <div class="tarot-section">
      <div class="ad-box"></div>
      <div class="main-content">
        <ul class="content-list">
          <li class="content-list-item">
            <img
              class="card"
              src="https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281"
              alt=""
            />
            <div class="desc">
              <div class="desc-title">The First Card (The Past):</div>
              <div class="desc-text">
                The 6 of Cups brings some respite and relief after the stress of
                the subtle changes that come with the number 5 in the Tarot. On
                this card, we see a bright and sunny day, children playing in
                the forefront. One of the children is offering the other a token
                in the form of a cup, overflowing with gifts and flowers. There
                are 6 cups all around these figures, and they are all filled
                with love and gifts. The cups are larger here than in other cups
                in the Tarot, suggesting love is overflowing. There is a strong
                sense of nostalgia and the past in this picture. This card could
                symbolize children as well, and a strong sense of family is also
                evoked often in readings when this card appears. Memory lane,
                reminiscing about family time and the past are all central
                themes when the 6 of Cups appears in your day. You may also
                receive a token of the past, a visitor from the past, or even a
                loving apology when this card appears for you. There is nothing
                to fear when the 6 of Cups card arrives, it is a symbolic token
                of love all around you that is strongly rooted in the past.
              </div>
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
  name: 'explain',
  components: {
    MoreTarot,
  },
  data() {
    return {
      cardsData: [
        {
          img: 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
          text: 'The Fool',
        },
        {
          img: 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
          text: 'The Fool',
        },
        {
          img: 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
          text: 'The Fool',
        },
        {
          img: 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
          text: 'The Fool',
        },
        {
          img: 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
          text: 'The Fool',
        },
      ],
    }
  },
  asyncData({ query }) {
    console.log('query', query)
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
  .content-list-item {
    display: flex;
    .card {
      width: 220px;
      height: 390px;
      margin-right: 137px;
    }
    .desc {
      width: 600px;
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
