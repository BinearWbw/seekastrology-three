<template>
  <div class="explore">
    <div class="explore_main">
      <p class="title">Explore More</p>
      <div class="explore_main_tag">
        <div class="tag_list" v-for="index in 11" :key="index">
          <div
            class="tag_list_aos"
            data-aos="fade-left"
            :data-aos-duration="`${index}00`"
          >
            <div class="tag_list_aos_round"></div>
            <p>Today's Horoscope</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'explore_more',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.explore {
  width: 100%;
  background-color: rgb(34, 33, 33);
  &_main {
    .title {
      color: #fff;
      text-align: center;
      font-family: 'Cinzel Decorative';
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 48px;
    }
    &_tag {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      .tag_list {
        cursor: pointer;
        border-radius: 44px;
        margin-right: 16px;
        margin-top: 16px;
        &:nth-child(6),
        &:last-child {
          margin-right: 0;
        }
        transition: background-color 0.3s;
        &:hover {
          background-color: #a5a5a5;
          p {
            color: #fff;
          }
        }

        &_aos {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px 16px;
          border-radius: 44px;
          background: rgba(255, 255, 255, 0.08);

          &_round {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            fill: #d9d9d9;
            background-color: #d9d9d9;
            opacity: 0.5;
          }
          p {
            color: rgba(255, 255, 255, 0.6);
            font-family: 'Rubik';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
            padding-left: 6px;
          }
        }
      }
    }
  }
}
</style>
