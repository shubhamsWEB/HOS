import { createSlice } from "@reduxjs/toolkit";
export const enquireSlice = createSlice({
  name: "enquires",
  initialState: {
     enquries:[]
  },
  reducers: {
    postEnquireReducer: (state,action) => {
      state.enquries = action.payload;
    },
  },
});

export const { postEnquireReducer} = enquireSlice.actions;

export default enquireSlice.reducer;
