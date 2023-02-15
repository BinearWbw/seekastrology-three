<template>
  <transition name="fade">
    <div class="dialog" v-if="visible">
      <div class="dialog__mask"></div>
      <transition name="zoom" @leave="leave">
        <div class="dialog__main" v-if="visibleMain">
          <p class="title">About Your Privacy</p>
          <p class="text">
            We process your data to deliver content or advertisements and
            measure the delivery of such content or advertisements to extract
            insights about our website. We share this information with our
            partners on the basis of consent and legitimate interest. You may
            exercise your right to consent or object to a legitimate interest,
            based on a specific purpose below or at a partner level in the link
            under each purpose. These choices will be signaled to our vendors
            participating in the Transparency and Consent Framework.
            <a :href="`${getIntersperseUrl}/cookies.html`" target="_blank"
              >Additional information</a
            >
          </p>
          <div class="btns">
            <button class="common-btn btn" @click="accept('all')">
              Accept All Cookies
            </button>
            <button class="common-btn btn" @click="accept('only')">
              Accept only essential cookies
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DialogPrivacy',
  props: ['visible'],
  computed: {
    ...mapGetters(['getIntersperseUrl']),
  },
  data() {
    return {
      visibleMain: false,
    }
  },
  watch: {
    visible(val) {
      if (val) {
        let bodyStyle = document.body.style
        bodyStyle.overflow = 'hidden'
        bodyStyle.height = '100vh'
        this.$nextTick(() => {
          this.visibleMain = val
        })
      } else {
        let bodyStyle = document.body.style
        bodyStyle.overflow = ''
        bodyStyle.height = ''
      }
    },
  },
  methods: {
    closeVisibleMain() {
      this.visibleMain = false
    },
    leave() {
      this.$emit('close')
    },
    accept(res) {
      let data = {
        accept: res,
      }
      localStorage.setItem('cookiesPrivacy', JSON.stringify(data))
      this.closeVisibleMain()
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 9;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  &__mask {
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 1;
  }
  &__main {
    position: relative;
    z-index: 2;
    width: 694px;
    border-radius: 16px;
    background: #111216;
    padding: 40px;
    .title {
      font-weight: bold;
      font-size: 20px;
      line-height: 34px;
    }
    .text {
      margin-top: 12px;
      font-size: 14px;
      line-height: 18px;
      color: #808191;
      a {
        color: #fff;
      }
    }
    .btns {
      margin-top: 40px;
      width: 100%;
      height: 60px;
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      .btn {
        width: 240px;
        height: 60px;
        border-radius: 12px;
        font-size: 16px;
        background: #6c5dd3;
        -webkit-box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        color: #fff;
        -webkit-transition: background 0.3s;
        transition: background 0.3s;
        &:first-child {
          margin-right: 10px;
        }
        &:hover {
          background: #7a78ff;
        }
      }
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .dialog {
    &__main {
      width: 350 * $pr;
      border-radius: 10 * $pr;
      padding: 28 * $pr;
      .title {
        font-size: 16 * $pr;
        line-height: 34 * $pr;
      }
      .text {
        margin-top: 10 * $pr;
        font-size: 10 * $pr;
        line-height: 14 * $pr;
      }
      .btns {
        margin-top: 20 * $pr;
        height: auto;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        .btn {
          width: 100%;
          height: 48 * $pr;
          border-radius: 24 * $pr;
          font-size: 14 * $pr;
          -webkit-box-shadow: 0 4 * $pr 20 * $pr rgba(0, 0, 0, 0.25);
          box-shadow: 0 4 * $pr 20 * $pr rgba(0, 0, 0, 0.25);
          &:first-child {
            margin-right: 0;
            margin-bottom: 20 * $pr;
          }
        }
      }
    }
  }
}
</style>
