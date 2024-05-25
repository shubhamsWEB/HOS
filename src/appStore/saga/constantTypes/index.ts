import saga from "./types.saga";
import TypeReducer from "@/appStore/reducers/Types/typeSlice";
export const typesInjectible = (store: any): void => {
  store.injectSaga("constantTypes", saga);
  store.injectReducer("constantTypes", TypeReducer);
};
