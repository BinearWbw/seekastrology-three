<template>
  <div class="test">
    <div class="test_main">
      <div class="test_main_top">
        <div class="test_main_top_tabs">
          <div
            v-for="(item, index) in tabs"
            :key="item.id"
            class="test_main_top_tabs_item"
            :class="index == currentTabIndex ? 'current_tabs' : ''"
            @click="changeTab(item, index)"
          >
            <span>{{ item.name }}</span>
          </div>
        </div>
        <input type="text" name="username" placeholder="Enter Your Name" />
        <img
          class="searchH5"
          src="../../assets/img/search/searchH5.png"
          alt=""
        />
      </div>
      <div class="test_main_line"></div>
      <div class="test_main_center">
        <div class="test_main_center_list">
          <div
            class="test_main_center_list_item"
            v-for="(item, index) in list"
            :key="item.id"
          >
            <div class="test_main_center_list_item_img">
              <img :src="item.icon" alt="" />
            </div>
            <div class="test_main_center_list_item_text">
              <div class="test_main_center_list_item_text_name">
                {{ item.name }}
              </div>
            </div>
          </div>
          <google-ad class="google_ad top"></google-ad>
          <google-ad class="google_ad center"></google-ad>
          <google-ad class="google_ad btm"></google-ad>
        </div>
        <div class="test_main_center_right">
          <google-ad class="google_ad"></google-ad>
          <google-ad class="google_ad"></google-ad>
          <google-ad class="google_ad"></google-ad>
        </div>
      </div>
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
      tabs: [
        { id: 1, name: 'Most Popular Quizzes' },
        { id: 2, name: 'Love' },
        { id: 3, name: 'Love' },
        { id: 4, name: 'Love' },
        { id: 5, name: 'Wealth' },
        { id: 6, name: 'Wealth' },
        { id: 7, name: 'Wealth' },
        { id: 7, name: 'Fate' },
        { id: 7, name: 'Fate' },
        { id: 7, name: 'Fate' },
        { id: 7, name: 'Pairing' },
        { id: 7, name: 'Pairing' },
        { id: 7, name: 'Pairing' },
      ],
      list: [
        {
          id: 1,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 2,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 3,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 4,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 5,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 6,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 7,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 8,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 9,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 10,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 11,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 12,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 13,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 14,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 15,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 16,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 17,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 18,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 19,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 20,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 21,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 22,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 23,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
        {
          id: 24,
          name: 'Text AaBbCcDd 123456789 Rubik 16/22 Regular',
          icon: require('../../assets/img/resources/d_03.png'),
        },
      ],
      currentTabIndex: 0,
    }
  },
  methods: {
    /** 点击切换tabs*/
    changeTab(item, index) {
      //   this.item = item
      //   this.btmList = []
      //   this.search.page = 0
      this.currentTabIndex = index
      //通过id请求对应的列表数据
      //   this.getNews(item)
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
$block: 220px;
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
.test {
  width: 100%;
  &_main {
    width: 1400px;
    margin: 0 auto;
    &_top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      &_tabs {
        display: flex;
        // justify-content: center;
        align-items: center;
        width: 1040px;
        overflow-x: auto;
        margin-right: 13px;
        &_item {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          height: 32px;
          // background: #ffffff;
          border-radius: 42px;
          margin-right: 24px;
          padding: 0 22px;
          flex-shrink: 0;
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
      input {
        width: 338px;
        height: 44px;
        background: rgba(7, 6, 6, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 24px;
        &::placeholder {
          font-family: 'Rubik';
          font-size: 14px;
          line-height: 18px;
          color: rgba(255, 255, 255, 0.7);
          text-indent: 18px;
        }
        &:focus {
          border-color: #fff;
        }
      }
      .searchH5 {
        display: none;
      }
    }
    &_line {
      margin-top: 20px;
      width: 100%;
      height: 1px;
      background: rgba(179, 176, 191, 0.3);
    }
    &_center {
      margin-top: 32px;
      display: flex;
      justify-content: space-between;
      &_list {
        width: 924px;
        display: grid;
        grid-template-columns: repeat(4, 220px);
        grid-gap: 16px;
        &_item {
          width: 220px;
          &_img {
            width: 220px;
            height: 220px;
            object-fit: cover;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          &_text {
            &_name {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 22px;
              text-align: center;
              color: rgba(255, 255, 255, 0.7);
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
          }
        }
        .google_ad {
          width: 924px;
          height: 114px;
          background: #555761;
          margin: 48px 0;
        }
        .top {
          grid-column-end: 5;
          grid-column-start: span 4;
          grid-row-end: 5;
          grid-row-start: span 2;
        }
        .center {
          grid-column-end: 5;
          grid-column-start: span 4;
          grid-row-end: 9;
          grid-row-start: span 2;
        }
        .btm {
          grid-column-end: 5;
          grid-column-start: span 4;
          grid-row-end: 13;
          grid-row-start: span 2;
        }
      }
      &_right {
        .google_ad {
          width: 300px;
          height: 600px;
          background: #555761;
          margin-bottom: 202px;
        }
      }
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .test {
    &_main {
      width: 100%;
      padding: 0 16 * $pr;
      &_top {
        &_tabs {
          width: 340 * $pr;
          &_item {
            padding: 7 * $pr 22 * $pr;
            margin-right: 0;
          }
        }
        input {
          display: none;
        }
        .searchH5 {
          display: block;
          width: 19 * $pr;
          height: 19 * $pr;
        }
      }
      &_line {
        margin-top: 21 * $pr;
      }
      &_center {
        margin-top: 16 * $pr;
        &_list {
          width: 100%;
          grid-template-columns: repeat(2, 169 * $pr);
          grid-gap: 5 * $pr;
          &_item {
            width: 169 * $pr;
            &_img {
              width: 169 * $pr;
            }
            &_text {
              &_name {
                font-size: 14 * $pr;
                line-height: 18 * $pr;
              }
            }
          }
          .google_ad{
             grid-column-end: 3;
              grid-column-start: span 2;
              grid-row-start: span 2;
              width: 100%;
              height: 299 * $pr;
              margin: 48 * $pr 0;
          }
          .top {
            grid-row-end: 6;
          }
          .center {
            grid-row-end: 11;
          }
          .btm {
            grid-row-end: 16;
          }
        }
        &_right {
          display: none;
        }
      }
    }
  }
}
</style>