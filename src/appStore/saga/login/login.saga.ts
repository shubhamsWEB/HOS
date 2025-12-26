// @ts-nocheck
import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest,call,takeEvery } from "redux-saga/effects";
import {deleteProductReducer} from '../../reducers/Products/productSlice';
import {login} from '../../../services/apiHelperClient';
import Cookies from 'universal-cookie';
import {useRouter} from 'next/navigation';
import {showSnackbar} from '../../reducers/Snackbar/snackbarSlice';

// Generator function
function* doLogin({ payload }: PayloadAction<any>) {
  const cookies = new Cookies();
  try {
    yield put({ type: "SHOW_LOADER" });
    const response = yield call(login,payload);
    if(response?.accessToken) {
      cookies.set('hos_abc',response.accessToken);
      window.location.href = '/admin/dashboard';
      yield put({ type: "HIDE_LOADER" });

    }
  } catch (error) {
    yield put({ type: "HIDE_LOADER" });
    const errorMessage = error?.message || "API is failing: Request failed with status code 500";
    yield put(showSnackbar({ message: errorMessage, severity: "error" }));
  }
}

// Generator function
export function* watchProducts():WatcherSaga {
  yield takeLatest("LOGIN", doLogin);
}
export default watchProducts;