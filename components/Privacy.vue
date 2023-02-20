<template>
  <transition name="fade">
    <div class="privacy">
      <div class="item line">
        <p class="item__title">We Care About Your Privacy</p>
        <p class="item__text">
          We and our partners store and/or access information on a device, such
          as unique IDs in cookies to process personal data. You may accept or
          manage your choices by clicking below, including your right to object
          where legitimate interest is used, or at any time in the privacy
          policy page. These choices will be signaled to our partners and will
          not affect browsing data.
        </p>
      </div>
      <div class="item">
        <p class="item__title">We and our partners process data to provide:</p>
        <p class="item__text">
          Use precise geolocation data. Actively scan device characteristics for
          identification. Store and/or access information on a device.
          Personalised ads and content, ad and content measurement, audience
          insights and product development.List of Partners (vendors).
        </p>
      </div>
      <div class="right">
        <button class="common-btn btn accept">I Accept</button>
        <button class="common-btn btn show">Show Purposes</button>
      </div>
      <div class="privacy__main">
        <div class="item line">
          <p class="item__title">We Care About Your Privacy</p>
          <p class="item__text">
            We and our partners store and/or access information on a device,
            such as unique IDs in cookies to process personal data. You may
            accept or manage your choices by clicking below, including your
            right to object where legitimate interest is used, or at any time in
            the privacy policy page. These choices will be signaled to our
            partners and will not affect browsing data.
          </p>
        </div>
        <div class="item">
          <p class="item__title">
            We and our partners process data to provide:
          </p>
          <p class="item__text">
            Use precise geolocation data. Actively scan device characteristics
            for identification. Store and/or access information on a device.
            Personalised ads and content, ad and content measurement, audience
            insights and product development.List of Partners (vendors).
          </p>
        </div>
        <div class="right">
          <button class="common-btn btn accept" @click="accept">
            I Accept
          </button>
          <button class="common-btn btn show" @click="show">
            Show Purposes
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Privacy',
  data() {
    return {}
  },
  methods: {
    accept() {
      let data = {
        accept: 0,
      }
      localStorage.setItem('cookiesPrivacy', JSON.stringify(data))
      this.$emit('close')
    },
    show() {
      this.$emit('show')
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.privacy {
  width: 100%;
  padding: 40px;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  -webkit-align-items: flex-start;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  .item {
    visibility: hidden;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-width: 0;
    &__title {
      font-weight: bold;
      font-size: 20px;
      line-height: 34px;
    }
    &__text {
      margin-top: 12px;
      font-size: 14px;
      line-height: 18px;
      color: #aaabbd;
    }
    &.line {
      position: relative;
      padding-right: 50px;
      &::after {
        content: '';
        position: absolute;
        top: 32px;
        right: 25px;
        width: 1px;
        height: calc(100% - 32px);
        background-color: #aaabbd;
      }
    }
  }
  .right {
    visibility: hidden;
    margin-left: 50px;
    margin-top: 24px;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    .btn {
      width: 160px;
      height: 60px;
      border-radius: 12px;
      font-size: 16px;
      font-weight: bold;
      color: #aaabbd;
      &.accept {
        color: #fff;
        background: #6c5dd3;
        -webkit-box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        margin-right: 10px;
        -webkit-transition: background 0.3s;
        transition: background 0.3s;
        &:hover {
          background: #7a78ff;
        }
      }
      &.show {
        background: #1f2128;
        -webkit-box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        -webkit-transition: color 0.3s;
        transition: color 0.3s;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  &__main {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 8;
    width: 100%;
    padding: 40px;
    background: #111216;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-align-items: flex-start;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    .item {
      visibility: visible;
    }
    .right {
      visibility: visible;
    }
  }
}
@media (max-width: 1400px) {
  .privacy {
    .right {
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      .btn {
        &.accept {
          margin-right: 0;
          margin-bottom: 10px;
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .privacy {
    padding: 27px 22px 55px;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    &__main {
      padding: 27px 22px 55px;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }
    .item {
      width: 100%;
      &__title {
        font-size: 16px;
      }
      &__text {
        margin-top: 10px;
        font-size: 12px;
        line-height: 16px;
      }
      &.line {
        padding-right: 0;
        margin-bottom: 24px;
        &::after {
          display: none;
        }
      }
    }
    .right {
      width: 100%;
      margin-top: 40px;
      margin-left: 0;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      .btn {
        &.accept {
          margin-right: 10px;
          margin-bottom: 0;
        }
      }
    }
  }
}
@media (max-width: 500px) {
  $pr: math.div(1vw, 3.75);
  .privacy {
    padding: 27 * $pr 22 * $pr 55 * $pr;
    &__main {
      padding: 27 * $pr 22 * $pr 55 * $pr;
    }
    .item {
      &__title {
        font-size: 16 * $pr;
        line-height: 34 * $pr;
      }
      &__text {
        margin-top: 10 * $pr;
        font-size: 10 * $pr;
        line-height: 14 * $pr;
      }
      &.line {
        margin-bottom: 24 * $pr;
      }
    }
    .right {
      margin-top: 40 * $pr;
      .btn {
        width: 160 * $pr;
        height: 60 * $pr;
        border-radius: 12 * $pr;
        font-size: 16 * $pr;
        &.accept {
          margin-right: 11 * $pr;
          -webkit-box-shadow: 0 4 * $pr 20 * $pr rgba(0, 0, 0, 0.25);
          box-shadow: 0 4 * $pr 20 * $pr rgba(0, 0, 0, 0.25);
        }
        &.show {
          -webkit-box-shadow: 0 4 * $pr 20 * $pr rgba(0, 0, 0, 0.25);
          box-shadow: 0 4 * $pr 20 * $pr rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
}
</style>
