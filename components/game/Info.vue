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
    this.visible = this.$refs.explain.clientHeight > 80 ? true : false
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
    max-height: 80px;
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
    margin: 28px auto 0;
    width: 164px;
    height: 42px;
    background-color: #111216;
    border-radius: 48px;
    span {
      font-size: 12px;
      color: #ffffff;
      padding-right: 14px;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        right: -12px;
        top: 2px;
        width: 11px;
        height: 8px;
        background: url('~assets/img/game/show.png') no-repeat center center;
        background-size: contain;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
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
    &:hover {
      background-color: #7a78ff;
    }
  }
}
@media (max-width: 828px) {
}
</style>
