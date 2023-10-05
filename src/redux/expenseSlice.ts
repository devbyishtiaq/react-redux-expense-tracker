import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";
import { categories, expenses } from "../constants";
import { Expense } from "../../common.types";
import { Category } from "../../common.types";

interface ExpenseState {
  expenses: Expense[];
  selectedCategory: Category;
}

const initialState = {
  expenses: expenses,
  selectedCategory: categories[0],
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
    deleteExpense: (state, action: PayloadAction<number>) => {
      const expId = action.payload;
      state.expenses = state.expenses.filter((item) => item.id !== expId);
    },
    selectCategory: (state, action: PayloadAction<Category>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { addExpense, deleteExpense, selectCategory } =
  expenseSlice.actions;
export default expenseSlice.reducer;
