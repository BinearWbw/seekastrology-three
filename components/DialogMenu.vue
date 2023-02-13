<template>
  <transition name="fade">
    <aside class="dialog" v-if="visible">
      <div class="dialog__main">
        <div class="dialog__main__top">
          <button class="close common__btn" @click="close"></button>
        </div>
        <div class="search">
          <input
            class="input"
            type="text"
            v-model="searchInput"
            placeholder="Search"
          />
          <button class="button" @click="search"></button>
        </div>
        <p class="title">Navigation</p>
        <div class="menu">
          <a
            class="href"
            :href="`${getIntersperseUrl + item.href}`"
            :class="{
              active:
                item.path == $route.path ||
                (item.path !== '/' && $route.path.includes(item.path)),
            }"
            v-for="(item, index) in menu"
            :key="index"
          >
            <div class="img">
              <img
                :src="
                  item.path == $route.path ||
                  (item.path !== '/' && $route.path.includes(item.path))
                    ? item.imgActive1
                    : item.img
                "
                :alt="item.title"
              />
            </div>
            <div class="name">{{ item.title }}</div>
          </a>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DialogMenu',
  props: ['menu', 'visible'],
  computed: {
    ...mapGetters(['getIntersperseUrl']),
  },
  data() {
    return {
      searchInput: '',
    }
  },
  watch: {
    visible(val) {
      if (val) {
        let bodyStyle = document.body.style
        bodyStyle.overflow = 'hidden'
      } else {
        let bodyStyle = document.body.style
        bodyStyle.overflow = ''
      }
    },
  },
  methods: {
    search() {
      let regSearch = /^.{2,}$/
      if (
        !this.searchInput.replace(/\s+/g, '') ||
        !regSearch.test(this.searchInput.replace(/\s+/g, ''))
      ) {
        this.$store.dispatch('toast', {
          type: 'warning',
          msg: 'Search is required and the length cannot be less than 2',
        })
      } else {
        window.location = `/search/${this.searchInput}`
      }
    },
    close() {
      this.$emit('close')
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 7;
  background: #1f2128;
  &__main {
    padding: 0 30px;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    &__top {
      width: 100%;
      height: 90px;
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      .close {
        width: 27px;
        height: 27px;
        background: url('~assets/img/header/close.png') no-repeat center center;
        background-size: contain;
      }
    }
    .search {
      width: 100%;
      height: 66px;
      background: rgba(0, 0, 0, 0.45);
      border-radius: 72px;
      position: relative;
      -webkit-flex-shrink: 0;
      flex-shrink: 0;
      input {
        width: 100%;
        height: 100%;
        font-size: 21px;
        color: #808191;
        padding: 3px 85px 0 34px;
      }
      button {
        position: absolute;
        top: calc(50% - 12px);
        right: 27px;
        width: 24px;
        height: 24px;
        background: url('~assets/img/header/search.svg') no-repeat center center;
        background-size: contain;
      }
    }
    .title {
      padding-left: 30px;
      margin-top: 45px;
      font-size: 21px;
      line-height: 27px;
      color: #808191;
      margin-bottom: 22px;
    }
    .menu {
      width: 100%;
      overflow: hidden;
      .href {
        width: 100%;
        height: 84px;
        padding-left: 33px;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 18px;
        .img {
          width: 60px;
          height: 100%;
          display: flex;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: start;
          -webkit-justify-content: flex-start;
          -ms-flex-pack: start;
          justify-content: flex-start;
          img {
            width: 30px;
          }
        }
        .name {
          font-size: 21px;
          line-height: 1;
          color: #808191;
          -webkit-transition: color 0.3s;
          transition: color 0.3s;
        }
        &:hover {
          .name {
            color: #fff;
          }
        }
        &.active {
          background-color: #6c5dd3;
          .name {
            color: #fff;
          }
        }
      }
    }
    &::-webkit-scrollbar {
      width: 0;
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .dialog {
    &__main {
      padding: 0 24 * $pr;
      &__top {
        height: 62 * $pr;
        .close {
          width: 18 * $pr;
          height: 18 * $pr;
        }
      }
      .search {
        height: 46 * $pr;
        border-radius: 24 * $pr;
        input {
          font-size: 14 * $pr;
          padding: 2 * $pr 52 * $pr 0 22 * $pr;
        }
        button {
          top: calc(50% - 8 * $pr);
          right: 15 * $pr;
          width: 15 * $pr;
          height: 15 * $pr;
        }
      }
      .title {
        padding-left: 20 * $pr;
        margin-top: 30 * $pr;
        font-size: 14 * $pr;
        line-height: 18 * $pr;
        margin-bottom: 16 * $pr;
      }
      .menu {
        .href {
          height: 56 * $pr;
          padding-left: 22 * $pr;
          border-radius: 12 * $pr;
          .img {
            width: 39 * $pr;
            img {
              width: 20 * $pr;
            }
          }
          .name {
            margin-top: 2 * $pr;
            font-size: 14 * $pr;
            line-height: 1;
          }
        }
      }
    }
  }
}
</style>
