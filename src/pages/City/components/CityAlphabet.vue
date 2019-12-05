<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item, key) of cities"
      :key="key"
      :ref="key"
      @click="handleAlphabet"
      @touchstart.prevent="handleStart"
      @touchmove="handleMove"
      @touchEnd="handleEnd"
    >
      {{ key }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data() {
    return {
      isTouch: false,
      startY: '',
      timer: null,
    };
  },
  computed: {
    letters() {
      return Object.keys(this.cities);
    },
  },
  props: {
    cities: Object,
  },
  updated() {
    this.startY = this.$refs.A[0].offsetTop;
  },
  methods: {
    handleAlphabet(e) {
      this.$emit('change', e.target.innerText);
    },
    handleStart() {
      this.isTouch = true;
    },
    handleMove(e) {
      if (this.isTouch) {
        console.log(this.startY);

        const endY = e.touches[0].clientY - 79;
        const index = Math.floor((endY - this.startY) / 20);
        // 确保index的值在其中
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index]);
        }
      }
    },
    handleEnd() {
      this.isTouch = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/scss/mixins.scss';
.list {
  @include absolute($headerHeight + $searchHeight, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10px;
  .item {
    line-height: 20px;
    text-align: center;
    font-size: $baseFontSize;
    color: $bgColor;
    margin-right: 16px;
  }
}
</style>
