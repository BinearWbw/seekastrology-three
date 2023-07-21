<template>
  <div class="deserve">
    <div class="deserve_main">
      <div class="item">
        <div class="title">
          <p class="title_one">{{ currentSign()[0].name }}</p>
          &ensp;-&ensp;
          <p class="title_two">{{ ' ' + matchingSign()[0].name }}</p>
        </div>
        <div class="item_imgs">
          <div class="imgs">
            <img :src="currentSign()[0].imgUrl || '/'" alt="#" />
          </div>
          <i class="icons"></i>
          <div class="imgs">
            <img :src="matchingSign()[0].imgUrl" alt="#" />
          </div>
        </div>
        <div class="item_text" v-html="sub[1]"></div>
        <div class="button_i">
          <button class="button" @click="currentSignDetails(sub)">
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['ids', 'sub'],
  data() {
    return {
      tabList: [
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
    }
  },
  computed: {},
  mounted() {},
  methods: {
    currentSign() {
      return this.tabList.filter((i) => i.id == this.ids)
    },
    matchingSign() {
      return this.tabList.filter((i) => i.name.toLowerCase() == this.sub[0])
    },
    currentSignDetails(text) {
      this.$emit('click', text)
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.deserve {
  &_main {
    .item {
      width: 425px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.08);
      padding: 16px 24px;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        &_one {
          color: #fff;
          font-family: 'Rubik';
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px;
        }
        &_two {
          color: var(--9747-ff, #9747ff);
          font-family: 'Rubik';
          font-size: 22px;
          font-style: normal;
          font-weight: 500;
          line-height: 30px;
        }
      }
      &_imgs {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 8px;
        .imgs {
          width: 115px;
          height: 115px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .icons {
          display: inline-block;
          width: 72px;
          height: 60px;
          background: url('~/assets/img/home/pairing_two.svg') no-repeat center
            center;
          background-size: cover;
        }
      }
      &_text {
        color: rgba(255, 255, 255, 0.6);
        text-align: center;
        font-family: 'Rubik';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        text-align: center;
        margin-bottom: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .button_i {
        display: flex;
        justify-content: center;
        .button {
          width: 156px;
          height: 32px;
          padding: 8px 22px;
          border-radius: 42px;
          border: 1px solid rgba(255, 255, 255, 0.24);
          background: rgba(217, 217, 217, 0);
          color: rgba(255, 255, 255, 0.6);
          font-family: 'Rubik';
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          transition: background-color 0.3s, color 0.3s ease-in-out;
          &:hover {
            background-color: #fff;
            color: #000;
          }
        }
      }
    }
  }
}
@media (max-width: 1470px) {
  .deserve {
    &_main {
      .item {
        width: 100%;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.08);
        padding: 16px 24px;
        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          &_one {
            color: #fff;
            font-family: 'Rubik';
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 30px;
          }
          &_two {
            color: var(--9747-ff, #9747ff);
            font-family: 'Rubik';
            font-size: 22px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
          }
        }
        &_imgs {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 8px;
          .imgs {
            width: 115px;
            height: 115px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .icons {
            display: inline-block;
            width: 72px;
            height: 60px;
            background: url('~/assets/img/home/pairing_two.svg') no-repeat
              center center;
            background-size: cover;
          }
        }
        &_text {
          color: rgba(255, 255, 255, 0.6);
          text-align: center;
          font-family: 'Rubik';
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          text-align: center;
          margin-bottom: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .button_i {
          display: flex;
          justify-content: center;
          .button {
            width: 156px;
            height: 32px;
            padding: 8px 22px;
            border-radius: 42px;
            border: 1px solid rgba(255, 255, 255, 0.24);
            background: rgba(217, 217, 217, 0);
            color: rgba(255, 255, 255, 0.6);
            font-family: 'Rubik';
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px;
            transition: background-color 0.3s, color 0.3s ease-in-out;
            &:hover {
              background-color: #fff;
              color: #000;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1300px) {
  .deserve {
    &_main {
      .item {
        width: 100%;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.08);
        padding: 16px 24px;
        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          &_one {
            color: #fff;
            font-family: 'Rubik';
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 30px;
          }
          &_two {
            color: var(--9747-ff, #9747ff);
            font-family: 'Rubik';
            font-size: 22px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
          }
        }
        &_imgs {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 8px;
          .imgs {
            width: 115px;
            height: 115px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .icons {
            display: inline-block;
            width: 72px;
            height: 60px;
            background: url('~/assets/img/home/pairing_two.svg') no-repeat
              center center;
            background-size: cover;
          }
        }
        &_text {
          color: rgba(255, 255, 255, 0.6);
          text-align: center;
          font-family: 'Rubik';
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          text-align: center;
          margin-bottom: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .button_i {
          display: flex;
          justify-content: center;
          .button {
            width: 156px;
            height: 32px;
            padding: 8px 22px;
            border-radius: 42px;
            border: 1px solid rgba(255, 255, 255, 0.24);
            background: rgba(217, 217, 217, 0);
            color: rgba(255, 255, 255, 0.6);
            font-family: 'Rubik';
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px;
            transition: background-color 0.3s, color 0.3s ease-in-out;
            &:hover {
              background-color: #fff;
              color: #000;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .deserve {
    &_main {
      .item {
        width: 100%;
        border-radius: 12 * $pr;
        background: rgba(255, 255, 255, 0.08);
        padding: 16 * $pr 16 * $pr 24 * $pr;
        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          &_one {
            font-size: 16 * $pr;
            line-height: 22 * $pr;
          }
          &_two {
            font-size: 16 * $pr;
            line-height: 22 * $pr;
          }
        }
        &_imgs {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 0;
          .imgs {
            width: 115 * $pr;
            height: 115 * $pr;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .icons {
            width: 71 * $pr;
            height: 60 * $pr;
          }
        }
        &_text {
          font-size: 14 * $pr;
          line-height: 18 * $pr;
          text-align: center;
          margin-bottom: 8 * $pr;
        }
        .button_i {
          display: flex;
          justify-content: center;
          .button {
            width: auto;
            height: auto;
            padding: 8 * $pr 22 * $pr;
            border-radius: 42 * $pr;
            border: 1 * $pr solid rgba(255, 255, 255, 0.24);
            background: #fff;
            color: #000;
            font-family: 'Rubik';
            font-size: 14 * $pr;
            font-style: normal;
            font-weight: 400;
            line-height: 18 * $pr;
            transition: background-color 0.3s, color 0.3s ease-in-out;
            &:hover {
              background-color: #fff;
              color: #000;
            }
          }
        }
      }
    }
  }
}
</style>
