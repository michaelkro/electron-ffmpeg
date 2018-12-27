const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');

exports.devServer = ({ host, port } = {}) => ({
  plugins: [new WriteFilePlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    host,
    overlay: true,
    port,
    stats: 'errors-only'
  }
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.s?css$/,
        include,
        exclude,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  }
});

exports.loadFonts = () => ({
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  }
});

exports.loadJavaScript = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        use: ['babel-loader']
      }
    ]
  }
});
