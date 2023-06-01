<template>
  <div class="main_list">
    <a class="internal__main__li" href="#">
      <img src="~/assets/img/home/stars.png" alt="stars" />
      <p class="title">{{ item.title }}</p>
      <p class="text">{{ item.textCont }}</p>
      <button class="button">Read More</button>
      <i class="button_icon"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['item'],
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.main_list {
  width: 220px;
  height: 320px;
  position: relative;
}
.internal__main__li {
  height: 100%;
  display: flex;
  padding-top: 44px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Rubik';
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 6px;
  background: linear-gradient(0.13deg, #08070f 0.11%, rgba(6, 5, 6, 0) 99.89%);
  backdrop-filter: blur(4px);
  cursor: pointer;
  -webkit-transition: transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
  position: absolute;
  top: -49px;
  img {
    width: 132px;
    height: 132px;
    object-fit: cover;
    margin-bottom: 24px;
  }
  .title {
    font-size: 22px;
    line-height: 30px;
    color: #fff;
  }
  .text {
    margin-top: 8px;
    padding: 0 22px;
    font-size: 14px;
    line-height: 18px;
    color: #ffffffb3;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
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
  }
  .button_icon {
    display: none;
  }
  &:hover {
    transform: translateY(-20px);
    .button {
      color: #000;
      background-color: #fff;
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .main_list {
    width: 100%;
    height: 100%;
  }
  .internal__main__li {
    padding: 24 * $pr 0;
    img {
      width: 118 * $pr;
      height: 118 * $pr;
      object-fit: cover;
      margin-bottom: 11 * $pr;
    }
    .title {
      font-size: 16 * $pr;
      line-height: 22 * $pr;
      margin-bottom: 8 * $pr;
      padding: 0 10 * $pr;
    }
    .text {
      display: none;
    }
    .button {
      display: none;
    }
    .button_icon {
      display: block;
      width: 100%;
      height: 22 * $pr;
      background: url('../../assets/img/home/var_button.png') no-repeat center;
    }
    &:hover {
      transform: translateY(0);
    }
  }
}
</style>
