<template>
  <div class="scroll">
    <div class="scroll__top">
      <div class="title">{{ title }}</div>
      <div class="page">
        <button
          class="page__button prev common__btn"
          @click="scrollPrevLatest"
        ></button>
        <button
          class="page__button next common__btn"
          @click="scrollNextLatest"
        ></button>
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
      if (this.$refs.latestScroll.scrollLeft > 0) {
        this.$refs.latestScroll.scrollTo({
          left:
            this.$refs.latestScroll.scrollLeft -
            this.$refs.latestScroll.clientWidth,
          behavior: 'smooth',
        })
      } else {
        return false
      }
    },
    scrollNextLatest() {
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
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    .title {
      -webkit-flex-shrink: 0;
      flex-shrink: 0;
      font-family: BebasNeue-Regular;
      font-size: 28px;
      color: #ffffff;
    }
    .page {
      -webkit-flex-shrink: 0;
      flex-shrink: 0;
      height: 100%;
      &__button {
        width: 34px;
        height: 100%;
        border-radius: 50%;
        background-color: #242731;
        background-repeat: no-repeat;
        background-position: center;
        &:hover {
          background-color: #7a78ff;
        }
      }
      .prev {
        background-image: url('~assets/img/home/prev.svg');
        margin-right: 6px;
      }
      .next {
        background-image: url('~assets/img/home/next.svg');
      }
    }
  }
  &__bottom {
    margin-top: 20px;
    background-color: #282a31;
    border-radius: 16px;
    padding: 0 22px 48px;
    .list {
      padding-top: 40px;
      --grid-num: 7;
      display: grid;
      grid-template-rows: repeat(1, 1fr);
      grid-auto-flow: column;
      grid-auto-columns: calc(
        100% / var(--grid-num) - (var(--grid-num) - 1) * 18px / var(--grid-num)
      );
      grid-gap: 18px;
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
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .scroll {
    &__top {
      height: 34 * $pr;
      .title {
        font-size: 34 * $pr;
      }
      .page {
        &__button {
          width: 34 * $pr;
        }
        .prev {
          margin-right: 6 * $pr;
        }
      }
    }
    &__bottom {
      margin-top: 15 * $pr;
      border-radius: 24 * $pr;
      padding: 0 4 * $pr 32 * $pr;
      .list {
        padding-top: 35 * $pr;
        --grid-num: 7;
        grid-auto-columns: calc(
          100% / var(--grid-num) - (var(--grid-num) - 1) * 30 * $pr /
            var(--grid-num)
        );
        grid-gap: 30 * $pr;
      }
    }
  }
}
</style>
