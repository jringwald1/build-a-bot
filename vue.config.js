module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.coffee$/,
          use: ['coffee-loader'],
        },
      ],
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'htt://localhost:8085',
        changeOrigin: true,
      },
    },
  },
};
