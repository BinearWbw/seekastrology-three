<template>
  <div class="card_mian">
    <div class="card-container">
      <div
        class="card"
        :class="{ flipped: isFlipped }"
        @click="toggleFlipped"
        @mouseenter="mouseenterList"
      >
        <div class="card-inner">
          <div class="card-front">Front</div>
          <div class="card-back">Back</div>
        </div>
      </div>
    </div>
    <div class="card_derange">
      <div class="card-containers" ref="container_list">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="card_i"
          :class="`card_${index}`"
          @mouseenter="getCardStyle(index)"
          @mousemove="onMouseMove"
        >
          {{ card }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  data() {
    return {
      isFlipped: false,
      cards: Array.from({ length: 9 }, (_, index) => index + 1),
      mouse: { x: 0, y: 0 },
    }
  },
  mounted() {
    // console.log('::=>>>', this.$refs.container_list)
    // this.$refs.container_list.addEventListener('mousemove', this.onMouseMove)
  },
  methods: {
    toggleFlipped() {
      this.isFlipped = !this.isFlipped
    },

    mouseenterList() {
      // gsap.to('.card-inner', { rotation: 360, x: 100, duration: 1, yoyo: true })
      console.log('hover')
    },

    //----------------------------------------------------------------

    getCardStyle(index) {
      //   console.log('::=>>>', this.$refs.container_list)
      if (this.$refs.container_list) {
        const dx = this.mouse.x - this.$refs.container_list.offsetWidth / 2
        const dy = this.mouse.y - this.$refs.container_list.offsetHeight / 2
        const distance = Math.sqrt(dx * dx + dy * dy)
        const rotation = distance * 0.1
        const sonEl = document.querySelector(`card_${index}`)

        console.log('子元素::=>>>', sonEl)
      }
    },
    onMouseMove(event) {
      const canvasRect = this.$refs.container_list.getBoundingClientRect()
      this.mouse.x = event.clientX
      this.mouse.y = event.clientY
      console.log('鼠标位置::=>>>', this.mouse.x, this.mouse.y)
      console.log('当前的盒子::=>>>', this.$refs.container_list.offsetWidth)
      //   this.getCardStyle()
      this.cards.forEach((_, index) => {
        gsap.to(`.card_${index}`, {
          x: Math.random() * event.clientX,
          y: Math.random() * event.clientY,
          duration: 0.3,
          ease: 'power2.out',
          onUpdate: () => {
            // 更新盒子位置
            const cardElement = this.$refs.container_list.querySelector(
              `.card_${index}`
            )
            cardElement.style.transform = `translate(${cardElement._gsap.x}px, ${cardElement._gsap.y}px)`
          },
        })
      })
      //   console.log('角度::=>>>', this.getCardStyle())
    },
  },
}
</script>

<style lang="scss" scoped>
.card_mian {
  width: 100%;
  .card-container {
    padding: 100px;
    display: flex;
    position: relative;
    .card {
      width: 230px;
      height: 400px;
      perspective: 1000px;
      border-radius: 16px;
      transition: transform 0.5s;
      .card-inner {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 0.5s;
      }
    }
    .card.flipped .card-inner {
      padding: 50px 0;
      transform: rotateY(-180deg);
    }
    .card-front,
    .card-back {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      backface-visibility: hidden;
    }

    .card-front {
      background: url('../../assets/img/tarot/card.png') no-repeat;
      background-size: cover;
    }

    .card-back {
      background: url('../../assets/img/tarot/card0.webp') no-repeat;
      background-size: cover;
      transform: rotateY(-180deg);
    }
  }
  .card_derange {
    width: 100%;
    .card-containers {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;

      .card_i {
        width: 100px;
        height: 150px;
        background-color: lightblue;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        cursor: pointer;
        transition: transform 0.3s;
        position: relative;
        // transform: rotate(81.222deg);
      }
    }
  }
}
</style>
