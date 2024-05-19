import saga from "./products.saga";
import ProductReducer from "@/appStore/reducers/Products/productSlice";
export const productsInjectible = (store: any): void => {
  store.injectSaga("products", saga);
  store.injectReducer("products", ProductReducer);
};
