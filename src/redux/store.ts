import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenseSlice";

export const store = configureStore({
  reducer: expenseReducer,
});

export type RootState = ReturnType<typeof store.getState>;
