<template>
  <a class="item" :href="`/game/${href}?id=${item.id}`" :title="item.name">
    <div class="item__top">
      <img :src="item.icon" :alt="item.name" />
    </div>
    <p class="item__title">
      {{ item.name }}
    </p>
  </a>
</template>

<script>
export default {
  name: 'HomeBest1',
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
  flex-shrink: 0;
  width: 140px;
  cursor: pointer;
  &__top {
    height: 140px;
    background-color: #3c375f;
    border-radius: 24px;
    position: relative;
    img {
      position: absolute;
      bottom: 0;
      left: 0;
      max-width: 100%;
      border-radius: 0 0 24px 24px;
    }
  }
  &__title {
    margin-top: 10px;
    font-size: 14px;
    color: #808191;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
@media (max-width: 828px) {
}
</style>
