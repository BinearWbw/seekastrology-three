<template>
  <a
    class="item"
    :href="`${getIntersperseUrl}/game/${href}-${item.id}/#from=${$route.name}`"
  >
    <div class="item__top">
      <img
        v-lazy="$config.cdnUrl + item.icon"
        :key="item.icon"
        :alt="item.name"
      />
    </div>
    <div class="item__bottom">
      <p class="name" :title="item.name">{{ item.name }}</p>
    </div>
  </a>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HomeHot',
  props: ['item'],
  computed: {
    href() {
      let href = this.item.name.replace(/[^a-zA-Z0-9\\s]/g, '-').toLowerCase()
      return href
    },
    ...mapGetters(['getIntersperseUrl']),
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.item {
  position: relative;
  padding-top: 30px;
  &__top {
    position: absolute;
    top: 0;
    left: calc(50% - 54px);
    width: 108px;
    height: 108px;
    background-color: #3c375f;
    -webkit-box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.2);
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
    padding-top: 93px;
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
    .item__bottom {
      background-color: #7a78ff;
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .item {
    padding-top: 22 * $pr;
    &__top {
      left: calc(50% - 40 * $pr);
      width: 80 * $pr;
      height: 80 * $pr;
      -webkit-box-shadow: 0 16 * $pr 30 * $pr 0 rgba(0, 0, 0, 0.2);
      box-shadow: 0 16 * $pr 30 * $pr 0 rgba(0, 0, 0, 0.2);
      border-radius: 16 * $pr;
      img {
        border-radius: 16 * $pr;
      }
    }
    &__bottom {
      padding-bottom: 16 * $pr;
      padding-top: 70 * $pr;
      border-radius: 16 * $pr;
      .name {
        padding: 0 10 * $pr;
        font-size: 14 * $pr;
        line-height: 16 * $pr;
        height: 32 * $pr;
      }
    }
  }
}
</style>
