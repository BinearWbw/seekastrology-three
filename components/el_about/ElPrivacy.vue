<template>
  <div class="privacy_main">
    <div class="title">
      <p class="title_name">Privacy Policy</p>
    </div>
    <div class="content">
      <div class="normal">
        <p>
          This Privacy Policy applies to all websites, mobile applications, and
          other digital platforms linking to or posting this Privacy Policy and
          operated by Seekastrology.com, Inc. This Privacy Policy describes how
          we use, store, disclose, and process information that we obtain about
          you through any of our Platforms, including information that we obtain
          through any offering or other service that we provide, in whole or in
          part, through any of our Platforms.
        </p>
        <p class="normal_bottom">
          PLEASE NOTE THAT BY USING OR ACCESSING ANY PLATFORM TO WHICH THIS
          PRIVACY POLICY IS POSTED OR LINKED, YOU CONSENT TO THE TERMS OF THIS
          PRIVACY POLICY.
        </p>
      </div>
      <div class="deployable">
        <div
          class="deployable_text1"
          :style="{ maxHeight: isOpen ? maxHeight : '68px' }"
        >
          <div class="deployable_text1_title" @click="toggleContent">
            1. WHAT TYPES OF INFORMATION DO WE COLLECT AND HOW DO WE COLLECT IT?
            <i class="icon" :class="{ icon_active: isOpen }"></i>
          </div>
          <transition name="slides">
            <div class="deployable_text1_content" v-if="isOpen">
              <p>A. Personal Data About You That We Collect Via Technology.</p>
              <p>
                When you use or access any of our Platforms, we may also collect
                certain personal data through automated means, for example: your
                mobile phone number, unique device ID, device type, machine ID,
                advertising ID, geolocation information, computer and connection
                information, browser type, Internet Protocol ("IP") address (a
                number that is automatically assigned to your computer when you
                use the Internet, which may vary from session to session),
                domain name, and date and time stamps for your visits. We also
                may collect any telephone number from which you contact us, or
                from which you place a call to another user through our calling
                feature on any of our Platforms. (If you call any user or other
                person directly – that is, not through the calling feature on
                any of our Platforms – your telephone number may be obtained by
                the person called.) We may monitor or record your live telephone
                conversations with other users through the Platform for
                operational purposes, including for quality assurance purposes
                and in furtherance of making certain services available to you.
              </p>
              <p>B. Information About Others That We Collect From You.</p>
              <p>
                When you use or access any of our Platforms, you may decide to
                provide us with information about a third party.
              </p>
              <p>E. Information Provided to Social Networking Sites.</p>
              <p>
                Some of our Platforms may include the ability for you and other
                users to connect your profile on our Platform with Facebook or
                other Social Networking Sites or "SNS", such as via the "Connect
                to Facebook" functionality, whether you initially connect from
                our Platform to the SNS or in the other direction from the SNS
                to our Platform. We may receive or access information about you
                through the SNS when you choose to connect your Platform profile
                to any SNS, or to post or otherwise share information on any SNS
                to which you have connected your Platform profile. Note that any
                information that you or others post to an SNS will be accessible
                by any users of such SNS, subject to its terms of service and
                privacy policy.
              </p>

              <p>
                F. Information Collected By Third-Party Integrated Technologies.
              </p>
              <p>
                As with many operators of websites and mobile applications, we
                may incorporate third-party ads, offerings, and other
                technologies (such as plugins, pixels, and cookies) into our
                Platforms, enabling the third parties operating such ads,
                offerings, and other technologies to collect usage, demographic,
                and other information (including personal data) about you and
                your online activities through your use of our Platforms and
                across other websites and applications. Any information
                collected through such integrated ads, offerings, or other
                technologies on our Platforms is collected directly by those
                third par ties for use and disclosure subject only to any
                applicable privacy policies of such third parties. For more
                information about our practices, please see our Cookies Policy
                at the bottom of the web page or from within the mobile app.
              </p>

              <p>G. Other Information That We Collect Via Technology.</p>
              <p>
                When you use or access our Platforms, we also may collect
                certain information through automated means associated with your
                activities on our Platforms, including information about the way
                you interact with any of our Platforms or any content or
                advertising thereon, statistics regarding your page views and
                traffic to and from our Platforms, and the number of bytes
                transferred, hyperlinks clicked, and other actions you take on
                our Platforms. Each of our Platforms may also track information
                such as the URL that you visited before you come to the Platform
                and the URL to which you go next. As with most websites and
                other digital platforms, we also employ cookies, pixel tags, web
                beacons, and similar technologies on our Platforms to collect
                and store certain information about visitors to our Platforms,
                to improve our services and advertising, and to help us remember
                you and your preferences when you revisit our Platforms. For
                more information about our practices in this area for a
                particular Platform, please see our Cookies Policy linked in the
                footer of such Platform.
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      maxHeight: 0,
    }
  },
  mounted() {},
  methods: {
    toggleContent() {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.$nextTick(() => {
          const content = document.querySelector('.deployable_text1_content')
          const topTitle = document.querySelector('.deployable_text1_title')
          if (content) {
            this.maxHeight = `${content.scrollHeight + topTitle.scrollHeight}px`
          }
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.privacy_main {
  width: 100%;
  .title {
    padding-bottom: 32px;
    position: relative;
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 50.52%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    &_name {
      font-family: 'Cinzel Decorative';
      font-style: normal;
      font-weight: 700;
      font-size: 46px;
      line-height: 64px;
      color: #ffffff;
      text-align: center;
    }
  }
  .content {
    padding: 32px 0 0;
    .normal {
      margin-bottom: 32px;
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      color: #d2d3d7;
      &_bottom {
        margin-top: 48px;
        color: #fff;
      }
    }
    .deployable {
      padding: 0 48px;
      background: #000000;
      border: 1px solid #ffffff;
      border-radius: 6px;
      &_text1 {
        cursor: pointer;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out;
        &_title {
          font-family: 'Rubik';
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 30px;
          color: #ffffff;
          cursor: pointer;
          padding: 19px 0;
          position: relative;
          display: flex;
          align-items: center;
          .icon {
            width: 12px;
            height: 10px;
            display: inline-block;
            position: absolute;
            right: 0;
            background: url('~/assets/img/astrology/boult_icon.png') no-repeat;
            transform: rotate(180deg);
            transition: transform 0.3s ease;
          }
          .icon_active {
            transform: rotate(0deg);
          }
        }
        &_content {
          padding: 0 0 18px;
          font-family: 'Rubik';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
          color: #d2d3d7;
        }
      }
    }
  }
}
.slides-enter-active {
  transition: all 0.3s;
}

.slides-leave-active {
  transition: all 0.3s;
}

.slides-enter,
.slides-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@media (max-width: (750px)) {
  $pr: math.div(1vw, 3.75);
  .privacy_main {
    .title {
      padding-bottom: 24 * $pr;
      &::after {
        height: 1 * $pr;
      }
      &_name {
        font-size: 36 * $pr;
        line-height: 48 * $pr;
      }
    }
    .content {
      padding: 24 * $pr 0 0;
    }
  }
}
</style>
