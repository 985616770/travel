<template>
  <div>
    <div class="banner" @click="handleGallery">
      <div class="banner-img">
        <img :src="bannerImg" alt="" />
      </div>
      <div class="banner-info">
        <div class="banner-title">{{ name }}</div>
        <div class="banner-number">123<span class="iconfont">&#xe692;</span></div>
      </div>
    </div>

    <van-image-preview v-model="show" class="gallery" :images="images" @change="onChange">
      <template v-slot:index>第{{ index + 1 }}页</template>
    </van-image-preview>
  </div>
</template>

<script>
import Vue from 'vue';
import { ImagePreview } from 'vant';

Vue.use(ImagePreview);

export default {
  name: 'DetailBanner',
  components: {
    [ImagePreview.name]: ImagePreview,
  },
  props: {
    imgs: Array,
    bannerImg: String,
    name: String,
  },
  data() {
    return {
      show: true,
      index: 1,
    };
  },
  computed: {
    images() {
      return this.imgs;
    },
  },
  methods: {
    onChange(index) {
      this.index = index;
    },
    handleGallery() {
      this.show = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  @include absolute(0, 0, 0, 0);
  background-color: #000;
}
.banner {
  color: #000;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;
  &-img {
    width: 100%;
  }
  &-info {
    display: flex;
    align-items: center;
    @include absolute(auto, 0, 0, 0);
    line-height: 30px;
    color: #fff;
    background: linear-gradient(to bottom, #fff0, #000);
    .banner-title {
      flex: 1;
      margin-left: 10px;
    }
    .banner-number {
      font-size: 13px;
      padding: 0 0.4px;
      height: 4px;
      line-height: 4px;
      border-radius: 2px;
      background-color: rgba(0, 0, 0, 0.8);
      margin-right: 2px;
      span {
        font-size: 13px;
      }
    }
  }
}
</style>
