import ExpenseList from "./components/ExpenseList";

const App = () => {
  return (
    <div className="container mx-auto min-h-screen overflow-hidden p-8">
      <h1 className="text-3xl font-bold tracking-wider text-center">
        Expense Tracker
      </h1>
      <div className="grid grid-cols-2 gap-8 mt-16">
        <div>
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </div>
  );
};

export default App;

const expenses = [
  { id: 1, description: "hello world", amount: 100, category: "Utilities" },
  { id: 2, description: "hello world", amount: 100, category: "Utilities" },
  { id: 3, description: "hello world", amount: 100, category: "Utilities" },
];
