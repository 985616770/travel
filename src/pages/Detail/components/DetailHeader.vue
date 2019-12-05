<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <i class="iconfont header-abs-back">&#xe624;</i>
    </router-link>
    <router-link
      tag="div"
      to="/"
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <i class="iconfont header-fixed-back">&#xe624;</i>
      <h3>景点详情</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0,
      },
    };
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll);
  },
  deactivated() {
    window.pxoveEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      let opacity = top / 140;
      opacity = opacity > 1 ? 1 : opacity;
      this.opacityStyle = { opacity };
      this.showAbs = !(top > 60);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/scss/mixins.scss';
.header {
  &-abs {
    @include absolute($left:2px, $top:2px);
    width:30px;
    height:30px;
    border-radius:15px;
    background: rgba($color: #000000, $alpha:.5);
    &-back {
      @include flexCenter();
      line-height:30px;
      color: #fff;
    }
  }
  &-fixed {
    @include fixed($top: 0);
    @include flexCenter();
    z-index: 2;
    width: 100%;
    line-height: $headerHeight;
    font-size: $baseFontSize;
    background-color: $bgColor;
    color: #fff;
    &-back {
      @include flexCenter();
      @include absolute($left: 0);
      line-height:8px;
      color: #fff;
      position: absolute;
      margin-left:3px;
    }
  }
}
</style>
