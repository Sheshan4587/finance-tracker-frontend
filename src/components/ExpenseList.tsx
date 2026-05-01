import type { ExpenseRequest, ExpenseResponse } from "../types/Expense";
import ExpenseCard from "./ExpenseCard";

/**
 * This component is responsible for displaying a list of expenses.
 * It takes an array of ExpenseResponse objects as a prop and renders an ExpenseCard for each expense in the list.
 * The component also accepts an onDelete function as a prop, which is passed down to each ExpenseCard.
 * When the delete button in an ExpenseCard is clicked, the onDelete function is called with the id of the expense to be deleted.
 * @param props 
 * @returns A JSX element representing the list of expenses.
 *
 */

interface ExpenseListProps {
    expenses: ExpenseResponse[]; // An array of ExpenseResponse objects representing the expenses to be displayed in the list.
    onDelete: (id: string) => void; // A function that takes an id as a parameter and is called when the delete button in an ExpenseCard is clicked. It is responsible for handling the deletion of an expense.
    onUpdate: (id: string, expense: ExpenseRequest) => void; // A function that takes an id and an ExpenseRequest object as parameters and is called when the update button in an ExpenseCard is clicked. It is responsible for handling the update of an expense.
}

// The ExpenseList component is a functional component that takes ExpenseListProps as its props. The inside the div, it maps over the expenses array and renders an ExpenseCard for each expense. 
// The key prop is set to the expense's id to help React identify which items have changed, are added, or are removed. The onDelete function is passed down to each ExpenseCard, allowing them to call it when the delete button is clicked.
// The reason for using key={expense.id} is to provide a unique identifier for each ExpenseCard component in the list.
function ExpenseList(props: ExpenseListProps) {
    return (
        <div className="bg-gray-900 border border-cyan-800 rounded-2xl p-6 shadow-lg shadow-cyan-900/20 gap-6">
            <h2 className="text-cyan-400 text-lg font-semibold mb-4 tracking-widest uppercase">
                Expenses
            </h2>
            {props.expenses.length === 0 ? (
                <div className="text-center text-gray-600 py-10 border border-dashed border-gray-800 rounded-2xl">
                    No expenses yet. Add one above!
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {props.expenses.map(expense => (
                        <ExpenseCard
                            key={expense.id}
                            expense={expense}
                            onDelete={props.onDelete}
                            onUpdate={props.onUpdate}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ExpenseList;
