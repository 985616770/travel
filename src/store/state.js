let defaultCity = '上海';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {
  console.error(e);
}

export default {
  city: defaultCity,
};
