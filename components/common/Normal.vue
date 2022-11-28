<template>
  <a class="normal" :href="`/game/${href}?id=${item.id}`">
    <img class="normal__img" :src="item.icon" :alt="item.name" />
    <span class="normal__span">{{ item.name }}</span>
  </a>
</template>

<script>
export default {
  name: 'CommonNormal',
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
.normal {
  height: 140px;
  box-shadow: 0 5px 20px 0 rgba(10, 10, 10, 0.6);
  border-radius: 16px;
  grid-row-start: span 1;
  grid-column-start: span 1;
  text-decoration: none;
  transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  display: block;
  position: relative;
  width: 100%;
  background-color: #50447d;
  cursor: pointer;
  &__img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
  }
  &__span {
    padding: 6px;
    font-size: 16px;
    line-height: 24px;
    transform: translate(0, 8px);
    font-family: Heebo-Medium;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    color: rgb(255, 255, 255);
    text-align: center;
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s,
      opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s;
    opacity: 0;
    -webkit-font-smoothing: antialiased;
    pointer-events: none;
    z-index: 6;
  }
  &::after {
    content: '';
    opacity: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent 25%, rgba(0, 0, 0, 0.5) 100%);
    z-index: 4;
    transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    border-radius: inherit;
    contain: strict;
  }
  &:hover {
    transform: scale(1.02) translate(0, -10px);
    box-shadow: 0 4px 50px 0 rgba(118, 87, 233, 0.8);
    transition-duration: 0.3s;
    .normal__span {
      opacity: 1;
      transform: translate(0, 0);
    }
    &::after {
      opacity: 1;
    }
  }
}
@media (max-width: 828px) {
  $pr: math.div(1vw, 8.28);
  .normal {
    height: 176 * $pr;
    box-shadow: 0 5 * $pr 20 * $pr 0 rgba(10, 10, 10, 0.6);
    border-radius: 16 * $pr;
    &__span {
      padding: 6 * $pr;
      font-size: 16 * $pr;
      line-height: 24 * $pr;
      transform: translate(0, 8 * $pr);
    }
    &:hover {
      transform: scale(1.02) translate(0, -10 * $pr);
      box-shadow: 0 4 * $pr 50 * $pr 0 rgba(118, 87, 233, 0.8);
    }
  }
}
</style>
