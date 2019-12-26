/* eslint-disable space-before-function-paren */
/* eslint-disable no-prototype-builtins */
/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
import axios from 'axios';
import { Toast } from 'vant';
import service from './api';

const instance = axios.create({
  baseURL: process.env.VUE_APP_DEV,
  timeout: 1000,
});
const Http = {};

for (const key in service) {
  if (service.hasOwnProperty(key)) {
    const api = service[key];

    Http[key] = async function(config = {}) {
      const { url } = api;

      let response;
      try {
        response = await instance.get(url, config);
      } catch (error) {
        response = error;
      }
      return response;
    };
  }
}

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 请求前做些什么
    Toast.loading({
      mask: false,
      duration: 0, // 一直存在
      forbidClick: true, // 禁止点击
      message: '加载中',
    });
    return config;
  },
  () => {
    Toast.clear();
    Toast('请求失败,请重试');
  },
);

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // 请求成功
    Toast.clear();
    return res.data;
  },
  () => {
    // 请求错误
    Toast.clear();
    Toast('请求失败,请重试');
  },
);

export default Http;
