<template>
  <div class="list">
    <div class="list-item " v-for="item in list" :key="item.title">
      <div class="list-item-title border-bottom">
        <span class="list-item-icon"></span>
        {{ item.title }}
      </div>
      <div v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.list {
  &-item {
    margin-top: 10px;
    line-height:20px;
    font-size:16px;
    padding: 0 20px;
    &-icon {
      height:10px;
      width:10px;
      font-size:16px;
      float: left;
      background: url('https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png')
        no-repeat center;
      background-size: cover;
      margin-top:5px;
      margin-right:10px;
    }
  }
}
</style>
