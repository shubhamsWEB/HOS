// @ts-nocheck
import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest, call } from "redux-saga/effects";
import { sendOTP, validateOTP, customerSignup, customerLogin } from '../../../services/apiHelperClient';
import Cookies from 'universal-cookie';
import { showSnackbar } from '../../reducers/Snackbar/snackbarSlice';
import { setCustomerAuth } from '../../reducers/CustomerAuth/customerAuthSlice';

const cookies = new Cookies();

function* doSendOTP({ payload }: PayloadAction<any>) {
  try {
    yield put({ type: "SHOW_LOADER" });
    const response = yield call(sendOTP, payload);
    yield put({ type: "HIDE_LOADER" });
    if (response?.success !== false && !response?.error) {
      yield put(showSnackbar({ message: "OTP sent successfully", severity: "success" }));
      // Dispatch custom event for component to listen
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('OTP_SENT_SUCCESS', { detail: response }));
      }
    } else if (response?.error) {
      yield put(showSnackbar({ message: response.error, severity: "error" }));
    }
  } catch (error: any) {
    yield put({ type: "HIDE_LOADER" });
    const errorMessage = error?.message || error?.error || "Failed to send OTP";
    yield put(showSnackbar({ message: errorMessage, severity: "error" }));
  }
}

function* doValidateOTP({ payload }: PayloadAction<any>) {
  try {
    yield put({ type: "SHOW_LOADER" });
    const response = yield call(validateOTP, payload);
    yield put({ type: "HIDE_LOADER" });
    if (response?.success !== false && !response?.error) {
      yield put(showSnackbar({ message: "OTP verified successfully", severity: "success" }));
      // Dispatch custom event for component to listen
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('OTP_VALIDATED_SUCCESS', { detail: response }));
      }
    } else if (response?.error) {
      yield put(showSnackbar({ message: response.error, severity: "error" }));
    }
  } catch (error: any) {
    yield put({ type: "HIDE_LOADER" });
    const errorMessage = error?.message || error?.error || "Invalid OTP";
    yield put(showSnackbar({ message: errorMessage, severity: "error" }));
  }
}

function* doCustomerSignup({ payload }: PayloadAction<any>) {
  try {
    yield put({ type: "SHOW_LOADER" });
    const response = yield call(customerSignup, payload);
    yield put({ type: "HIDE_LOADER" });
    if (response?.accessToken) {
      cookies.set('hos_customer_token', response.accessToken, { path: '/' });
      yield put(setCustomerAuth({ user: response.user || { phoneNumber: payload.phoneNumber, name: payload.name }, token: response.accessToken }));
      yield put(showSnackbar({ message: "Account created successfully", severity: "success" }));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('CUSTOMER_SIGNUP_SUCCESS'));
      }
    } else if (response?.error) {
      yield put(showSnackbar({ message: response.error, severity: "error" }));
      // Dispatch error event for component to handle
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('CUSTOMER_SIGNUP_ERROR', { detail: { message: response.error } }));
      }
    }
  } catch (error: any) {
    yield put({ type: "HIDE_LOADER" });
    const errorMessage = error?.message || error?.error || "Failed to create account";
    yield put(showSnackbar({ message: errorMessage, severity: "error" }));
    // Dispatch error event for component to handle
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('CUSTOMER_SIGNUP_ERROR', { detail: { message: errorMessage } }));
    }
  }
}

function* doCustomerLogin({ payload }: PayloadAction<any>) {
  try {
    yield put({ type: "SHOW_LOADER" });
    const response = yield call(customerLogin, payload);
    yield put({ type: "HIDE_LOADER" });
    if (response?.accessToken) {
      cookies.set('hos_customer_token', response.accessToken, { path: '/' });
      yield put(setCustomerAuth({ user: response.user || { phoneNumber: payload.phoneNumber }, token: response.accessToken }));
      yield put(showSnackbar({ message: "Logged in successfully", severity: "success" }));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('CUSTOMER_LOGIN_SUCCESS'));
      }
    } else if (response?.error) {
      yield put(showSnackbar({ message: response.error, severity: "error" }));
    }
  } catch (error: any) {
    yield put({ type: "HIDE_LOADER" });
    const errorMessage = error?.message || error?.error || "Login failed";
    yield put(showSnackbar({ message: errorMessage, severity: "error" }));
  }
}

export function* watchCustomerAuth(): WatcherSaga {
  yield takeLatest("SEND_OTP", doSendOTP);
  yield takeLatest("VALIDATE_OTP", doValidateOTP);
  yield takeLatest("CUSTOMER_SIGNUP", doCustomerSignup);
  yield takeLatest("CUSTOMER_LOGIN", doCustomerLogin);
}

export default watchCustomerAuth;

