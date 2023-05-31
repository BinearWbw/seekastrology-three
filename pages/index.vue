<template>
  <article class="home">
    <div class="meteor">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="home__main">
      <section class="various_ment">
        <home-various></home-various>
      </section>
      <section class="module choice">
        <home-your-choice></home-your-choice>
        <div class="google_ad">AD</div>
      </section>
      <section class="module tarot">
        <home-tarot></home-tarot>
      </section>
      <section class="module quizzes">
        <home-quizzes></home-quizzes>
      </section>
      <section class="module kundli">
        <home-kundli></home-kundli>
        <div class="google_ad">AD</div>
      </section>
      <section class="module new_pop">
        <home-pop-articles></home-pop-articles>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Home',
  computed: {},
  methods: {},
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.home {
  position: relative;
  .meteor {
    span {
      position: absolute;
      width: 4px;
      height: 4px;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
        0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 10px rgba(255, 255, 255, 1);
      animation: animate 3s linear infinite;
      z-index: 66;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100px;
        height: 3px;
        background: linear-gradient(90deg, #fff, transparent);
      }
      &:nth-child(1) {
        top: -10%;
        right: 0;
        left: initial;
        animation-delay: 0.3s;
        animation-duration: 1.6s;
      }
      &:nth-child(2) {
        top: -5%;
        right: 0;
        left: initial;
        animation-delay: 0.2s;
        animation-duration: 3s;
      }
      &:nth-child(3) {
        top: 0;
        right: 30%;
        left: initial;
        animation-delay: 0.4s;
        animation-duration: 2s;
      }
      &:nth-child(4) {
        top: -1%;
        right: 50%;
        left: initial;
        animation-delay: 0.6s;
        animation-duration: 1.5s;
      }
      &:nth-child(5) {
        top: 0;
        right: 60%;
        left: initial;
        animation-delay: 0.8s;
        animation-duration: 2.5s;
      }
      &:nth-child(6) {
        top: 0;
        right: 70%;
        left: initial;
        animation-delay: 1s;
        animation-duration: 3s;
      }
      &:nth-child(7) {
        top: -10%;
        right: 60%;
        left: initial;
        animation-delay: 1.2s;
        animation-duration: 1.75s;
      }
      &:nth-child(8) {
        top: 5%;
        right: 50%;
        left: initial;
        animation-delay: 1.4s;
        animation-duration: 1.25s;
      }
      &:nth-child(9) {
        top: 3%;
        right: 10%;
        left: initial;
        animation-delay: 0.75s;
        animation-duration: 2.25s;
      }
      &:nth-child(10) {
        top: 0;
        right: 0;
        left: initial;
        animation-delay: 2.75s;
        animation-duration: 2.25s;
      }
      @keyframes animate {
        0% {
          transform: rotate(315deg) translateX(0);
          opacity: 0;
          visibility: hidden;
        }
        30% {
          opacity: 0;
          visibility: hidden;
        }
        60% {
          opacity: 1;
          visibility: visible;
        }
        90% {
          opacity: 0;
          visibility: hidden;
        }
        100% {
          transform: rotate(315deg) translateX(-1000px);
          opacity: 0;
          visibility: hidden;
        }
      }
    }
  }
  &__main {
    margin: 0 auto;
    width: 1400px;
    position: relative;
    .various_ment {
      margin-top: 100px;
    }
    .module {
      margin-top: 100px;

      .google_ad {
        width: 924px;
        background-color: #555761;
        color: #808080;
      }
      &.choice {
        .google_ad {
          margin: 40px auto 0;
          height: 114px;
        }
      }
      &.kundli {
        .google_ad {
          margin: 80px auto 0;
          height: 114px;
        }
      }
      &.new_pop {
        margin-top: 80px;
      }
    }
  }
}
@media (max-width: 1370px) {
  .home {
    &__main {
      padding: 0 30px;
      width: 100%;
      .module {
      }
    }
  }
}
@media (max-width: 1154px) {
  .home {
    &__main {
    }
  }
}
@media (max-width: 1104px) {
  .home {
    &__main {
      .module {
        &.best {
          .list1 {
            :deep(.item:nth-child(6)) {
              display: none;
            }
          }
          .list2 {
            grid-template-columns: repeat(3, 1fr);
            :deep(.item:nth-child(n + 7)) {
              display: none;
            }
          }
        }
        &.latest {
          .list {
            grid-template-columns: repeat(8, 1fr);
            :deep(.item:nth-child(n + 17)) {
              display: none;
            }
          }
        }
        &.hot {
          .list {
            grid-template-columns: repeat(5, 1fr);
          }
        }
      }
    }
  }
}
@media (max-width: 890px) {
  .home {
    &__main {
      .module {
        &.best {
          .list1 {
            :deep(.item:nth-child(5)) {
              display: none;
            }
          }
          .list2 {
            grid-template-columns: repeat(2, 1fr);
            :deep(.item:nth-child(n + 5)) {
              display: none;
            }
          }
        }
        &.latest {
          .list {
            grid-template-columns: repeat(6, 1fr);
            :deep(.item:nth-child(n + 13)) {
              display: none;
            }
          }
        }
        &.hot {
          .list {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      }
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .home {
    .meteor {
      span {
        &:nth-child(3) {
          display: none;
        }
        &:nth-child(4) {
          top: 30 * $pr;
          right: -20 * $pr;
          left: initial;
          animation-delay: 0.6s;
          animation-duration: 1.5s;
        }
        &:nth-child(6) {
          display: none;
        }
        &:nth-child(8) {
          display: none;
        }
        &:nth-child(10) {
          display: none;
        }
        @keyframes animate {
          0% {
            transform: rotate(315deg) translateX(0);
            opacity: 0;
            visibility: hidden;
          }
          30% {
            opacity: 1;
            visibility: visible;
          }
          40% {
            opacity: 0;
            visibility: hidden;
          }
          60% {
            opacity: 0;
            visibility: hidden;
          }
          90% {
            opacity: 0;
            visibility: hidden;
          }
          100% {
            transform: rotate(315deg) translateX(-1000px);
            opacity: 0;
            visibility: hidden;
          }
        }
      }
    }
    &__main {
      padding: 0 16 * $pr;
      width: 100%;
      .various_ment {
        margin-top: 75 * $pr;
      }
      .module {
        &.choice {
          .google_ad {
            margin: 40 * $pr auto 0;
            width: 100%;
            height: 300 * $pr;
          }
        }
        &.tarot {
          margin-top: 80 * $pr;
        }

        &.kundli {
          .google_ad {
            width: 100%;
            margin: 117 * $pr auto 0;
            height: 300 * $pr;
          }
        }
        &.new_pop {
          margin-top: 87 * $pr;
        }
      }
    }
  }
}
</style>
