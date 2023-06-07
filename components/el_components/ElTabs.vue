<template>
  <div class="tabs">
    <div class="tab-header">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-item', { active: activeTab === index }]"
        @click="selectTab(tab, index)"
      >
        {{ upTitle + ' ' + tab.tabs }}
      </div>
    </div>
    <div class="tab-content">
      <slot :activeTab="activeTab"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tabs', 'title'],
  data() {
    return {
      activeTab: 0,
      upTitle: '',
    }
  },
  watch: {
    title(value) {
      this.upTitle = this.toUpperBig(value)
    },
  },
  mounted() {
    this.title ? (this.upTitle = this.toUpperBig(this.title)) : false
  },
  methods: {
    selectTab(tab, index) {
      this.activeTab = index
      this.$emit('click', tab)
    },
    toUpperBig(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.tabs {
  width: 100%;
  .tab-header {
    width: 100%;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 15px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 50.52%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    .tab-item {
      flex: 0 0 auto;
      padding: 7px 22px;
      text-align: center;
      font-family: 'Rubik';
      font-size: 14px;
      line-height: 18px;
      color: rgba(255, 255, 255, 0.7);
      border-radius: 42px;
      margin-right: 24px;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
    }
    & > :last-child {
      margin-right: 0;
    }
    .tab-item.active {
      background-color: #fff;
      color: #000;
    }
  }
}
@media (max-width: 750px) {
  $pr: math.div(1vw, 3.75);
  .tabs {
    width: 100%;
    .tab-header {
      padding-bottom: 15 * $pr;
      position: relative;
      &::after {
        height: 1 * $pr;
      }
      .tab-item {
        position: relative;
        padding: 7 * $pr 22 * $pr;
        font-size: 14 * $pr;
        line-height: 18 * $pr;
        border-radius: 42 * $pr;
        margin-right: 24 * $pr;
      }
      & > :last-child {
        margin-right: 0;
      }
      .tab-item.active {
        background-color: #fff;
        color: #000;
      }
    }
  }
}
</style>
