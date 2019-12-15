import React from 'react';
import {Router, Switch, Route, IndexRoute, browserHistory} from "react-router-dom";
import {render} from 'react-dom';
import App from './App.jsx';
import { createBrowserHistory } from 'history'
import AdminLogin from './admin.jsx';

const history = createBrowserHistory();

Meteor.startup(() => {
  render(
  <Router history={history}>
  <Route exact path="/" component={App} />
  <Route exact path="/restricted-admin-only" component={AdminLogin} />
  </Router>  , document.getElementById('react-target'));
});
