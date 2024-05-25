// @ts-nocheck
import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest,call,takeEvery } from "redux-saga/effects";
import {getTypes} from '../../reducers/Types/typeSlice';
import {getAllTypes} from '../../../services/apiHelperClient';
// Generator function
function* doGetTypes({ payload }: PayloadAction<any>) {
  try {
    yield put({ type: "SHOW_LOADER" });
    const response = yield call(getAllTypes,payload);
    if(response) {
      yield put(getTypes(response));
      yield put({ type: "HIDE_LOADER" });

    }
  } catch (error) {
    // yield put(getUserErrorAction(error));
  }
}

// Generator function
export function* watchTypes():WatcherSaga {
  yield takeLatest("FETCH_TYPES", doGetTypes);
}
export default watchTypes;