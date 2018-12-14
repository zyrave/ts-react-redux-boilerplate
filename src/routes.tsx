import React from 'react';

import DefaultLayout from './components/Layout/DefaultLayout';

const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Hello = React.lazy(() => import('./containers/Hello'));
const Todo = React.lazy(() => import('./components/Todo'));
const Users = React.lazy(() => import('./containers/Users'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/hello', name: 'Hello', component: Hello },
  { path: '/todo', name: 'Todo', component: Todo },
  { path: '/users', name: 'Users', component: Users }
];

export default routes;
