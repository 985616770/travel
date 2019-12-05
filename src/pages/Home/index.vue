<template>
  <div class="home">
    <home-header />
    <home-swiper :swiperList="swiperList" />
    <home-icons :iconsList="iconsList" />
    <home-recommend :recommendList="recommendList" />
    <home-weekend :weekendList="weekendList" />
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue';
import HomeSwiper from './components/HomeSwiper.vue';
import HomeIcons from './components/HomeIcons.vue';
import HomeRecommend from './components/HomeRecommend.vue';
import HomeWeekend from './components/HomeWeekend.vue';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  created() {
    this.$http
      .getIndex()
      .then((res) => {
        const { data, ret } = res;
        if (data && ret) {
          this.swiperList = data.swiperList;
          this.iconsList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped></style>
