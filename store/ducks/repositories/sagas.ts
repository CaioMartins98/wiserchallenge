import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api';

function* fetchUser(action) {
   try {
      const user = yield call(api.get, action.payload.data.email.login);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

export default fetchUser;