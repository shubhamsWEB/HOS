// @ts-nocheck
import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest,call,takeEvery } from "redux-saga/effects";
import {deleteProductReducer} from '../../reducers/Products/productSlice';
import {login} from '../../../services/apiHelperClient';
import Cookies from 'universal-cookie';
import {useRouter} from 'next/navigation';

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
    // yield put(getUserErrorAction(error));
  }
}

// Generator function
export function* watchProducts():WatcherSaga {
  yield takeLatest("LOGIN", doLogin);
}
export default watchProducts;