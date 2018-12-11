import { combineReducers } from 'redux';

import hello from './hello';
import users from './users';

export default combineReducers({
  hello,
  users
});
