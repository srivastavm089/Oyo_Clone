import { configureStore } from "@reduxjs/toolkit";
import { hotelReducer } from "./reducer/hotelReducer";
import {thunk} from "redux-thunk";

const store = configureStore({
  reducer: {
    hotel: hotelReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

export default store;
