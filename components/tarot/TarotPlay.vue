<!--
 * @Date: 2023-06-06 14:21:49
 * @LastEditors: tian 249682049@qq.com
 * @LastEditTime: 2023-06-14 10:50:29
 * @FilePath: /seekastrology/components/tarot/TarotPlay.vue
 * @Description: 
-->
<template>
  <div class="tarot-container">
    <div class="tip-box" v-show="!isSelected && questionTop">
      <div class="tip-img-wrapper" v-show="!showList.length">
        <img
          src="~/assets/img/tarot/Vector2.png"
          style="margin-right: -8px"
          alt=""
          class="tip-img"
        />
        <img src="~/assets/img/tarot/Vector1.png" alt="" class="tip-img" />
      </div>
      <div class="tip-img-list" v-if="showList.length">
        <nuxt-img
          v-for="(item, index) in showList"
          :key="index"
          class="tip-img-item"
          :class="{ 'img-rotate': item.desc_type == 2 }"
          height="80px"
          :src="item.icon"
          :alt="item.name"
        ></nuxt-img>
      </div>
      <div class="tip-text">
        You can also draw
        <span>{{ numbers }}</span>
        tarot card！
      </div>
    </div>
    <div
      class="question-box"
      :class="{ 'question-top': questionTop }"
      v-if="type != 4"
    >
      <img class="icon-img" src="~/assets/img/tarot/edit_icon.png" alt="" />
      <input
        @keyup.enter="handleInput"
        type="text"
        v-model="question"
        :disabled="questionTop"
        maxlength="100"
        placeholder="Enter your question here"
        class="question-input"
      />
      <button v-if="!questionTop" class="button" @click="handleInput">
        Submit
      </button>
    </div>
    <div
      class="tarot-wrapper"
      ref="tarotWrapper"
      v-if="!isSelected && questionTop"
      :key="'tarotWrapper' + type"
    >
      <div class="card-row" @mouseover="shuffleCards('topCard', $event)">
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
          :class="{ 'img-rotate': item.desc_type == 2 }"
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
          this.questionTop = true
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
      isSelected: false,
      questionTop: false,
      question: '',
      cardsInfo: [],
      showList: [],
      numbers: 3,
      count: 39,
    }
  },
  mounted() {},
  methods: {
    handleInput() {
      if (!this.question) {
        this.$toast('Please enter your question')
        return
      }
      this.questionTop = true
    },
    async handleClike() {
      if (this.cardsInfo.length === 0) {
        await this.drawCard()
      }
      this.judgeShow()
    },
    async drawCard() {
      const res = await await this.$apiList.tarot.drawTarot({
        origin: process.env.origin,
        type: Number(this.type),
        question: this.question,
      })
      if (res && res.length) {
        this.cardsInfo = res
        sessionStorage.setItem('cardsInfo', JSON.stringify(res))
      }
    },
    judgeShow() {
      switch (this.type) {
        case '1':
        case '3':
          if (this.showList.length == 2) {
            this.showList.push(this.cardsInfo[this.showList.length])
            this.numbers--
            this.count--
            this.isSelected = true
          } else {
            this.showList.push(this.cardsInfo[this.showList.length])
            this.numbers--
            this.count--
          }
          break
        case '2':
          if (this.showList.length == 4) {
            this.showList.push(this.cardsInfo[this.showList.length])
            this.numbers--
            this.count--
            this.isSelected = true
          } else {
            this.showList.push(this.cardsInfo[this.showList.length])
            this.numbers--
            this.count--
          }
          break
        case '4':
          this.showList.push(this.cardsInfo[this.showList.length])
          this.isSelected = true
          break
      }
    },
    shuffleCards(param, event) {
      let index = event.target.dataset.index
      if (!index) {
        return
      }
      let flag = Math.random() * 10 > 5 ? '+' : '-' // 正负数标识

      let card = this.$refs[`${param}${index}`][0]
      //  元素之前的位置
      let leftValue = parseInt(card.style.left, 10)
      let topValue = parseInt(card.style.top, 10)
      // 根据元素之前位置，靠修改正负值限制在容器内
      if (leftValue < -130 || topValue < 140) {
        flag = '+'
      } else if (leftValue > 890 || topValue > 440) {
        flag = '-'
      }

      card.style.left =
        leftValue + Number(flag + Math.floor(Math.random() * 130)) + 'px'
      card.style.top =
        topValue + Number(flag + Math.floor((Math.random() * 220) / 2)) + 'px'
      card.style.transform = `rotate(${flag}${Math.floor(
        Math.random() * 90
      )}deg)`
    },
    resetData() {
      this.cardsInfo = []
      this.showList = []
      this.isSelected = false
      this.questionTop = false
      this.question = ''
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
  background-image: url('~assets/img/tarot/tarot_play_bg.png');
  background-repeat: no-repeat;
  background-position: right 400px;
  .question-box {
    display: flex;
    position: absolute;
    width: 48%;
    height: 44px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    transition: top 0.7s ease-out;
    .icon-img {
      position: absolute;
      width: 20px;
      height: 16px;
      left: 46px;
      top: 14px;
    }
    .question-input {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      background: rgba(7, 6, 6, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 24px;
      padding: 0 46px 0 76px;
      text-align: left;
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #ffffff;
    }
  }
  .question-top {
    top: 48px;
  }
  .tarot-wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #45454d;
    position: relative;
    overflow: hidden;
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
    z-index: 1;
    // left: 180px;
    display: inline-block;
    transition: all 0.8s ease-out;
    width: 130px;
    height: 220px;
    cursor: pointer;
    // &:not(:first-child) {
    //   margin-left: -110px;
    // }
    &:hover {
      border: 1px solid #9747ff;
      border-radius: 8px;
      z-index: 3;
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
  z-index: 9;
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
  .tip-img-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 40px);
    grid-gap: 6px;
    justify-content: center;
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
.button {
  margin-left: 16px;
  width: 160px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 22px;
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
.img-rotate {
  transform: rotate(180deg);
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
