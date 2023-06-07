<template>
  <div class="tarot-container">
    <div class="title">the major</div>
    <div class="tarot-section">
      <div class="ad-box"></div>
      <div class="tarot-box">
        <ul class="major-list">
          <li class="major-list-item" v-for="(item, index) in majorList">
            <nuxt-img
              :src="item.icon || '/'"
              fit="cover"
              height="385"
              width="100%"
              :alt="item.name"
              loading="lazy"
            ></nuxt-img>
            <div class="item-text">{{ item.name }}</div>
          </li>
        </ul>
      </div>
      <div class="ad-box"></div>
    </div>
    <div class="ad-box_row mt-32"></div>
    <div class="title mt-48">minor arcana definitions</div>
    <div class="minor-tab" @click="toggleMinor">
      <button
        class="button"
        :class="{ selected: minorType === 'wandsList' }"
        data-type="wandsList"
      >
        The Suit of Wands
      </button>
      <button
        class="button"
        :class="{ selected: minorType === 'cupsList' }"
        data-type="cupsList"
      >
        The Suit of Cups
      </button>
      <button
        class="button"
        :class="{ selected: minorType === 'swordsList' }"
        data-type="swordsList"
      >
        The Suit of Swords
      </button>
      <button
        class="button"
        :class="{ selected: minorType === 'pentaclesList' }"
        data-type="pentaclesList"
      >
        The Suit of Pentacles
      </button>
    </div>
    <ul class="minor-list">
      <li class="minor-list-item" v-for="(item, index) in minorList">
        <nuxt-img
          :src="item.icon || '/'"
          fit="cover"
          height="385"
          width="100%"
          :alt="item.name"
          loading="lazy"
        ></nuxt-img>
        <div class="item-text">{{ item.name }}</div>
      </li>
    </ul>
    <div class="ad-box_row mt-48"></div>
  </div>
</template>

<script>
export default {
  name: 'cards',
  data() {
    return {
      minorType: 'wandsList',
      majorList: [],
      minorList: [],
      wandsList: [],
      cupsList: [],
      swordsList: [],
      pentaclesList: [],
    }
  },
  // async asyncData({ error, $apiList }) {
  //   try {
  //     const data = await $apiList.tarot.getTarotList({
  //       origin: process.env.origin,
  //     })
  //     let res = {
  //       majorList: [],
  //       minorList: [],
  //       wandsList: [],
  //       cupsList: [],
  //       swordsList: [],
  //       pentaclesList: [],
  //     }
  //     if (data && data.length) {
  //       data.forEach((ele) => {
  //         if (ele.type == 1) {
  //           res.majorList.push(ele)
  //         } else {
  //           let map = {
  //             1: res.wandsList,
  //             2: res.cupsList,
  //             3: res.swordsList,
  //             4: res.pentaclesList,
  //           }
  //           map[ele.main_type].push(ele)
  //         }
  //       })
  //     }
  //     res.minorList = res.wandsList
  //     return res
  //   } catch (e) {
  //     error({ statusCode: e.code, message: e.message })
  //   }
  // },
  mounted() {
    this.getDatas()
  },
  methods: {
    async getDatas() {
      const data = await this.$apiList.tarot.getTarotList({
        origin: process.env.origin,
      })
      const result = this.formatData(data)
      this.majorList = result.majorList
      this.minorList = result.minorList
      this.wandsList = result.wandsList
      this.cupsList = result.cupsList
      this.swordsList = result.swordsList
      this.pentaclesList = result.pentaclesList
    },
    formatData(data) {
      let res = {
        majorList: [],
        minorList: [],
        wandsList: [],
        cupsList: [],
        swordsList: [],
        pentaclesList: [],
      }
      if (data && data.length) {
        data.forEach((ele) => {
          if (ele.type == 1) {
            res.majorList.push(ele)
          } else {
            let map = {
              1: res.wandsList,
              2: res.cupsList,
              3: res.swordsList,
              4: res.pentaclesList,
            }
            map[ele.main_type].push(ele)
          }
        })
      }
      res.minorList = res.wandsList
      return res
    },
    toggleMinor(event) {
      if (event.target.nodeName === 'BUTTON') {
        this.minorType = event.target.dataset.type
        this.minorList = this[event.target.dataset.type]
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.tarot-container {
  color: #fff;
}
.title {
  font-family: 'Cinzel Decorative';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 64px;
  text-align: center;
}
.tarot-section {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  .ad-box {
    width: 160px;
    height: 600px;
    background-color: #555761;
  }
  .tarot-box {
    flex: 1;
  }
  .major-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 219px);
    justify-content: center;
    .major-list-item {
      text-align: center;
      margin-bottom: 40px;
    }
  }
}
.minor-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 189px);
  justify-content: center;
  grid-column-gap: 12px;
  margin-top: 40px;
  .minor-list-item {
    text-align: center;
    margin-bottom: 40px;
  }
}
.item-text {
  margin-top: 12px;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.7);
}
.ad-box_row {
  width: 924px;
  height: 114px;
  margin: 0 auto;
  background-color: #555761;
}
.minor-tab {
  text-align: center;
  margin-top: 24px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 1px;
    left: 0px;
    right: 0px;
    bottom: -22px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 50.52%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}
.button {
  margin: 0 12px;
  box-sizing: border-box;
  padding: 8px 22px;
  font-family: 'Rubik';
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 18px;
  &:hover {
    color: #000;
    background-color: #fff;
    border-radius: 42px;
  }
}
.selected {
  color: #000;
  background-color: #fff;
  border-radius: 42px;
}
.mt-48 {
  margin-top: 48px;
}
.mt-32 {
  margin-top: 32px;
}
.mt-200 {
  margin-top: 200px;
}
</style>
