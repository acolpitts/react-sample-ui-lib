const path = require('path');
module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
  title: 'React Sample UI Library',
  styleguideDir: 'dist-docs',
  moduleAliases: {
    'react-sample-ui-lib': path.resolve(__dirname, 'src'),
  },
};
