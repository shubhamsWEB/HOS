import { combineReducers } from "redux";
import products from './Products/productSlice'
import loader from './Loaders/loaderSlice';
import constantTypes from './Types/typeSlice';
import enquires from './Enquire/enquireSlice';
/**
 * @param {Object} - key/value of reducer functions
 */
const createReducer = (asyncReducers) =>
  combineReducers({
    loader,
    products,
    constantTypes,
    enquires,
    // When reducers are provided to createReducer they'll be plopped on here
    ...asyncReducers,
  });

export default createReducer;
