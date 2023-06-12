<!--
 * @Date: 2023-06-09 15:50:36
 * @LastEditors: tianjun
 * @LastEditTime: 2023-06-09 18:04:22
 * @FilePath: /seekastrology/pages/tarot/test/index.vue
 * @Description: 
-->
<template>
  <div class="card-stack" ref="stack" @mouseover="shuffleCards">
    <div class="card-row">
      <div
        class="card"
        v-for="(card, index) in topRow"
        :key="'top-' + index"
        :style="{ top: card.top + 'px', left: card.left + 'px' }"
      >
        <img :src="card.image" alt="Card" />
      </div>
    </div>
    <div class="card-row">
      <div
        class="card"
        v-for="(card, index) in bottomRow"
        :key="'bottom-' + index"
        :style="{ top: card.top + 'px', left: card.left + 'px' }"
      >
        <img :src="card.image" alt="Card" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topRow: [
        {
          image:
            'https://img2.baidu.com/it/u=2819083171,3219798166&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          top: 0,
          left: 0,
        },
        {
          image:
            'https://img2.baidu.com/it/u=2819083171,3219798166&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          top: 0,
          left: 0,
        },
        {
          image:
            'https://img2.baidu.com/it/u=2819083171,3219798166&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          top: 0,
          left: 0,
        },
        // 添加更多的扑克牌数据
      ],
      bottomRow: [
        {
          image:
            'https://img2.baidu.com/it/u=2819083171,3219798166&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          top: 0,
          left: 0,
        },
        {
          image:
            'https://img2.baidu.com/it/u=2819083171,3219798166&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          top: 0,
          left: 0,
        },
        {
          image:
            'https://img2.baidu.com/it/u=2819083171,3219798166&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          top: 0,
          left: 0,
        },
        // 添加更多的扑克牌数据
      ],
    }
  },
  methods: {
    shuffleCards() {
      const stackWidth = this.$refs.stack.offsetWidth
      const stackHeight = this.$refs.stack.offsetHeight

      for (let i = 0; i < this.topRow.length; i++) {
        const card = this.topRow[i]
        card.top = Math.floor(Math.random() * (stackHeight / 2 - 150))
        card.left = Math.floor(Math.random() * (stackWidth - 100))
      }

      for (let i = 0; i < this.bottomRow.length; i++) {
        const card = this.bottomRow[i]
        card.top =
          Math.floor(Math.random() * (stackHeight / 2 - 150)) + stackHeight / 2
        card.left = Math.floor(Math.random() * (stackWidth - 100))
      }
    },
  },
}
</script>

<style scoped>
.card-stack {
  width: 500px;
  height: 300px;
  position: relative;
  border: 1px solid gray;
  overflow: hidden;
}

.card-row {
  display: flex;
}

.card {
  position: absolute;
  width: 100px;
  height: 150px;
  background-color: lightgray;
  border: 1px solid gray;
  transition: transform 0.5s;
}

.card img {
  width: 100%;
  height: 100%;
}

.shuffle-animation {
  animation: shuffle-animation 3s;
}

@keyframes shuffle-animation {
  0% {
    transform: translate(0, 0) rotate(0);
  }
}
</style>
