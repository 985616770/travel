<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        :to="`/detail/${item.id}`"
        class="recommend-item"
        v-for="item in recommendList"
        :key="item.id"
      >
        <div class="item-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: { recommendList: Array },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  &-title {
    margin-top: 2px;
    line-height: 40px;
    background-color: #eee;
    text-indent: 10px;
    font-size: $baseFontSize;
    @include oneLine;
  }
  &-item {
    overflow: hidden;
    display: flex;
    height: 110px;
    border-bottom: 1px solid #eee;
    .item-wrapper {
      width: 100px;
      height: 100px;
      padding: 10px;
    }
    .item-img {
      width: 100%;
    }
    .item-info {
      flex: 1;
      font-size: $baseFontSize;
      padding: 1px;
    }
    .item-title {
      min-width: 0;
      line-height: 54px;
      @include oneLine;
    }
    .item-desc {
      font-size: $miniFontSize;
      line-height: 14px;
      color: $textColor;
    }
    .item-button {
      background-color: $buttonColor;
      color: #fff;
      font-size: $miniFontSize;
      padding: 0 0.1px;
      border-radius: 6px;
      border: 0;
      padding: 4px;
      margin-top: 6px;
    }
  }
}
</style>
