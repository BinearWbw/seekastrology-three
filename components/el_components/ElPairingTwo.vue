<template>
  <div class="pairing_two">
    <div class="pairing_two_main">
      <p class="title">ZODIAC COMPATIBILITY</p>
      <div class="select_main">
        <p>Choose Two Zodiac Signs</p>
        <div class="select_main_item">
          <el-selected-two
            :options="selectOptions"
            :title="'First Sign'"
            @change="handleDropdownChangeLeft"
          ></el-selected-two>
          <i class="icons"></i>
          <el-selected-two
            :options="selectOptions"
            :title="'Second Sign'"
            @change="handleDropdownChangeRight"
          >
          </el-selected-two>
        </div>
        <button class="button" @click="getStartPairingEl">
          Check Compatibility
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectOptions: [
        {
          name: 'Aries',
          imgUrl: require('~/assets/img/home/choice/Aries.png'),
          id: 1,
        },
        {
          name: 'Taurus',
          imgUrl: require('~/assets/img/home/choice/Taurus.png'),
          id: 2,
        },
        {
          name: 'Gemini',
          imgUrl: require('~/assets/img/home/choice/Gemini.png'),
          id: 3,
        },
        {
          name: 'Cancer',
          imgUrl: require('~/assets/img/home/choice/Cancer.png'),
          id: 4,
        },
        {
          name: 'Leo',
          imgUrl: require('~/assets/img/home/choice/Leo.png'),
          id: 5,
        },
        {
          name: 'Virgo',
          imgUrl: require('~/assets/img/home/choice/Virgo.png'),
          id: 6,
        },
        {
          name: 'Libra',
          imgUrl: require('~/assets/img/home/choice/Libra.png'),
          id: 7,
        },
        {
          name: 'Scorpio',
          imgUrl: require('~/assets/img/home/choice/Scorpio.png'),
          id: 8,
        },
        {
          name: 'Sagittarius',
          imgUrl: require('~/assets/img/home/choice/Sagittarius.png'),
          id: 9,
        },
        {
          name: 'Capricorn',
          imgUrl: require('~/assets/img/home/choice/Capricorn.png'),
          id: 10,
        },
        {
          name: 'Aquarius',
          imgUrl: require('~/assets/img/home/choice/Aquarius.png'),
          id: 11,
        },
        {
          name: 'Pisces',
          imgUrl: require('~/assets/img/home/choice/Pisces.png'),
          id: 12,
        },
      ],
      genderList: {
        males: '',
        malesId: 0,
        females: '',
        femalesId: 0,
      },
    }
  },
  methods: {
    handleDropdownChangeLeft(option) {
      this.genderList.males = option.name.toLowerCase()
      this.genderList.malesId = option.id
    },
    handleDropdownChangeRight(option) {
      this.genderList.females = option.name.toLowerCase()
      this.genderList.femalesId = option.id
    },
    getStartPairingEl() {
      sessionStorage.setItem('genderList', JSON.stringify(this.genderList))
      if (sessionStorage.getItem('genderList'))
        window.location.href = `/astrology/`
    },
  },
}
</script>

<style lang="scss" scoped>
.pairing_two {
  &_main {
    width: 425px;
    .title {
      color: #fff;
      font-family: 'Cinzel Decorative';
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      line-height: 36px;
      text-align: center;
    }
    .select_main {
      height: 229px;
      border-radius: 12px;
      margin-top: 16px;
      background: rgba(255, 255, 255, 0.08);
      padding: 16px 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      > p {
        color: rgba(255, 255, 255, 0.6);
        font-family: 'Rubik';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        text-align: center;
      }
      &_item {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .icons {
          display: inline-block;
          width: 72px;
          height: 60px;
          background: url('~/assets/img/home/pairing_two.svg') no-repeat center
            center;
          background-size: cover;
        }
      }
      .button {
        width: 220px;
        color: #000;
        font-family: 'Rubik';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        padding: 8px 0;
        background-color: #fff;
        border-radius: 42px;
      }
    }
  }
}
</style>
