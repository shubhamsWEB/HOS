import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
  name: "products",
  initialState: {
      data:[],
      readytoshipData:{
        data:[],
        paginator:{
          page:1,
          limit_per_page:4,
          total_count:0
        }
      },
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
    getAdminProductReducer: (state,action) => {
      state.data = action.payload;
    //   state.paginator = action.payload;
    },
    getReadyProductReducer: (state,action) => {
      state.readytoshipData.data = action.payload.content;
      state.readytoshipData.paginator = action.payload;
    //   state.paginator = action.payload;
    },
    deleteProductReducer: (state,action) => {
      state.data = state.data.filter(pr => pr.id !==action.payload.id)
    //   state.paginator = action.payload;
    },
  },
});

export const { getProductReducer,getAdminProductReducer,deleteProductReducer,getReadyProductReducer} = productSlice.actions;

export default productSlice.reducer;
