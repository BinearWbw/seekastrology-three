<template>
  <article class="category">
    <section class="list1 list">
      <common-classify
        :item="item"
        v-for="item in category"
        :key="item.id"
      ></common-classify>
    </section>
    <section class="category__game">
      <div class="list2 list">
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
          <common-none v-if="item.areaType === 'none'" :key="`none${index}`" />
          <div
            class="ad ad1"
            v-else-if="item.areaType === 'ad1'"
            :key="`ad1${index}`"
          ></div>
          <div
            class="ad ad2"
            v-else-if="item.areaType === 'ad2'"
            :key="`ad2${index}`"
          ></div>
          <div
            class="ad ad3"
            v-else-if="item.areaType === 'ad3'"
            :key="`ad3${index}`"
          ></div>
        </template>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Category',
  async asyncData({ error, $apiList, query, $utils }) {
    try {
      let [category, gameList] = await Promise.all([
        $apiList.home
          .getCategory({
            page: 1,
            size: 10000,
          })
          .then((res) => {
            res.map((item) => {
              item.name = JSON.parse(item.name)
              item.name.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${item.name.icon}`
            })
            return res || []
          }),
        $apiList.home
          .getGameCategory({
            type: query.type || '',
            origin: process.env.origin,
            label: query.label || '',
          })
          .then((res) => {
            res.list.map((item) => {
              item.icon = `https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/${item.icon}`
              item.areaType = 1
            })
            let length = res.list.length
            for (var i = 0; i < 36 - length; i++) {
              res.list.push({ areaType: 'none' })
            }
            res.list.splice(9, 0, { areaType: 'ad1' })
            res.list.splice(28, 0, { areaType: 'ad2' })
            res.list.splice(38, 0, { areaType: 'ad3' })
            return res.list || []
          }),
      ])
      category.sort($utils.formatArr('id', true))
      return {
        category,
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
.category {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .list {
    display: grid;
    grid-auto-flow: dense;
    justify-content: center;
  }
  .list1 {
    width: 11 * $block + 10 * $spacing;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 18px;
  }
  &__game {
    margin-top: 40px;
    grid-gap: 16px;
    display: flex;
    justify-content: center;
    .list2 {
      grid-template-columns: repeat(11, 140px);
      grid-gap: 16px;
      .ad {
        border-radius: 16px;
        background: #0e0723;
        &.ad1 {
          height: 296px;
          grid-row-start: span 2;
          grid-column-start: span 2;
        }
        &.ad2 {
          height: 140px;
          grid-row-start: span 1;
          grid-column-start: span 2;
        }
        &.ad3 {
          height: 296px;
          grid-row-start: span 2;
          grid-column-start: span 2;
        }
      }
    }
  }
}
@media (max-width: (11 * $block + 10 * $spacing+60px)) {
  .category {
    .list1 {
      width: 10 * $block + 9 * $spacing;
      grid-template-columns: repeat(6, 1fr);
    }
    &__game {
      .list2 {
        grid-template-columns: repeat(10, 140px);
        .ad {
          &.ad1 {
            grid-column-end: 11;
            grid-row-end: 1;
          }
          &.ad2 {
            grid-column-end: 11;
            grid-row-end: 2;
          }
          &.ad3 {
            grid-column-end: 11;
            grid-row-end: 4;
          }
        }
      }
    }
  }
}
@media (max-width: (10 * $block + 9 * $spacing+60px)) {
  .category {
    .list1 {
      width: 9 * $block + 8 * $spacing;
    }
    &__game {
      .list2 {
        grid-template-columns: repeat(9, 140px);

        .ad {
          &.ad1 {
            grid-column-end: 10;
            grid-row-end: 1;
          }
          &.ad2 {
            grid-column-end: 10;
            grid-row-end: 2;
          }
          &.ad3 {
            grid-column-end: 10;
            grid-row-end: 4;
          }
        }
      }
    }
  }
}
@media (max-width: (9 * $block + 8 * $spacing+60px)) {
  .category {
    .list1 {
      width: 8 * $block + 7 * $spacing;
      grid-template-columns: repeat(5, 1fr);
    }
    &__game {
      .list2 {
        grid-template-columns: repeat(8, 140px);
        .ad {
          &.ad1 {
            grid-column-end: 9;
            grid-row-end: 1;
          }
          &.ad2 {
            grid-column-end: 9;
            grid-row-end: 2;
          }
          &.ad3 {
            grid-column-end: 9;
            grid-row-end: 4;
          }
        }
      }
    }
  }
}
@media (max-width: (8 * $block + 7 * $spacing+60px)) {
  .category {
    .list1 {
      width: 7 * $block + 6 * $spacing;
    }
    &__game {
      .list2 {
        grid-template-columns: repeat(7, 140px);
        .ad {
          &.ad1 {
            grid-column-end: 8;
            grid-row-end: 1;
          }
          &.ad2 {
            grid-column-end: 8;
            grid-row-end: 2;
          }
          &.ad3 {
            grid-column-end: 8;
            grid-row-end: 4;
          }
        }
      }
    }
  }
}
@media (max-width: (7 * $block + 6 * $spacing+60px)) {
  .category {
    .list1 {
      width: 6 * $block + 5 * $spacing;
      grid-template-columns: repeat(4, 1fr);
    }
    &__game {
      .list2 {
        grid-template-columns: repeat(6, 140px);
        .ad {
          &.ad1 {
            grid-column-end: 7;
            grid-row-end: 1;
          }
          &.ad2 {
            grid-column-end: 7;
            grid-row-end: 2;
          }
          &.ad3 {
            grid-column-end: 7;
            grid-row-end: 4;
          }
        }
      }
    }
  }
}
@media (max-width: (6 * $block + 5 * $spacing+60px)) {
  .category {
    .list1 {
      width: 5 * $block + 4 * $spacing;
      grid-template-columns: repeat(3, 1fr);
    }
    &__game {
      .list2 {
        grid-template-columns: repeat(5, 140px);
        .ad {
          &.ad1 {
            grid-column-end: 6;
            grid-row-end: 1;
          }
          &.ad2 {
            grid-column-end: 6;
            grid-row-end: 2;
          }
          &.ad3 {
            grid-column-end: 6;
            grid-row-end: 4;
          }
        }
      }
    }
  }
}
@media (max-width: 828px) {
  $pr: math.div(1vw, 8.28);
  .category {
    padding: 0;
    .list1 {
      width: 100%;
      grid-template-columns: repeat(3, 240 * $pr);
      grid-gap: 16 * $pr;
    }
    &__game {
      margin-top: 40 * $pr;
      grid-gap: 16 * $pr;
      .list2 {
        grid-template-columns: repeat(4, 176 * $pr);
        grid-gap: 16 * $pr;
        .ad {
          border-radius: 16 * $pr;
          &.ad1 {
            grid-column-end: 5;
            grid-row-end: 1;
            height: 368 * $pr;
          }
          &.ad2 {
            grid-column-end: 5;
            grid-row-end: 2;
            height: 176 * $pr;
          }
          &.ad3 {
            grid-column-end: 5;
            grid-row-end: 4;
            height: 368 * $pr;
          }
        }
      }
    }
  }
}
</style>
