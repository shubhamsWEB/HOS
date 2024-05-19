// @ts-nocheck
import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest,call,takeEvery } from "redux-saga/effects";
import {getProductReducer} from '../../reducers/Products/productSlice';
import {getAllProducts} from '../../../services/apiHelperClient';
// Generator function
function* doGetProducts({ payload }: PayloadAction<any>) {
  try {
    yield put({ type: "SHOW_LOADER" });
    const response = yield call(getAllProducts,payload);
    if(response) {
      yield put(getProductReducer(response));
      yield put({ type: "HIDE_LOADER" });

    }
  } catch (error) {
    // yield put(getUserErrorAction(error));
  }
}

// Generator function
export function* watchProducts():WatcherSaga {
  yield takeLatest("FETCH_PRODUCTS", doGetProducts);
}
export default watchProducts;