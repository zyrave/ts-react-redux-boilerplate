import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import './App.scss';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const DefaultLayout = Loadable({
  loader: () => import('../Layout/DefaultLayout'),
  loading
});

// Pages
const Login = Loadable({
  loader: () => import('../Login'),
  loading
});

const Register = Loadable({
  loader: () => import('../Register'),
  loading
});

const Page404 = Loadable({
  loader: () => import('../Page404'),
  loading
});

const Page500 = Loadable({
  loader: () => import('../Page500'),
  loading
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact={true}
            path="/login"
            name="Login Page"
            component={Login}
          />
          <Route
            exact={true}
            path="/register"
            name="Register Page"
            component={Register}
          />
          <Route exact={true} path="/404" name="Page 404" component={Page404} />
          <Route exact={true} path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
