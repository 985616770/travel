<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title ">当前城市</div>
        <div class="button-list">
          <div class="button">{{ this.city }}</div>
        </div>
      </div>
      <div class="area ">
        <div class="title">热门城市</div>

        <ul class="button-list">
          <li
            class="button"
            v-for="item in hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="area ">
        <ul class="item-list" v-for="(val, key) of cities" :key="key" :ref="key">
          <li class="title">{{ key }}</li>
          <li class="item" v-for="item in val" :key="item.id" @click="handleCityClick(item.name)">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'CityList',
  watch: {
    letter() {
      if (this.letter) {
        const ele = this.$refs[this.letter][0];
        this.scroll.scrollToElement(ele);
      }
    },
  },
  props: {
    cities: {
      type: Object,
    },
    hotCities: {
      type: Array,
    },
    letter: {
      type: String,
    },
  },
  computed: {
    ...mapState(['city']),
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push('/');
    },
    ...mapMutations(['changeCity']),
  },
};
</script>

<style lang="scss" scoped>
.list {
  @include absolute(0, 0, 0, 0);
  overflow: hidden;
  margin-top: $headerHeight + $searchHeight;
  .title {
    line-height: 30px;
    background-color: #eee;
    padding-left: 2px;
    color: #333;
    font-size: $baseFontSize;
  }
  .button-list {
    display: flex;
    flex-wrap: wrap;
    .button {
      flex-basis: 29%;
      margin: 5px;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 06px;
      text-align: center;
      color: #666;
    }
  }
  .item-list {
    .title {
      font-weight: 600;
      padding-left: 10px;
    }
    .item {
      line-height: 30px;
      padding-left: 2px;
      border-bottom: 1px solid rgba(204, 204, 204, 0.238);
    }
  }
}
</style>
