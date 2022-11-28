<template>
  <div class="more" :class="item.data.length === 4 ? 'bg2' : 'bg1'">
    <div class="more__info">
      <img
        class="more__info__icon"
        src="~/assets/img/header/icon1Active.png"
        alt="category"
      />
      <p class="more__info__title">{{ item.name }}</p>
      <p class="more__info__explain">
        {{ item.desc }}
      </p>
      <button class="more__info__btn common-btn">MORE >></button>
    </div>
    <common-normal
      class="more__normal"
      :item="el"
      v-for="el in item.data"
      :key="el.id"
    />
  </div>
</template>

<script>
export default {
  name: 'CommonList',
  props: ['item'],
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.more {
  height: 452px;
  grid-template-rows: repeat(auto-fill, 132px);
  grid-template-columns: repeat(4, 132px);
  grid-gap: 16px;
  border-radius: 16px;
  grid-row-start: span 3;
  grid-column-start: span 4;
  width: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  background-blend-mode: normal, normal;
  &__info {
    padding: 22px 40px 0 26px;
    border-radius: 16px;
    grid-row-start: span 2;
    grid-column-start: span 2;
    overflow: hidden;
    background-blend-mode: normal, normal;
    &__icon {
      width: 22px;
      height: 22px;
      filter: drop-shadow(0 0 15px #fff);
      object-fit: contain;
      display: block;
    }
    &__title {
      margin-top: 15px;
      font-size: 24px;
      font-family: Heebo-Bold;
      line-height: 1;
    }
    &__explain {
      margin-top: 14px;
      font-size: 15px;
      line-height: 20px;
      font-family: Heebo-Regular;
      color: rgba(255, 255, 255, 0.5);
    }
    &__btn {
      margin-top: 24px;
      padding: 7px 24px;
      border-radius: 13px;
      box-shadow: 0 0 60px 0 rgba(252, 189, 23, 0.75);
      font-size: 12px;
      line-height: 1;
      background-color: #fcbd17;
      color: #000000;
      font-family: Heebo-Medium;
    }
  }
  &__normal {
    height: 132px !important;
  }
  &.bg1 {
    background-image: linear-gradient(-30deg, #5c1d75 60%, #46135c 100%);
    .more__info {
      background-image: linear-gradient(-30deg, #8a3aac 0%, #66118a 40%);
    }
  }
  &.bg2 {
    background-image: linear-gradient(-30deg, #0c5867 0%, #063944 40%);
    .more__info {
      background-image: linear-gradient(-30deg, #036b81 0%, #044a4b 100%);
      &__btn {
        padding: 5px 24px;
        box-shadow: none;
        background-color: transparent;
        border: 2px solid #fff;
        color: #ffffff;
      }
    }
  }
  &.bg3 {
    background-image: linear-gradient(-30deg, #822157 0%, #63093c 40%);
    .more__info {
      background-image: linear-gradient(-30deg, #ac3a7a 0%, #83064c 40%);
    }
  }
}
@media (max-width: 828px) {
  $pr: math.div(1vw, 8.28);
  .more {
    height: 560 * $pr;
    grid-template-rows: repeat(auto-fill, 164 * $pr);
    grid-template-columns: repeat(4, 164 * $pr);
    grid-gap: 16 * $pr;
    border-radius: 16 * $pr;
    &__info {
      padding: 22 * $pr 40 * $pr 0 26 * $pr;
      border-radius: 16 * $pr;
      &__icon {
        width: 22 * $pr;
        height: 22 * $pr;
        filter: drop-shadow(0 0 15 * $pr #fff);
      }
      &__title {
        margin-top: 15 * $pr;
        font-size: 24 * $pr;
      }
      &__explain {
        margin-top: 14 * $pr;
        font-size: 15 * $pr;
        line-height: 20 * $pr;
      }
      &__btn {
        margin-top: 24 * $pr;
        padding: 7 * $pr 24 * $pr;
        border-radius: 13 * $pr;
        box-shadow: 0 0 60 * $pr 0 rgba(252, 189, 23, 0.75);
      }
    }
    &__normal {
      height: 164 * $pr !important;
    }
    &.bg2 {
      .more__info {
        &__btn {
          padding: 5 * $pr 24 * $pr;
        }
      }
    }
  }
}
</style>
