// @ts-nocheck
import { PayloadAction } from "@reduxjs/toolkit";
import { put,takeEvery } from "redux-saga/effects";
import {showLoader,hideLoader} from '../../reducers/Loaders/loaderSlice';
// Generator function
function* doShowLoader({ payload }) {
      yield put(showLoader());
}
function* doHideLoader({ payload }) {
      yield put(hideLoader());
}

// Generator function
export function* watchPresence() {
  yield takeEvery("SHOW_LOADER", doShowLoader);
  yield takeEvery("HIDE_LOADER", doHideLoader);
}
export default watchPresence;