<template>
  <a class="item" :href="`/game/${href}-${item.id}`">
    <div class="item__left">
      <img
        v-lazy="$config.imgUrl + item.icon"
        :key="item.icon"
        :alt="item.name"
      />
    </div>
    <div class="item__right">
      <div class="item__right-l">
        <p class="p1" :title="item.name">{{ item.name }}</p>
        <p class="p2">Shooting</p>
        <p class="p3">May 26,2020</p>
      </div>
      <button class="download common__btn">Download</button>
    </div>
  </a>
</template>

<script>
export default {
  name: 'HomeBest2',
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
  appearance: none;
  backface-visibility: hidden;
  transform: translate(0, 0, 0);
  -webkit-appearance: none;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  height: 96px;
  background-color: #282a31;
  border-radius: 16px;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  cursor: pointer;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  &__left {
    flex-shrink: 0;
    width: 72px;
    height: 100%;
    border-radius: 16px;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    img {
      border-radius: 16px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__right {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-width: 0;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    padding-left: 18px;
    padding-top: 20px;
    &-l {
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      min-width: 0;
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      .p1 {
        font-size: 14px;
        line-height: 18px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .p2 {
        font-size: 14px;
        line-height: 18px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #808191;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
      }
      .p3 {
        padding-left: 16px;
        margin-top: 6px;
        font-size: 12px;
        line-height: 14px;
        color: #808191;
        position: relative;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        &::before {
          content: '';
          position: absolute;
          top: calc(50% - 4px);
          left: 0;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #ff754c;
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
        }
      }
    }
    .download {
      display: none;
      margin-top: 13px;
      margin-right: 20px;
      flex-shrink: 0;
      width: 84px;
      height: 30px;
      background: #1f2128;
      border-radius: 48px;
      font-size: 12px;
      color: #808191;
    }
  }
  &.active {
    .item__right {
      .download {
        display: block;
      }
    }
  }
  &:hover {
    background-color: #7a78ff;
    -webkit-transform: scale(1.08);
    transform: scale(1.08);
    .item__left {
      -webkit-transform: scale(0.92) translate3d(0, 0, 0);
      transform: scale(0.92) translate3d(0, 0, 0);
      img {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    .item__right {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      &-l {
        .p2 {
          color: #fff;
        }
        .p3 {
          color: #fff;
          &:before {
            background-color: #76ff4c;
          }
        }
      }
      .download {
        background: #fff;
        color: #7a78ff;
      }
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .item {
    height: 96 * $pr;
    border-radius: 16 * $pr;
    &__left {
      width: 72 * $pr;
      border-radius: 16 * $pr;
      img {
        border-radius: 16 * $pr;
      }
    }
    &__right {
      padding-left: 20 * $pr;
      padding-top: 22 * $pr;
      .p1 {
        font-size: 14 * $pr;
        line-height: 18 * $pr;
      }
      .p2 {
        margin-top: 0;
        font-size: 14 * $pr;
        line-height: 18 * $pr;
      }
      .p3 {
        font-size: 12 * $pr;
        line-height: 14 * $pr;
        padding-left: 18 * $pr;
        margin-top: 6 * $pr;
        &::before {
          top: calc(50% - 5 * $pr);
          width: 8 * $pr;
          height: 8 * $pr;
        }
      }
    }
  }
}
</style>
