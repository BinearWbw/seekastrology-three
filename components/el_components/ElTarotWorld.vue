<template>
  <div class="tarot_world">
    <div class="tarot_world_main">
      <div class="tarot">
        <div class="tarot_title">
          <p class="title">Welcome to the Tarot World</p>
          <div class="help">
            <p>A FREE Tarot Readingcan help.</p>
            <p>Choose your cards now:</p>
          </div>
        </div>
        <div class="tarot_carousel" data-aos="fade-left">
          <div class="tarot_carousel_list">
            <div
              class="slideshow_main"
              v-for="(item, index) in slideshow"
              :class="{ paused: item.paused }"
              :key="index"
              :style="{ animationDelay: index * 3000 + 'ms' }"
              @mouseenter="stopAllAnimation(item)"
              @mouseleave="resumeAllAnimation(item)"
            >
              <div
                class="slideshow"
                :style="{ animationDelay: index * 3000 + 'ms' }"
                :class="{ paused: item.paused }"
              >
                <a
                  :href="`${getIntersperseUrl + item.path}`"
                  class="slideshow_item"
                >
                  <img
                    src="../../assets/img/tarot/slideshow_item.png"
                    alt=""
                    :style="{ animationDelay: index * 3000 + 'ms' }"
                    :class="{ paused: item.paused }"
                  />
                  <div
                    class="arrow"
                    :style="{ animationDelay: index * 3000 + 'ms' }"
                    :class="{ paused: item.paused }"
                  >
                    <div class="arrow_icon">
                      <i class="icon"></i>
                    </div>
                  </div>
                </a>
              </div>
              <div class="slideshow_title">
                <p>{{ item.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      slideshow: [
        { id: 1, paused: false, name: 'Daily', path: '/tarot/' },
        { id: 2, paused: false, name: 'Career', path: '/tarot/type/2/' },
        { id: 3, paused: false, name: 'Universal', path: '/tarot/type/3/' },
        { id: 4, paused: false, name: 'Love', path: '/tarot/type/1/' },
      ],
      stopAnimation: false,
      timer: null,
    }
  },
  computed: {
    ...mapGetters(['getIntersperseUrl']),
  },
  mounted() {
    this.startTimer()
    if (window.innerWidth < 751) {
      this.stopTimer() //屏幕尺寸小于750时，不执行动画
    }
  },
  beforeDestroy() {
    this.stopTimer()
  },
  methods: {
    startAnimation() {
      this.slideshow = []
      this.stopAnimation = false
      this.$nextTick(() => {
        this.slideshow = [
          { id: 1, paused: false, name: 'Daily', path: '/tarot/' },
          { id: 2, paused: false, name: 'Career', path: '/tarot/type/2/' },
          { id: 3, paused: false, name: 'Universal', path: '/tarot/type/3/' },
          { id: 4, paused: false, name: 'Love', path: '/tarot/type/1/' },
        ]
      })
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.startAnimation()
      }, 12000)
    },
    stopTimer() {
      clearInterval(this.timer)
    },
    stopAllAnimation(box) {
      this.stopTimer()
      box.paused = true
    },
    resumeAllAnimation(box) {
      this.startTimer()
      box.paused = false
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.tarot_world {
  width: 100%;
  &_main {
    .tarot {
      display: flex;
      &_title {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 330px;
        .title {
          color: #fff;
          font-family: 'Cinzel Decorative';
          font-size: 36px;
          font-style: normal;
          font-weight: 700;
          line-height: 48px;
        }
        .help {
          margin-top: 48px;
          color: #fff;
          font-family: 'Rubik';
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px;
          p {
            &:last-child {
              color: #9747ff;
            }
          }
        }
      }

      &_carousel {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &_list {
          display: flex;
          justify-content: flex-end;
          padding-right: 48px;
          .slideshow_main {
            position: relative;
            transition: transform 0.3s ease-in-out;
            animation: take_turns 1.5s linear;
            .slideshow_title {
              position: absolute;
              left: 20%;
              bottom: -34px;
              color: #fff;
              font-family: 'Rubik';
              font-size: 22px;
              font-style: normal;
              font-weight: 400;
              line-height: 30px;
            }
            &:hover {
              transform: scale(1.1);
              .slideshow {
                border-color: rgba(255, 255, 255, 0.2);
                transform: skewX(-13deg);
                .slideshow_item {
                  &::after {
                    background-color: transparent;
                  }
                  img {
                    filter: none;
                  }
                  .arrow {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                  }
                }
              }
            }
            .slideshow {
              width: 148px;
              height: 282px;
              border: 5px solid transparent;
              transform: skewX(-13deg);
              border-radius: 26px;
              box-sizing: border-box;
              transform-style: preserve-3d;
              margin-left: 10px;
              cursor: pointer;
              transition: border-color 0.3s, transform 0.3s ease-in-out;
              overflow: hidden;
              animation: slideshow 1.5s linear;
              .slideshow_item {
                width: 150%;
                height: 100%;
                display: block;
                transform: skewX(13deg);
                transform-style: preserve-3d;
                position: relative;
                left: -25%;
                &::after {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background-color: rgba(46, 47, 49, 0.2);
                  z-index: 1;
                  transition: background-color 0.3s ease-in-out;
                  animation: slideshow_after 1.5s linear;
                }
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  filter: brightness(40%);
                  transition: filter 0.3s ease-in-out;
                  animation: slideshow_img 1.5s linear;
                }
                .arrow {
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%) scale(0.6);
                  background-color: #fff;
                  border-radius: 50%;
                  opacity: 0;
                  transition: opacity 0.4s, transform 0.5s ease-in-out;
                  animation: slideshow_arrow 1.5s linear;
                  &_icon {
                    width: 32px;
                    height: 32px;
                    display: grid;
                    place-items: center;
                    .icon {
                      width: 19px;
                      height: 15px;
                      display: inline-block;
                      background: url('../../assets/img/tarot/arrowRight.svg')
                        no-repeat center center;
                      background-size: cover;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .paused {
    animation-play-state: paused !important;
  }
  @keyframes take_turns {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes slideshow {
    0% {
    }
    50% {
      border-color: rgba(255, 255, 255, 0.2);
    }
    100% {
    }
  }
  @keyframes slideshow {
    0% {
    }
    50% {
      border-color: rgba(255, 255, 255, 0.2);
    }
    100% {
    }
  }
  @keyframes slideshow_after {
    0% {
      background-color: rgba(46, 47, 49, 0.2);
    }
    50% {
      background-color: transparent;
    }
    100% {
      background-color: rgba(46, 47, 49, 0.2);
    }
  }
  @keyframes slideshow_img {
    0% {
    }
    50% {
      filter: none;
    }
    100% {
    }
  }
  @keyframes slideshow_arrow {
    0% {
    }
    50% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
    }
  }
}

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .tarot_world {
    width: 100%;
    &_main {
      .tarot {
        display: block;
        &_title {
          align-items: center;
          height: auto;
          .title {
            font-size: 26 * $pr;
            line-height: 36 * $pr;
            text-align: center;
            padding: 0 20 * $pr;
          }
          .help {
            margin-top: 0;
            font-size: 16 * $pr;
            line-height: 22 * $pr;
            text-align: center;
          }
        }

        &_carousel {
          width: 100%;
          height: auto;
          margin-top: 24 * $pr;
          &_list {
            display: grid;
            justify-content: flex-end;
            grid-template-columns: repeat(2, 1fr);
            gap: 5 * $pr;
            padding-right: 0;
            .slideshow_main {
              position: relative;
              transition: none;
              animation: none;
              .slideshow_title {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 5 * $pr;
                font-size: 14 * $pr;
                line-height: 18 * $pr;
              }
              &:first-child .slideshow,
              &:last-child .slideshow {
                border-top-right-radius: 50 * $pr;
                border-bottom-left-radius: 50 * $pr;
              }
              &:nth-child(2) .slideshow,
              &:nth-child(3) .slideshow {
                border-top-left-radius: 50 * $pr;
                border-bottom-right-radius: 50 * $pr;
              }
              &:hover {
                transform: none;
                .slideshow {
                  border-color: none;
                  transform: none;
                  .slideshow_item {
                    &::after {
                      display: none;
                    }
                    img {
                      filter: none;
                    }
                    .arrow {
                      opacity: 1;
                      transform: translate(-50%, 0) scale(1);
                    }
                  }
                }
              }
              .slideshow {
                width: 169 * $pr;
                height: 169 * $pr;
                border: none;
                transform: none;
                border-radius: 12 * $pr;
                margin-left: 0;
                cursor: pointer;
                animation: none;
                .slideshow_item {
                  width: 130%;
                  height: 100%;
                  display: block;
                  transform: none;
                  transform-style: preserve-3d;
                  position: relative;
                  left: -15%;
                  &::after {
                    display: none;
                  }
                  img {
                    object-position: top;
                    filter: none;
                    transition: none;
                    animation: none;
                  }
                  .arrow {
                    top: 70%;
                    transform: translate(-50%, 0) scale(1);
                    opacity: 1;
                    transition: none;
                    animation: none;
                    &_icon {
                      width: 24 * $pr;
                      height: 24 * $pr;
                      .icon {
                        width: 15 * $pr;
                        height: 12 * $pr;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
