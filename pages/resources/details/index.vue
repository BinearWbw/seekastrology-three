<template>
  <div class="details">
    <google-ad class="google_ad_left"></google-ad>
    <google-ad class="google_ad_right"></google-ad>
    <div class="details_main">
      <div class="details_main_left">
        <div class="details_main_left_top">
          <div class="details_main_left_top_menu">
            <a href="">Home</a> > <a href="">News</a> >
            <a href="">Quizzes Details</a>
          </div>
          <div class="details_main_left_top_content" v-if="type == 2">
            <div class="details_main_left_top_content_title">
              2023 Money and Career Predictions for the 12 Signs! Many New
              Beginnings for all Signs!
            </div>
            <div class="details_main_left_top_content_subtitle">
              <div class="details_main_left_top_content_subtitle_btn">
                Tarot
              </div>
              <div class="details_main_left_top_content_subtitle_time">
                2023-07-23 23:20
              </div>
            </div>
            <img
              class="details_main_left_top_content_img"
              src="../../../assets/img/resources/d_01.png"
              alt=""
            />
            <div class="details_main_left_top_content_text">
              <p>
                This article's content includes contributions from Tarot.com
                writer Christine Payne-Towler.
              </p>
              <p>
                Your cup runneth over! This saying refers to an abundance of
                feelings, luck, and joy, and it's a great way to think about
                Tarot's suit of Cups.
              </p>
              <p>
                The suit of Cups is connected to our emotions, our
                relationships, and matters of the soul. When a Cups card comes
                up in your Tarot reading, pay attention to your dreams, your
                heart, and your intuitions. From great joy to immense grief, the
                Cups cards reveal how we truly feel -- and how others feel about
                us.
              </p>
              <p>
                This article's content includes contributions from Tarot.com
                writer Christine Payne-Towler.
              </p>
              <p>
                Your cup runneth over! This saying refers to an abundance of
                feelings, luck, and joy, and it's a great way to think about
                Tarot's suit of Cups.
              </p>
              <p>
                The suit of Cups is connected to our emotions, our
                relationships, and matters of the soul. When a Cups card comes
                up in your Tarot reading, pay attention to your dreams, your
                heart, and your intuitions. From great joy to immense grief, the
                Cups cards reveal how we truly feel -- and how others feel about
                us.
              </p>
            </div>
          </div>
          <div class="details_main_left_top_content" v-if="type == 1">
            <div class="details_main_left_top_content_title">
              2023 Money and Career Predictions for the 12 Signs! Many New
              Beginnings for all Signs!
            </div>
            <div class="details_main_left_top_content_subtitle">
              <div class="details_main_left_top_content_subtitle_btn">
                Tarot
              </div>
              <div class="details_main_left_top_content_subtitle_time">
                2023-07-23 23:20
              </div>
            </div>
            <img
              class="details_main_left_top_content_img"
              src="../../../assets/img/resources/d_03.png"
              alt=""
            />
          </div>
        </div>
        <google-ad class="details_main_left_ad"></google-ad>
      </div>
      <div class="details_main_right">
        <google-ad class="details_main_right_ad"></google-ad>
        <div class="details_main_right_list">
          <div
            class="details_main_right_list_item"
            v-for="(item, index) in immedList"
            :key="index"
          >
            <span>{{ item.title }}</span>
            <img src="../../../assets/img/resources/d_02.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="details_footer">
      <div class="details_footer_title">Trending Articles</div>
      <div class="details_footer_list">
        <div
          class="details_footer_list_item"
          v-for="(item, index) in footList"
          :key="index"
        >
          <!-- type1为视频，2为文本 -->
          <div v-if="item.type == 1">
            <div class="details_footer_list_item_img">
              <img
                :src="item.imgUrl"
                alt=""
                class="details_footer_list_item_img_video"
              />
              <img
                src="../../../assets/img/resources/play_icon.png"
                alt=""
                class="details_footer_list_item_img_play"
              />
              <div class="details_footer_list_item_img_time">
                {{ item.time }}
              </div>
              <div class="details_footer_list_item_img_tarot">TAROT</div>
            </div>
            <div class="details_footer_list_item_vtitle">
              {{ item.title }}
            </div>
          </div>
          <div v-if="item.type == 2">
            <div class="details_footer_list_item_img">
              <img
                :src="item.imgUrl"
                alt=""
                class="details_footer_list_item_img_pic"
              />
              <div class="details_footer_list_item_img_tarot">TAROT</div>
            </div>
            <div class="details_footer_list_item_text">
              <div class="details_footer_list_item_text_title">
                {{ item.title }}
              </div>
              <div class="details_footer_list_item_text_subscribe">
                {{ item.subscribe }}
              </div>
              <div class="details_footer_list_item_text_date">
                {{ item.date }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <google-ad class="google_ad_footer"></google-ad>
    <transition name="fade">
      <InternalSite></InternalSite>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: 2,
      immedList: [
        { title: "What's in your Immed", id: 1 },
        { title: "What's in your Immed", id: 2 },
        { title: "What's in your Immed", id: 3 },
        { title: "What's in your Immed", id: 4 },
        { title: "What's in your Immed", id: 5 },
        { title: "What's in your Immed", id: 6 },
        { title: "What's in your Immed", id: 7 },
        { title: "What's in your Immed", id: 8 },
      ],
      footList: [
        {
          id: 7,
          type: 2,
          imgUrl: require('../../../assets/img/resources/p_12.png'),
          title:
            '2023 Money and Career Predictions for the 12 Signs! Many New Beginnings for all Sig··',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
        },
        {
          id: 8,
          type: 1,
          imgUrl: require('../../../assets/img/resources/p_13.png'),
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
          imgUrl: require('../../../assets/img/resources/p_14.png'),
          title:
            '2023 Money and Career Predictions for the 12 Signs! Many New Beginnings for all Sig··',
          subscribe:
            'We have so many opportunities for love in our lifetimes! You can consul',
          date: '07/23',
        },
      ],
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
$block: 456px;
$spacing: 16px;
.details {
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
    .google_ad_footer{
        display: none;
    }
  &_main {
    width: 1400px;
    margin: 0 auto;
    display: flex;
    margin-top: 48px;
    &_left {
      width: 1046px;

      &_top {
        background: rgba(1, 1, 2, 0.9);
        border-radius: 30px;
        &_menu {
          margin-left: 118px;
          padding-top: 24px;
          a {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            /* identical to box height, or 133% */
            color: rgba(255, 255, 255, 0.7);
          }
        }
        &_content {
          margin-top: 48px;
          padding: 0 118px;
          padding-bottom: 96px;
          &_title {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 48px;
            /* or 133% */

            color: #ffffff;
          }
          &_subtitle {
            display: flex;
            margin-top: 8px;
            align-items: center;
            &_btn {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 78px;
              height: 24px;
              background: #ffffff;
              border-radius: 42px;
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 18px;
              color: #000000;
            }
            &_time {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 18px;
              /* identical to box height, or 129% */
              color: rgba(255, 255, 255, 0.7);
              margin-left: 18px;
            }
          }
          &_img {
            margin-top: 48px;
          }
          &_text {
            margin-top: 48px;
            p {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 22px;
              /* or 138% */
              color: rgba(255, 255, 255, 0.7);
              margin-bottom: 20px;
              word-break: break-all;
            }
          }
        }
      }
      &_ad {
        width: 924px;
        height: 114px;
        background: #555761;
        margin: 0 auto;
        margin-top: 47px;
      }
    }
    &_right {
      width: 338px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &_ad {
        width: 300px;
        height: 600px;
        background: #555761;
      }
      &_list {
        margin-top: 48px;
        width: 100%;
        background: rgba(1, 1, 2, 0.9);
        border-radius: 30px;
        margin-left: 16px;

        &_item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 60px;
          margin-left: 32px;
          span {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            /* identical to box height, or 138% */
            color: rgba(255, 255, 255, 0.7);
          }
          img {
            width: 10px;
            height: 10px;
            margin-right: 16px;
          }
        }
      }
    }
  }
  &_footer {
    width: 1400px;
    margin: 0 auto;
    margin-top: 48px;
    &_title {
      font-family: 'Cinzel Decorative';
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 36px;
      /* identical to box height, or 138% */
      color: #ffffff;
      margin-bottom: 16px;
    }
    &_list {
      display: grid;
      grid-template-columns: repeat(3, 456px);
      grid-gap: 16px;
      margin-bottom: 130px;
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
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);

  .details {
    &_main {
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      &_left {
        width: 343 * $pr;
        &_top {
          &_menu {
            margin-left: 16 * $pr;
            font-size: 12 * $pr;
            padding-top: 24 * $pr;
            a {
              font-size: 12 * $pr;
            }
          }
          &_content {
            padding: 0 16 * $pr;
            &_title {
              font-size: 22 * $pr;
              word-break: break-all;
            }
            &_subtitle {
              margin-top: 16 * $pr;
              &_btn {
                width: 78 * $pr;
                height: 24 * $pr;
                border-radius: 42 * $pr;
                font-size: 14 * $pr;
                line-height: 18 * $pr;
              }
              &_time {
                font-size: 14 * $pr;
                line-height: 18 * $pr;
              }
            }
            &_img {
              width: 100%;
            }
            &_text {
              margin-top: 32 * $pr;
              p {
                font-size: 14 * $pr;
                line-height: 18 * $pr;
              }
            }
          }
        }
        &_ad {
          width: 343 * $pr;
          height: 299 * $pr;
        }
      }
      &_right {
        &_ad {
          display: none;
        }
        &_list {
          width: 343 * $pr;
          height: 492 * $pr;
          border-radius: 30 * $pr;
          &_item {
            height: 54 * $pr;
            span {
              font-size: 16 * $pr;
              line-height: 22 * $pr;
              margin-left: 32 * $pr;
            }
            img {
              width: 10 * $pr;
              height: 10 * $pr;
              margin-right: 21 * $pr;
            }
          }
        }
      }
    }
    &_footer {
      width: 100%;
      padding: 0 16 * $pr;
      &_title {
        text-align: center;
      }
      &_list {
        grid-gap: 24 * $pr 0;
        grid-template-columns: repeat(1, 343 * $pr);
        margin-bottom: 48 * $pr;
        &_item {
          width: 343 * $pr;
          object-fit: cover;
          &_img {
            width: 100%;
            &_pic,&_video {
              width: 100%;
            }
            &_play{
                width: 50 * $pr;
                height: 50 * $pr;
            }
            &_time{
                width: 40 * $pr;
                height: 20 * $pr;
                font-size: 12 * $pr;
                right: 10 * $pr;
            }
          }
          &_vtitle{
            background: rgba(255, 255, 255, 0.1);
            margin-top: 0;
            width: 343 * $pr;
            font-size: 22 * $pr;
            line-height: 30 * $pr;
          }
          &_text {
            background: rgba(255, 255, 255, 0.1);
            &_title {
              font-size: 22 * $pr;
              line-height: 30 * $pr;
              width: 343 * $pr;
              margin-top: 0;
            }
            &_subscribe,&_date {
              font-size: 16 * $pr;
              line-height: 22 * $pr;
              
            }
           
          }
        }
      }
    }
    .google_ad_footer{
        margin: 0 auto;
        display: block;
        width: 343 * $pr;
        height: 299 * $pr;
        background: #555761;
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