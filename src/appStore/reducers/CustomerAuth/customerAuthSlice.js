import { createSlice } from "@reduxjs/toolkit";

// Initialize from cookies if available (client-side only)
let initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

if (typeof window !== 'undefined') {
  const Cookies = require('universal-cookie');
  const cookies = new Cookies();
  const token = cookies.get('hos_customer_token');
  if (token) {
    initialState = {
      isAuthenticated: true,
      user: null, // Will be populated from API if needed
      token: token,
    };
  }
}

export const customerAuthSlice = createSlice({
  name: "customerAuth",
  initialState,
  reducers: {
    setCustomerAuth: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    clearCustomerAuth: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      if (typeof window !== 'undefined') {
        const Cookies = require('universal-cookie');
        const cookies = new Cookies();
        cookies.remove('hos_customer_token', { path: '/' });
      }
    },
  },
});

export const { setCustomerAuth, clearCustomerAuth } = customerAuthSlice.actions;

export default customerAuthSlice.reducer;

