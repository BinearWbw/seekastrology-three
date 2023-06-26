<template>
  <div class="main_list">
    <a class="internal__main__li" :href="`${getIntersperseUrl + item.path}`">
      <img :src="item.imgUrl" alt="stars" />
      <p class="title">{{ item.title }}</p>
      <button class="button">Read More</button>
      <i class="button_icon"></i>
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'card',
  props: ['item'],
  computed: {
    ...mapGetters(['getIntersperseUrl']),
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.main_list {
  width: 220px;
}
.internal__main__li {
  width: 100%;
  height: 298px;
  display: flex;
  padding-top: 34px;
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
  img {
    width: 152px;
    height: 152px;
    object-fit: cover;
    margin-bottom: 14px;
  }
  .title {
    font-size: 22px;
    line-height: 30px;
    color: #fff;
    text-align: center;
  }
  .button {
    margin-top: 8px;
    width: 124px;
    height: 32px;
    border: 1px solid #45454d;
    border-radius: 42px;
    font-family: 'Rubik';
    color: rgba(255, 255, 255, 0.85);
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
    height: 79 * $pr;
    padding: 8 * $pr 79 * $pr 8 * $pr 16 * $pr;
    flex-direction: initial;
    align-items: center;
    position: relative;
    img {
      width: 63 * $pr;
      height: 63 * $pr;
      object-fit: cover;
      margin-bottom: 0;
    }
    .title {
      font-size: 16 * $pr;
      line-height: 22 * $pr;
      flex: 1;
    }
    .button {
      display: none;
    }
    .button_icon {
      position: absolute;
      right: -20 * $pr;
      display: block;
      width: 134 * $pr;
      height: 22 * $pr;
      background: url('../../assets/img/home/var_button.png') no-repeat center;
    }
    &:hover {
      transform: translateY(0);
    }
  }
}
</style>
