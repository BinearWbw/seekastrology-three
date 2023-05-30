<template>
  <div class="pop_main">
    <h3>Popular Articles</h3>
    <div class="pop_news">
      <div class="news_left">
        <div class="left_img">
          <img src="../../assets/img/home/pop_left.png" alt="#" />
        </div>
        <div class="news_left_text">
          <div class="text_cont">
            <p class="cont_title">Tarot.com's Tarot Guide</p>
            <p class="cont_more">
              Tarot is an ancient divination that began in 14th century Europe.
              Traditional Tarot decks consist of 78 cards depicting symbolic
              archetypes that allow us to tap into...
            </p>
            <a href="#">Read More</a>
          </div>
          <div class="text_time">07/12</div>
        </div>
      </div>
      <ul class="news_right">
        <li v-for="(item, index) in news" :key="index">
          <a href="#">
            <div class="news_right_img">
              <img src="~/assets/img/home/pop_right.png" alt="#" />
            </div>
            <div class="news_right_text">
              <p>{{ item.title }}</p>
              <p>{{ item.text }}</p>
            </div>
            <div class="news_right_time">07/12</div>
          </a>
        </li>
      </ul>
    </div>
    <button class="button">Read More</button>
    <img class="bg_main" src="~/assets/img/home/pop_bg.png" alt="#" />
  </div>
</template>

