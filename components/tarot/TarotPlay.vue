<!--
 * @Date: 2023-06-06 14:21:49
 * @LastEditors: tianjun
 * @LastEditTime: 2023-06-12 11:03:39
 * @FilePath: /seekastrology/components/tarot/TarotPlay.vue
 * @Description: 
-->
<template>
  <div class="tarot-container">
    <div class="tip-box" v-show="!isSelected">
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
    <div class="tarot-wrapper" ref="tarotWrapper" v-show="!isSelected">
      <div class="card-row" @mouseover="shuffleCards('topCard', $event)">
        <!-- <div
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
          <img class="card-img" src="~/assets/img/tarot/card.png" alt="Card" /> -->
        <!-- :style="{ top: 160 + 'px', left: calc( (100% - 890+ 'px')/2 + index * 20 ) }" -->
        <!-- </div> -->
        <div
          class="card-wrapper"
          v-for="index of 39"
          :key="'top-' + index"
          :ref="'topCard' + index"
          :style="{
            top: 160 + 'px',
            left: (index - 1) * 20 + 'px',
          }"
          @click="handleClike(index)"
        >
          <img
            class="card-img"
            :data-index="index"
            src="~/assets/img/tarot/card.png"
            alt="Card"
          />
        </div>
      </div>
      <div class="card-row" @mouseover="shuffleCards('bottomCard', $event)">
        <div
          class="card-wrapper"
          v-for="index of count"
          :key="'bottom-' + index"
          :ref="'bottomCard' + index"
          :style="{
            top: 404 + 'px',
            left: (index - 1) * 20 + 'px',
          }"
          @click="handleClike(index)"
        >
          <img
            class="card-img"
            :data-index="index"
            src="~/assets/img/tarot/card.png"
            alt="Card"
          />
        </div>
      </div>
    </div>
    <div class="mask-wrapper" v-show="isSelected">
      <div class="show-wrapper" :class="styleObj">
        <nuxt-img
          class="item-img"
          v-for="(item, index) in showList"
          :key="index"
          :src="item.icon || '/'"
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
  computed: {
    styleObj() {
      return {
        'rotate-start': this.isSelected && this.type == 4,
        'rotate-status': this.isSelected && this.type == 4,
      }
    },
  },
  data() {
    return {
      selectIndex: 0,
      isSelected: false,
      cardsInfo: [],
      showList: [],
      numbers: 3,
      count: 39,
    }
  },
  mounted() {},
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
        case '1':
        case '3':
          if (this.showList.length == 3) {
            this.isSelected = true
          } else {
            this.showList.push(this.cardsInfo[this.showList.length])
            this.numbers--
            this.count--
          }
          break
        case '2':
          if (this.showList.length == 5) {
            this.isSelected = true
          } else {
            this.showList.push(this.cardsInfo[this.showList.length])
            this.numbers--
            this.count--
          }
          break
        case '4':
          if (this.showList.length == 1) {
            this.isSelected = true
          }
          break
      }
    },
    shuffleCards(param, event) {
      let index = event.target.dataset.index
      if (!index) {
        return
      }

      const tarotWrapper = this.$refs.tarotWrapper
      const wrapperWidth = this.$refs.tarotWrapper.offsetWidth
      const wrapperHeight = this.$refs.tarotWrapper.offsetHeight

      // console.log("%c Line:192 🍔 tarotWrapper", "color:#fca650", tarotWrapper);
      // console.log("%c Line:192 🍔 tarotWrapper", "color:#fca650", wrapperWidth);
      // console.log("%c Line:192 🍔 tarotWrapper", "color:#fca650", wrapperHeight);
      let flag = Math.random() * 10 > 5 ? '+' : '-' // 正负数标识

      let card = this.$refs[`${param}${index}`][0]

      let leftValue = parseInt(card.style.left, 10)
      let topValue = parseInt(card.style.top, 10)

      // card.style.transform = `translate(-140px, 20px) rotate(20deg)`
      // card.style.zIndex = index++
      // card.style.left = `${leftValue} + ${flag}${Math.floor(Math.random() * 220)}px`
      card.style.left =
        leftValue + Number(flag + Math.floor(Math.random() * 130)) + 'px'
      card.style.top =
        topValue + Number(flag + Math.floor(Math.random() * 110)) + 'px'
      card.style.transform = `rotate(${flag}${Math.floor(
        Math.random() * 120
      )}deg)`

      // card.style.transform = `translate(${flag}${Math.floor(
      //   Math.random() * (wrapperWidth / 3 - 150)
      // )}px, ${Math.floor(
      //   Math.random() * (wrapperHeight / 3 - 180)
      // )}px) rotate(${flag}${Math.floor(Math.random() * 120)}deg)`
    },
    resetData() {
      this.cardsInfo = []
      this.showList = []
      this.isSelected = false
      this.count = 39
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
  .card-row {
    width: 890px;
    // margin: 0 auto;
    // display: flex;
    position: absolute;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .card-wrapper {
    position: absolute;
    // left: 180px;
    display: inline-block;
    transition: all 0.8s;
    width: 130px;
    height: 220px;
    cursor: pointer;
    // &:not(:first-child) {
    //   margin-left: -110px;
    // }
    &:hover {
      border: 1px solid #9747ff;
      border-radius: 8px;
      // transform: translate(random(20) + px, random(20) + px)
      //   rotate(random(100) + deg);
    }
  }
  .card-img {
    width: 100%;
    height: 100%;
  }
  .show-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .mt-160 {
    margin-top: 160px;
  }
  .mt-24 {
    margin-top: 24px;
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

.rotate-start {
  opacity: 0.4;
  transform: scale(0.4) rotate(40deg) translateY(20px);
}
.rotate-status {
  animation: rotate_status 0.6s ease-in;
  animation-fill-mode: forwards;
}
@keyframes rotate_status {
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg) translateY(0);
  }
}
</style>
