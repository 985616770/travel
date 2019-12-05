<template>
  <div class="header">
    <router-link :to="{ name: 'Home' }"
      ><span class="header-left iconfont">&#xe624;</span></router-link
    >
    <span>城市选择</span>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
};
</script>

<style lang="scss" scoped>
@import '~styles/scss/variables.scss';
.header {
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  background-color: $bgColor;
  color: #fff;
  font-size: 4px;
  &-left {
    position: absolute;
    left: 10px;
    height: $headerHeight;
    line-height: $headerHeight;
    margin-left: 5px;
  }
}
</style>
