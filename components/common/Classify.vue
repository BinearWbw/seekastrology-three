<template>
  <a
    :href="`/category?type=${item.id}&label=${item.name.id}`"
    class="classify"
    :class="{ active: active }"
  >
    <div class="classify__left">
      <img :src="item.name.icon" :alt="item.name.name" />
    </div>
    <div class="classify__right">{{ item.name.name }}</div>
  </a>
</template>

<script>
export default {
  name: 'CommonClassify',
  props: ['item'],
  computed: {
    active() {
      let active = this.$route.query.type == this.item.id
      return active
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.classify {
  height: 86px;
  border-radius: 16px;
  transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  background-image: linear-gradient(-30deg, #4a3687 0%, #362860 100%);
  background-blend-mode: normal, normal;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  cursor: pointer;
  &__left {
    flex-shrink: 0;
    width: 86px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(-30deg, #4a3687 0%, #362860 100%);
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }
  &__right {
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-family: Heebo-Medium;
    font-size: 17px;
    line-height: 20px;
  }
  &.active {
    transform: scale(1.04255) translate(0px, -4px);
    box-shadow: 0 4px 50px 0 rgba(118, 87, 233, 0.8);
  }
  &:hover {
    transform: scale(1.04255) translate(0px, -4px);
    box-shadow: 0 4px 50px 0 rgba(118, 87, 233, 0.8);
    transition-duration: 0.3s;
  }
}
@media (max-width: 828px) {
  $pr: math.div(1vw, 8.28);
  .classify {
    height: 86 * $pr;
    border-radius: 16 * $pr;
    &__left {
      width: 86 * $pr;
    }
    &__right {
      padding-left: 20 * $pr;
      font-size: 24 * $pr;
      line-height: 32 * $pr;
    }
    &.active {
      transform: scale(1.04255) translate(0px, -4 * $pr);
      box-shadow: 0 4 * $pr 50 * $pr 0 rgba(118, 87, 233, 0.8);
    }
    &:hover {
      transform: scale(1.04255) translate(0px, -4 * $pr);
      box-shadow: 0 4 * $pr 50 * $pr 0 rgba(118, 87, 233, 0.8);
    }
  }
}
</style>
