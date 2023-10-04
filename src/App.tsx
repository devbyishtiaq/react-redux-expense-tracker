import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const categories = [
  { id: 1, name: "All Categories" },
  { id: 2, name: "Utilities" },
  { id: 3, name: "Groceries" },
  { id: 4, name: "Entertainment" },
];

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "hello world", amount: 100, category: "Utilities" },
    { id: 2, description: "hello world", amount: 100, category: "Utilities" },
    { id: 3, description: "hello world", amount: 100, category: "Utilities" },
  ]);

  return (
    <div className="container mx-auto min-h-screen overflow-hidden p-8">
      <h1 className="text-3xl font-bold tracking-wider text-center">
        Expense Tracker
      </h1>
      <div className="grid grid-cols-2 gap-8 mt-16">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg p-4 self-start">
          <ExpenseForm
            categories={categories}
            onSubmit={(data) =>
              setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
            }
          />
        </div>
        <div>
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </div>
  );
};

export default App;
