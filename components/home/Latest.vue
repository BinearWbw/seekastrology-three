<template>
  <a class="item scroll-start" :href="`/game/${href}-${item.id}`">
    <div class="item__top">
      <img :src="$config.imgUrl + item.icon" :alt="item.name" />
    </div>
    <div class="item__bottom">
      <p class="name" :title="item.name">{{ item.name }}</p>
      <p class="time">14m ago</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'HomeLatest',
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
  flex: none;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &__top {
    width: 74px;
    height: 74px;
    background-color: #808191;
    border-radius: 16px;
    flex-shrink: 0;
    margin-bottom: 16px;
    img {
      border-radius: 16px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    .name {
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      margin-bottom: 10px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .time {
      margin-top: auto;
      font-size: 14px;
      color: #808191;
      text-align: center;
      line-height: 1;
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .item {
    &__top {
      width: 74 * $pr;
      height: 74 * $pr;
      border-radius: 16 * $pr;
      margin-bottom: 16 * $pr;
      img {
        border-radius: 16 * $pr;
      }
    }
    &__bottom {
      .name {
        font-size: 14 * $pr;
        line-height: 18 * $pr;
        margin-bottom: 10 * $pr;
      }
      .time {
        font-size: 14 * $pr;
      }
    }
    &:nth-child(n + 10) {
      display: none;
    }
  }
}
</style>
