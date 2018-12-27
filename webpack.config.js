const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const commonConfig = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Electron React',
        template: 'public/index.html'
      })
    ],
    target: 'electron-renderer'
  },
  parts.loadCSS(),
  parts.loadFonts(),
  parts.loadJavaScript({ include: path.join(__dirname, 'src') })
]);

const productionConfig = merge([]);

const developmentConfig = merge([
  {
    devtool: 'inline-source-map'
  },
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT
  })
]);

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
