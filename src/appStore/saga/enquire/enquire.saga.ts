// @ts-nocheck
import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest,call } from "redux-saga/effects";
import {postEnquire} from '../../../services/apiHelperClient';
import {postEnquireReducer} from '../../reducers/Enquire/enquireSlice';

// Generator function
function* doPostEnquire({ payload }: PayloadAction<any>) {
  try {
    yield put({ type: "SHOW_LOADER" });
    const response = yield call(postEnquire,payload);
    if(response?.data) {
      yield put(postEnquireReducer(response));
      yield put({ type: "HIDE_LOADER" });

    }
  } catch (error) {
    // yield put(getUserErrorAction(error));
  }
}

// Generator function
export function* watchProducts():WatcherSaga {
  yield takeLatest("POST_ENQUIRE", doPostEnquire);
}
export default watchProducts;