<template>
  <div class="choice">
    <div class="choice__title">
      <h3>Choose Your Zodiac Sign</h3>
      <p>Read Your Daily Horoscope Right Now</p>
    </div>
    <ul class="choice__main">
      <li v-for="item in constellation" :key="item.title">
        <a class="choice__main__a" href="#">
          <img class="img__list" :src="item.imgList" :alt="item.title" />
          <p class="title">{{ item.title }}</p>
          <p class="time">{{ item.time }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'YourChoice',
  data() {
    return {
      constellation: [
        {
          imgList: require('~/assets/img/home/choice/Aries.png'),
          title: 'Aries',
          time: 'Mar 21 - Apr 20',
        },
        {
          imgList: require('~/assets/img/home/choice/Taurus.png'),
          title: 'Taurus',
          time: 'Mar 21 - Apr 20',
        },
        {
          imgList: require('~/assets/img/home/choice/Gemini.png'),
          title: 'Gemini',
          time: 'Mar 21 - Apr 20',
        },
        {
          imgList: require('~/assets/img/home/choice/Cancer.png'),
          title: 'Cancer',
          time: 'Mar 21 - Apr 20',
        },
        {
          imgList: require('~/assets/img/home/choice/Leo.png'),
          title: 'Leo',
          time: 'Mar 21 - Apr 20',
        },
        {
          imgList: require('~/assets/img/home/choice/Virgo.png'),
          title: 'Virgo',
          time: 'Mar 21 - Apr 20',
        },
        {
          imgList: require('~/assets/img/home/choice/Libra.png'),
          title: 'Libra',
          time: 'Mar 21 - Apr 20',
        },
        {
          imgList: require('~/assets/img/home/choice/Scorpio.png'),
          title: 'Scorpic',
          time: 'Mar 21 - Apr 20',
        },
        {
          imgList: require('~/assets/img/home/choice/Sagittarius.png'),
          title: 'Sagittarius',
          time: 'Mar 21 - Apr 20',
        },
        {
          imgList: require('~/assets/img/home/choice/Capricorn.png'),
          title: 'Capricorn',
          time: 'Mar 21 - Apr 20',
        },
        {
          imgList: require('~/assets/img/home/choice/Aquarius.png'),
          title: 'Aquarius',
          time: 'Mar 21 - Apr 20',
        },
        {
          imgList: require('~/assets/img/home/choice/Pisces.png'),
          title: 'Pisces',
          time: 'Mar 21 - Apr 20',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
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
          object-fit: cover;
          transition: transform 0.3s;
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
        .img__list{
            transform: scale(1.2);
        }
      }
    }
  }
}
</style>
