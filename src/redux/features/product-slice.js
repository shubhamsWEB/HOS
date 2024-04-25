import {createSlice,PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    value: {
        totalProducts:0,
        page:1,
        products:[],
        filters:[],
        totalPages:0,
        pageSize:0,
        isLoading:false
    }
}
export const products = createSlice({
    name:'products',
    initialState,
    reducers: {
        getProducts: (state,action) => {
            return {
                value: {
                    totalPages:2,
                    page:1,
                    totalProducts:20,
                    pageSize:10,
                    filters:[],
                    products:[1,2]
                }
            }
        }
    }
});

export const {getProducts} = products.actions;
export default products.reducer;
