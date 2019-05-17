module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'htt://localhost:8085',
        changeOrigin: true,
      },
    },
  },
};
