<template>
  <article class="home">
    <section class="list">
      <template v-for="item in gameList">
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
        <common-list
          :item="item"
          v-else-if="item.areaType === 12"
          :key="`list${item.name}`"
        ></common-list>
      </template>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Best',
  data() {
    return {}
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
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
$block: 140px;
$spacing: 16px;
.home {
  width: 100%;
  .list {
    grid-template-columns: repeat(11, 140px);
    grid-gap: 16px;
    display: grid;
    grid-auto-flow: dense;
    justify-content: center;
  }
}
@media (max-width: (11 * $block + 10 * $spacing+60px)) {
  .home {
    .list {
      grid-template-columns: repeat(10, 140px);
    }
  }
}
@media (max-width: (10 * $block + 9 * $spacing+60px)) {
  .home {
    .list {
      grid-template-columns: repeat(9, 140px);
    }
  }
}
@media (max-width: (9 * $block + 8 * $spacing+60px)) {
  .home {
    .list {
      grid-template-columns: repeat(8, 140px);
    }
  }
}
@media (max-width: (8 * $block + 7 * $spacing+60px)) {
  .home {
    .list {
      grid-template-columns: repeat(7, 140px);
    }
  }
}
@media (max-width: (7 * $block + 6 * $spacing+60px)) {
  .home {
    .list {
      grid-template-columns: repeat(6, 140px);
    }
  }
}
@media (max-width: (6 * $block + 5 * $spacing+60px)) {
  .home {
    .list {
      grid-template-columns: repeat(5, 140px);
    }
  }
}
@media (max-width: 828px) {
  $pr: math.div(1vw, 8.28);
  .home {
    padding: 0;
    .list {
      grid-template-columns: repeat(4, 176 * $pr);
      grid-gap: 16 * $pr;
    }
  }
}
</style>
