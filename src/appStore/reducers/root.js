import { combineReducers } from "redux";
import products from './Products/productSlice'
import loader from './Loaders/loaderSlice';
import constantTypes from './Types/typeSlice';
/**
 * @param {Object} - key/value of reducer functions
 */
const createReducer = (asyncReducers) =>
  combineReducers({
    loader,
    products,
    constantTypes,
    // When reducers are provided to createReducer they'll be plopped on here
    ...asyncReducers,
  });

export default createReducer;
