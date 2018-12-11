import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { FETCH_REQUEST, fetchError, fetchSuccess } from '../ducks/users';

import api from '../services/api';

const API_ENDPOINT =
  process.env.REACT_APP_API_ENDPOINT || 'https://jsonplaceholder.typicode.com';

function* handleFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(api.user.getAll, API_ENDPOINT);

    if (res.error) {
      yield put(fetchError(res.error));
    } else {
      yield put(fetchSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!));
    } else {
      yield put(fetchError('An unknown error occured.'));
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(FETCH_REQUEST, handleFetch);
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* usersSaga() {
  yield all([fork(watchFetchRequest)]);
}

export default usersSaga;
