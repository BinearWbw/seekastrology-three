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
@mixin special {
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
      background-color: #7a78ff;
    }
  }
}
@mixin normal {
  padding-top: 143px;
  background-color: #282a31;
  border-radius: 16px;
  .item__top {
    top: 20px;
  }
  .item__bottom {
    padding-top: 0;
    .btn {
      display: block;
      -webkit-flex-shrink: 0;
      flex-shrink: 0;
      width: 86px;
      height: 31px;
      background-color: #1f2128;
      border-radius: 48px;
      font-size: 12px;
      color: #808191;
      -webkit-transition: color 0.3s, background-color 0.3s;
      transition: color 0.3s, background-color 0.3s;
      margin-top: 14px;
      margin-bottom: 5px;
    }
  }
  &:hover {
    .item__bottom {
      background-color: #282a31;
      .btn {
        background-color: #7a78ff;
        color: #fff;
      }
    }
  }
}
.item {
  position: relative;
  @include normal;
  &__top {
    position: absolute;
    left: calc(50% - 54px);
    width: 108px;
    height: 108px;
    background-color: #3c375f;
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
    border-radius: 24px;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
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
    padding-bottom: 21px;
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
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
    .name {
      -webkit-flex-shrink: 0;
      flex-shrink: 0;
      padding: 0 24px;
      font-size: 14px;
      line-height: 18px;
      height: 36px;
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
  &:hover {
    .item__top {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  &:nth-child(-n + 7) {
    @include special;
  }
}
@media (max-width: 1370px) {
  .item:nth-child(7) {
    @include normal;
  }
}
@media (max-width: 1104px) {
  .item:nth-child(6) {
    @include normal;
  }
}
@media (max-width: 890px) {
  .item:nth-child(5) {
    @include normal;
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  @mixin specialh5 {
    padding-top: 22 * $pr;
    .item__bottom {
      padding-top: 70 * $pr;
      padding-bottom: 16 * $pr;
    }
    &:hover {
      background-color: transparent;
    }
  }
  @mixin normalh5 {
    padding-top: 22 * $pr;
    background-color: transparent;
    border-radius: 0;
    .item__top {
      top: 0;
    }
    .item__bottom {
      padding-top: 70 * $pr;
      padding-bottom: 16 * $pr;
      .btn {
        display: none;
      }
    }
    &:hover {
      background-color: transparent;
      .item__bottom {
        background-color: #7a78ff;
      }
    }
  }
  .item {
    @include normalh5;
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
      border-radius: 16 * $pr;
      padding-bottom: 27 * $pr;
      .name {
        padding: 0 10 * $pr;
        font-size: 14 * $pr;
        line-height: 16 * $pr;
        height: 32 * $pr;
      }
    }
    &:nth-child(-n + 3) {
      @include specialh5;
    }
  }
  .item:nth-child(n + 4) {
    @include normalh5;
  }
}
</style>
