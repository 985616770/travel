<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item in imgs" :key="item + '123'">
          <img class="swiper-img" :src="item" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default() {
        return [
          'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
          'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png',
        ];
      },
    },
  },
  data() {
    return {
      swiperOption: {
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      },
    };
  },
  methods: {
    handleGalleryClick() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/scss/mixins.scss';
.container >>> .swiper-container {
  overflow: inherit;
}
.container {
  z-index: 99;
  background: #000;
  @include fixed(0, 0, 0, 0);
  @include flexCenter();
  margin-top: -50%;
  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 55%;
    .swiper-img {
      width: 100%;
    }
    .swiper-pagination {
      color: #fff;
      bottom: -1px;
    }
  }
}
</style>
