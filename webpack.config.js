module.exports = {
  entry: './client/src/index.js',
  output: {
    path: __dirname + '/client/public',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};
