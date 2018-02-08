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
    test: /\.scss$/,
    // loaders: ['style-loader', 'css-loader?importLoaders=1'],
    // loaders: ["style-loader", "sass-loader?importLoaders=1"],
    loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader?importLoaders=1'],
    exclude: ['node_modules']
    // options: { includePaths: ['./src/styles/customStyle.scss']}
  },
  {
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader?importLoaders=1'],
    exclude: ['node_modules']
  },
  {
    test: /\.html$/,
    use: 'raw-loader'
  }
];
