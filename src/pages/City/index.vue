<template>
  <div class="city">
    <city-header> </city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/CityHeader';
import CitySearch from './components/CitySearch';
import CityList from './components/CityList';
import CityAlphabet from './components/CityAlphabet';

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: '',
    };
  },
  created() {
    this.$http
      .getCity()
      .then((res) => {
        const { data, ret } = res;
        if (data && ret) {
          this.cities = data.cities;
          this.hotCities = data.hotCities;
          this.letter = data.letter;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    handleChange(letter) {
      this.letter = letter;
    },
  },
};
</script>

<style lang="scss" scoped></style>
