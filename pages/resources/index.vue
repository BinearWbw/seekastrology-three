<template>
  <div class="resources">
    <!-- <google-ad class="google_ad_left"></google-ad>
    <google-ad class="google_ad_right"></google-ad> -->
    <div class="resources_main">
      <google-ad classNames="google_ad"></google-ad>
      <div class="resources_main_title">HOT Content</div>
      <div class="resources_main_top" v-if="list.length > 0">
        <a
          class="resources_main_top_left"
          :href="`${getIntersperseUrl}/resources/details/${list[0].name
            .trim()
            .replace(/[^\w\d]/g, '-')
            .toLowerCase()}-${list[0].id}/`"
        >
          <!-- (0-文章、1-视频） -->
          <!-- 0图文 -->
          <template v-if="list[0].kind == 0">
            <div class="resources_main_top_left_img">
              <nuxt-img
                :src="list[0].icon"
                fit="cover"
                :alt="list[0].name"
                class="resources_main_top_left_img_pic"
              ></nuxt-img>
              <!-- <div class="resources_main_top_left_img_tarot">
                {{ list[0].main_label }}
              </div> -->
            </div>
            <div class="resources_main_top_left_content">
              <div class="resources_main_top_left_content_title">
                <span class="resources_main_top_left_content_title_text">{{
                  list[0].name
                }}</span>
                <div class="resources_main_top_left_content_title_date">
                  <!-- <span>{{ $utils.formatMMDD(list[0].created_at) }}</span> -->
                </div>
              </div>
              <div class="resources_main_top_left_content_subscribe">
                {{ list[0].text }}
              </div>
              <!-- <div class="resources_main_top_left_content_btn">Read More</div> -->
              <!-- <div class="resources_main_top_left_content_h5date">
                {{ $utils.formatMMDD(list[0].created_at) }}
              </div> -->
            </div>
          </template>
          <template v-else>
            <div class="resources_main_top_left_img">
              <nuxt-img
                :src="list[0].icon"
                fit="cover"
                :alt="list[0].name"
                class="resources_main_top_left_item_img_video"
              ></nuxt-img>
              <img
                src="../../assets/img/resources/play_icon.png"
                alt=""
                class="resources_main_top_left_img_play"
              />
              <div class="resources_main_top_left_img_time">
                {{ $utils.formatMMSS(list[0].sec) }}
              </div>
              <div class="resources_main_top_left_img_tarot">TAROT</div>
            </div>
            <!-- <img :src="item.imgUrl" alt="" /> -->
            <div class="resources_main_top_left_content">
              <div class="resources_main_top_left_content_title">
                <span class="resources_main_top_left_content_title_text">{{
                  list[0].name
                }}</span>
              </div>
              <!-- <div class="resources_main_top_left_content_btn">Read More</div> -->
            </div>
          </template>
        </a>
        <div class="resources_main_top_right">
          <a
            v-for="item in normalList"
            :key="item.id"
            class="resources_main_top_right_item"
            :href="`${getIntersperseUrl}/resources/details/${item.name
              .trim()
              .replace(/[^\w\d]/g, '-')
              .toLowerCase()}-${item.id}/`"
          >
            <!-- 0图文 -->
            <template v-if="item.kind == 0">
              <div class="resources_main_top_right_item_img">
                <nuxt-img
                  :src="item.icon"
                  fit="cover"
                  :alt="item.name"
                  class="resources_main_top_right_item_img_pic"
                ></nuxt-img>
                <!-- <div class="resources_main_top_right_item_img_tarot">
                  {{ item.main_label }}
                </div> -->
              </div>
              <div class="resources_main_top_right_item_content">
                <div class="resources_main_top_right_item_content_title">
                  <span
                    class="resources_main_top_right_item_content_title_text"
                    >{{ item.name }}</span
                  >
                </div>
                <div class="resources_main_top_right_item_content_subscribe">
                  {{ item.text }}
                </div>
                <!-- <div class="resources_main_top_right_item_content_date">
                  <span> {{ $utils.formatMMDD(item.created_at) }}</span>
                </div> -->
              </div>
            </template>
            <!-- 1视频 -->
            <template v-else>
              <div class="resources_main_top_right_item_img">
                <nuxt-img
                  :src="item.icon"
                  fit="cover"
                  :alt="item.name"
                  class="resources_main_top_right_item_img_video"
                ></nuxt-img>
                <img
                  src="../../assets/img/resources/play_icon.png"
                  alt=""
                  class="resources_main_top_right_item_img_play"
                />
                <div class="resources_main_top_right_item_img_time">
                  {{ $utils.formatMMSS(item.sec) }}
                </div>
                <!-- <div class="resources_main_top_right_item_img_tarot">
                  {{ item.main_label }}
                </div> -->
              </div>
              <!-- <img :src="item.imgUrl" alt="" /> -->
              <div class="resources_main_top_right_item_content">
                <div class="resources_main_top_right_item_content_title">
                  <span
                    class="resources_main_top_right_item_content_title_text"
                    >{{ item.name }}</span
                  >
                </div>
              </div>
            </template>
          </a>
        </div>
      </div>
      <google-ad classNames="google_ad"></google-ad>
      <div class="resources_main_btm">
        <div class="resources_main_btm_tabs">
          <div
            v-for="(item, index) in tabs"
            :key="item.id"
            class="resources_main_btm_tabs_item"
            :class="index == currentTabIndex ? 'current_tabs' : ''"
            @click="changeTab(item, index)"
          >
            <span>{{ item.name }}</span>
          </div>
        </div>
        <div class="resources_main_btm_line"></div>
        <div class="resources_main_btm_main" v-if="btmList">
          <a
            v-for="item in btmList"
            :key="item.id"
            class="resources_main_btm_main_item"
            :href="`${getIntersperseUrl}/resources/details/${item.name
              .trim()
              .replace(/[^\w\d]/g, '-')
              .toLowerCase()}-${item.id}/`"
          >
            <!-- type0为文本 type1为视频， -->
            <template v-if="item.kind == 0">
              <div class="resources_main_btm_main_item_img">
                <nuxt-img
                  :src="item.icon"
                  fit="cover"
                  :alt="item.name"
                  class="resources_main_btm_main_item_img_pic"
                ></nuxt-img>
                <!-- <div class="resources_main_btm_main_item_img_tarot">
                  {{ item.main_label }}
                </div> -->
              </div>
              <div class="resources_main_btm_main_item_text">
                <div class="resources_main_btm_main_item_text_title">
                  {{ item.name }}
                </div>
                <div class="resources_main_btm_main_item_text_subscribe">
                  {{ item.text }}
                </div>
                <!-- <div class="resources_main_btm_main_item_text_date">
                  {{ $utils.formatMMDD(item.created_at) }}
                </div> -->
              </div>
            </template>
            <template v-else>
              <div class="resources_main_btm_main_item_img">
                <nuxt-img
                  :src="item.icon"
                  fit="cover"
                  :alt="item.name"
                  class="resources_main_btm_main_item_img_video"
                ></nuxt-img>
                <img
                  src="../../assets/img/resources/play_icon.png"
                  alt=""
                  class="resources_main_btm_main_item_img_play"
                />
                <div class="resources_main_btm_main_item_img_time">
                  {{ $utils.formatMMSS(item.sec) }}
                </div>
                <!-- <div class="resources_main_btm_main_item_img_tarot">
                  {{ item.main_label }}
                </div> -->
              </div>
              <div class="resources_main_btm_main_item_vtitle">
                {{ item.name }}
              </div>
            </template>
          </a>
        </div>
        <div class="common__loading" v-scroll v-if="search.page < totalPage">
          <div class="common__loading__loader" v-if="loading"></div>
        </div>
      </div>
      <google-ad classNames="google_ad_btm"></google-ad>
    </div>
    <div class="foot_components">
      <transition name="fade">
        <!-- <InternalSite></InternalSite> -->
        <el-daily-horoscope></el-daily-horoscope>
      </transition>
      <transition name="fade">
        <home-your-choice></home-your-choice>
      </transition>
      <transition name="fade">
        <tarot-all-tarot></tarot-all-tarot>
      </transition>
      <transition name="fade">
        <el-pairing></el-pairing>
      </transition>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      loading: false,
    }
  },
  async asyncData({ error, $apiList, query }) {
    try {
      //获取是否从其他页面跳转进来，如果是就给item赋值，item为当前中间导航tabs选中的值
      let item = query?.id ? { id: Number(query.id) } : null,
        currentTabIndex = 0,
        totalNum = 0,
        totalPage = 1,
        search = {
          page: 1,
          size: 9,
        }
      let [list, tabs] = await Promise.all([
        /**顶部推荐 */
        $apiList.articles
          .getNewsRec({
            origin: process.env.origin,
          })
          .then((res) => {
            res = res?.length > 0 ? res.slice(0, 5) : null
            return res || null
          }),
        /**中间tabs */
        $apiList.articles
          .getCate({
            origin: process.env.origin,
            type: 4,
          })
          .then((res) => {
            //如果为null说明不是从其他页面跳转进来的，就取请求tabs结果中的第一条
            if (item == null) item = res?.length > 0 ? res[0] : null
            //如果有item中有id值，说明是从其他页面跳转进来的，这时找到对应的下标值设置选中的tab样式，反之默认给第一个设置样式
            currentTabIndex = 'id' in item ? res.findIndex((tab) => tab.id == item.id) : 0
            return res || null
          }),
      ])
      /**根据id获取对应数据，如果不是从其他它页面跳转过来的就默认请求tabs第一条对应的列表 */
      let btmList = await $apiList.articles
        .getNews({
          origin: process.env.origin,
          cate: item.id ? item.id : 3,
          ...search,
        })
        .then((res) => {
          totalNum = res.count
          totalPage =
            Math.ceil(totalNum / search.size) === 0
              ? 1
              : Math.ceil(totalNum / search.size)
          return res?.list || null
        })
      return {
        item,
        list,
        tabs,
        btmList,
        totalNum,
        totalPage,
        search,
        currentTabIndex,
      }
    } catch (e) {
      error({ statusCode: e.code, message: e.msg })
    }
  },
  mounted() {},
  methods: {
    getNews(item) {
      this.loading = true
      this.search.page += 1
      this.$apiList.articles
        .getNews({
          origin: process.env.origin,
          cate: item.id,
          ...this.search,
        })
        .then((res) => {
          res.list &&
            res.list.map((item) => {
              this.btmList.push(item)
            })
          this.totalNum = res.count
          this.totalPage =
            Math.ceil(this.totalNum / this.search.size) === 0
              ? 1
              : Math.ceil(this.totalNum / this.search.size)
          this.loading = false
          this.status = false
        })
        .catch((error) => {
          this.search.page -= 1
          this.loading = false
        })
    },

    /** 点击切换tabs*/
    changeTab(item, index) {
      this.item = item
      this.btmList = []
      this.search.page = 0
      this.currentTabIndex = index
      //通过id请求对应的列表数据
      this.getNews(item)
    },
    scrollLoad() {
      //滚动条位置
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      //页面总高度
      let bodyHeight =
        document.body.scrollHeight || document.documentElement.scrollHeight
      //加载动画的盒子底部的三个元素
      let googleAdEl = document.querySelector('.google_ad_btm')
      let footComponentsEl = document.querySelector('.foot_components')
      let footerEl = document.querySelector('.footer')
      //加载动画的盒子距离底部的距离
      let height =
        googleAdEl.offsetHeight +
        footComponentsEl.offsetHeight +
        footerEl.offsetHeight
      if (scrollTop + window.innerHeight >= bodyHeight - height - 150) {
        if (this.loading) return
        this.getNews(this.item)
      }
    },
  },
  computed: {
    normalList() {
      return this.list.filter((_, index) => index !== 0)
    },
    ...mapGetters(['getIntersperseUrl']),
  },
  directives: {
    scroll: {
      bind: function (el, binding, vnode) {
        window.addEventListener('scroll', vnode.context.scrollLoad)
      },
      unbind: function (el, binding, vnode) {
        window.removeEventListener('scroll', vnode.context.scrollLoad)
      },
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
$block: 456px;
$spacing: 16px;
.current_tabs {
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: #000000 !important;
  }
}
.resources {
  width: 100%;
  .google_ad_left {
    position: fixed;
    top: 180px;
    left: 68px;
    width: 160px;
    height: 600px;
    background-color: #555761;
    z-index: 9;
  }
  .google_ad_right {
    position: fixed;
    top: 180px;
    right: 68px;
    width: 160px;
    height: 600px;
    background-color: #555761;
    z-index: 9;
  }
  &_main {
    width: 1400px;
    margin: 0 auto;
    &_title {
      font-family: 'Cinzel Decorative';
      font-style: normal;
      font-weight: 700;
      font-size: 46px;
      line-height: 64px;
      /* identical to box height, or 139% */
      color: #ffffff;
    }
    &_top {
      display: flex;
      margin-top: 32px;
      height: 100%;
      &_left {
        width: 574px;
        min-height: 628px;
        display: block;
        &_img {
          width: 574px;
          height: 471px;
          position: relative;
          &_pic {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          &_video {
            width: 574px;
            height: 471px;
          }
          &_play {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 82px;
            height: 82px;
          }

          &_time {
            position: absolute;
            right: 10px;
            bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 81px;
            height: 32px;
            background: rgba(0, 0, 0, 0.55);
            border-radius: 9px;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            /* identical to box height, or 138% */
            color: #ffffff;
          }
          &_tarot {
            display: none;
          }
        }
        &_content {
          margin: 27px 22px;
          &_title {
            display: flex;
            justify-content: space-between;

            &_text {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 22px;
              line-height: 30px;
              /* identical to box height, or 136% */
              color: #ffffff;
              overflow: hidden;
              white-space: normal;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              display: -webkit-box;
            }
            &_date {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 22px;
              /* identical to box height, or 138% */
              color: rgba(255, 255, 255, 0.7);
            }
          }
          &_subscribe {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            /* or 138% */
            color: rgba(255, 255, 255, 0.7);
            margin-top: 8px;
            overflow: hidden;
            white-space: normal;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            display: -webkit-box;
          }
          &_btn {
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border: 1px solid #45454d;
            border-radius: 42px;
            width: 113px;
            height: 32px;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            /* identical to box height, or 129% */
            color: rgba(255, 255, 255, 0.7);
          }
          &_h5date {
            display: none;
          }
        }

        // img {
        //   width: 574px;
        //   height: 471px;
        // }
      }
      &_right {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(2, 397px);
        grid-gap: 16px;
        margin-left: 16px;
        &_item {
          width: 397px;
          min-height: 326px;
          display: flex;
          flex-direction: column;
          align-items: center;

          &_img {
            width: 397px;
            height: 198px;
            position: relative;

            &_video,
            &_pic {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            &_play {
              width: 82px;
              height: 82px;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
            &_time {
              align-items: center;
              background: rgba(0, 0, 0, 0.55);
              border-radius: 9px;
              bottom: 10px;
              color: #fff;
              display: flex;
              font-family: Rubik;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              height: 32px;
              justify-content: center;
              line-height: 22px;
              position: absolute;
              right: 10px;
              width: 81px;
            }
            &_tarot {
              display: none;
            }
          }
          &_content {
            margin: 16px 0 0 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &_title {
              display: flex;
              justify-content: space-between;
              &_text {
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 400;
                font-size: 22px;
                line-height: 30px;
                /* identical to box height, or 136% */
                color: #ffffff;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
              }
            }
            &_date {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 22px;
              /* identical to box height, or 138% */
              color: rgba(255, 255, 255, 0.7);
              margin-top: 8px;
            }
            &_subscribe {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 22px;
              /* or 138% */
              color: rgba(255, 255, 255, 0.7);
              margin-top: 8px;
              overflow: hidden;
              white-space: normal;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              display: -webkit-box;
            }
          }
        }
      }
    }
    .google_ad {
      width: 970px;
      height: 90px;
      background-color: #555761;
      margin: 40px auto;
      overflow: hidden;
    }
    .google_ad_btm {
      width: 924px;
      height: 114px;
      background-color: #555761;
      overflow: hidden;
      margin: 48px auto 93px;
    }
    &_btm {
      margin-top: 55px;
      &_tabs {
        display: flex;
        justify-content: center;
        align-items: center;
        &_item {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          // width: 86px;
          padding: 7px 22px;
          height: 32px;
          // background: #ffffff;
          border-radius: 42px;
          margin-right: 24px;
          span {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            /* identical to box height, or 129% */
            text-align: center;
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
      &_line {
        height: 1px;
        margin: 22px 0 24px 0;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.2) 50.52%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      &_main {
        display: grid;
        grid-template-columns: repeat(3, 456px);
        grid-gap: 16px;
        &_item {
          &_img {
            width: 456px;
            height: 280px;
            position: relative;
            object-fit: cover;
            &_pic {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            &_video {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            &_play {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 82px;
              height: 82px;
            }

            &_time {
              position: absolute;
              right: 10px;
              bottom: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 81px;
              height: 32px;
              background: rgba(0, 0, 0, 0.55);
              border-radius: 9px;
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 22px;
              /* identical to box height, or 138% */
              color: #ffffff;
            }
            &_tarot {
              display: none;
            }
          }
          &_vtitle {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 30px;
            /* or 136% */
            text-align: center;
            color: #ffffff;
            margin-top: 16px;
            width: 456px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          &_text {
            &_title {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 22px;
              line-height: 30px;
              /* or 136% */
              color: #ffffff;
              margin-top: 16px;
              width: 456px;
              // overflow: hidden;
              // white-space: nowrap;
              // text-overflow: ellipsis;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              // min-height: 60px;
            }
            &_date {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 22px;
              /* identical to box height, or 138% */
              color: rgba(255, 255, 255, 0.7);
              margin-top: 8px;
              text-align: center;
            }
            &_subscribe {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 22px;
              /* or 138% */
              color: rgba(255, 255, 255, 0.7);
              margin-top: 8px;
              overflow: hidden;
              white-space: normal;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              display: -webkit-box;
            }
          }
        }
      }
    }
    &_various {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
@media (max-width: (3 * $block + 2 * $spacing + 450px)) {
  .resources {
    .google_ad_left {
      left: 30px;
    }
    .google_ad_right {
      right: 30px;
    }
  }
}
@media (max-width: (3 * $block + 2 * $spacing + 400px)) {
  .resources {
    .google_ad_left {
      left: 10px;
    }
    .google_ad_right {
      right: 10px;
    }
  }
}
@media (max-width: (3 * $block + 2 * $spacing + 350px)) {
  .resources {
    &_main {
      &_top {
        flex-direction: column;
        align-items: center;
        &_right {
          margin-left: 0;
        }
      }
    }
    .google_ad_left {
      left: 100px;
    }
    .google_ad_right {
      right: 100px;
    }
  }
}
@media (max-width: (3 * $block + 2 * $spacing)) {
  .resources {
    &_main {
      width: 100%;
      &_title {
        text-align: center;
      }
      &_top {
        flex-direction: column;
        align-items: center;
      }
      &_btm {
        &_main {
          grid-template-columns: repeat(2, 456px);
          justify-content: center;
        }
      }
      .google_ad {
        width: 900px;
      }
    }
    .google_ad_left {
      left: 50px;
    }
    .google_ad_right {
      right: 50px;
    }
  }
}
@media (max-width: (2 * $block + 1 * $spacing + 100px)) {
  .resources {
    &_main {
      &_btm {
        &_main {
          grid-template-columns: repeat(1, 456px);
        }
      }
      .google_ad {
        width: 800px;
      }
    }
  }
}
@media (max-width: (900px)) {
  .resources {
    &_main {
      &_top {
        &_right {
          grid-template-columns: repeat(1, 397px);
        }
      }
      &_btm {
        &_tabs {
          width: 700px;
          margin: 0 auto;
          overflow-x: scroll;
          justify-content: start;
          &_item {
            flex-shrink: 0;
          }
        }
        &_main {
          grid-template-columns: repeat(1, 456px);
        }
      }
      .google_ad {
        width: 700px;
      }
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .resources {
    &_main {
      width: 100%;
      &_title {
        margin-top: 48 * $pr;
        font-size: 36 * $pr;
        text-align: center;
      }
      &_top {
        justify-content: center;
        flex-wrap: wrap;
        &_left {
          width: 343 * $pr;
          min-height: 256 * $pr;
          &_img {
            width: 343 * $pr;
            height: 193 * $pr;
            object-fit: cover;
            &_video,
            &_pic {
              width: 343 * $pr;
              height: 193 * $pr;
            }
            &_play {
              width: 38 * $pr;
              height: 38 * $pr;
            }
            &_time {
              top: 6 * $pr;
              width: 47 * $pr;
              height: 18 * $pr;
              border-radius: 6 * $pr;
              font-size: 12 * $pr;
              line-height: 16 * $pr;
            }
            &_tarot {
              display: block;
              position: absolute;
              width: 59 * $pr;
              height: 22 * $pr;
              background: #000000;
              border-radius: 6 * $pr;
              font-family: 'Rufina';
              font-style: normal;
              font-weight: 700;
              font-size: 12 * $pr;
              line-height: 16 * $pr;
              display: flex;
              align-items: center;
              text-align: center;
              justify-content: center;
              color: #ffffff;
              left: 50%;
              transform: translate(-50%, 0);
              bottom: -11 * $pr;
            }
          }
          &_content {
            &_title {
              justify-content: center;
              align-items: center;
              &_text {
                font-size: 14 * $pr;
                line-height: 18 * $pr;
                color: rgba(255, 255, 255, 0.7);
                overflow: hidden;
                white-space: normal;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                display: -webkit-box;
              }
              &_date {
                display: none;
              }
            }
            &_subscribe,
            &_btn {
              display: none;
            }
            &_h5date {
              display: block;
              font-family: 'Rubik';
              font-style: normal;
              font-size: 12 * $pr;
              line-height: 16 * $pr;
              color: rgba(255, 255, 255, 0.7);
              text-align: center;
            }
          }
        }
        &_right {
          grid-template-columns: repeat(2, 169 * $pr);
          grid-gap: 5 * $pr;
          margin-left: 0;
          justify-content: center;
          &_item {
            width: 169 * $pr;
            min-height: 160 * $pr;
            &_img {
              width: 169 * $pr;
              height: 95 * $pr;
              &_video,
              &_pic {
                width: 169 * $pr;
                height: 95 * $pr;
              }
              &_play {
                width: 38 * $pr;
                height: 38 * $pr;
              }
              &_time {
                top: 6 * $pr;
                width: 47 * $pr;
                height: 18 * $pr;
                border-radius: 6 * $pr;
                font-size: 12 * $pr;
                line-height: 16 * $pr;
              }
              &_tarot {
                display: block;
                position: absolute;
                width: 59 * $pr;
                height: 22 * $pr;
                background: #000000;
                border-radius: 6 * $pr;
                font-family: 'Rufina';
                font-style: normal;
                font-weight: 700;
                font-size: 12 * $pr;
                line-height: 16 * $pr;
                display: flex;
                align-items: center;
                text-align: center;
                justify-content: center;
                color: #ffffff;
                left: 50%;
                transform: translate(-50%, 0);
                bottom: -11 * $pr;
              }
            }
            &_content {
              &_title {
                &_text {
                  font-size: 14 * $pr;
                  line-height: 18 * $pr;
                  text-align: center;
                  color: rgba(255, 255, 255, 0.7);
                  text-align: left;
                  word-break: break-all;
                  margin-top: 12 * $pr;
                }
              }
              &_subscribe {
                display: none;
              }
            }
          }
        }
      }
      .google_ad,
      .google_ad_btm {
        width: 343 * $pr;
        height: 299 * $pr;
      }

      &_btm {
        width: 100%;
        &_tabs {
          width: 91%;
          margin: 0 auto;
          // margin: 0 16 * $pr auto;
          justify-content: start;
          overflow-x: scroll;
          &_item {
            // width: 86 * $pr;
            padding: 7 * $pr 22 * $pr;
            height: 32 * $pr;
            flex-shrink: 0;
            margin-right: 9 * $pr;
            span {
              font-size: 14 * $pr;
            }
          }
        }
        &_main {
          grid-template-columns: repeat(2, 169 * $pr);
          grid-gap: 5 * $pr;
          width: 100%;
          margin: 0 16 * $pr auto;
          margin-left: 0;
          &_item {
            width: 169 * $pr;
            &_img {
              width: 169 * $pr;
              height: 95 * $pr;
              &_video,
              &_pic {
                width: 169 * $pr;
                height: 95 * $pr;
              }
              &_play {
                width: 38 * $pr;
                height: 38 * $pr;
              }
              &_tarot {
                display: block;
                position: absolute;
                width: 59 * $pr;
                height: 22 * $pr;
                background: #000000;
                border-radius: 6 * $pr;
                font-family: 'Rufina';
                font-style: normal;
                font-weight: 700;
                font-size: 12 * $pr;
                line-height: 16 * $pr;
                display: flex;
                align-items: center;
                text-align: center;
                justify-content: center;
                color: #ffffff;
                left: 50%;
                transform: translate(-50%, 0);
                bottom: -11 * $pr;
              }
            }
            &_vtitle {
              font-size: 14 * $pr;
              line-height: 18 * $pr;
              color: rgba(255, 255, 255, 0.7);
              width: 169 * $pr;
              margin-top: 12 * $pr;
            }
            &_text {
              &_title,
              &_date {
                font-size: 14 * $pr;
                line-height: 18 * $pr;
                color: rgba(255, 255, 255, 0.7);
                width: 169 * $pr;
              }
              &_title {
                white-space: normal;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                display: -webkit-box;
                margin-top: 12 * $pr;
              }
              &_subscribe {
                display: none;
              }
            }
          }
        }
      }
    }
    .google_ad_left {
      display: none;
    }
    .google_ad_right {
      display: none;
    }
  }
}
</style>
