<!--
 * @Date: 2023-06-06 14:21:49
 * @LastEditors: tian 249682049@qq.com
 * @LastEditTime: 2023-06-20 18:56:13
 * @FilePath: /seekastrology/components/tarot/TarotPlay.vue
 * @Description: 
-->
<template>
  <div class="play-container">
    <div class="pc-wrapper">
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
        <div class="tip-img-list" v-show="showList.length">
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
        v-show="type != 4"
      >
        <img class="icon-img" src="~/assets/img/tarot/edit_icon.png" alt="" />
        <input
          @keyup.enter="handleInput"
          @input="handleValid"
          type="text"
          v-model="question"
          :disabled="questionTop"
          maxlength="200"
          placeholder="Enter your question here"
          class="question-input"
        />
        <button v-show="!questionTop" class="button" @click="handleInput">
          Submit
        </button>
      </div>
      <div
        class="tarot-wrapper"
        ref="tarotWrapper"
        v-show="!isSelected && questionTop"
        :key="'tarotWrapper' + type"
      >
        <div
          class="card-row"
          @mouseover="shuffleCards('topCard', $event)"
          v-show="type != 4"
        >
          <div
            class="card-wrapper"
            v-for="index of 39"
            :key="'top-' + index"
            :ref="'topCard' + index"
            :style="{
              top: 160 + 'px',
              left: (index - 1) * 20 + 'px',
            }"
            @click.once="handleClike"
          >
            <img
              class="card-img"
              :data-index="index"
              src="~/assets/img/tarot/card.png"
              alt="Card"
            />
          </div>
        </div>
        <div
          class="card-row"
          :style="{ width: type != 4 ? '890px' : '550px' }"
          @mouseover="shuffleCards('bottomCard', $event)"
        >
          <div
            class="card-wrapper"
            v-for="index of count"
            :key="'bottom-' + index"
            :ref="'bottomCard' + index"
            :style="{
              top: type != 4 ? '404px' : '240px',
              left: (index - 1) * 20 + 'px',
            }"
            @click.once="handleClike"
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
      <div class="mask-wrapper" v-show="isSelected && questionTop">
        <div class="show-wrapper" :class="styleObj">
          <nuxt-img
            class="item-img"
            v-for="(item, index) in showList"
            :class="{ 'img-rotate': item.desc_type == 2 }"
            :key="index"
            :src="item.icon || '/'"
            :alt="item.name"
          ></nuxt-img>
        </div>
        <div class="handle-btn" @click="handleAnswer">
          <img class="btn-img" src="~/assets/img/tarot/btn.png" alt="btn" />
        </div>
      </div>
    </div>

    <div class="mobile-wrapper">
      <div class="mobile-tarot-box" v-show="!inPlay">
        <div class="card-list-wrapper" v-show="type == 4">
          <ul class="card-list">
            <li
              class="card-list-item"
              v-for="index of 6"
              :key="index"
              :style="'transform: translateY(-' + index * 4 + 'px)'"
            >
              <img
                class="card-img-mobile"
                src="~/assets/img/tarot/card.png"
                alt="Card"
              />
            </li>
          </ul>
          <div
            class="mobile-btn po-center"
            style="position: absolute"
            @click="handleMobileShow"
          >
            Extract 1 Sheet
          </div>
        </div>
        <div class="mobile-question" v-show="type != 4">
          <textarea
            v-model="question"
            maxlength="200"
            placeholder="Enter your question here"
            class="question-input"
            @input="handleValid"
          >
          </textarea>
          <button class="mobile-btn" @click="handleMobileInpit">Submit</button>
        </div>
      </div>
      <div class="in-play" v-if="inPlay" ref="playArea">
        <button class="back-btn" @click="handleBack"></button>
        <div class="tip-text" v-html="textObj[type]"></div>
        <ul class="play-list">
          <li
            class="play-list-item"
            v-for="index of mobileCount"
            :key="'mobile-' + index"
            :ref="'mobile' + index"
            @click.once="handleClike"
          >
            <img
              :data-index="index"
              class="card-img-mobile"
              src="~/assets/img/tarot/card.png"
              alt="Card"
            />
          </li>
        </ul>
        <div class="mobile-tip">
          <div class="question-text" v-show="question">"{{ question }}"</div>
          <div class="tip-img-list">
            <div
              class="wrapper"
              v-for="(item, index) of mobileNumbers"
              :key="index"
            >
              <nuxt-img
                v-if="showList[index]"
                class="tip-img-item"
                :class="{ 'img-rotate': showList[index].desc_type == 2 }"
                :src="showList[index].icon"
              ></nuxt-img>
            </div>
          </div>
          <div class="handle-btn" @click="handleAnswer">
            <img
              v-show="!isSelected"
              class="btn-img"
              src="~/assets/img/tarot/mobile-btn-disable.png"
              alt="btn"
            />
            <img
              v-show="isSelected"
              class="btn-img"
              src="~/assets/img/tarot/mobile-btn.png"
              alt="btn"
            />
          </div>
        </div>
        <div class="in-play-ad"></div>
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
          this.mobileNumbers = 3
          this.count = 39
        } else if (newVal === '2') {
          this.numbers = 5
          this.mobileNumbers = 5
          this.count = 39
        } else {
          this.questionTop = true
          this.numbers = 1
          this.mobileNumbers = 1
          this.count = 22
        }
      },
      immediate: true,
    },
    inPlay(newVal, oldVal) {
      if (newVal) {
        this.randomCards()
        this.bodyHidden('hidden')
      } else {
        this.bodyHidden('auto')
      }
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
      inPlay: false,
      isSelected: false, // 是否视图上完成抽取
      questionTop: false,
      question: '',
      cardsInfo: [], // 接口获取的数据
      showList: [], // 展示抽中的牌
      numbers: 3, // 需要抽取的牌张数
      mobileNumbers: 3, // 移动端需要展示的牌数
      mobileShowNumber: 0,
      count: 39, // 塔罗牌计数
      mobileCount: 22, // 移动端塔罗牌计数
      textObj: {
        1: 'Reveal Your Love Tarot<br /> Reading by<br /> Clicking 3 Cards Below',
        2: 'Reveal Your Career Tarot<br /> Reading by<br /> Clicking 5 Cards Below',
        3: "Reveal Your the problems<br /> you're facing by<br /> Clicking 3 Cards Below",
        4: 'The Tarot Card of the Day is...',
      },
    }
  },
  mounted() {},
  methods: {
    handleInput() {
      if (!this.question.trim()) {
        alert('Please enter your question')
        return
      }
      this.questionTop = true
    },
    handleValid() {
      let regex =
        /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g
      this.question = this.question.replace(regex, ' ')
    },
    handleMobileInpit() {
      if (!this.question.trim()) {
        alert('Please enter your question')
        return
      }
      this.inPlay = true
    },
    handleBack() {
      this.question = ''
      this.inPlay = false
      this.isSelected = false
      this.cardsInfo = []
      this.showList = []
      this.mobileShowNumber = 0
      if (this.type === '1' || this.type === '3') {
        this.numbers = 3
      } else if (this.type === '2') {
        this.numbers = 5
      } else {
        this.numbers = 1
      }
    },
    async handleClike(event) {
      let ele = event.target.nodeName
      if(this.isSelected || ele !== 'IMG') {
        return
      }
      console.log("%c Line:331 🍖 ele", "color:#2eafb0", ele);
      event.target.parentNode.style.display = 'none'
      if (this.cardsInfo.length === 0) {
        await this.drawCard()
      }
      this.judgeShow()
    },
    async drawCard() {
      const res = await this.$apiList.tarot.drawTarot({
        origin: process.env.origin,
        type: Number(this.type),
        question: this.question,
      })

      if (res && res.length) {
        this.cardsInfo = res
      }
    },
    judgeShow() {
      if (this.isSelected) {
        return
      }
      switch (this.type) {
        case '1':
        case '3':
          if (this.showList.length == 2) {
            this.showList.push(this.cardsInfo[this.showList.length])
            this.numbers--
            this.isSelected = true
          } else {
            this.showList.push(this.cardsInfo[this.showList.length])
            this.numbers--
          }
          break
        case '2':
          if (this.showList.length == 4) {
            this.showList.push(this.cardsInfo[this.showList.length])
            this.numbers--
            this.isSelected = true
          } else {
            this.showList.push(this.cardsInfo[this.showList.length])
            this.numbers--
          }
          break
        case '4':
          if (this.showList.length == 0) {
            this.showList.push(this.cardsInfo[this.showList.length])
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
    randomCards() {
      // 90 150
      setTimeout(() => {
        for (let i = 1; i <= this.mobileCount; i++) {
          let ele = this.$refs[`mobile${i}`]
          ele[0].style.display = 'block'
          ele[0].style.transform = `rotate(${-34 + i * 3}deg)`
        }
      }, 100)
    },
    resetData() {
      this.cardsInfo = []
      this.showList = []
      this.isSelected = false
      this.questionTop = false
      this.question = ''
      this.count = 39
    },
    handleMobileShow() {
      this.inPlay = true
    },
    bodyHidden(style) {
      let body = document.getElementsByTagName('body')
      body[0].style.overflow = style
    },
    handleAnswer() {
      if (this.isSelected) {
        this.bodyHidden('auto')
        sessionStorage.setItem('cardsInfo', JSON.stringify(this.showList))
        this.$router.push(`/tarot/answer?type=${this.type}`)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.play-container {
  // width: 100%;
  box-sizing: border-box;
  height: 725px;
  padding: 5px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  position: relative;
  background-image: url('~assets/img/tarot/tarot_play_bg.png');
  background-repeat: no-repeat;
  background-position: right 400px;
  .pc-wrapper {
    display: block;
    height: 100%;
  }
  .mobile-wrapper {
    display: none;
  }
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
    justify-content: center;
    .item-img {
      width: 220px;
      height: 440px;
      &:not(:first-child) {
        margin-left: 20px;
      }
    }
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
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
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

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .play-container {
    width: calc(100vw - 1 * $pr);
    height: 375 * $pr;
    background-size: contain;
    background-position: 0px 200px;
    .pc-wrapper {
      display: none;
    }
    .mask-wrapper {
      justify-content: unset;
    }
    .mobile-wrapper {
      display: block;
      width: 100%;
      height: 100%;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .mobile-tarot-box {
      height: 100%;
    }
    .in-play {
      position: fixed;
      width: 100vw;
      height: calc(100% - 122px);
      top: 0;
      left: 0;
      z-index: 7;
      background-image: url('~assets/img/tarot/paly_bg.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .back-btn {
      position: absolute;
      width: 44px;
      height: 44px;
      left: 14px;
      top: 14px;
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      z-index: 9;
      transform: matrix(-1, 0, 0, 1, 0, 0);
      background: url('~assets/img/home/point_right.png') no-repeat center;
    }

    .in-play-ad {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 123px;
      background-color: #555761;
    }
    .show-wrapper {
      flex-wrap: wrap;
      .item-img {
        width: 100px;
        height: 176px;
        margin-top: 4px;
        &:not(:first-child) {
          margin-left: 8px;
        }
      }
    }
    .card-list-wrapper {
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mobile-question {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      .question-input {
        background: rgba(7, 6, 6, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 24px;
        height: 138px;
        margin: 0 35px;
        padding: 10px 20px;
      }
      .mobile-btn {
        margin: 16px 35px 0;
      }
    }
    .card-list {
      width: 130px;
      height: 220px;
    }
    .card-list-item {
      position: absolute;
    }
    .play-list {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .play-list-item {
        height: 74%;
        position: absolute;
        transform-origin: 50% 50%;
        transition: all 0.8s ease-out;
        top: 32%;
        .card-img-mobile {
          width: 90 * $pr;
          height: 150 * $pr;
        }
      }
    }
    .tip-text {
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 22 * $pr;
      line-height: 30 * $pr;
      margin-top: 60 * $pr;
      padding: 0 50px;
      text-align: center;
    }
    .mobile-tip {
      position: absolute;
      bottom: 30 * $pr;
      width: 100vw;
      .question-text {
        font-family: 'Rufina';
        font-style: normal;
        font-size: 14 * $pr;
        line-height: 18 * $pr;
        text-align: center;
        padding: 0 35px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-Box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .tip-img-list {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 16px;
        .wrapper {
          width: 52 * $pr;
          height: 88 * $pr;
          background: rgba(255, 255, 255, 0.15);
          border: 1px dashed #dc9928;
          border-radius: 8 * $pr;
          position: relative;
          overflow: hidden;
          &:not(:first-child) {
            margin-left: 12px;
          }
          &::after {
            content: '+';
            color: #fff;
            position: absolute;
            font-size: 32px;
            font-family: monospace;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .tip-img-item {
          width: 100%;
          height: 100%;
        }
      }
      .handle-btn {
        text-align: center;
        margin-top: 16px;
      }
    }
    .mobile-btn {
      box-sizing: border-box;
      padding: 8px 32px;
      background: #ffffff;
      border-radius: 42px;
      font-family: 'Rubik';
      font-size: 16px;
      line-height: 22px;
      color: #000000;
    }
  }
}
</style>
