import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const authLogin = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    handleAuth: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

const reducers = {
  state: authLogin.reducer,
};

export const { handleAuth } = authLogin.actions;
export default reducers;
