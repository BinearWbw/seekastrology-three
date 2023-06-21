<!--
 * @Date: 2023-06-06 16:51:37
 * @LastEditors: tian 249682049@qq.com
 * @LastEditTime: 2023-06-20 17:15:14
 * @FilePath: /seekastrology/pages/tarot/detail/index.vue
 * @Description: 
-->
<template>
  <div class="tarot-container">
    <div class="title mt-75 mt-44-mobile">
      {{ cardsInfo.name }} Card Meaning
    </div>
    <div class="tarot-section">
      <!-- <div class="add-box-wrapper"><div class="ad-box"></div></div> -->
      <div class="main-content">
        <div class="ad-box_row" style="width: 100%"></div>
        <ul class="content-list">
          <li class="content-list-item">
            <div class="card-wrapper">
              <nuxt-img
                class="card-img"
                :src="cardsInfo.icon || '/'"
                fit="cover"
                :alt="cardsInfo.name"
              ></nuxt-img>
              <div class="card-text">{{ cardsInfo.name }}</div>
            </div>
            <div class="desc">
              <!-- <div class="desc-title">{{ titleText[type][index] }}</div> -->
              <div class="desc-text" v-html="cardsInfo.desc"></div>
            </div>
          </li>
        </ul>
      </div>
      <!-- <div class="add-box-wrapper"><div class="ad-box"></div></div> -->
    </div>
    <div class="ad-box_row mt-48 mb-48"></div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data() {
    return {
      cardsInfo: {},
    }
  },
  // async asyncData({ query, error, $apiList }) {
  //   try {
  //     const cardsInfo = await $apiList.tarot.getDetail({
  //       origin: process.env.origin,
  //       id: query.id,
  //     })
  //     return {
  //       cardsInfo,
  //     }
  //   } catch (e) {
  //     error({ statusCode: e.code, message: e.message })
  //   }
  // },
  mounted() {
    this.getDatas()
  },
  methods: {
    async getDatas() {
      const data = await this.$apiList.tarot.getDetail({
        origin: process.env.origin,
        id: this.$route.query.id
      })
      this.cardsInfo = data
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.tarot-container {
  color: #fff;
  ::v-deep h2,
  ::v-deep h3 {
    font-family: 'Cinzel Decorative';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
    color: #ffffff !important;
    margin-top: 40px;
  }
  ::v-deep p {
    margin-top: 30px;
  }
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
  .add-box-wrapper {
    width: 160px;
    height: 600px;
  }
  .ad-box {
    position: fixed;
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
  margin: 40px 32px 0;
  flex: 1;
  max-width: 1400px;
  .content-list-item {
    margin-top: 92px;
    display: flex;
    &:not(:first-child) {
      margin-top: 97px;
    }
    .card-wrapper {
      margin-right: 137px;
      .card-img {
        height: 600px;
      }
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
    }
  }
}
.mt-48 {
  margin-top: 48px;
}
.mb-48 {
  margin-bottom: 48px;
}
.mt-48_minus {
  margin-top: -48px;
}
.mt-32 {
  margin-top: 32px;
}
.mt-75 {
  margin-top: 75px;
}
.mt-200 {
  margin-top: 200px;
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .tarot-container {
    padding: 16 * $pr;
  }
  .main-content {
    margin: 0;
  }
  .add-box-wrapper {
    display: none;
  }
  .ad-box_row {
    width: 100%;
    height: 300 * $pr;
    display: none;
  }

  .title {
    font-family: 'Cinzel Decorative';
    font-style: normal;
    font-weight: 700;
    font-size: 36 * $pr;
    line-height: 48 * $pr;
  }
  .content-list {
    .content-list-item {
      flex-direction: column;
      margin-top: 26px;
      .card-wrapper {
        margin: 0 auto 26px;
        .card-img {
          height: 400px;
        }
      }
    }
  }
  .mt-44-mobile {
    margin-top: 44px;
  }
}
</style>
