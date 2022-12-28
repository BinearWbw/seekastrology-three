<template>
  <a class="item" :href="`/game/${href}-${item.id}`">
    <div class="item__top">
      <img
        v-lazy="$config.imgUrl + item.icon"
        :key="item.icon"
        :alt="item.name"
      />
    </div>
    <div class="item__bottom">
      <p class="name" :title="item.name">{{ item.name }}</p>
      <button class="btn">Download</button>
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
  padding-top: 143px;
  background-color: #282a31;
  border-radius: 16px;
  &__top {
    position: absolute;
    top: 20px;
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
    padding-top: 0;
    padding-bottom: 21px;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
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
    .btn {
      flex-shrink: 0;
      width: 86px;
      height: 31px;
      background-color: #1f2128;
      border-radius: 48px;
      font-size: 12px;
      color: #808191;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      margin-top: 14px;
      margin-bottom: 5px;
    }
  }
  &:nth-child(n):nth-child(-n + 7) {
    padding-top: 30px;
    background-color: transparent;
    border-radius: 0;
    .item__top {
      top: 0;
    }
    .item__bottom {
      padding-top: 93px;
      .btn {
        display: none;
      }
    }
    &:hover {
      .item__bottom {
        background-color: #6c5dd3;
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
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .item {
    padding-top: 20 * $pr;
    &__top {
      left: calc(50% - 40 * $pr);
      width: 80 * $pr;
      height: 80 * $pr;
      box-shadow: 0 16 * $pr 30 * $pr 0 rgba(0, 0, 0, 0.2);
      border-radius: 16 * $pr;
      img {
        border-radius: 16 * $pr;
      }
    }
    &__bottom {
      border-radius: 18 * $pr;
      padding-top: 72 * $pr;
      padding-bottom: 16 * $pr;
      .name {
        padding: 0 10 * $pr;
        font-size: 14 * $pr;
        line-height: 16 * $pr;
      }
    }
    &.free {
      padding-top: 105 * $pr;
      border-radius: 18 * $pr;
      .item__top {
        top: 10 * $pr;
      }
      .item__bottom {
        padding-bottom: 27 * $pr;
        .btn {
          display: none;
        }
      }
    }
    &:nth-child(n + 10) {
      display: none;
    }
  }
}
</style>
