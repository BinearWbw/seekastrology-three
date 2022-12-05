<template>
  <div class="explain">
    <p class="explain__title">Football Strike: Online Soccer</p>
    <div class="explain__main" :class="{ active: show }">
      <p ref="explain">
        Fortnite is a shooting game that incorporates construction gameplay.
        This game breaks the traditional tactical competitive gameplay,
        combining the game story line, gameplay mode in to the commercialization
        mode, the game is now with innovative and diversified gameplay, rich and
        interesting elements.This is a game that concentrates tower defense,
        construction and survival shooting competition, but also has its own
        style and personality at the same time. Fortnite is a shooting game that
        incorporates construction gameplay. This game breaks the traditional
        tactical competitive gameplay, combining the game story line, gameplay
        mode in to the commercialization mode, the game is now with innovative
        and diversified gameplay, rich and interesting elements.This is a game
        that concentrates tower defense, construction and survival shooting
        competition, but also has its own style and personality at the same
        time.
      </p>
    </div>
    <button class="explain__btn" @click="show = !show" v-if="visible">
      <span>{{ !show ? 'SHOW MORE' : 'SHOW LESS' }}</span>
      <img
        class="arrow"
        :class="{ active: show }"
        src="~/assets/img/game/show.png"
        alt="arrow"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'GameInfo',
  data() {
    return {
      visible: true,
      show: false,
    }
  },
  props: [],
  mounted() {
    this.visible = this.$refs.explain.clientHeight > 80 ? true : false
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.explain {
  width: 100%;
  background-color: #282a31;
  border-radius: 24px;
  overflow: hidden;
  padding: 36px 44px;
  &__title {
    font-size: 24px;
    line-height: 1;
  }
  &__main {
    margin-top: 20px;
    width: 100%;
    color: #808191;
    max-height: 80px;
    overflow: hidden;
    p {
      font-size: 14px;
      line-height: 20px;
    }
    &.active {
      max-height: none;
    }
  }
  &__btn {
    display: block;
    margin: 32px auto 0;
    width: 164px;
    height: 42px;
    background-color: #111216;
    border-radius: 21px;
    span {
      font-size: 12px;
      color: #ffffff;
      padding-right: 15px;
    }
    .arrow {
      width: 11px;
      height: 8px;
      object-fit: contain;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      &.active {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
    }
  }
}
@media (max-width: 828px) {
}
</style>
