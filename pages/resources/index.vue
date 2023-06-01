<!--
 * @Author: jintao 542345709@qq.com
 * @Date: 2023-06-01 10:54:47
 * @LastEditors: jintao 542345709@qq.com
 * @LastEditTime: 2023-06-01 10:55:15
 * @FilePath: /seekastrology/pages/resources/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="resources">
    <google-ad class="google_ad_left"></google-ad>
    <google-ad class="google_ad_right"></google-ad>
    <div class="resources_main">
      <div class="resources_main_title">HOT Content</div>
      <div class="resources_main_top">
        <div class="resources_main_top_left">
          <img :src="list[0].imgUrl" alt="" />
          <div class="resources_main_top_left_content">
            <div class="resources_main_top_left_content_title">
              <span class="resources_main_top_left_content_title_text">{{
                list[0].title
              }}</span>
              <span class="resources_main_top_left_content_title_date">{{
                list[0].date
              }}</span>
            </div>
            <div class="resources_main_top_left_content_subscribe">
              {{ list[0].subscribe }}
            </div>
            <div class="resources_main_top_left_content_btn">Read More</div>
            <div class="resources_main_top_left_content_h5date">
              {{ list[0].date }}
            </div>
          </div>
        </div>
        <div class="resources_main_top_right">
          <div
            class="resources_main_top_right_item"
            v-for="(item, index) in normalList"
            :key="item.id"
          >
            <img :src="item.imgUrl" alt="" />
            <div class="resources_main_top_right_item_content">
              <div class="resources_main_top_right_item_content_title">
                <span
                  class="resources_main_top_right_item_content_title_text"
                  >{{ item.title }}</span
                >
              </div>
              <div class="resources_main_top_right_item_content_subscribe">
                {{ item.subscribe }}
              </div>
              <div class="resources_main_top_right_item_content_date">
                <span>{{ item.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <google-ad class="google_ad"></google-ad>
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
        <div class="resources_main_btm_main">
          <div
            class="resources_main_btm_main_item"
            v-for="(item, index) in btmList"
            :key="item.id"
            @click="jumpDetails(item)"
          >
            <!-- type1为视频，2为文本 -->
            <div v-if="item.type == 1">
              <div class="resources_main_btm_main_item_img">
                <img
                  :src="item.imgUrl"
                  alt=""
                  class="resources_main_btm_main_item_img_video"
                />
                <img
                  src="../../assets/img/resources/play_icon.png"
                  alt=""
                  class="resources_main_btm_main_item_img_play"
                />
                <div class="resources_main_btm_main_item_img_time">
                  {{ item.time }}
                </div>
              </div>
              <div class="resources_main_btm_main_item_vtitle">
                {{ item.title }}
              </div>
            </div>
            <div v-if="item.type == 2">
              <img
                :src="item.imgUrl"
                alt=""
                class="resources_main_btm_main_item_img_rich"
              />
              <div class="resources_main_btm_main_item_text">
                <div class="resources_main_btm_main_item_text_title">
                  {{ item.title }}
                </div>
                <div class="resources_main_btm_main_item_text_subscribe">
                  {{ item.subscribe }}
                </div>
                <div class="resources_main_btm_main_item_text_date">
                  {{ item.date }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <google-ad class="google_ad_btm"></google-ad>
    </div>
    <transition name="fade">
      <InternalSite></InternalSite>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          imgUrl: require('../../assets/img/resources/p_01.png'),
          title: "Tarot.com's Tarot Guide",
          date: '07/24',
          subscribe:
            'Tarot is an ancient divination that began in 14th century Europe. symbolic archetypes that allow us to tap into......',
        },
        {
          id: 2,
          imgUrl: require('../../assets/img/resources/p_02.png'),
          title: 'LOVE Tarot Reading',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
        },
        {
          id: 3,
          imgUrl: require('../../assets/img/resources/p_03.png'),
          title: 'LOVE Tarot Reading',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
        },
        {
          id: 4,
          imgUrl: require('../../assets/img/resources/p_04.png'),
          title: 'LOVE Tarot Reading',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
        },
        {
          id: 5,
          imgUrl: require('../../assets/img/resources/p_05.png'),
          title: 'LOVE Tarot Reading',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
        },
      ],
      currentTabIndex: 0,
      tabs: [
        { id: 1, name: 'Tab 01' },
        { id: 2, name: 'Tab 02' },
        { id: 3, name: 'Tab 03' },
        { id: 4, name: 'Tab 04' },
        { id: 5, name: 'Tab 05' },
        { id: 6, name: 'Tab 06' },
        { id: 7, name: 'Tab 07' },
      ],
      btmList: [
        {
          id: 1,
          type: 1,
          imgUrl: require('../../assets/img/resources/p_06.png'),
          title:
            '2023 Money and Career Predictions for the 12 Signs! Many New Beginnings for all Sig··',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
          time: '37:25',
        },
        {
          id: 2,
          type: 1,
          imgUrl: require('../../assets/img/resources/p_07.png'),
          title:
            '2023 Money and Career Predictions for the 12 Signs! Many New Beginnings for all Sig··',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
          time: '37:25',
        },
        {
          id: 3,
          type: 1,
          imgUrl: require('../../assets/img/resources/p_08.png'),
          title:
            '2023 Money and Career Predictions for the 12 Signs! Many New Beginnings for all Sig··',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
          time: '37:25',
        },
        {
          id: 4,
          type: 2,
          imgUrl: require('../../assets/img/resources/p_09.png'),
          title:
            '2023 Money and Career Predictions for the 12 Signs! Many New Beginnings for all Sig··',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
        },
        {
          id: 5,
          type: 2,
          imgUrl: require('../../assets/img/resources/p_10.png'),
          title:
            '2023 Money and Career Predictions for the 12 Signs! Many New Beginnings for all Sig··',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
        },
        {
          id: 6,
          type: 1,
          imgUrl: require('../../assets/img/resources/p_11.png'),
          title:
            '2023 Money and Career Predictions for the 12 Signs! Many New Beginnings for all Sig··',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
          time: '37:25',
        },
        {
          id: 7,
          type: 2,
          imgUrl: require('../../assets/img/resources/p_12.png'),
          title:
            '2023 Money and Career Predictions for the 12 Signs! Many New Beginnings for all Sig··',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
        },
        {
          id: 8,
          type: 1,
          imgUrl: require('../../assets/img/resources/p_13.png'),
          title:
            '2023 Money and Career Predictions for the 12 Signs! Many New Beginnings for all Sig··',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
          time: '37:25',
        },
        {
          id: 9,
          type: 2,
          imgUrl: require('../../assets/img/resources/p_14.png'),
          title:
            '2023 Money and Career Predictions for the 12 Signs! Many New Beginnings for all Sig··',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
        },
      ],
      variousList: [
        { imgUrl: '', title: 'Tarot' },
        { imgUrl: '', title: 'Tarot' },
        { imgUrl: '', title: 'Tarot' },
      ],
    }
  },
  methods: {
    /**点击底部列表跳转 */
    jumpDetails() {},
    /** 点击切换tabs*/
    changeTab(item, index) {
      this.currentTabIndex = index
      //模拟请求数据-打乱数组
      this.btmList = this.btmList.sort(() => {
        return 0.5 - Math.random()
      })
    },
  },
  computed: {
    normalList() {
      return this.list.filter((_, index) => index !== 0)
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
        height: 628px;
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
        }

        img {
          width: 574px;
          height: 471px;
        }
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
              text-align: center;
            }
            &_h5date {
              display: none;
            }
          }
          img {
            width: 397px;
            height: 198px;
          }
        }
      }
    }
    .google_ad {
      width: 970px;
      height: 90px;
      background-color: #555761;
      margin: 8px auto 0;
    }
    .google_ad_btm {
      width: 924px;
      height: 114px;
      background-color: #555761;

      margin: 48px auto 0;
      margin-bottom: 93px;
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
          width: 86px;
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
            &_video {
              width: 456px;
              height: 280px;
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
            &_rich {
              width: 456px;
              height: 228px;
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
              text-align: center;
              color: #ffffff;
              margin-top: 16px;
              width: 456px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
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
              text-align: center;
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
@media (max-width: (3 * $block + 2 * $spacing + 300px)) {
  .resources {
    &_main {
      &_top {
        flex-wrap: wrap;
        &_right {
        }
      }
    }
    // .google_ad_left {
    //   left: 0;
    // }
    // .google_ad_right {
    //   right: 0;
    // }
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
          height: 256 * $pr;
          &_content {
            &_title {
              justify-content: center;
              align-items: center;
              &_text {
                font-size: 14 * $pr;
                line-height: 18 * $pr;
                color: rgba(255, 255, 255, 0.7);
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
          img {
            width: 343 * $pr;
            height: 193 * $pr;
          }
        }
        &_right {
          grid-template-columns: repeat(2, 169 * $pr);
          grid-gap: 5 * $pr;
          &_item{
            width: 169 * $pr;
            height: 160 * $pr;
            img{
              width: 169 * $pr;
            height: 95 * $pr;
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