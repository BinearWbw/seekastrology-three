<template>
  <a
    class="large"
    :href="`/game/${href}?id=${item.id}`"
    @mouseenter="enter"
    @mouseleave="leave"
  >
    <img class="large__img" :src="item.icon" :alt="item.name" />
    <div class="large__type">H5 GAME</div>
    <span class="large__span">{{ item.name }}</span>
    <div class="large__video" v-if="item.video">
      <video ref="video" loop preload="none" muted="muted" class="video">
        <source :src="item.video" type="video/mp4" />
      </video>
    </div>
  </a>
</template>

<script>
export default {
  name: 'CommonLarge',
  props: ['item'],
  computed: {
    href() {
      let href = this.item.name.replace(/[^a-zA-Z0-9\\s]/g, '-').toLowerCase()
      return href
    },
  },
  methods: {
    enter() {
      if (this.item.video) {
        this.$refs.video.currentTime = 0
        this.$refs.video.play()
      }
    },
    leave() {
      if (this.item.video) {
        this.$refs.video.currentTime = 0
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.large {
  height: 296px;
  box-shadow: 0 5px 20px 0 rgba(10, 10, 10, 0.6);
  border-radius: 16px;
  grid-row-start: span 2;
  grid-column-start: span 2;
  text-decoration: none;
  transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  display: block;
  position: relative;
  width: 100%;
  background-color: #50447d;
  cursor: pointer;
  &__img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
  }
  &__type {
    padding: 8px 12px;
    bottom: 50px;
    left: 27px;
    border-radius: 13px;
    line-height: 1;
    font-family: Heebo-Medium;
    font-size: 12px;
    background-color: #ef2391;
    position: absolute;
    pointer-events: none;
    z-index: 6;
  }
  &__span {
    padding-left: 27px;
    font-size: 22px;
    bottom: 20px;
    left: 0;
    line-height: 1;
    font-family: Heebo-Medium;
    position: absolute;
    color: rgb(255, 255, 255);
    text-align: left;
    pointer-events: none;
    z-index: 6;
  }
  &__video {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: inherit;
    overflow: hidden;
    visibility: hidden;
    z-index: 5;
    .video {
      height: 100%;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, 0);
    }
  }
  &::after {
    content: '';
    opacity: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent 25%, rgba(0, 0, 0, 0.5) 100%);
    z-index: 4;
    transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    border-radius: inherit;
    contain: strict;
  }
  &:hover {
    transform: scale(1.02) translate(0, -10px);
    box-shadow: 0 4px 50px 0 rgba(118, 87, 233, 0.8);
    transition-duration: 0.3s;
    .large__video {
      visibility: visible;
    }
    &::after {
      opacity: 1;
    }
  }
}
@media (max-width: 828px) {
  $pr: math.div(1vw, 8.28);
  .large {
    height: 368 * $pr;
    box-shadow: 0 5 * $pr 20 * $pr 0 rgba(10, 10, 10, 0.6);
    border-radius: 16 * $pr;
    &__type {
      padding: 8 * $pr 12 * $pr;
      bottom: 50 * $pr;
      left: 27 * $pr;
      border-radius: 13 * $pr;
    }
    &__span {
      padding-left: 27 * $pr;
      font-size: 22 * $pr;
      bottom: 20 * $pr;
    }
    &:hover {
      transform: scale(1.02) translate(0, -10 * $pr);
      box-shadow: 0 4 * $pr 50 * $pr 0 rgba(118, 87, 233, 0.8);
    }
  }
}
</style>
