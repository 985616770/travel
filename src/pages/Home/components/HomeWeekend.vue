<template>
  <div class="recommend">
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="recommend-item" v-for="item in weekendList" :key="item.id">
        <div class="item-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {};
  },
  props: {
    weekendList: Array,
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  &-title {
    line-height: 30px;
    background-color: #eee;
    text-indent: 10px;
    font-size: $baseFontSize;
    @include oneLine;
  }
  &-item {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #eee;
    .item-wrapper {
      height: 0;
      padding-bottom: 33.9%;
    }
    .item-img {
      width: 100%;
    }
    .item-info {
      font-size: $baseFontSize;
      padding: 10px;
    }
    .item-title {
      margin-top: 0.2px;
      min-width: 0;
      line-height: 54px;
      color: #666;
      font-weight: 700;
      @include oneLine;
    }
    .item-desc {
      font-size: $miniFontSize;
      line-height: 4px;
      color: $textColor;
    }
  }
}
</style>
