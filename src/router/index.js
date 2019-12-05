import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/City',
    name: 'City',
    component: () => import('@/pages/City'),
  },
  {
    path: '/Detail/:id',
    name: 'Detail',
    component: () => import('@/pages/Detail'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
