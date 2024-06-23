import saga from "./login.saga";
import ProductReducer from "@/appStore/reducers/Products/productSlice";
export const loginInjectible = (store: any): void => {
  store.injectSaga("login", saga);
  store.injectReducer("login", ProductReducer);
};
