<template>
  <div class="select">
    <div class="select_menu">
      <div class="menu_sole">
        <a
          :href="`${getIntersperseUrl}/zodiac/details/${
            corresponding()[0].name
          }-${corresponding()[0].id}/`"
        >
          <div
            class="menu_sole_item"
            :class="{
              active:
                traits.path == $route.path ||
                (traits.path !== '/' && $route.path.includes(traits.path)),
            }"
            @click="gotoMenu"
          >
            <p>{{ `${toUpperBig(names)} ` + traits.name }}</p>
          </div>
        </a>
      </div>
      <div class="menu_list" v-for="(item, index) in select_menu" :key="index">
        <a :href="`${getIntersperseUrl + item.path + '-' + ids}/`">
          <div
            class="menu_list_item"
            :class="{
              active:
                item.path == $route.path ||
                (item.path !== '/' && $route.path.includes(item.path)),
            }"
            @click="gotoMenu"
          >
            <p>{{ `${toUpperBig(names)} ` + item.name }}</p>
          </div>
        </a>
      </div>
    </div>
    <transition name="fade">
      <el-loading v-if="isLoading"></el-loading>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['names', 'ids'],
  data() {
    return {
      traits: {
        name: 'Traits',
        path: '/zodiac/details/',
      },
      select_menu: [
        {
          name: 'Career',
          path: '/zodiac/type/career',
        },
        {
          name: 'Lover',
          path: '/zodiac/type/lover',
        },
        {
          name: 'Healthy',
          path: '/zodiac/type/healthy',
        },
        {
          name: 'Man',
          path: '/zodiac/type/male',
        },
        {
          name: 'Woman',
          path: '/zodiac/type/woman',
        },
        {
          name: 'Comratible',
          path: '/zodiac/type/comratible',
        },
      ],
      tabList: [
        {
          name: 'aries',
          id: 1,
        },
        {
          name: 'taurus',
          id: 2,
        },
        {
          name: 'gemini',
          id: 3,
        },
        {
          name: 'cancer',
          id: 4,
        },
        {
          name: 'leo',
          id: 5,
        },
        {
          name: 'virgo',
          id: 6,
        },
        {
          name: 'libra',
          id: 7,
        },
        {
          name: 'scorpio',
          id: 8,
        },
        {
          name: 'sagittarius',
          id: 9,
        },
        {
          name: 'capricorn',
          id: 10,
        },
        {
          name: 'aquarius',
          id: 11,
        },
        {
          name: 'pisces',
          id: 12,
        },
      ],
      isLoading: false,
    }
  },
  computed: {
    ...mapGetters(['getIntersperseUrl']),
  },
  methods: {
    toUpperBig(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    corresponding() {
      const idsSigns = this.tabList.filter((i) => i.id == this.ids)
      return idsSigns
    },
    gotoMenu() {
      this.isLoading = true
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.select {
  width: 100%;
  &_menu {
    .active {
      background-color: rgba(0, 0, 0, 0.1);
    }
    .menu_list {
      a {
        .menu_list_item {
          padding: 16px 0;
          position: relative;
          transition: background-color 0.3s ease-in-out;
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.2) 50.52%,
              rgba(255, 255, 255, 0) 100%
            );
          }
          &:hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
          p {
            color: rgba(255, 255, 255, 0.6);
            text-align: center;
            font-family: 'Rubik';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
          }
        }
      }
    }
    .menu_sole {
      a {
        .menu_sole_item {
          padding: 16px 0;
          position: relative;
          transition: background-color 0.3s ease-in-out;
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.2) 50.52%,
              rgba(255, 255, 255, 0) 100%
            );
          }
          &:hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
          p {
            color: rgba(255, 255, 255, 0.6);
            text-align: center;
            font-family: 'Rubik';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
          }
        }
      }
    }
  }
}

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .select {
    width: 100%;
    &_menu {
      display: flex;
      flex-wrap: wrap;
      gap: 16 * $pr;
      .active {
        background: rgba(151, 71, 255, 0.2) !important;
      }
      .menu_list {
        a {
          .menu_list_item {
            padding: 8 * $pr;
            border-radius: 6 * $pr;
            background: var(--9747-ff, #9747ff);
            &::after {
              display: none;
            }
            &:hover {
              background-color: #af78f6;
            }
            p {
              color: #fff;
              font-size: 14 * $pr;
              line-height: 18 * $pr;
            }
          }
        }
      }
      .menu_sole {
        a {
          .menu_sole_item {
            padding: 8 * $pr;
            border-radius: 6 * $pr;
            background: var(--9747-ff, #9747ff);
            &::after {
              display: none;
            }
            &:hover {
              background-color: #af78f6;
            }
            p {
              color: #fff;
              font-size: 14 * $pr;
              line-height: 18 * $pr;
            }
          }
        }
      }
    }
  }
}
</style>
