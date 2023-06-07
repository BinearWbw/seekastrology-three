<template>
  <div class="choice">
    <div class="choice__title">
      <h3>Choose Your Zodiac Sign</h3>
      <p>Read Your Daily Horoscope Right Now</p>
    </div>
    <ul class="choice__main">
      <li v-for="item_i in item" :key="item_i.id">
        <a class="choice__main__a" href="#">
          <div class="img__list">
            <nuxt-img
              :src="item_i.icon || '/'"
              fit="cover"
              width="218"
              height="154"
              :alt="item_i.name"
            ></nuxt-img>
          </div>
          <p class="title">{{ item_i.name }}</p>
          <p class="time">{{ item_i.dates }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'YourChoice',
  props: ['item'],
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.choice {
  &__title {
    padding-bottom: 78px;
    h3 {
      font-family: 'Cinzel Decorative';
      font-weight: 700;
      font-size: 46px;
      line-height: 64px;
      color: #fff;
      text-align: center;
      margin-bottom: 16px;
    }
    p {
      font-family: 'Rubik';
      font-size: 22px;
      line-height: 30px;
      text-align: center;
      color: rgba(255, 255, 255, 0.7);
      text-align: center;
    }
  }
  &__main {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
    li {
      box-sizing: border-box;
      border: 1px solid #090909;
      border-radius: 6px;
      transition: border-color 0.3s;
      .choice__main__a {
        box-sizing: border-box;
        height: 100%;
        display: block;
        padding-bottom: 40px;
        .img__list {
          width: 218px;
          height: 154px;
          border-radius: 6px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s;
          }
        }
        .title {
          font-family: 'Rubik';
          font-size: 22px;
          line-height: 30px;
          color: #fff;
          text-align: center;
        }
        .time {
          font-family: 'Rubik';
          font-size: 14px;
          line-height: 18px;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
        }
      }
      &:hover {
        border-color: rgba(255, 255, 255, 0.6);
        .img__list {
          img {
            transform: scale(1.2);
          }
        }
      }
    }
  }
}

@media (max-width: 1435px) {
  .choice {
    &__title {
      padding-bottom: 78px;
      h3 {
        font-family: 'Cinzel Decorative';
        font-weight: 700;
        font-size: 46px;
        line-height: 64px;
        color: #fff;
        text-align: center;
        margin-bottom: 16px;
      }
      p {
        font-family: 'Rubik';
        font-size: 22px;
        line-height: 30px;
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
        text-align: center;
      }
    }
    &__main {
      display: grid;
      grid-template-columns: repeat(4, auto);
      justify-content: center;
      gap: 16px;
      li {
        width: 218px;
        box-sizing: border-box;
        border: 1px solid #090909;
        border-radius: 6px;
        transition: border-color 0.3s;
        .choice__main__a {
          box-sizing: border-box;
          height: 100%;
          display: block;
          padding-bottom: 40px;
          .img__list {
            width: 218px;
            height: 154px;
            border-radius: 6px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.3s;
            }
          }
          .title {
            font-family: 'Rubik';
            font-size: 22px;
            line-height: 30px;
            color: #fff;
            text-align: center;
          }
          .time {
            font-family: 'Rubik';
            font-size: 14px;
            line-height: 18px;
            color: rgba(255, 255, 255, 0.7);
            text-align: center;
          }
        }
        &:hover {
          border-color: rgba(255, 255, 255, 0.6);
          .img__list {
            img {
              transform: scale(1.2);
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1200px) {
}

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .choice {
    &__title {
      padding-bottom: 46 * $pr;
      h3 {
        font-size: 36 * $pr;
        line-height: 48 * $pr;
        margin-bottom: 8 * $pr;
      }
      p {
        font-size: 22 * $pr;
        line-height: 30 * $pr;
      }
    }
    &__main {
      grid-template-columns: repeat(3, 1fr);
      gap: 11 * $pr;
      li {
        height: 147 * $pr;
        margin-bottom: 36 * $pr;
        border: 0;
        .choice__main__a {
          height: 100%;
          padding-bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          .img__list {
            width: 100%;
            height: 100 * $pr;
            margin-bottom: auto;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain cover;
            }
          }
          .title {
            font-size: 16 * $pr;
            line-height: 22 * $pr;
          }
          .time {
            font-size: 12 * $pr;
            line-height: 16 * $pr;
          }
        }
        &:hover {
          .img__list {
            transform: scale(0);
          }
        }
      }
    }
  }
}
</style>
