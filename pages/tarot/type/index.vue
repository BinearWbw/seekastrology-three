<template>
  <div class="tarot-container">
    <div class="title">Choose 1 Cards From The Deck Below:</div>
    <div class="tarot-section">
      <div class="ad-box"></div>
      <div class="tarot-box"></div>
      <div class="ad-box"></div>
    </div>
    <div class="introduce-box">
      <div class="intro">
        <div class="intro-title">About This <br />Free Tarot Reading</div>
        <div class="intro-content">
          Based on the cassicCelic Cross spread, this Fre Tfarot Reading s
          desiored to help you move through whatevr isues youie faoing with
          greaer darity and confidence.from personalmatters to questions about
          love,career,finances, or a major decision you need to make,this
          versatile spread has advice for any area of your life. When you need
          more pidance than just one card can provide, a 3card Tarotsprcad is
          jut ight In ths freerading youll et a card tht represent your felings
          and mindset n tismoment,anothr thatrepresents your curnt situation,and
          one tht epreents the chalengs you mayexperienc.With this
          newknowledge,youllhaveagrater understanding ofyourcircumstances and
          influences, as well as a better idea of the tools and solutions
          currently available to you. Don 't spend anotherday stressing about
          your situation! Usethe personalired insight in his free online
          Tarotreading to get the answers you need NOW!
        </div>
      </div>
      <div class="ad-box_row mt-48"></div>
      <!-- <div class="divination">
        <div class="divination-title">Prepare for Divination</div>
        <div class="divination-wrapper">
          <div class="divination-item">
            <div class="divination-text">Relaxation:</div>
            <div class="divination-content">
              Tiake adeeptbreath,relaxyour body and mind, help cear your mind
              ofditracions and emptyousel, and quit our mind completeky fyou are
              in anoisy emvironment,tryto thangetoa quieter environment or
              change to a comfortable position.
            </div>
          </div>
          <div class="divination-item">
            <div class="divination-text">Relaxation:</div>
            <div class="divination-content">
              Tiake adeeptbreath,relaxyour body and mind, help cear your mind
              ofditracions and emptyousel, and quit our mind completeky fyou are
              in anoisy emvironment,tryto thangetoa quieter environment or
              change to a comfortable position.
            </div>
          </div>
          <div class="divination-item">
            <div class="divination-text">Relaxation:</div>
            <div class="divination-content">
              Tiake adeeptbreath,relaxyour body and mind, help cear your mind
              ofditracions and emptyousel, and quit our mind completeky fyou are
              in anoisy emvironment,tryto thangetoa quieter environment or
              change to a comfortable position.
            </div>
          </div>
          <div class="divination-item">
            <div class="divination-text">Relaxation:</div>
            <div class="divination-content">
              Tiake adeeptbreath,relaxyour body and mind, help cear your mind
              ofditracions and emptyousel, and quit our mind completeky fyou are
              in anoisy emvironment,tryto thangetoa quieter environment or
              change to a comfortable position.
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <more-tarot class="mt-48"></more-tarot>
    <div class="ad-box_row mt-32"></div>
  </div>
</template>

<script>
import MoreTarot from '../../../components/tarot/MoreTarot.vue'
export default {
  name: 'type',
  components: {
    MoreTarot,
  },
  data() {
    return {
      more: [
        {
          img: 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
          title: 'LOVE Tarot Reading',
          text: 'We have so many opportunities for love in our lifetimes! You can consul',
        },
        {
          img: 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
          title: 'LOVE Tarot Reading',
          text: 'We have so many opportunities for love in our lifetimes! You can consul',
        },
        {
          img: 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
          title: 'LOVE Tarot Reading',
          text: 'We have so many opportunities for love in our lifetimes! You can consul',
        },
      ],
      cardsData: [
        {
          img: 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
          text: 'The Fool',
        },
        {
          img: 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
          text: 'The Fool',
        },
        {
          img: 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
          text: 'The Fool',
        },
        {
          img: 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
          text: 'The Fool',
        },
        {
          img: 'https://img1.baidu.com/it/u=1960110688,1786190632&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
          text: 'The Fool',
        },
      ],
    }
  },
  asyncData({ query }) {
    console.log('query', query)
  },
}
</script>

<style lang="scss" scoped>
.tarot-container {
  color: #fff;
}
.title {
  font-family: 'Cinzel Decorative';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 64px;
  text-align: center;
}
.tarot-section {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  .ad-box {
    width: 160px;
    height: 600px;
    background-color: #555761;
  }
  .tarot-box {
    margin-left: 32px;
    margin-right: 32px;
  }
}
.ad-box_row {
  width: 924px;
  height: 114px;
  margin: 0 auto;
  background-color: #555761;
}
.button {
  margin-top: 18px;
  width: 124px;
  height: 32px;
  border: 1px solid #45454d;
  border-radius: 42px;
  font-family: 'Rubik';
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 18px;
  -webkit-transition: background-color 0.3s, -webkit-color 0.3s;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    color: #000;
    background-color: #fff;
  }
}
.divination {
  margin-top: 80px;
}
.introduce-box {
  width: 1400px;
  margin: 68px auto 0;
  .intro {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
  }
  .intro-title {
    font-family: 'Cinzel Decorative';
    font-weight: 700;
    font-size: 46px;
    line-height: 64px;
  }
  .divination-title {
    font-family: 'Cinzel Decorative';
    font-style: normal;
    font-weight: 700;
    font-size: 46px;
    line-height: 64px;
    text-align: center;
  }
  .divination-wrapper {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 115px;
    grid-row-gap: 60px;
    margin-top: 60px;
  }
  .divination-content {
    width: 80%;
  }
}
.mt-48 {
  margin-top: 48px;
}
.mt-32 {
  margin-top: 32px;
}
.mt-200 {
  margin-top: 200px;
}
</style>
