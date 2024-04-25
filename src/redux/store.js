import {configureStore} from "@reduxjs/toolkit";
import productReducer from './features/product-slice';
export const store = configureStore({
    reducer: {
        productReducer
    }
});
