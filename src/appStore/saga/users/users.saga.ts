// @ts-nocheck
import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest,call } from "redux-saga/effects";
import {getUsers} from '../../../services/apiHelperClient';
import {fetchUsersReducer} from '../../reducers/Users/userSlice';

// Generator function
function* doFetchUsers({ payload }: PayloadAction<any>) {
  try {
    yield put({ type: "SHOW_LOADER" });
    const response = yield call(getUsers);
    if(response) {
      yield put(fetchUsersReducer(response));
      yield put({ type: "HIDE_LOADER" });
    }
  } catch (error) {
    yield put({ type: "HIDE_LOADER" });
    // yield put(getUserErrorAction(error));
  }
}

// Generator function
export function* watchUsers():WatcherSaga {
  yield takeLatest("FETCH_USERS", doFetchUsers);
}
export default watchUsers;

