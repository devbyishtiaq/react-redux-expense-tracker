import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { categories } from "./constants";

const App = () => {
  return (
    <div className="container mx-auto min-h-screen overflow-hidden p-8">
      <h1 className="text-3xl font-bold tracking-wider text-center">
        Expense Tracker
      </h1>
      <div className="grid grid-cols-2 gap-8 mt-16">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg p-4 self-start">
          <ExpenseForm categories={categories} />
        </div>
        <div>
          <ExpenseFilter />
          <ExpenseList />
        </div>
      </div>
    </div>
  );
};

export default App;
