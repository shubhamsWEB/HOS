// @ts-nocheck
import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest,call } from "redux-saga/effects";
import {postEnquire} from '../../../services/apiHelperClient';
import {getEnquiries} from '../../../services/apiHelperClient';
import {postEnquireReducer, fetchEnquiriesReducer} from '../../reducers/Enquire/enquireSlice';

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
    yield put({ type: "HIDE_LOADER" });
    // yield put(getUserErrorAction(error));
  }
}

// Generator function
function* doFetchEnquiries({ payload }: PayloadAction<any>) {
  try {
    yield put({ type: "SHOW_LOADER" });
    const response = yield call(getEnquiries);
    if(response) {
      yield put(fetchEnquiriesReducer(response));
      yield put({ type: "HIDE_LOADER" });
    }
  } catch (error) {
    yield put({ type: "HIDE_LOADER" });
    // yield put(getUserErrorAction(error));
  }
}

// Generator function
export function* watchProducts():WatcherSaga {
  yield takeLatest("POST_ENQUIRE", doPostEnquire);
  yield takeLatest("FETCH_ENQUIRIES", doFetchEnquiries);
}
export default watchProducts;