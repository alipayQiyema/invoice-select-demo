// vue.config.js
module.exports = {
  configureWebpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/invoice-select/, // 替换为实际包名
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: ["@babel/plugin-transform-runtime"],
        },
      },
    });
  },
};
