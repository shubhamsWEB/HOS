import saga from "./loader.saga";
import LoaderReducer from "@/appStore/reducers/Loaders/loaderSlice";
export const loaderInjectible = (store) => {
  store.injectSaga("loader", saga);
  store.injectReducer("loader", LoaderReducer);
};
