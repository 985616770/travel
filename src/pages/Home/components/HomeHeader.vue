<template>
  <div class="header">
    <div class="header-left"><i class="iconfont">&#xe624;</i></div>

    <div class="header-input"><i class="iconfont">&#xe632;</i>输入城市/主题/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{ this.city }}<i class="iconfont">&#xe64a;</i></div></router-link
    >
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  line-height: $headerHeight;
  font-size: $baseFontSize;
  background-color: $bgColor;
  color: #fff;

  &-left {
    flex-basis: 32px;
    padding-left: 10px;
  }
  &-input {
    flex: 1;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 6px;
    height: 32px;
    line-height: 32px;
    margin-left: 2px;
    color: #ccc;
    i {
      margin-left: 1px;
      margin-right: 1px;
    }
  }
  &-right {
    min-width: 24px;
    flex-basis: 24px;
    text-align: center;
    color: #fff;
    padding: 0 2px;
  }
}
</style>
