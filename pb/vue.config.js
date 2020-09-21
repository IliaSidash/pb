module.exports = {
  devServer: {
    // proxy: 'https://api.cldcnt.ru',  // alternative
    proxy: {
      '^/api': {
        target: 'https://api.cldcnt.ru',
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
