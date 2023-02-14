<template>
  <div class="explain">
    <p class="explain__title" :title="name">{{ name }}</p>
    <div class="explain__main" :class="{ active: show }">
      <p ref="explain">
        {{ desc }}
      </p>
    </div>
    <button
      :class="{ active: show }"
      class="explain__btn common__btn"
      @click="show = !show"
      v-if="visible"
    >
      <span>{{ !show ? 'SHOW MORE' : 'SHOW LESS' }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'GameInfo',
  props: ['name', 'desc'],
  data() {
    return {
      visible: true,
      show: false,
    }
  },
  mounted() {
    this.visible = this.$refs.explain.clientHeight > 120 ? true : false
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.explain {
  width: 100%;
  background-color: #282a31;
  border-radius: 24px;
  overflow: hidden;
  appearance: none;
  backface-visibility: hidden;
  transform: translate(0, 0, 0);
  -webkit-appearance: none;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  padding: 37px 36px 35px;
  &__title {
    font-size: 24px;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__main {
    margin-top: 24px;
    width: 100%;
    color: #808191;
    max-height: 120px;
    overflow: hidden;
    p {
      font-size: 14px;
      line-height: 20px;
    }
    &.active {
      max-height: none;
    }
  }
  &__btn {
    display: block;
    margin: 16px auto 0;
    span {
      font-size: 12px;
      color: #7a78ff;
      padding-right: 13px;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        right: -11px;
        top: 2px;
        width: 11px;
        height: 8px;
        background: url('~assets/img/game/show.png') no-repeat center center;
        background-size: contain;
        -webkit-transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
      }
      &.active {
        &::after {
          -webkit-transform: rotate(-180deg);
          transform: rotate(-180deg);
        }
      }
    }
    &.active {
      span {
        &::after {
          -webkit-transform: rotate(-180deg);
          transform: rotate(-180deg);
        }
      }
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .explain {
    border-radius: 16 * $pr;
    padding: 28 * $pr 23 * $pr 25 * $pr;
    &__title {
      font-size: 20 * $pr;
    }
    &__main {
      margin-top: 12 * $pr;
    }
    &__btn {
      margin: 8 * $pr auto 0;
      span {
        font-size: 12 * $pr;
        padding-right: 13 * $pr;
        &::after {
          right: -11 * $pr;
          top: 2 * $pr;
          width: 11 * $pr;
          height: 8 * $pr;
        }
      }
    }
  }
}
</style>
