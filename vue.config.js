module.exports = {
  lintOnSave: false,
  devServer: {
    https: true,
    proxy: {
      '/api': {
        target: 'https://localhost:7004',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        logLevel: 'debug'
      }
    }
  }
};
