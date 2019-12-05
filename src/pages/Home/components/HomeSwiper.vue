<template>
  <div class="wrapper">
    <van-swipe :autoplay="3000" indicator-color="#fff" v-if="swiperList.length">
      <van-swipe-item v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" :alt="item.id" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';

export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array,
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}

.wrapper {
  height: 0;
  width: 100%;
  overflow: hidden;
  padding-bottom: 30.6%;
  background-color: #ccc;
  .swiper {
    &-img {
      width: 100%;
    }
  }
}
</style>
