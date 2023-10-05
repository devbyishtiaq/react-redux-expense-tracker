import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/expenseSlice";
import { Category } from "../../common.types";

interface Props {
  categories: Category[];
}

const schema = z.object({
  description: z
    .string()
    .min(4, { message: "Description should be at least 4 characters long!" })
    .max(70),
  amount: z
    .number({ invalid_type_error: "Amount is required!" })
    .min(1)
    .max(100_000),
  category: z.enum(
    ["All Categories", "Groceries", "Utilities", "Entertainment"],
    { errorMap: () => ({ message: "Category is required!" }) }
  ),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({ categories }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  const dispatch = useDispatch();

  const onSubmit = (data: ExpenseFormData) => {
    dispatch(
      addExpense({
        description: data.description,
        amount: data.amount,
        category: data.category,
      })
    );
  };

  return (
    <div>
      <h2 className="font-bold mb-8">Add Expense</h2>
      <form
        className="space-y-2 flex flex-col"
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        {/* description */}
        <label
          htmlFor="description"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Description
        </label>
        <input
          type="text"
          {...register("description")}
          id="description"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {errors.description && (
          <p className="text-red-500 text-xs">{errors.description?.message}</p>
        )}

        {/* amount */}
        <label
          htmlFor="amount"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Amount
        </label>
        <input
          type="number"
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {errors.amount && (
          <p className="text-red-500 text-xs">{errors.amount?.message}</p>
        )}

        {/* category */}
        <label
          htmlFor="category"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Category
        </label>
        <select
          id="category"
          {...register("category")}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value=""></option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500 text-xs">{errors.category?.message}</p>
        )}

        <button className="bg-indigo-600 px-3 py-2 rounded text-white !mt-6">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
