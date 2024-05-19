import { takeEvery, call, put, fork } from "redux-saga/effects";


const rootSaga = function* () {
  const sagaRegistry = {};

  function* manageSagaInjection(action) {
    const { saga, key } = action.payload;
    //@ts-ignore
    if (sagaRegistry[key]) {
      // Saga already exists, exit early
      return;
    }
    //@ts-ignore
    sagaRegistry[key] = true;
    yield fork(saga);
  }

  yield takeEvery("INJECT_SAGA", manageSagaInjection);
};

export default rootSaga;
