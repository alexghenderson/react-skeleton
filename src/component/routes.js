import {createElement} from 'react';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import browserHistory from 'react-router/lib/browserHistory';
import {syncHistoryWithStore} from 'react-router-redux';

import App from './app';

export default ({store}) => {
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Router history={history}>
      <Route path='/' component={App}/>
      <Route path='*'/>
    </Router>
  );
};
