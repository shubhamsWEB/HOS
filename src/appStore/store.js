//@ts-nocheck
import { configureStore, applyMiddleware, Tuple } from "@reduxjs/toolkit";
import createReducer from "./reducers/root";
import rootSaga from "./saga/rootSaga";
import createSagaMiddleware from "redux-saga";
import { createSagaInjector } from "@/appStore/saga/utils";
// const bindMiddleware = (middleware) => {
//   // if (process.env.NODE_ENV !== 'production') {
//   const { composeWithDevTools } = require("redux-devtools-extension");
//   return composeWithDevTools(...middleware);
//   // }
//   // return applyMiddleware(...middleware);
// };
export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: createReducer(),
    middleware: (getDefaultEnhancers) => {
      return getDefaultEnhancers().concat(sagaMiddleware);
    },
  });
  store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga);
  store.asyncReducers = {};
  const resetReducers = () => store.replaceReducer(createReducer(store.asyncReducers));
  store.injectReducer = (key, reducer) => {
    // Updates the aysncReducers object. This ensures we don't remove any old
    // reducers when adding new ones.
    store.asyncReducers[key] = reducer;
    // This is the key part: replaceReducer updates the reducer
    // See rootReducer.createReducer for more details, but it returns a function.
    resetReducers();
    return store;
  };
  // sagaMiddleware.run(rootSaga);
  return store;
};

// Infer the type of makeStore

// Infer the `RootState` and `AppDispatch` types from the store itself

