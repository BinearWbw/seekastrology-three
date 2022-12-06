<template>
  <div class="scroll">
    <div class="scroll__top">
      <div class="title">{{ title }}</div>
      <div class="page">
        <button class="page__button prev" @click="scrollPrevLatest"></button>
        <button class="page__button next" @click="scrollNextLatest"></button>
      </div>
    </div>
    <div class="scroll__bottom">
      <div class="list" ref="latestScroll">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeList',
  props: ['title'],
  mounted() {
    this.$refs.latestScroll.scrollLeft = 0
  },
  methods: {
    scrollPrevLatest() {
      console.log(this.$refs.latestScroll.scrollWidth)
      console.log(this.$refs.latestScroll.scrollLeft)
      console.log(this.$refs.latestScroll.clientWidth)
      if (this.$refs.latestScroll.scrollLeft > 0) {
        this.$refs.latestScroll.scrollTo({
          left:
            this.$refs.latestScroll.scrollLeft -
            this.$refs.latestScroll.clientWidth,
          behavior: 'smooth',
        })
        setTimeout(() => {
          console.log(this.$refs.latestScroll.scrollLeft)
        }, 300)
      } else {
        return false
      }
    },
    scrollNextLatest() {
      console.log(this.$refs.latestScroll.scrollWidth)
      console.log(this.$refs.latestScroll.scrollLeft)
      console.log(this.$refs.latestScroll.clientWidth)
      if (
        this.$refs.latestScroll.scrollWidth -
          this.$refs.latestScroll.scrollLeft >
        this.$refs.latestScroll.clientWidth
      ) {
        this.num += 1
        this.$refs.latestScroll.scrollTo({
          left:
            this.$refs.latestScroll.scrollLeft +
            this.$refs.latestScroll.clientWidth,
          behavior: 'smooth',
        })
      } else {
        return false
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
// .latest {
//   :deep(.scroll__bottom) {
//     margin-top: 34px;
//     background-color: #282a31;
//     border-radius: 16px;
//     padding: 54px 26px 64px;
//   }
//   :deep(.list) {
//     --grid-num: 9;
//     grid-template-rows: repeat(2, 1fr);
//     grid-auto-flow: column;
//     grid-auto-columns: calc(
//       (100% - (var(--grid-num) - 1) * 18px) / var(--grid-num)
//     );
//     grid-gap: 50px 18px;
//   }
// }
// .hot {
//   margin-top: 73px;
//   :deep(.scroll__bottom) {
//     margin-top: 33px;
//     padding: 0;
//   }
//   :deep(.list) {
//     --grid-num: 7;
//     grid-template-rows: repeat(3, 1fr);
//     grid-auto-flow: column;
//     grid-auto-columns: calc(
//       (100% - (var(--grid-num) - 1) * 21px) / var(--grid-num)
//     );
//     grid-gap: 20px 21px;
//   }
// }
.scroll {
  &__top {
    width: 100%;
    height: 34px;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      flex-shrink: 0;
      font-family: BebasNeue-Regular;
      font-size: 34px;
      color: #ffffff;
    }
    .page {
      flex-shrink: 0;
      height: 100%;
      &__button {
        width: 34px;
        height: 100%;
        border-radius: 50%;
        background-color: #242731;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        background-repeat: no-repeat;
        background-position: center;
        &.active {
          background-color: #6c5dd3;
        }
      }
      .prev {
        background-image: url('~assets/img/home/prev.png');
        margin-right: 6px;
      }
      .next {
        background-image: url('~assets/img/home/next.png');
      }
    }
  }
  &__bottom {
    .list {
      display: grid;
      -webkit-scroll-snap-type: x mandatory;
      -moz-scroll-snap-type: x mandatory;
      -ms-scroll-snap-type: x mandatory;
      scroll-snap-type: x mandatory;
      -webkit-scroll-behavior: smooth;
      -moz-scroll-behavior: smooth;
      -ms-scroll-behavior: smooth;
      scroll-behavior: smooth;
      overflow-x: auto;
      overflow-y: hidden;
    }
  }
}
@media (max-width: 828px) {
}
</style>
