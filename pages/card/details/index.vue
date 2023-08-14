<template>
  <div class="details_card">
    <canvas
      ref="canvas"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      width="1400"
      height="600"
    ></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxes: [],
      canvas: null,
      ctx: null,

      //-----------------------------smoke-----------------------------------
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas
    this.ctx = this.canvas.getContext('2d')

    // 初始化盒子数组
    this.boxes = [
      { x: 50, y: 50, width: 50, height: 50 },
      { x: 150, y: 150, width: 50, height: 50 },
    ]

    this.drawBoxes()

    //-----------------------------smoke-----------------------------------
  },
  methods: {
    drawBoxes() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.boxes.forEach((box) => {
        this.ctx.fillStyle = box.hovered ? 'red' : 'blue'
        this.ctx.fillRect(box.x, box.y, box.width, box.height)
      })
    },
    handleMouseMove(event) {
      const canvasRect = this.canvas.getBoundingClientRect()
      const mouseX = event.clientX - canvasRect.left
      const mouseY = event.clientY - canvasRect.top

      //   console.log('位置X::=>>>', mouseX)
      //   console.log('位置Y::=>>>', mouseY)

      // 更新盒子位置
      this.boxes.forEach((box) => {
        const halfWidth = box.width / 2
        const halfHeight = box.height / 2
        box.x = Math.min(this.canvas.width - halfWidth, mouseX - halfWidth)
        box.y = Math.min(this.canvas.height - halfHeight, mouseY - halfHeight)
      })

      // 重新绘制盒子
      this.drawBoxes()
    },
    handleMouseLeave() {
      // 清空盒子数组并重绘
      //   this.drawBoxes()
    },

    //-------------------------------smoke---------------------------------
  },
}
</script>

<style lang="scss" scoped>
.details_card {
  width: 1400px;
  margin: 0 auto;
  canvas {
    border: 1px solid black;
    padding: 0;
    width: 100%;
  }
}
</style>
