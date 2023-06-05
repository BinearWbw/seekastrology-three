<!--
 * @Author: jintao 542345709@qq.com
 * @Date: 2023-06-01 10:54:47
 * @LastEditors: jintao 542345709@qq.com
 * @LastEditTime: 2023-06-05 09:47:23
 * @FilePath: /seekastrology/pages/resources/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="resources">
    <!-- <google-ad class="google_ad_left"></google-ad>
    <google-ad class="google_ad_right"></google-ad> -->
    <div class="resources_main">
      <div class="resources_main_title">HOT Content</div>
      <div class="resources_main_top">
        <div class="resources_main_top_left" @click="jumpDetails(list[0])">
          <div v-if="list[0].type == 1">
            <div class="resources_main_top_left_img">
              <img
                :src="list[0].imgUrl"
                alt=""
                class="resources_main_top_left_img_video"
              />
              <img
                src="../../assets/img/resources/play_icon.png"
                alt=""
                class="resources_main_top_left_img_play"
              />
              <div class="resources_main_top_left_img_time">
                {{ list[0].time }}
              </div>
              <div class="resources_main_top_left_img_tarot">TAROT</div>
            </div>
            <!-- <img :src="item.imgUrl" alt="" /> -->
            <div class="resources_main_top_left_content">
              <div class="resources_main_top_left_content_title">
                <span class="resources_main_top_left_content_title_text">{{
                  list[0].title
                }}</span>
              </div>
              <div class="resources_main_top_left_content_btn">Read More</div>
            </div>
          </div>
          <!-- 2图文 -->
          <div v-if="list[0].type == 2">
            <div class="resources_main_top_left_img">
              <img
                class="resources_main_top_left_img_pic"
                :src="list[0].imgUrl"
                alt=""
              />
              <div class="resources_main_top_left_img_tarot">TAROT</div>
            </div>

            <div class="resources_main_top_left_content">
              <div class="resources_main_top_left_content_title">
                <span class="resources_main_top_left_content_title_text">{{
                  list[0].title
                }}</span>
                <div class="resources_main_top_left_content_title_date">
                  <span>{{ list[0].date }}</span>
                </div>
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
        </div>
        <div class="resources_main_top_right">
          <div
            class="resources_main_top_right_item"
            v-for="(item, index) in normalList"
            :key="item.id"
            @click="jumpDetails(item)"
          >
            <!-- 1视频 -->
            <div v-if="item.type == 1">
              <div class="resources_main_top_right_item_img">
                <img
                  :src="item.imgUrl"
                  alt=""
                  class="resources_main_top_right_item_img_video"
                />
                <img
                  src="../../assets/img/resources/play_icon.png"
                  alt=""
                  class="resources_main_top_right_item_img_play"
                />
                <div class="resources_main_top_right_item_img_time">
                  {{ item.time }}
                </div>
                <div class="resources_main_top_right_item_img_tarot">TAROT</div>
              </div>
              <!-- <img :src="item.imgUrl" alt="" /> -->
              <div class="resources_main_top_right_item_content">
                <div class="resources_main_top_right_item_content_title">
                  <span
                    class="resources_main_top_right_item_content_title_text"
                    >{{ item.title }}</span
                  >
                </div>
              </div>
            </div>
            <!-- 2图文 -->
            <div v-if="item.type == 2">
              <div class="resources_main_top_right_item_img">
                <img
                  class="resources_main_top_right_item_img_pic"
                  :src="item.imgUrl"
                  alt=""
                />
                <div class="resources_main_top_right_item_img_tarot">TAROT</div>
              </div>

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
                <div class="resources_main_btm_main_item_img_tarot">TAROT</div>
              </div>
              <div class="resources_main_btm_main_item_vtitle">
                {{ item.title }}
              </div>
            </div>
            <div v-if="item.type == 2">
              <div class="resources_main_btm_main_item_img">
                <img
                  :src="item.imgUrl"
                  alt=""
                  class="resources_main_btm_main_item_img_pic"
                />
                <div class="resources_main_btm_main_item_img_tarot">TAROT</div>
              </div>
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
          type: 2,
          imgUrl: require('../../assets/img/resources/p_01.png'),
          title: "Tarot.com's Tarot Guide",
          date: '07/24',
          time: '37:25',
          subscribe:
            'Tarot is an ancient divination that began in 14th century Europe. symbolic archetypes that allow us to tap into......',
        },
        {
          id: 2,
          type: 2,
          imgUrl: require('../../assets/img/resources/p_02.png'),
          title: 'LOVE Tarot Reading',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
        },
        {
          id: 3,
          type: 2,
          imgUrl: require('../../assets/img/resources/p_03.png'),
          title: 'LOVE Tarot Reading',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
        },
        {
          id: 4,
          type: 1,
          time: '37:25',
          imgUrl: require('../../assets/img/resources/p_04.png'),
          title: 'LOVE Tarot Reading',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
        },
        {
          id: 5,
          type: 2,
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
    jumpDetails(item) {
      console.log(item);
      //
      this.$router.push({
          path: `/resources/details/?id=${item.id}`,
          href: '/resources/details',
          data:item
        })
    },
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
        min-height: 628px;
        &_img {
          width: 574px;
          height: 471px;
          position: relative;
          object-fit: cover;
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
              width: 397px;
              height: 198px;
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
              text-align: center;
            }
          }
          // img {
          //   width: 397px;
          //   height: 198px;
          // }
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
            // height: 280px;
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
            &_tarot{
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
    &_main{
      &_top{
        flex-direction: column;
        align-items: center;
        &_right{
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
    &_main{
      width: 100%;
      &_title{
        text-align: center;
      }
      &_top{
        flex-direction: column;
        align-items: center;
      }
      &_btm{
        &_main{
          grid-template-columns: repeat(2,456px);
          justify-content: center;
        }
      }
      .google_ad{
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
    &_main{
      
      &_btm{
        &_main{
          grid-template-columns: repeat(1,456px);
        }
      }
      .google_ad{
        width: 800px;
      }
    }
    
  }
}
@media (max-width: (900px)) {
  .resources {
    &_main{
      &_top{
        &_right{
          grid-template-columns: repeat(1,397px);
        }
      }
      &_btm{
        &_tabs{
          width: 700px;
          margin: 0 auto;
          overflow-x: scroll;
          justify-content: start;
          &_item{
            flex-shrink: 0
          }
        }
        &_main{
          grid-template-columns: repeat(1,456px);
        }
      }
      .google_ad{
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
      .google_ad,.google_ad_btm {
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
            width: 86 * $pr;
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