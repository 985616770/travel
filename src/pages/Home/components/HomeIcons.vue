<template>
  <div class="icons">
    <van-swipe indicator-color="red">
      <van-swipe-item class="icons-container" v-for="(item, index) in pageIcon" :key="index">
        <div class="icons-item" v-for="icon in pageIcon[index]" :key="icon.id">
          <div class="item-img">
            <img :src="icon.imgUrl" alt="" />
            <p class="item-content">{{ icon.desc }}</p>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';

export default {
  name: 'HomeIcons',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  data() {
    return {};
  },
  props: {
    iconsList: Array,
  },
  computed: {
    pageIcon() {
      const pages = [];
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style lang="scss" scoped>
.icons >>> .van-swipe__indicator {
  background-color: #000;
}
.icons {
  margin-top: 1px;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  &-container {
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    height: 0;
    padding-bottom: 25%;
    overflow: hidden;

    flex-basis: 25%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .item-img {
      width: 66%;
      margin-top: 100%;
      font-size: 0;
    }
    .item-content {
      font-size: $miniFontSize;
      text-align: center;
      margin-top: 2px;
      color: $textColor;
      @include oneLine;
    }
  }
}
</style>
