/* global process devToolsExtension window */
import identity from 'lodash/fp/identity';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import browserHistory from 'react-router/lib/browserHistory';

import reducer from 'reducer';

const devTools = process.env.environment === 'development' &&
  window.devToolsExtension;

export default (initialState) => compose(
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(browserHistory),
  ),
  devTools ? devToolsExtension() : identity,
)(createStore)(reducer, initialState);
