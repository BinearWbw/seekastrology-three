<template>
  <a class="double bg4" :href="`/game/${href}?id=${item.id}`">
    <span class="double__span1">{{ span1 }}</span>
    <span class="double__span2">{{ span2 }}</span>
    <img class="double__img" :src="item.icon" :alt="item.name" />
    <button class="double__btn">PLAY NOW</button>
  </a>
</template>

<script>
export default {
  name: 'CommonDouble',
  props: ['item'],
  computed: {
    href() {
      let href = this.item.name.replace(/[^a-zA-Z0-9\\s]/g, '-').toLowerCase()
      return href
    },
    span1() {
      let name = this.item.name.replace(/[\W]*\S+[\W]*$/, '')
      return name
    },
    span2() {
      return this.item.name.match(/\w+$/)[0]
    },
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.double {
  height: 140px;
  box-shadow: 0 5px 20px 0 rgba(10, 10, 10, 0.6);
  border-radius: 16px;
  grid-row-start: span 1;
  grid-column-start: span 2;
  text-decoration: none;
  transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  display: block;
  position: relative;
  width: 100%;
  cursor: pointer;
  background-blend-mode: normal, normal;
  &.bg1 {
    background-image: linear-gradient(-30deg, #3dd7ff 0%, #048de7 100%);
  }
  &.bg2 {
    background-image: linear-gradient(-30deg, #ff7990 0%, #fb3559 100%);
  }
  &.bg3 {
    background-image: linear-gradient(-30deg, #00f7ca 0%, #0e9152 100%);
  }
  &.bg4 {
    background-image: linear-gradient(-30deg, #cf04ee 0%, #570e91 100%);
  }
  &__span1 {
    padding-left: 20px;
    font-size: 22px;
    bottom: 103px;
    position: absolute;
    left: 0;
    width: 100%;
    line-height: 1;
    white-space: nowrap;
    font-family: Heebo-ExtraBold;
    color: rgba(255, 255, 255, 0.3);
    z-index: 1;
  }
  &__span2 {
    padding-left: 20px;
    font-size: 32px;
    bottom: 71px;
    position: absolute;
    left: 0;
    width: 100%;
    line-height: 1;
    white-space: nowrap;
    font-family: Heebo-Bold;
    z-index: 1;
  }
  &__img {
    border-radius: 0 0 16px 0;
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 100%;
    max-height: 108%;
  }
  &__btn {
    padding: 5px 12px;
    position: absolute;
    border-radius: 11px;
    left: 17px;
    bottom: 20px;
    font-family: Heebo-Medium;
    font-size: 12px;
    line-height: 1;
    border: solid 2px #ffffff;
    z-index: 1;
  }
  &:hover {
    box-shadow: 0 4px 50px 0 rgba(118, 87, 233, 0.8);
  }
}
@media (max-width: 828px) {
  $pr: math.div(1vw, 8.28);
  .double {
    height: 176 * $pr;
    box-shadow: 0 5 * $pr 20 * $pr 0 rgba(10, 10, 10, 0.6);
    border-radius: 16 * $pr;
    &__span1 {
      padding-left: 20 * $pr;
      font-size: 22 * $pr;
      bottom: 103 * $pr;
    }
    &__span2 {
      padding-left: 20 * $pr;
      font-size: 32 * $pr;
      bottom: 71 * $pr;
    }
    &__img {
      border-radius: 0 0 16 * $pr 0;
    }
    &__btn {
      padding: 5 * $pr 12 * $pr;
      position: absolute;
      border-radius: 11 * $pr;
      left: 17 * $pr;
      bottom: 20 * $pr;
    }
    &:hover {
      box-shadow: 0 4 * $pr 50 * $pr 0 rgba(118, 87, 233, 0.8);
    }
  }
}
</style>
