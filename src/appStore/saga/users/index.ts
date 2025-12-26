import saga from "./users.saga";
import UsersReducer from "@/appStore/reducers/Users/userSlice";
export const usersInjectible = (store: any): void => {
  store.injectSaga("users", saga);
  store.injectReducer("users", UsersReducer);
};

