import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";
import { expenses } from "../constants";
import { Expense } from "../../common.types";

interface ExpenseState {
  expenses: Expense[];
}

const initialState = {
  expenses: expenses,
};

const expenseSlice: Slice<ExpenseState> = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      const expense = {
        id: state.expenses.length + 1,
        description: action.payload.description,
        amount: action.payload.amount,
        category: action.payload.category,
      };
      state.expenses.push(expense);
    },
  },
});

export const { addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
