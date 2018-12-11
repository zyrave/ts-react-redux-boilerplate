import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './components/modules/Dashboard';
import Hello from './containers/Hello';
import Todo from './components/modules/Todo';
import Users from './containers/Users';

export default () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/hello" component={Hello} />
    <Route path="/todo" component={Todo} />
    <Route path="/users" component={Users} />
  </Switch>
);
