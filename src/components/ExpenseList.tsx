import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteExpense } from "../redux/expenseSlice";

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state: RootState) => state.expenses);
  const selectedCategory = useSelector(
    (state: RootState) => state.selectedCategory
  );

  const filteredExpenses =
    selectedCategory.name === "All Categories"
      ? expenses
      : expenses.filter((exp) => exp.category === selectedCategory.name);

  const handleDelete = (expId: number) => {
    dispatch(deleteExpense(expId));
  };

  if (filteredExpenses.length === 0)
    return (
      <div className="mt-2 text-red-500">
        No record found for this category!
      </div>
    );

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden  max-h-[330px] shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredExpenses.map((exp) => (
                  <tr key={exp.id} className="even:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {exp.description}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {exp.amount}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {exp.category}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <button
                        className="px-3 py-1 bg-red-400 text-white rounded"
                        onClick={() => handleDelete(exp.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <td className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                  Total
                </td>
                <td className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  ${expenses.reduce((acc, exp) => exp.amount + acc, 0)}
                </td>
                <td className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></td>
                <td className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></td>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
