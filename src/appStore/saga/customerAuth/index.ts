import watchCustomerAuth from './customerAuth.saga';
import CustomerAuthReducer from '@/appStore/reducers/CustomerAuth/customerAuthSlice';

export const customerAuthInjectible = (store: any): void => {
  store.injectSaga("customerAuth", watchCustomerAuth);
  store.injectReducer("customerAuth", CustomerAuthReducer);
};

