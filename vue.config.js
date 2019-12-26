// /* eslint-disable quotes */
const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');
const path = require('path');

module.exports = {
  outputDir: 'dist',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~styles/scss/mixins.scss";',
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375,
          }),
        ],
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('styles', path.resolve('src/assets/style')).end();
  },
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_DEV,
        changOrigin: true,
        pathRewrite: {
          '^/api': '/mock/', // rewrite path
        },
      },
    },
  },
  
};
