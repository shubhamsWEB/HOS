import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
  name: "products",
  initialState: {
      data:[],
      paginator:{
        page:1,
        limit_per_page:10,
        total_count:0
      }
  },
  reducers: {
    getProductReducer: (state,action) => {
        const {content} = action.payload;
      state.data = content;
      state.paginator = action.payload;
    },
  },
});

export const { getProductReducer} = productSlice.actions;

export default productSlice.reducer;
