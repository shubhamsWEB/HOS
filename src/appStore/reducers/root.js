import { combineReducers } from "redux";
import products from './Products/productSlice'
import loader from './Loaders/loaderSlice';
import constantTypes from './Types/typeSlice';
import enquires from './Enquire/enquireSlice';
import snackbar from './Snackbar/snackbarSlice';
import customerAuth from './CustomerAuth/customerAuthSlice';
/**
 * @param {Object} - key/value of reducer functions
 */
const createReducer = (asyncReducers) =>
  combineReducers({
    loader,
    products,
    constantTypes,
    enquires,
    snackbar,
    customerAuth,
    // When reducers are provided to createReducer they'll be plopped on here
    ...asyncReducers,
  });

export default createReducer;
