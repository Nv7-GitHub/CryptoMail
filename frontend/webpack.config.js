const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  return {
    entry: './src/index.ts',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      publicPath: "/",
      contentBase: "./dist",
      hot: true,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          include: path.resolve(__dirname, './node_modules/bootstrap-icons/font/fonts'),
          use: {
            loader: 'url-loader?limit=10000&mimetype=application/font-woff',
          }
        },
      ],
    },
    devtool: argv.mode == "production" ? false : 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        __ISDEBUG__: JSON.stringify(argv.mode == "development"),
      }),
    ]
  }
};