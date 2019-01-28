const webpack = require('webpack')
      path = require('path')
      endPath = path.resolve(__dirname, 'public');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts','.tsx', '.json', '.css', '.scss'],
    alias: {
      '@app': path.resolve(__dirname)
    }
  },
  node: { fs: 'empty' },
  cache: true,
  entry: [
    'react-hot-loader/patch', // Activa Hot Module Reloading HMR para React
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    './src/client/app.tsx'
  ],
  output: {
    path: endPath,
    filename: 'bundle.js',
    publicPath: '/' // Necesario para el Hot-Reloading
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "awesome-typescript-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /.json$/,
        exclude: /node_modules/,
        use: 'json-loader'
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devtool: 'inline-soruce-map',
  devServer: {
    hot: true,
    contentBase: endPath,
    inline: true,
    compress: true,
    port: 9000,
    publicPath: '/'
  }
};
