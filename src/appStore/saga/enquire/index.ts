import saga from "./enquire.saga";
import EnquireReducer from "@/appStore/reducers/Enquire/enquireSlice";
export const enquireInjectible = (store: any): void => {
  store.injectSaga("enquires", saga);
  store.injectReducer("enquires", EnquireReducer);
};
