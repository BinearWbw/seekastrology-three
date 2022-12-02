<template>
  <article class="home">
    <div class="home__main">
      <div class="search">
        <input
          class="input"
          type="text"
          v-model="searchInput"
          placeholder="Search"
        />
        <button class="button" @click="search"></button>
      </div>
      <section class="banner">
        <div class="info"></div>
        <div class="box">
          <div class="box__main">
            <img src="~/assets/111.png" alt="" />
          </div>
        </div>
        <div class="pagination">
          <div
            class="pagination__item"
            v-for="(item, index) in banners"
            :key="index"
          >
            <button
              v-if="bannersActive !== index"
              class="circle"
              @click="bannersActive = index"
            ></button>
            <div v-else class="rect">
              <div class="rect__img">
                <img src="~/assets/img/home/bg.jpg" alt="game" />
              </div>
              <div class="rect__name">Cyberpunk 2077</div>
            </div>
          </div>
        </div>
      </section>
      <section class="module best">
        <div class="module__top">
          <div class="title">BEST GAMES</div>
          <a href="/" class="more">MORE GAME</a>
        </div>
      </section>
      <section class="module latest">
        <div class="module__top">
          <div class="title">LATEST GAMES</div>
          <div class="page">
            <button class="page__button prev"></button>
            <button class="page__button next"></button>
          </div>
        </div>
      </section>
      <section class="module hot">
        <div class="module__top">
          <div class="title">HOT GAMES</div>
          <div class="page">
            <button class="page__button prev"></button>
            <button class="page__button next"></button>
          </div>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      bannersActive: 1,
      banners: [{ name: 1 }, { name: 2 }, { name: 3 }],
      searchInput: '',
    }
  },
  async asyncData({ error, $apiList }) {
    try {
      let gameList = []
      const res = await $apiList.home.getGameHome({
        origin: process.env.origin,
      })
      res.list.comm.map((item) => {
        item.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${item.icon}`
        gameList.push({ ...item, areaType: 1 })
      })
      res.list.medium.map((item, index) => {
        item.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${item.icon}`
        switch (index) {
          case 0:
            gameList.splice(7, 0, { ...item, areaType: 2 })
            break
          case 1:
            gameList.splice(11, 0, { ...item, areaType: 2 })
            break
          case 2:
            gameList.splice(17, 0, { ...item, areaType: 2 })
            break
          case 3:
            gameList.splice(30, 0, { ...item, areaType: 2 })
            break
          case 4:
            gameList.splice(32, 0, { ...item, areaType: 2 })
            break
          default:
            gameList.push({ ...item, areaType: 2 })
        }
      })
      res.list.max.map((item, index) => {
        item.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${item.icon}`
        switch (index) {
          case 0:
            gameList.splice(11, 0, { ...item, areaType: 4 })
            break
          case 1:
            gameList.splice(17, 0, { ...item, areaType: 4 })
            break
          case 2:
            gameList.splice(29, 0, { ...item, areaType: 4 })
            break
          default:
            gameList.push({ ...item, areaType: 4 })
        }
      })
      res.list.category.map((item, index) => {
        item.data.map((el) => {
          el.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${el.icon}`
        })
        switch (index) {
          case 0:
            gameList.splice(13, 0, {
              ...item,
              areaType: 12,
            })
            break
          case 1:
            gameList.splice(34, 0, {
              ...item,
              areaType: 12,
            })
            break
          case 2:
            gameList.splice(40, 0, {
              ...item,
              areaType: 12,
            })
            break
          default:
            gameList.push({
              ...item,
              areaType: 12,
            })
        }
      })
      return {
        gameList,
      }
    } catch (e) {
      error({ statusCode: e.code, message: e.message })
    }
  },
  methods: {
    handleSwiperSlideClick(index) {
      if (
        (index && this.banners[index].url) ||
        (index === 0 && this.banners[0].url)
      ) {
        this.$router.push(this.banners[index].url)
      }
    },
    search() {
      console.log(this.searchInput)
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
@-webkit-keyframes rect_enter {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }
}
@keyframes rect_enter {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }
}
@-webkit-keyframes circle_enter {
  0% {
    opacity: 0;
  }
}
@keyframes circle_enter {
  0% {
    opacity: 0;
  }
}
.home {
  &__main {
    margin: 0 auto;
    width: 1218px;
    position: relative;
    .search {
      position: absolute;
      top: 36px;
      right: 0;
      width: 270px;
      height: 40px;
      background-color: rgba(0, 0, 0, 0.45);
      border-radius: 20px;
      input {
        width: 100%;
        height: 100%;
        font-size: 14px;
        color: #808191;
        padding: 0 51px 0 19px;
      }
      button {
        position: absolute;
        top: 12px;
        right: 17px;
        width: 15px;
        height: 15px;
        background: url('~assets/img/home/search.png') no-repeat center center;
        background-size: contain;
      }
    }
    .banner {
      width: 100%;
      height: 541px;
      display: flex;
      .info {
        flex: 1;
        min-width: 0;
        margin-top: 124px;
      }
      .box {
        margin-top: 75px;
        flex-shrink: 0;
        width: 428px;
        height: 428px;
        border-radius: 50%;
        background-image: linear-gradient(80deg, #512351 0%, #1f2732 100%),
          linear-gradient(#212936, #212936);
        background-blend-mode: normal, normal;
        box-shadow: 0px 30px 40px 0px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        &__main {
          width: calc(100% - 20px);
          height: calc(100% - 20px);
          border-radius: 50%;
          background-image: linear-gradient(60deg, #161527 70%, #3b47b3 100%),
            linear-gradient(#212936, #212936);
          background-blend-mode: normal, normal;
          position: relative;
          img {
            position: absolute;
            left: 0;
            bottom: 0;
            max-width: 100%;
          }
        }
      }
      .pagination {
        flex-shrink: 0;
        margin-top: 258px;
        margin-left: 95px;
        width: 168px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        &__item {
          width: 168px;
          height: 6px;
          display: flex;
          justify-content: flex-end;
          margin-bottom: 33px;
          position: relative;
          .circle {
            margin-right: 20px;
            width: 6px;
            height: 6px;
            background: #545972;
            border-radius: 50%;
            cursor: pointer;
            -webkit-animation: circle_enter 0.5s ease;
            animation: circle_enter 0.5s ease;
          }
          .rect {
            background-color: rgba(0, 0, 0, 0.45);
            width: 100%;
            height: 48px;
            border-radius: 24px;
            overflow: hidden;
            display: flex;
            position: absolute;
            right: 0;
            top: -24px;
            -webkit-animation: rect_enter 0.5s ease;
            animation: rect_enter 0.5s ease;
            &__img {
              width: 48px;
              height: 48px;
              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                object-fit: cover;
              }
            }
            &__name {
              padding-left: 11px;
              width: calc(100% - 48px);
              line-height: 48px;
              font-size: 12px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    .module {
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
        .more {
          flex-shrink: 0;
          font-family: BebasNeue-Regular;
          font-size: 20px;
          color: #808191;
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
    }
  }
}
// .home {
//   width: 100%;
//   .list {
//     grid-template-columns: repeat(11, 140px);
//     grid-gap: 16px;
//     display: grid;
//     grid-auto-flow: dense;
//     justify-content: center;
//   }
// }
// @media (max-width: (11 * $block + 10 * $spacing+60px)) {
//   .home {
//     .list {
//       grid-template-columns: repeat(10, 140px);
//     }
//   }
// }
// @media (max-width: (10 * $block + 9 * $spacing+60px)) {
//   .home {
//     .list {
//       grid-template-columns: repeat(9, 140px);
//     }
//   }
// }
// @media (max-width: (9 * $block + 8 * $spacing+60px)) {
//   .home {
//     .list {
//       grid-template-columns: repeat(8, 140px);
//     }
//   }
// }
// @media (max-width: (8 * $block + 7 * $spacing+60px)) {
//   .home {
//     .list {
//       grid-template-columns: repeat(7, 140px);
//     }
//   }
// }
// @media (max-width: (7 * $block + 6 * $spacing+60px)) {
//   .home {
//     .list {
//       grid-template-columns: repeat(6, 140px);
//     }
//   }
// }
// @media (max-width: (6 * $block + 5 * $spacing+60px)) {
//   .home {
//     .list {
//       grid-template-columns: repeat(5, 140px);
//     }
//   }
// }
// @media (max-width: 828px) {
//   $pr: math.div(1vw, 8.28);
//   .home {
//     padding: 0;
//     .list {
//       grid-template-columns: repeat(4, 176 * $pr);
//       grid-gap: 16 * $pr;
//     }
//   }
// }
</style>
