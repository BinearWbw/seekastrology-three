<template>
  <div class="tarot">
    <div class="tarot_text">
      <h3>
        Welcome to <br />
        the Tarot World
      </h3>
      <p>
        Tarot reading is a powerful form of divination that uses cards to help
        you find answers to questions about love, relationships, career, health,
        and more.
      </p>
      <button class="button">Read More</button>
    </div>
    <div class="tarot_img">
      <div class="tarot_mian">
        <div class="img_list list_1">
          <a href="#">
            <img src="~/assets/img/home/tarot_card.png" alt="#" />
          </a>
        </div>
        <div class="img_list list_2">
          <a href="#">
            <img src="~/assets/img/home/tarot_card.png" alt="#" />
          </a>
        </div>
        <div class="img_list list_3">
          <a href="#">
            <img src="~/assets/img/home/tarot_card.png" alt="#" />
          </a>
        </div>
        <button class="button">Try it now >></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tarot',
}
</script>

<style lang="scss" scoped>
.tarot {
  width: 100%;
  height: 610px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  &_text {
    height: 100%;
    padding-top: 170px;
    box-sizing: border-box;
    h3 {
      font-family: 'Cinzel Decorative';
      font-weight: 700;
      font-size: 46px;
      line-height: 64px;
    }
    p {
      margin: 32px 0;
      font-family: 'Rubik';
      font-size: 22px;
      line-height: 30px;
      color: rgba(255, 255, 255, 0.7);
    }
    .button {
      margin-top: 18px;
      width: 220px;
      height: 44px;
      border: 1px solid #45454d;
      border-radius: 42px;
      font-family: 'Rubik';
      color: rgba(255, 255, 255, 0.7);
      font-size: 16px;
      line-height: 22px;
      -webkit-transition: background-color 0.3s, -webkit-color 0.3s;
      transition: background-color 0.3s, color 0.3s;
      &:hover {
        color: #000;
        background-color: #fff;
      }
    }
  }
  &_img {
    height: 100%;
    background: url('../../assets/img/home/home_bg.png') no-repeat top;
    background-clip: border-box;
    background-size: contain;
    box-sizing: border-box;
    padding: 90px 0 0 118px;
    .tarot_mian {
      position: relative;
      height: 100%;
      cursor: pointer;
      .button {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -45%);
        width: 156px;
        height: 44px;
        background: #fff;
        box-sizing: border-box;
        border-radius: 42px;
        color: #000;
        font-family: 'Rubik';
        font-size: 16px;
        line-height: 22px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.8s, visibility 0.8s;
        z-index: 4;
      }
      .img_list {
        position: absolute;
        top: 0;
        left: 0;
        width: 220px;
        height: 440px;
        box-sizing: border-box;
        overflow: hidden;
        border-radius: 24px;
        border: 1px solid rgba(255, 255, 255, 0.6);
        transform-origin: bottom left;
        transition: transform 0.7s ease-out;
        &.list_1 {
          transform: rotate(-5deg) translateX(40px) translateY(20px);
          z-index: 1;
        }
        &.list_2 {
          transform: matrix(1, -0.03, 0.03, 1, 100, -2);
          z-index: 2;
        }
        &.list_3 {
          transform: matrix(1, 0.02, -0.02, 1, 160, 5);
          z-index: 3;
        }
      }
      &:hover {
        .button {
          opacity: 1;
          visibility: visible;
        }
        .img_list {
          &.list_2 {
            transform: matrix(0.99, 0.12, -0.12, 0.99, 130, -40);
          }
          &.list_3 {
            transform: matrix(0.97, 0.26, -0.26, 0.97, 247, 20);
          }
        }
      }
    }
  }
}
</style>
