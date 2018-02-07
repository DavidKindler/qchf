module.exports = [
  {
    loader: 'babel-loader',
    query: {
      presets: ['env', 'react', 'stage-0']
    }, //order matters
    test: /\.jsx?$/,
    exclude: /(node_modules)/
  },
  {
    test: /\.html$/,
    use: 'raw-loader'
  }
];
