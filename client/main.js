import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '/imports/redux/store';

import Routes from '../imports/startup/client';

const startup = () => {
  render(
    <Provider store={store}>
      {Routes}
    </Provider>
    , document.getElementById('wrapper')
  );
};

Meteor.startup(startup);
