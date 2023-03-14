import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducer/reduser";

const store = configureStore({
  reducer: {
    data: reducers.state,
  },
});

export default store;
