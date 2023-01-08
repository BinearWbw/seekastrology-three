<template>
  <a class="item scroll-start" :href="`/game/${href}-${item.id}`">
    <div class="item__top">
      <img
        v-lazy="$config.imgUrl + item.icon"
        :key="item.icon"
        :alt="item.name"
      />
    </div>
    <div class="item__bottom">
      <p class="name" :title="item.name">{{ item.name }}</p>
      <p class="time">{{ item.updated }}</p>
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
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  &__top {
    width: 74px;
    height: 74px;
    background-color: #808191;
    border-radius: 16px;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    margin-bottom: 16px;
    overflow: hidden;
    appearance: none;
    backface-visibility: hidden;
    transform: translate(0, 0, 0);
    -webkit-appearance: none;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
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
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-height: 0;
    .name {
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      margin-bottom: 8px;
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
      line-height: 18px;
      color: #808191;
      text-align: center;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }
  }
  &:hover {
    .item__top {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
    .item__bottom {
      .time {
        color: #fff;
      }
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
        margin-bottom: 8 * $pr;
      }
      .time {
        font-size: 14 * $pr;
        line-height: 18 * $pr;
      }
    }
  }
}
</style>
