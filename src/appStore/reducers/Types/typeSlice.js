import { createSlice } from "@reduxjs/toolkit";
export const types = createSlice({
  name: "constantTypes",
  initialState: {
     data:[]
  },
  reducers: {
    getTypes: (state,action) => {
      state.data = action.payload;
    },
  },
});

export const { getTypes} = types.actions;

export default types.reducer;
