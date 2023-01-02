<template>
  <transition name="fade">
    <aside class="dialog" v-if="visible">
      <div class="dialog__mask" @click="closeVisibleMain"></div>
      <transition name="zoom" @leave="leave">
        <div class="dialog__main" v-if="visibleMain">
          <p class="title">Categories</p>
          <div class="list">
            <category-classify
              :class="{ active: item.id === info.id }"
              v-for="item in category"
              :item="item"
              :key="item.id"
            ></category-classify>
          </div>
        </div>
      </transition>
    </aside>
  </transition>
</template>

<script>
export default {
  name: 'DialogCategory',
  props: ['visible', 'category', 'info'],
  data() {
    return {
      visibleMain: false,
    }
  },
  watch: {
    visible(val) {
      if (val) {
        let bodyStyle = document.body.style
        bodyStyle.overflow = 'hidden'
        this.$nextTick(() => {
          this.visibleMain = val
        })
      } else {
        let bodyStyle = document.body.style
        bodyStyle.overflow = ''
      }
    },
  },
  methods: {
    closeVisibleMain() {
      this.visibleMain = false
    },
    leave() {
      this.$emit('close')
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
$pr: math.div(1vw, 3.75);
.dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 7;
  &__mask {
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 1;
  }
  &__main {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: calc(100vh - 167 * $pr);
    border-radius: 24 * $pr 24 * $pr 0 0;
    background-color: #1f2128;
    padding: 24 * $pr 23 * $pr;
    overflow-x: hidden;
    overflow-y: auto;
    .title {
      font-size: 34 * $pr;
      line-height: 41 * $pr;
    }
    .list {
      display: grid;
      margin-top: 24 * $pr;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10 * $pr;
    }
  }
}
@-webkit-keyframes height_enter {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}
@keyframes height_enter {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}
@-webkit-keyframes height_leave {
  to {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}
@keyframes height_leave {
  to {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}
.zoom-enter-active {
  -webkit-animation: height_enter ease-out 0.3s;
  animation: height_enter ease-out 0.3s;
}
.zoom-leave-active {
  -webkit-animation: height_leave ease-out 0.3s;
  animation: height_leave ease-out 0.3s;
}
@media (min-width: 750px) {
  .dialog {
    display: none;
  }
}
</style>
