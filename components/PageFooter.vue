<template>
  <footer class="footer">
    <div class="footer__top">
      <p class="footer__top__us">ABOUT US</p>
      <div class="footer__top__main">
        Play the Funny Games Instantly on Funni.online. Welcome to Funni.online!
        We've got you thousands upon thousands of amazing free online games to
        play now. You can access all of our games via your browser window, no
        downloads required! We offer many types of games. Including but not
        limited to puzzle games, action games, sports games, racing games,
        shooting games, arcade games, makeup games, matching games, cooking
        games, etc. Free online games for Mobile, Desktop and Tablet. If you
        feel happy when playing our games, remember to bookmark Funni.online and
        share it to your friends. Is there a game that you love, but you can't
        find on Funni.online? Suggest a game to us, and we'll see what we can do
        to get it. You can also contact us for any general hsuggestions or
        improvements. Our . So, what are you waiting for? In Funni have fun!
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom__link">
        <a :href="item.path" v-for="(item, index) in menu" :key="index">
          {{ item.name }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
  data() {
    return {
      menu: [
        {
          name: 'Privacy Policy',
          path: '/',
        },
        {
          name: ' Terms of service',
          path: '/',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
$block: 140px;
$spacing: 16px;
.footer {
  padding-top: 60px;
  margin-top: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &__top {
    width: 100%;
    max-width: 1700px;
    &__us {
      font-size: 26px;
      font-family: Heebo-Bold;
      line-height: 1;
    }
    &__main {
      margin-top: 30px;
      border-radius: 16px;
      padding: 48px;
      font-size: 20px;
      line-height: 34px;
      background-color: #3c2c6d;
      font-family: Heebo-Regular;
      color: #ae96ff;
    }
  }
  &__bottom {
    margin-top: 50px;
    padding: 25px 0;
    width: 100%;
    background-color: #23194b;
    &__link {
      max-width: 1700px;
      width: 100%;
      display: flex;
      align-items: center;
      margin: 0 auto;
      a {
        font-size: 16px;
        margin-right: 80px;
        font-family: Heebo-Regular;
        line-height: 1;
        color: #ae96ff;
        border-bottom: 1px solid #ae96ff;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
@media (max-width: (11 * $block + 10 * $spacing+60px)) {
  .footer {
    &__top {
      max-width: 10 * $block + 9 * $spacing;
    }
    &__bottom {
      &__link {
        max-width: 10 * $block + 9 * $spacing;
      }
    }
  }
}
@media (max-width: (10 * $block + 9 * $spacing+60px)) {
  .footer {
    &__top {
      max-width: 9 * $block + 8 * $spacing;
    }
    &__bottom {
      &__link {
        max-width: 9 * $block + 8 * $spacing;
      }
    }
  }
}
@media (max-width: (9 * $block + 8 * $spacing+60px)) {
  .footer {
    &__top {
      max-width: 8 * $block + 7 * $spacing;
    }
    &__bottom {
      &__link {
        max-width: 8 * $block + 7 * $spacing;
      }
    }
  }
}
@media (max-width: (8 * $block + 7 * $spacing+60px)) {
  .footer {
    &__top {
      max-width: 7 * $block + 6 * $spacing;
    }
    &__bottom {
      &__link {
        max-width: 7 * $block + 6 * $spacing;
      }
    }
  }
}
@media (max-width: (7 * $block + 6 * $spacing+60px)) {
  .footer {
    &__top {
      max-width: 6 * $block + 5 * $spacing;
    }
    &__bottom {
      &__link {
        max-width: 6 * $block + 5 * $spacing;
      }
    }
  }
}
@media (max-width: (6 * $block + 5 * $spacing+60px)) {
  .footer {
    &__top {
      max-width: 5 * $block + 4 * $spacing;
    }
    &__bottom {
      &__link {
        max-width: 5 * $block + 4 * $spacing;
      }
    }
  }
}
@media (max-width: 828px) {
  $pr: math.div(1vw, 8.28);
  .footer {
    padding-top: 60 * $pr;
    &__top {
      max-width: 752 * $pr;
      &__us {
        font-size: 32 * $pr;
      }
      &__main {
        margin-top: 30 * $pr;
        border-radius: 16 * $pr;
        padding: 24 * $pr;
        font-size: 24 * $pr;
        line-height: 36 * $pr;
      }
    }
    &__bottom {
      margin-top: 50 * $pr;
      padding: 25 * $pr 0;
      &__link {
        max-width: 752 * $pr;
        a {
          font-size: 24 * $pr;
          margin-right: 80 * $pr;
        }
      }
    }
  }
}
</style>
