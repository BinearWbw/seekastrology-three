<template>
  <a class="item" :href="`/category/${item.name.toLowerCase()}`">
    <div class="item__left">
      <img
        v-lazy="$config.imgUrl + item.bg_icon"
        :key="item.bg_icon"
        :alt="item.name"
      />
    </div>
    <div class="item__right">
      <p class="p1">{{ item.name }}</p>
      <p class="p2">48 Games</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'categoryClassify',
  props: ['item'],
  computed: {
    href() {
      let href = this.item.name.replace(/[^a-zA-Z0-9\\s]/g, '-').toLowerCase()
      return href
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.item {
  overflow: hidden;
  appearance: none;
  backface-visibility: hidden;
  transform: translate(0, 0, 0);
  -webkit-appearance: none;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  height: 94px;
  padding: 10px 0 10px 10px;
  background-color: #282a31;
  border-radius: 16px;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  cursor: pointer;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  &__left {
    flex-shrink: 0;
    width: 74px;
    height: 100%;
    border-radius: 12px;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    img {
      border-radius: 12px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__right {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-width: 0;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 14px;
    padding-top: 19px;
    .p1 {
      font-size: 14px;
      line-height: 20px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .p2 {
      font-size: 14px;
      line-height: 20px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #808191;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }
  }
  &:hover {
    background-color: #7a78ff;
    -webkit-transform: scale(1.08);
    transform: scale(1.08);
    .item__left {
      -webkit-transform: scale(0.92) translate3d(0, 0, 0);
      transform: scale(0.92) translate3d(0, 0, 0);
      img {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    .item__right {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      .p2 {
        color: #fff;
      }
    }
  }
  &.active {
    background-color: #7a78ff;
    pointer-events: none;
    .item__right {
      .p2 {
        color: #fff;
      }
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .item {
    height: 60 * $pr;
    padding: 6 * $pr 0 6 * $pr 6 * $pr;
    border-radius: 12 * $pr;
    &__left {
      width: 48 * $pr;
      border-radius: 8 * $pr;
      img {
        border-radius: 8 * $pr;
      }
    }
    &__right {
      padding-left: 11 * $pr;
      padding-top: 11 * $pr;
      .p1 {
        font-size: 10 * $pr;
        line-height: 13 * $pr;
      }
      .p2 {
        font-size: 10 * $pr;
        line-height: 13 * $pr;
      }
    }
  }
}
</style>
