module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 9000,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
};
