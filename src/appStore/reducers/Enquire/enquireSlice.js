import { createSlice } from "@reduxjs/toolkit";
export const enquireSlice = createSlice({
  name: "enquires",
  initialState: {
     data: [],
     enquries: []
  },
  reducers: {
    postEnquireReducer: (state,action) => {
      state.enquries = action.payload;
    },
    fetchEnquiriesReducer: (state,action) => {
      state.data = action.payload;
    },
  },
});

export const { postEnquireReducer, fetchEnquiriesReducer} = enquireSlice.actions;

export default enquireSlice.reducer;
