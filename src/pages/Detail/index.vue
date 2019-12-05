<template>
  <div class="detail">
    <detail-banner :imgs="imgs" :bannerImg="bannerImg" :name="name"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/DetailBanner';
import DetailHeader from './components/DetailHeader';
import DetailList from './components/DetailList';

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      list: [],
      imgs: [],
      name: '',
      bannerImg: '',
    };
  },
  created() {
    this.$http
      .getDetail()
      .then((res) => {
        const { data, ret } = res;
        if (data && ret) {
          this.list = data.categoryList;
          this.imgs = data.gallaryImgs;
          this.name = data.sightName;
          this.bannerImg = data.bannerImg;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style lang="scss" scoped></style>
