import { Meteor } from 'meteor/meteor';

import React from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainLayout from '../../common-ui/layouts/MainLayout';
import Home from '../../common-ui/pages/Home';
import Perf from 'react-addons-perf';

if (process.env.NODE_ENV === 'development') {
  window.Perf = Perf;
}

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default Routes;
