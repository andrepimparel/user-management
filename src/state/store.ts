import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Users/usersSlice"


export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Selector
export type AppDispatch = typeof store.dispatch; 
