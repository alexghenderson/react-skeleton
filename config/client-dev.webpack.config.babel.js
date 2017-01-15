import compose from 'lodash/fp/flowRight';
import webpack from 'webpack';

import {plugin} from 'webpack-partial';

import config from './client-base.webpack.config.babel.js';

export default compose(
  config,
  plugin(new webpack.DefinePlugin({
    'process.env.environment': JSON.stringify('development'),
  })),
)({target: 'web'});
