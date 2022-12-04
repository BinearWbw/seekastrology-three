<template>
  <a class="item free" :href="`/game/${href}?id=${item.id}`" :title="item.name">
    <div class="item__top">
      <img :src="item.icon" :alt="item.name" />
    </div>
    <div class="item__bottom">
      <p class="name">{{ item.name }}</p>
      <button class="btn">FREE</button>
    </div>
  </a>
</template>

<script>
export default {
  name: 'HomeHot',
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
  position: relative;
  padding-top: 29px;
  &__top {
    position: absolute;
    top: 0;
    left: calc(50% - 54px);
    width: 108px;
    height: 108px;
    background-color: #3c375f;
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
    border-radius: 24px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 24px;
      object-fit: cover;
    }
  }
  &__bottom {
    width: 100%;
    height: 100%;
    background-color: #282a31;
    border-radius: 16px;
    padding-top: 94px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .name {
      flex-shrink: 0;
      padding: 0 24px;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      margin-bottom: auto;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &.free {
    padding-top: 145px;
    background-color: #282a31;
    border-radius: 24px;
    .item__top {
      top: 19px;
    }
    .item__bottom {
      padding-top: 0;
      .btn {
        flex-shrink: 0;
        width: 86px;
        height: 30px;
        background-color: #1f2128;
        border-radius: 15px;
        font-size: 12px;
        color: #808191;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        margin-top: 11px;
        margin-bottom: 8px;
      }
    }
  }
  &:hover {
    .item__bottom {
      .btn {
        background-color: #6c5dd3;
        color: #fff;
      }
    }
  }
}
@media (max-width: 828px) {
}
</style>
