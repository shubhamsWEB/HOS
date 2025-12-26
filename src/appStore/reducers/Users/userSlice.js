import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "users",
  initialState: {
     data: [],
  },
  reducers: {
    fetchUsersReducer: (state,action) => {
      state.data = action.payload;
    },
  },
});

export const { fetchUsersReducer} = userSlice.actions;

export default userSlice.reducer;

