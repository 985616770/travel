<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音" v-model="keyword" />
    <div class="search-content" ref="search" v-show="keyword">
      <div>
        <div
          class="search-item "
          v-for="item in list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </div>
        <div class="search-item " v-show="!list.length">
          没有匹配数据,请重试
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import BScroll from 'better-scroll';

export default {
  name: 'CitySearch',
  props: {
    cities: Object,
  },

  data() {
    return {
      keyword: '',
      list: [],
    };
  },
  watch: {
    keyword() {
      if (!this.keyword) {
        this.list = [];
        return;
      }

      const result = [];
      for (const i of Object.values(this.cities)) {
        i.forEach((value) => {
          if (value.spell.includes(this.keyword) || value.name.includes(this.keyword)) {
            result.push(value);
          }
        });
      }
      this.list = result;
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  },
  methods: {
    handleCityClick(city) {
      this.change(city);
      this.$router.push('/');
    },
    ...mapMutations({
      change: 'changeCity',
    }),
  },
};
</script>

<style lang="scss" scoped>
.search {
  height: $searchHeight;
  padding: 0 10px;
  background: $bgColor;
  &-input {
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    line-height: 62px;
    border-radius: 10px;
    color: #666;
    font-size: $miniFontSize;
    text-align: center;
  }
}
.search-content {
  z-index: 1;
  overflow: hidden;
  @include absolute($headerHeight + $searchHeight, 0, 0, 0);
  background: #eee;
  .search-item {
    line-height: 40px;
    padding-left: 10px;
    color: #666;
    background: #fff;
    border-bottom: 1px dashed #0003;
  }
}
</style>
