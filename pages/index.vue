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
        <!-- <google-ad classNames="google_ad" :id="'2699524105'"></google-ad> -->
        <google-auto-ad
          classNames="google_ad"
          :id="'2699524105'"
        ></google-auto-ad>
      </section>
      <section class="module tarot">
        <home-tarot></home-tarot>
      </section>
      <section class="module quizzes">
        <home-quizzes></home-quizzes>
      </section>
      <section class="module kundli" v-if="false">
        <home-kundli></home-kundli>
        <google-ad classNames="google_ad"></google-ad>
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
      padding-top: 100px;
    }
    .module {
      margin-top: 100px;

      .google_ad {
        width: 100%;
        color: #808080;
      }
      &.choice {
        .google_ad {
          margin: 40px auto 0;
          width: 1200px;
        }
      }
      &.kundli {
        .google_ad {
          margin: 80px auto 0;
          height: 130px;
        }
      }
      &.new_pop {
        margin-bottom: 100px;
      }
    }
  }
}
@media (max-width: 1435px) {
  .home {
    &__main {
      width: 1200px;
    }
  }
}

@media (max-width: 1200px) {
  .home {
    &__main {
      width: 1000px;
      .module {
        margin-top: 100px;
        &.choice {
          .google_ad {
            width: 100%;
          }
        }
      }
    }
  }
}

@media (max-width: (1024px)) {
  .home {
    &__main {
      width: 100%;
      .module {
        margin-top: 100px;

        .google_ad {
          width: 100%;
        }
        &.choice {
          .google_ad {
            width: 100%;
            margin: 40px auto 0;
            padding: 0 50px;
            background-color: initial;
          }
        }
        &.kundli {
          .google_ad {
            margin: 80px auto 0;
            height: 130px;
          }
        }
        &.new_pop {
          margin-top: 80px;
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
        padding-top: 48 * $pr;
      }
      .module {
        margin-top: 86 * $pr;
        &.choice {
          > .choice {
            padding: 0;
          }
          .google_ad {
            margin: 40 * $pr auto 0;
            width: 100%;
            padding: 0;
          }
        }
        &.tarot {
          margin-top: 86 * $pr;
        }

        &.kundli {
          .google_ad {
            width: 100%;
            margin: 117 * $pr auto 0;
          }
        }
        &.new_pop {
          margin-bottom: 86 * $pr;
          > .pop_maximum {
            padding: 0;
          }
          margin-top: 86 * $pr;
        }
      }
    }
  }
}
</style>
