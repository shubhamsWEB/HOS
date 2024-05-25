// @ts-nocheck
import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest,call,takeEvery } from "redux-saga/effects";
import {getProductReducer,getAdminProductReducer} from '../../reducers/Products/productSlice';
import {getAllProducts,getAdminAllProducts,addNewPorduct} from '../../../services/apiHelperClient';
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
function* doGetAdminProducts({ payload }: PayloadAction<any>) {
  try {
    yield put({ type: "SHOW_LOADER" });
    const response = yield call(getAdminAllProducts,payload);
    if(response) {
      yield put(getAdminProductReducer(response));
      yield put({ type: "HIDE_LOADER" });

    }
  } catch (error) {
    // yield put(getUserErrorAction(error));
  }
}
function* doAddNewProduct({ payload }: PayloadAction<any>) {
  try {
    yield put({ type: "SHOW_LOADER" });
    const response = yield call(addNewPorduct,payload);
    if(response) {
      // yield put(getAdminProductReducer(response));
      window.location.href = '/admin/dashboard/products';
      yield put({ type: "HIDE_LOADER" });


    }
  } catch (error) {
    // yield put(getUserErrorAction(error));
  }
}

// Generator function
export function* watchProducts():WatcherSaga {
  yield takeLatest("FETCH_PRODUCTS_IN_DASHBOARD", doGetAdminProducts);
  yield takeLatest("FETCH_PRODUCTS", doGetProducts);
  yield takeLatest("ADD_NEW_PRODUCT", doAddNewProduct);
}
export default watchProducts;