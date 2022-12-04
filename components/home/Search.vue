<template>
  <div class="search">
    <input
      class="input"
      type="text"
      v-model="searchInput"
      placeholder="Search"
    />
    <button class="button" @click="search"></button>
  </div>
</template>

<script>
export default {
  name: 'HomeSearch',
  data() {
    return {
      searchInput: '',
    }
  },
  methods: {
    search() {
      console.log(this.searchInput)
    },
  },
}
</script>
<style lang="scss" scoped>
@use 'sass:math';
.search {
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 20px;
  input {
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: #808191;
    padding: 0 51px 0 19px;
  }
  button {
    position: absolute;
    top: calc(50% - 8px);
    right: 17px;
    width: 15px;
    height: 15px;
    background: url('~assets/img/home/search.png') no-repeat center center;
    background-size: contain;
  }
}
@media (max-width: 828px) {
}
</style>
