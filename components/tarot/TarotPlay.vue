<!--
 * @Date: 2023-06-06 14:21:49
 * @LastEditors: tianjun
 * @LastEditTime: 2023-06-07 18:10:23
 * @FilePath: /seekastrology/components/tarot/TarotPlay.vue
 * @Description: 
-->
<template>
  <div class="tarot-container">
    <div class="tarot-wrapper" v-show="!isSelected">
      <div class="card-row">
        <div
          class="card-wrapper"
          v-for="index of 39"
          :key="'top-' + index"
          :style="{ top: 160 + 'px', left: 57 + index * 20 + 'px' }"
          :class="{ selected: selectIndex == index }"
          @click="handleClike(index)"
        >
          <img class="card-img" src="~/assets/img/tarot/card.png" alt="Card" />
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
    <div class="mask-wrapper" v-show="isSelected">
      <div class="show-wrapper">
        <img class="card-img" src="~/assets/img/tarot/card.png" alt="Card" />
        <img class="card-img" src="~/assets/img/tarot/card.png" alt="Card" />
        <img class="card-img" src="~/assets/img/tarot/card.png" alt="Card" />
      </div>
      <div class="handle-btn">
        <nuxt-link :to="{ path: '/tarot/answer', query: { type: 'general' } }">
          <img class="btn-img" src="~/assets/img/tarot/btn.png" alt="btn"
        /></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TarotPlay',
  data() {
    return {
      selectIndex: 0,
      isSelected: false,
    }
  },
  methods: {
    handleClike(index) {
      console.log('%c Line:46 🥓 index', 'color:#465975', index)
      this.selectIndex = index
      this.isSelected = true
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
  }
  .card-img {
    width: 130px;
    height: 220px;
    cursor: pointer;
  }
}
.mask-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: 100%;
  padding-bottom: 34px;
  .btn-img {
    margin-top: 36px;
    cursor: pointer;
  }
}
</style>
