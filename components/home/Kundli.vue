<template>
  <div class="kundli_main">
    <div class="spin_img">
      <img class="imgs" src="~/assets/img/home/disk.png" alt="#" />
    </div>
    <div class="kundli_form">
      <h3>
        Get Your<br />
        Free Janam Kundli
      </h3>
      <div class="mobile_btn" v-if="!isOpen">
        <button class="button" @click="toggleBtn">Try To Now</button>
      </div>
      <transition name="fade">
        <form class="form_main" :class="{ isopen: isOpen }" action="#">
          <label>
            <p>Name</p>
            <input type="text" name="username" placeholder="Enter Your Name" />
          </label>
          <label>
            <p>Gender</p>
            <input type="text" name="gender" placeholder="Enter Your Gender" />
          </label>
          <label>
            <p>Birth Place</p>
            <input
              type="text"
              name="birth_place"
              placeholder="Enter Your Birth Place"
            />
          </label>
          <label>
            <p>Bith Date</p>
            <div class="bith_date">
              <input type="text" name="hour" placeholder="Hour" />
              <input type="text" name="minute" placeholder="Minute" />
              <input type="text" name="pm" placeholder="PM" />
            </div>
          </label>
          <label>
            <p>Bith Date</p>
            <div class="bith_date">
              <input type="text" name="hour" placeholder="Hour" />
              <input type="text" name="minute" placeholder="Minute" />
              <input type="text" name="pm" placeholder="PM" />
            </div>
          </label>
          <div class="form_button">
            <button class="button">Read More</button>
          </div>
        </form>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kundli',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleBtn() {
      this.isOpen = true
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.kundli_main {
  width: 100%;
  height: 590px;
  box-sizing: border-box;
  display: flex;
  .spin_img {
    width: 590px;
    height: 100%;
    box-sizing: border-box;
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .imgs {
      width: 100%;
      height: 100%;
      object-fit: contain;
      animation: rotate 10s infinite linear;
    }
  }
  .kundli_form {
    flex: 1;
    height: 100%;
    padding: 45px 0 0 100px;
    h3 {
      font-family: 'Cinzel Decorative';
      font-weight: 700;
      font-size: 46px;
      line-height: 64px;
      color: #fff;
    }
    .mobile_btn {
      display: none;
    }
    .form_main {
      width: 100%;
      margin-top: 48px;
      padding-left: 17px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 32px 16px;
      label {
        font-family: 'Rubik';
        p {
          font-size: 16px;
          line-height: 22px;
          color: #ffffff;
          margin-bottom: 8px;
        }
        input {
          width: 100%;
          height: 44px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 24px;
          padding: 0 18px;
          transition: border-color 0.3s;
          &::placeholder {
            font-family: 'Rubik';
            font-size: 14px;
            line-height: 18px;
            color: #ffffffb3;
          }
          &:focus {
            border-color: #fff;
          }
        }
        .bith_date {
          display: flex;
          input:nth-of-type(2) {
            margin: 0 7.5px;
          }
        }
      }
      .form_button {
        position: relative;
        .button {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 44px;
          background: #fff;
          box-sizing: border-box;
          border-radius: 42px;
          color: #000;
          font-family: 'Rubik';
          font-size: 16px;
          line-height: 22px;
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
          &:hover {
            transform: translate3d(0, -3px, 0);
          }
        }
      }
    }
  }
}

@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .kundli_main {
    width: 100%;
    height: 100%;
    display: block;
    .spin_img {
      width: 100%;
    }
    .kundli_form {
      height: 100%;
      padding: 16 * $pr 0 0;
      h3 {
        font-size: 36 * $pr;
        line-height: 48 * $pr;
        text-align: center;
        margin-bottom: 16 * $pr;
        br {
          display: none;
        }
      }
      .mobile_btn {
        display: block;
        padding: 0 17 * $pr;
        .button {
          width: 100%;
          height: 44 * $pr;
          background: #fff;
          box-sizing: border-box;
          border-radius: 42px;
          color: #000;
          font-family: 'Rubik';
          font-size: 16 * $pr;
          line-height: 22 * $pr;
        }
      }
      .form_main {
        width: 100%;
        height: 0;
        overflow: hidden;
        margin-top: 0;
        padding: 0 17 * $pr;
        display: grid;
        grid-template-columns: 1fr;
        gap: 16 * $pr;
        transition: height 0.3s ease;
        label {
          font-family: 'Rubik';
          p {
            font-size: 16 * $pr;
            line-height: 22 * $pr;
            color: #ffffff;
            margin-bottom: 8 * $pr;
          }
          input {
            width: 100%;
            height: 44 * $pr;
            border-radius: 24 * $pr;
            padding: 0 18 * $pr;
            font-size: 14 * $pr;
            line-height: 18 * $pr;
            &::placeholder {
              font-family: 'Rubik';
              font-size: 14 * $pr;
              line-height: 18 * $pr;
              color: rgba(255, 255, 255, 0.85);
            }
            &:focus {
              border-color: #fff;
            }
          }
          .bith_date {
            input:nth-of-type(2) {
              margin: 0 7.5 * $pr;
            }
          }
        }
        .form_button {
          position: relative;
          .button {
            position: relative;
            margin-top: 22 * $pr;
            height: 44 * $pr;
            border-radius: 42 * $pr;
            font-size: 16 * $pr;
            line-height: 22 * $pr;
          }
        }
      }
      .isopen {
        height: 516 * $pr !important;
      }
    }
  }
}
</style>
