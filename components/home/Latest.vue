<template>
  <a
    class="item scroll-start"
    :href="`/game/${href}?id=${item.id}`"
    :title="item.name"
  >
    <div class="item__top">
      <img :src="item.icon" :alt="item.name" />
    </div>
    <div class="item__bottom">
      <p class="name">{{ item.name }}</p>
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
@media (max-width: 828px) {
}
</style>
