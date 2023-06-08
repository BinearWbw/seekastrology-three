<!--
 * @Date: 2023-06-06 14:21:49
 * @LastEditors: tianjun
 * @LastEditTime: 2023-06-08 18:26:31
 * @FilePath: /seekastrology/components/tarot/TarotPlay.vue
 * @Description: 
-->
<template>
  <div class="tarot-container">
    <div class="tip-box" v-if="!isSelected">
      <div class="tip-img-wrapper">
        <img
          src="~/assets/img/tarot/Vector2.png"
          style="margin-right: -8px"
          alt=""
          class="tip-img"
        />
        <img src="~/assets/img/tarot/Vector1.png" alt="" class="tip-img" />
      </div>
      <div class="tip-text">
        You can also draw
        <span>{{ numbers }}</span>
        tarot card！
      </div>
    </div>
    <div class="tarot-wrapper" v-show="!isSelected">
      <div class="card-row">
        <div
          class="card-wrapper"
          v-for="index of 39"
          :key="'top-' + index"
          :style="{
            top: 160 + 'px',
            left: 57 + index * 20 + 'px',
          }"
          :class="{ selected: selectIndex == index }"
          @click="handleClike(index)"
        >
          <img class="card-img" src="~/assets/img/tarot/card.png" alt="Card" />
          <!-- :style="{ top: 160 + 'px', left: calc( (100% - 890+ 'px')/2 + index * 20 ) }" -->
        </div>
      </div>
      <div class="card-row">
        <div
          class="card-wrapper"
          v-for="index of 39"
          :key="'top-' + index"
          :style="{ top: 403 + 'px', left: 57 + index * 20 + 'px' }"
          @click="handleClike(index)"
        >
          <img class="card-img" src="~/assets/img/tarot/card.png" alt="Card" />
        </div>
      </div>
    </div>
    <div class="mask-wrapper" v-if="isSelected">
      <div class="show-wrapper">
        <nuxt-img
          class="item-img"
          v-for="(item, index) in showList"
          :key="index"
          :src="item.icon || '/'"
          fit="cover"
          height="440"
          width="260"
          :alt="item.name"
        ></nuxt-img>
      </div>
      <div class="handle-btn">
        <nuxt-link :to="{ path: '/tarot/answer', query: { type } }">
          <img class="btn-img" src="~/assets/img/tarot/btn.png" alt="btn"
        /></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TarotPlay',
  props: {
    type: {
      type: String,
      default: '1', //类型:1-爱情、2-事业、3-通用、4-日常
    },
  },
  watch: {
    type: {
      handler(newVal) {
        if (newVal === '1' || newVal === '3') {
          this.numbers = 3
        } else if (newVal === '2') {
          this.numbers = 5
        } else {
          this.numbers = 1
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      selectIndex: 0,
      isSelected: false,
      cardsInfo: [],
      showList: [],
      numbers: 3,
    }
  },
  mounted() {
  },
  methods: {
    async handleClike(index) {
      this.selectIndex = index
      //   this.isSelected = true
      if (this.cardsInfo.length === 0) {
        await this.drawCard()
      }
      this.judgeShow()
    },
    async drawCard() {
      const res = await await this.$apiList.tarot.drawTarot({
        origin: process.env.origin,
        type: this.type,
      })
      if (res && res.length) {
        this.cardsInfo = res
        sessionStorage.setItem('cardsInfo', JSON.stringify(res))
        this.showList.push(res[0])
      }
    },
    judgeShow() {
      switch (this.type) {
        case '1' || '3':
          if (this.showList.length == 3) {
            this.isSelected = true
          } else {
            this.showList.push(this.cardsInfo[this.showList.length])
            this.numbers--
          }
          break
        case '2':
          if (this.showList.length == 5) {
            this.isSelected = true
          } else {
            this.showList.push(this.cardsInfo[this.showList.length])
            this.numbers--
          }
          break
        case '4':
          if (this.showList.length == 1) {
            this.isSelected = true
          }
          break
      }
    },
    resetData() {
      this.cardsInfo = []
      this.showList = []
      this.isSelected = false
    },
  },
}
</script>

<style lang="scss" scoped>
.tarot-container {
  width: 100%;
  box-sizing: border-box;
  height: 725px;
  padding: 5px;
  border: 1px solid hsla(0, 0%, 100%, 0.5);
  position: relative;
  .tarot-wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #45454d;
    position: relative;
  }
  .card-wrapper {
    position: absolute;
    left: 180px;
    transform-style: preserve-3d;
    transition: transform 1s;
    .card-img {
      cursor: pointer;
    }
  }
  .card-img {
    width: 130px;
    height: 220px;
  }
  .show-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}
.tip-box {
  box-sizing: border-box;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 258px;
  height: 136px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(220, 153, 40, 0.4);
  border-radius: 24px;
  background-image: url('~assets/img/tarot/sun.png');
  background-position: 100% 14px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .tip-img-wrapper {
    opacity: 0.6;
  }
  .tip-text {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #dc9928;
    margin-top: 12px;
  }
}
.mask-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding-bottom: 34px;
  .btn-img {
    margin-top: 36px;
    cursor: pointer;
  }
}
</style>
