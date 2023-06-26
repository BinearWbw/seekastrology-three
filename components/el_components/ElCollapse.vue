<template>
  <div class="collapse_main">
    <div class="deployable">
      <div
        class="deployable_text1"
        :style="{ maxHeight: isOpen ? maxHeight : '68px' }"
      >
        <div class="deployable_text1_title" @click="toggleContent">
          {{ title }}
          <i class="icon" :class="{ icon_active: isOpen }"></i>
        </div>
        <transition name="unfold">
          <div
            class="deployable_text1_content"
            :class="`unfold_content${id}`"
            v-if="isOpen"
          >
            <slot></slot>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collapse',
  props: ['title', 'id'],
  data() {
    return {
      isOpen: false,
      maxHeight: 0,
    }
  },
  methods: {
    toggleContent() {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.$nextTick(() => {
          const content = document.querySelector(`.unfold_content${this.id}`)
          const topTitle = document.querySelector('.deployable_text1_title')
          if (content) {
            this.maxHeight = `${content.scrollHeight + topTitle.scrollHeight}px`
          }
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.collapse_main {
  width: 100%;
  .deployable {
    padding: 0 48px;
    background: #000000;
    border: 1px solid #ffffff;
    border-radius: 6px;
    &_text1 {
      overflow: hidden;
      transition: max-height 0.3s ease-in-out;
      &_title {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 30px;
        color: #ffffff;
        cursor: pointer;
        padding: 19px 0;
        position: relative;
        display: flex;
        align-items: center;
        .icon {
          width: 12px;
          height: 10px;
          display: inline-block;
          position: absolute;
          right: 0;
          background: url('~/assets/img/astrology/boult_icon.png') no-repeat;
          transform: rotate(180deg);
          transition: transform 0.3s ease;
        }
        .icon_active {
          transform: rotate(0deg);
        }
      }
      &_content {
        padding: 0 0 18px;
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: #d2d3d7;
      }
    }
  }
}

@media (max-width: (750px)) {
  $pr: math.div(1vw, 3.75);
  .collapse_main {
  }
}
</style>
