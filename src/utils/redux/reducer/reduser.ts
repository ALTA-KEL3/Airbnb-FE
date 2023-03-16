import { createSlice } from "@reduxjs/toolkit";

import { TripType } from "../../types/DataType";

interface StateType {
  trip: TripType[];
  isLoggedIn: boolean;
}

const initialState: StateType = {
  trip: [],
  isLoggedIn: false,
};

export const authLogin = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    handleAuth: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setTrip: (state, action) => {
      state.trip = action.payload;
    },
  },
});

const reducers = {
  state: authLogin.reducer,
};

export const { handleAuth, setTrip } = authLogin.actions;
export default reducers;