<script>
export default {
  name: 'PopArticles',
  data() {
    return {
      news: [
        {
          title: 'Tarot.coms Tarot Guide',
          text: 'Tarot is an ancient divination that lisin began in 14th century Europe. Traditional Tarot decks consist of 78 cards ...',
        },
        {
          title: 'Tarot.coms Tarot Guide',
          text: 'Tarot is an ancient divination that began in 14th century Europe. Traditional Tarot decks consist of 78 cards ...',
        },
        {
          title: 'Tarot.coms Tarot Guide',
          text: 'Tarot is an ancient divination that began in 14th century Europe. Traditional Tarot decks consist of 78 cards ...',
        },
        {
          title: 'Tarot.coms Tarot Guide',
          text: 'Tarot is an ancient divination that began in 14th century Europe. Traditional Tarot decks consist of 78 cards ...',
        },
        // {
        //   title: 'Tarot.coms Tarot Guide',
        //   text: 'Tarot is an ancient divination that began in 14th century Europe. Traditional Tarot decks consist of 78 cards ...',
        // },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.pop_main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .bg_main {
    position: absolute;
    top: -80px;
    left: -157px;
    width: 438px;
    height: 438px;
    z-index: -1;
  }
  h3 {
    font-family: 'Cinzel Decorative';
    font-weight: 700;
    font-size: 46px;
    line-height: 64px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }
  .pop_news {
    flex: 1;
    width: 100%;
    padding: 48px 0 36px;
    display: flex;
    .news_left {
      width: 691px;
      height: 100%;
      margin-right: 32px;
      cursor: pointer;
      .left_img {
        width: 100%;
        min-height: 320px;
        margin-bottom: 16px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.5s;
        }
      }
      &_text {
        display: flex;
        align-items: center;
        .text_cont {
          flex: 1;
          font-family: 'Rubik';
          padding-right: 50px;
          .cont_title {
            font-size: 22px;
            line-height: 30px;
            color: #ffffff;
          }
          .cont_more {
            font-size: 14px;
            line-height: 18px;
            color: rgba(255, 255, 255, 0.7);
            margin: 8px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          a {
            font-family: 'Rubik';
            font-size: 14px;
            line-height: 18px;
            color: #9747ff;
          }
        }
        .text_time {
          width: 60px;
          font-family: 'Rubik';
          font-size: 22px;
          line-height: 30px;
          color: #ffffff;
        }
      }
      &:hover {
        .left_img {
          img {
            filter: grayscale(0);
          }
        }
      }
    }
    .news_right {
      flex: 1;
      width: 100%;
      & > :last-child {
        margin-bottom: 0;
      }
      li {
        width: 100%;
        margin-bottom: 16px;
        transition: background-color 0.3s;
        a {
          width: 100%;
          height: 96px;
          display: flex;
          justify-content: space-between;
          .news_right_img {
            width: 118px;
            height: 100%;
            margin-right: 16px;
            box-sizing: border-box;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              filter: grayscale(100%);
              transition: filter 0.3s;
            }
          }

          .news_right_text {
            width: 424px;
            font-family: 'Rubik';
            margin: 8px 0;
            & > :nth-child(1) {
              font-size: 22px;
              line-height: 30px;
              color: #ffffff;
            }
            & > :nth-child(2) {
              font-size: 16px;
              line-height: 22px;
              color: rgba(255, 255, 255, 0.7);
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }

          .news_right_time {
            margin-left: auto;
            font-family: 'Rubik';
            font-size: 16px;
            line-height: 22px;
            color: #ffffff;
            padding: 6px 10px 0 0;
          }
        }
        &:hover {
          background-color: rgba(255, 255, 255, 0.08);
          .news_right_img {
            img {
              filter: grayscale(0);
            }
          }
        }
      }
    }
  }
  .button {
    width: 220px;
    height: 44px;
    border: 1px solid #45454d;
    border-radius: 42px;
    font-family: 'Rubik';
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    line-height: 22px;
    -webkit-transition: background-color 0.3s, -webkit-color 0.3s;
    transition: background-color 0.3s, color 0.3s;
    &:hover {
      color: #000;
      background-color: #fff;
    }
  }
}

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);

  .pop_main {
    height: 100%;
    .bg_main {
      position: absolute;
      top: 0;
      left: -50 * $pr;
      width: 290 * $pr;
      height: 290 * $pr;
      z-index: -1;
    }
    h3 {
      font-size: 36 * $pr;
      line-height: 48 * $pr;
    }
    .pop_news {
      flex: 1;
      width: 100%;
      padding: 16 * $pr 0 0;
      display: block;
      .news_left {
        width: 100%;
        height: 100%;
        margin-right: 0;
        .left_img {
          width: 100%;
          min-height: 159 * $pr;
          margin-bottom: 16 * $pr;
          img {
            width: 100%;
            height: 100%;
          }
        }
        &_text {
          position: relative;
          .text_cont {
            flex: 1;
            padding-right: 0;
            .cont_title {
              font-size: 22 * $pr;
              line-height: 30 * $pr;
              color: #ffffff;
            }
            .cont_more {
              font-size: 14 * $pr;
              line-height: 18 * $pr;
              margin: 8 * $pr 0;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 4;
              -webkit-box-orient: vertical;
            }
            a {
              font-size: 14 * $pr;
              line-height: 18 * $pr;
            }
          }
          .text_time {
            position: absolute;
            top: 10 * $pr;
            right: 0;
            width: 40 * $pr;
            font-size: 14 * $pr;
            line-height: 18 * $pr;
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
      .news_right {
        flex: 1;
        width: 100%;
        margin: 32 * $pr 0;
        & > :last-child {
          margin-bottom: 0;
        }
        li {
          width: 100%;
          margin-bottom: 24 * $pr;
          transition: background-color 0.3s;
          a {
            width: 100%;
            height: 62 * $pr;
            display: flex;
            justify-content: space-between;
            .news_right_img {
              width: 107 * $pr;
              height: 100%;
              margin-right: 11 * $pr;
              box-sizing: border-box;
              img {
                width: 100%;
                height: 100%;
              }
            }

            .news_right_text {
              width: auto;
              flex: 1;
              margin: 0;
              & > :nth-child(1) {
                font-size: 14 * $pr;
                line-height: 18 * $pr;
              }
              & > :nth-child(2) {
                font-size: 12 * $pr;
                line-height: 16 * $pr;
                margin-top: 8 * $pr;
              }
            }

            .news_right_time {
              position: absolute;
              margin-left: 0;
              right: 0;
              font-family: 'Rubik';
              font-size: 12 * $pr;
              line-height: 16 * $pr;
              color: #ffffff;
              padding: 0;
            }
          }
          &:hover {
            background-color: rgba(255, 255, 255, 0.08);
            .news_right_img {
              img {
                filter: grayscale(0);
              }
            }
          }
        }
      }
    }
    .button {
      width: 295 * $pr;
      height: 44 * $pr;
      border-radius: 42 * $pr;
      font-size: 16 * $pr;
      line-height: 22 * $pr;
    }
  }
}
</style>
