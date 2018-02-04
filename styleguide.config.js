module.exports = {
  components: 'packages/**/src/components/[A-Z]*.js',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['env', 'react']
            }
          }
        }
      ]
    }
  }
}
