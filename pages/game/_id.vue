<template>
  <article class="game">
    <section class="list">
      <template v-for="(item, index) in gameList">
        <common-normal
          :item="item"
          v-if="item.areaType === 1"
          :key="`normal${item.id}`"
        />
        <common-double
          :item="item"
          v-else-if="item.areaType === 2"
          :key="`double${item.id}`"
        />
        <common-large
          :item="item"
          v-else-if="item.areaType === 4"
          :key="`large${item.id}`"
        />
        <div
          class="area"
          v-else-if="item.areaType === 77"
          :key="`area${index}`"
        >
          <div class="area__main" :class="{ active: full }" id="game-area">
            <div class="top">
              <transition name="fade" mode="out-in">
                <div class="top__shading" v-if="!visible" key="shading">
                  <button class="btn common-btn pc" @click="visible = true">
                    <span>Play Now</span>
                    <img src="~/assets/img/play.png" alt="play" />
                  </button>
                  <button class="btn common-btn h5" @click="openH5">
                    <span>Play Now</span>
                    <img src="~/assets/img/play.png" alt="play" />
                  </button>
                </div>
                <iframe
                  key="game"
                  v-else
                  id="game-element"
                  allowfullscreen="true"
                  allow="autoplay; fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write"
                  name="gameFrame"
                  scrolling="no"
                  sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-same-origin allow-downloads"
                  :src="gameInfo.url"
                  :title="gameInfo.name"
                ></iframe>
              </transition>
            </div>
            <div class="bottom">
              <img
                class="bottom__img"
                :src="gameInfo.icon"
                :alt="gameInfo.name"
              />
              <p class="bottom__title">{{ gameInfo.name }}</p>
              <button
                class="common-btn bottom__btn bottom__love"
                :class="{ active: favorite }"
                @click="loveGame"
              ></button>
              <button
                class="common-btn bottom__btn bottom__full"
                v-if="!full"
                @click="fullScreen"
              >
                <img
                  class="fullScreen"
                  src="~/assets/img/game/fullScreen.png"
                  alt="fullScreen"
                />
              </button>
              <button
                class="common-btn bottom__btn bottom__full"
                v-else
                @click="smallScreen"
              >
                <img
                  class="smallScreen"
                  src="~/assets/img/game/smallScreen.png"
                  alt="smallScreen"
                />
              </button>
            </div>
            <div class="return" v-if="full" @click="smallScreen">
              <img src="~/assets/img/game/back.png" alt="back" />
            </div>
          </div>
          <div class="area__info">
            <p class="title">{{ gameInfo.name }}</p>
            <p class="explain">
              {{ gameInfo.desc }}
            </p>
          </div>
          <div class="area__ad"></div>
          <div class="area__show">
            <button class="btn common-btn"></button>
          </div>
        </div>
      </template>
    </section>
  </article>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'Game',
  data() {
    return {
      visible: false,
      full: false,
      favorite: false,
    }
  },
  validate({ query }) {
    if (
      query.id &&
      typeof Number(query.id) === 'number' &&
      !isNaN(Number(query.id))
    ) {
      return true
    }
    return false
  },
  async asyncData({ error, $apiList, query }) {
    try {
      let gameList = [],
        gameInfo = null
      const res = await $apiList.home.getGameDetail({
        site_id: process.env.origin,
        game_id: query.id,
      })
      res.detail.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${res.detail.icon}`
      gameInfo = res.detail
      res.relate.map((item) => {
        item.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${item.icon}`
        gameList.push({ ...item, areaType: 1 })
      })
      gameList.splice(2, 0, { areaType: 77 })
      return {
        gameInfo,
        gameList,
      }
    } catch (e) {
      error({ statusCode: e.code, message: e.message })
    }
  },
  mounted() {
    this.favorite = this.$utils.getLocalData(this.gameInfo.id)
    screenfull.on('change', this.fullBack)
  },
  beforeDestroy() {
    screenfull.off('change', this.fullBack)
  },
  methods: {
    openH5() {
      this.visible = true
      this.fullScreen()
    },
    fullScreen() {
      const element = document.getElementById('game-area')
      if (screenfull.isEnabled) {
        this.full = true
        screenfull.request(element)
      }
    },
    smallScreen() {
      this.full = false
      screenfull.toggle()
    },
    fullBack() {
      if (!screenfull.isFullscreen) {
        this.visible = false
        this.full = false
      }
    },
    loveGame() {
      let data = {
        id: this.gameInfo.id,
        opt: this.favorite ? 1 : 0,
        origin: process.env.origin,
        type: 4,
      }
      this.$apiList.home
        .postGameVote(data)
        .then(() => {
          this.favorite = !this.favorite
          this.$utils.setLocalData(this.gameInfo.id, this.favorite)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
$block: 140px;
$spacing: 16px;
.game {
  width: 100%;
  .list {
    grid-template-columns: repeat(11, 140px);
    grid-gap: 16px;
    display: grid;
    grid-auto-flow: dense;
    justify-content: center;
    align-content: flex-start;
    .area {
      grid-gap: 16px 0;
      grid-row-start: span 11;
      grid-column-start: span 7;
      display: flex;
      flex-direction: column;
      align-content: stretch;
      &__main {
        height: 608px;
        box-shadow: 0 2px 20px 0 rgba(118, 87, 233, 0.4);
        border-radius: 16px;
        padding: 2px;
        border: solid 2px #4e3991;
        background-color: #0f0536;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        position: relative;
        .top {
          border-radius: 10px 10px 0 0;
          width: 100%;
          flex: 1;
          min-height: 0;
          position: relative;
          overflow: hidden;
          &__shading {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-color: #0f0536;
            display: flex;
            align-items: center;
            justify-content: center;
            .btn {
              padding: 18px 32px;
              border-radius: 30px;
              background-color: #7a2ce5;
              span {
                font-size: 20px;
                height: 23px;
                line-height: 25px;
                padding-right: 14px;
                font-family: Heebo-Bold;
              }
              img {
                width: 23px;
                height: 23px;
                object-fit: contain;
              }
              &.pc {
                display: flex;
              }
              &.h5 {
                display: none;
              }
            }
          }
          #game-element {
            width: 100%;
            height: 100%;
          }
        }
        .bottom {
          height: 70px;
          border-radius: 0 0 10px 10px;
          padding: 0 20px 0 10px;
          flex-shrink: 0;
          width: 100%;
          background-image: linear-gradient(90deg, #4a3687 0%, #362860 100%);
          background-blend-mode: normal, normal;
          display: flex;
          align-items: center;
          &__img {
            width: 50px;
            height: 50px;
            box-shadow: 0 5px 10px 0 #3e0f7f;
            border-radius: 8px;
            background-color: #1d1242;
          }
          &__title {
            padding-left: 13px;
            font-size: 24px;
            font-family: Heebo-Bold;
            line-height: 1;
          }
          &__love {
            margin-left: auto;
            background-image: url('~assets/img/game/love.png');
            background-repeat: no-repeat;
            background-size: 18px 16px;
            background-position: center;
            &.active.bottom__love {
              background-image: url('~assets/img/game/loveActive.png');
              background-repeat: no-repeat;
              background-size: 18px 16px;
              background-position: center;
            }
          }
          &__full {
            margin-left: 10px;
            .fullScreen {
              width: 18px;
              height: 18px;
            }
            .smallScreen {
              width: 20px;
              height: 20px;
            }
          }
          &__btn {
            width: 60px;
            height: 36px;
            box-shadow: 0 5px 10px 0 #3e0f7f;
            border-radius: 18px;
            background-color: #7a2ce5;
            -webkit-transition: background-image 0.3s var(--cubic-bezier),
              background-color 0.3s var(--cubic-bezier),
              -webkit-transform 0.3s var(--cubic-bezier);
            -webkit-transition: background-image 0.3s var(--cubic-bezier),
              background-color 0.3s var(--cubic-bezier),
              transform 0.3s var(--cubic-bezier);
            transition: background-image 0.3s var(--cubic-bezier),
              background-color 0.3s var(--cubic-bezier),
              transform 0.3s var(--cubic-bezier);
            &.active {
              background-color: #23194b;
              box-shadow: none;
            }
          }
        }
        .return {
          display: none;
        }
        &.active {
          padding: 0;
          border: none;
          .top {
            border-radius: 0;
          }
          .bottom {
            border-radius: 0;
          }
        }
      }
      &__info {
        padding: 43px 10px;
        border-radius: 16px;
        height: 296px;
        background-color: #3c2c6d;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        .title {
          padding-left: 35px;
          font-size: 24px;
          flex-shrink: 0;
          font-family: Heebo-Bold;
          line-height: 1;
        }
        .explain {
          padding-left: 35px;
          padding-right: 45px;
          margin-top: 18px;
          font-size: 20px;
          line-height: 32px;
          overflow: auto;
          font-family: Heebo-Regular;
          font-weight: normal;
          font-stretch: normal;
          color: #ae96ff;
          flex: 1;
          min-height: 0;
        }
      }
      &__ad {
        height: 140px;
        border-radius: 16px;
        background-color: #0d0723;
        flex-shrink: 0;
      }
      &__show {
        height: 608px;
        border-radius: 16px;
        box-shadow: 0 2px 20px 0 rgba(118, 87, 233, 0.4);
        flex-shrink: 0;
        background-color: #0f0536;
        border: solid 2px #4e3991;
        display: flex;
        align-items: center;
        justify-content: center;
        .btn {
          width: 118px;
          height: 121px;
          background: url('~assets/img/show.png') no-repeat center center;
          background-size: contain;
        }
      }
    }
  }
}
@media (max-width: (11 * $block + 10 * $spacing+60px)) {
  .game {
    .list {
      grid-template-columns: repeat(10, 140px);
      .area {
        grid-row-end: 1;
        grid-column-end: 9;
      }
    }
  }
}
@media (max-width: (10 * $block + 9 * $spacing+60px)) {
  .game {
    .list {
      grid-template-columns: repeat(9, 140px);
    }
  }
}
@media (max-width: (9 * $block + 8 * $spacing+60px)) {
  .game {
    .list {
      grid-template-columns: repeat(8, 140px);
      .area {
        grid-row-end: 1;
        grid-column-end: 8;
      }
    }
  }
}
@media (max-width: (8 * $block + 7 * $spacing+60px)) {
  .game {
    .list {
      grid-template-columns: repeat(7, 140px);
    }
  }
}
@media (max-width: (7 * $block + 6 * $spacing+60px)) {
  .game {
    .list {
      grid-template-columns: repeat(6, 140px);
      .area {
        grid-row-end: 1;
        grid-column-end: 7;
        grid-row-start: span 11;
        grid-column-start: span 6;
      }
    }
  }
}
@media (max-width: (6 * $block + 5 * $spacing+60px)) {
  .game {
    .list {
      grid-template-columns: repeat(5, 140px);
      .area {
        grid-row-end: 1;
        grid-column-end: 6;
        grid-row-start: span 11;
        grid-column-start: span 5;
      }
    }
  }
}
@media (max-width: 828px) {
  $pr: math.div(1vw, 8.28);
  .game {
    .list {
      grid-template-columns: repeat(4, 176 * $pr);
      grid-gap: 16 * $pr;
      .area {
        grid-gap: 16 * $pr 0;
        grid-row-start: span 7;
        grid-column-start: span 4;
        grid-row-end: 1;
        grid-column-end: 5;
        &__main {
          height: 438 * $pr;
          box-shadow: 0 2 * $pr 20 * $pr 0 rgba(118, 87, 233, 0.4);
          border-radius: 16 * $pr;
          .top {
            border-radius: 10 * $pr;
            &__shading {
              .btn {
                padding: 18 * $pr 32 * $pr;
                border-radius: 30 * $pr;
                span {
                  font-size: 20 * $pr;
                  height: 23 * $pr;
                  line-height: 25 * $pr;
                  padding-right: 14 * $pr;
                }
                img {
                  width: 23 * $pr;
                  height: 23 * $pr;
                }
                &.pc {
                  display: none;
                }
                &.h5 {
                  display: flex;
                }
              }
            }
          }
          .return {
            position: absolute;
            left: 0;
            top: 30 * $pr;
            width: 75 * $pr;
            height: 64 * $pr;
            border-radius: 0 32 * $pr 32 * $pr 0;
            background: #fff;
            padding-left: 11 * $pr;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            img {
              width: 13 * $pr;
              height: 20 * $pr;
            }
          }
          .bottom {
            height: 100 * $pr;
            border-radius: 0 0 10 * $pr 10 * $pr;
            padding: 0 30 * $pr 0 20 * $pr;
            &__img {
              width: 70 * $pr;
              height: 70 * $pr;
              box-shadow: 0 5 * $pr 10 * $pr 0 #3e0f7f;
              border-radius: 12 * $pr;
            }
            &__title {
              padding-left: 20 * $pr;
              font-size: 28 * $pr;
            }
            &__love {
              background-size: 18 * $pr 16 * $pr;
              background-position: center;
              &.active.bottom__love {
                background-size: 18 * $pr 16 * $pr;
                background-position: center;
              }
            }
            &__full {
              display: none;
            }
            &__btn {
              width: 80 * $pr;
              height: 48 * $pr;
              box-shadow: 0 5 * $pr 10 * $pr 0 #3e0f7f;
              border-radius: 24 * $pr;
            }
          }
        }
        &__info {
          padding: 30 * $pr;
          border-radius: 16 * $pr;
          height: auto;
          .title {
            padding-left: 30 * $pr;
            font-size: 28 * $pr;
          }
          .explain {
            padding-left: 30 * $pr;
            padding-right: 30 * $pr;
            margin-top: 20 * $pr;
            font-size: 24 * $pr;
            line-height: 32 * $pr;
            overflow: hidden;
          }
        }
        &__ad {
          height: 176 * $pr;
          border-radius: 16 * $pr;
        }
        &__show {
          height: 368 * $pr;
          border-radius: 16 * $pr;
          box-shadow: 0 2 * $pr 20 * $pr 0 rgba(118, 87, 233, 0.4);
          .btn {
            width: 118 * $pr;
            height: 121 * $pr;
          }
        }
      }
    }
  }
}
</style>
