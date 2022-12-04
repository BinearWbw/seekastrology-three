<template>
  <a class="item" :href="`/game/${href}?id=${item.id}`" :title="item.name">
    <div class="item__left">
      <img :src="item.icon" :alt="item.name" />
    </div>
    <div class="item__right">
      <p class="p1">{{ item.name }}</p>
      <p class="p2">Shooting</p>
      <p class="p3">May 26,2020</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'HomeBest2',
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
  height: 96px;
  background-color: #282a31;
  border-radius: 16px;
  display: flex;
  cursor: pointer;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  &__left {
    flex-shrink: 0;
    width: 72px;
    height: 100%;
    border-radius: 16px;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    img {
      border-radius: 16px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__right {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    padding-left: 18px;
    padding-top: 19px;
    .p1 {
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .p2 {
      font-size: 14px;
      color: #808191;
      line-height: 1;
      margin-top: -1px;
    }
    .p3 {
      font-size: 12px;
      color: #808191;
      position: relative;
      padding-left: 16px;
      margin-top: 9px;
      line-height: 1;
      &::before {
        content: '';
        position: absolute;
        top: calc(50% - 4px);
        left: 0;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #ff754c;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
      }
    }
  }
  &:hover {
    background-color: #6c5dd3;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    .item__left {
      -webkit-transform: scale(0.9) translate3d(0, 0, 0);
      transform: scale(0.9) translate3d(0, 0, 0);
      img {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    .item__right {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      .p3 {
        &:before {
          background-color: #76ff4c;
        }
      }
    }
  }
}
@media (max-width: 828px) {
}
</style>
