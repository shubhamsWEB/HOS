import { combineReducers } from "redux";
import products from './Products/productSlice'
import loader from './Loaders/loaderSlice';
/**
 * @param {Object} - key/value of reducer functions
 */
const createReducer = (asyncReducers) =>
  combineReducers({
    loader,
    products,
    // When reducers are provided to createReducer they'll be plopped on here
    ...asyncReducers,
  });

export default createReducer;
