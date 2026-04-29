import { useState } from "react";
import type { ExpenseRequest, ExpenseResponse } from "../types/Expense";

// This component is responsible for displaying the details of a single expense and providing options to edit or delete the expense.
interface ExpenseCardProps {
    expense: ExpenseResponse;
    onDelete: (id: string) => void;
    onUpdate: (id: string, expense: ExpenseRequest) => void;
}
/**
 * this component is responsible for displaying the details of a single expense and providing options to edit or delete the expense. 
 * It takes an ExpenseResponse object as a prop, which contains the details of the expense to be displayed.
 * The component also accepts an onDelete function as a prop, which is called when the delete button is clicked, and an onUpdate function as a prop, which is called when the update button is clicked.
 * When the edit button is clicked, the component enters editing mode, allowing the user to modify the expense details. 
 * When the save button is clicked, the onUpdate function is called with the updated expense details, and the component exits editing mode. 
 * When the delete button is clicked, the onDelete function is called with the id of the expense to be deleted.
 * @param props 
 * @returns 
 */
function ExpenseCard(props: ExpenseCardProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState(props.expense.description);
    const [amount, setAmount] = useState(props.expense.amount);
    const [category, setCategory] = useState(props.expense.category);
    const [date, setDate] = useState(props.expense.date);

    const handleSave = () => {
        props.onUpdate(props.expense.id, { description, amount, category, date });
        setIsEditing(false);
    }

    if (isEditing) {
        if (isEditing) {
            return (
                <div className="bg-gray-900 border border-cyan-700 rounded-2xl p-5 shadow-lg shadow-cyan-900/20">
                    <h3 className="text-cyan-400 text-sm font-semibold mb-4 tracking-widest uppercase">
                        Editing Expense
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        <input type="text" value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500 col-span-2"
                        />
                        <input type="number" value={amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value))}
                            className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500"
                        />
                        <input type="text" value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500"
                        />
                        <input type="date" value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500 col-span-2"
                        />
                    </div>
                    <div className="flex gap-3 mt-4">
                        <button onClick={handleSave}
                            className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold py-2 rounded-lg tracking-widest uppercase transition-all duration-200"
                        >
                            Save
                        </button>
                        <button onClick={() => setIsEditing(false)}
                            className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-400 font-bold py-2 rounded-lg tracking-widest uppercase transition-all duration-200"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )
        };
    }

    return (
        <div className="bg-gray-900 border border-gray-800 hover:border-cyan-800 rounded-2xl p-5 shadow-md transition-all duration-200">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-white font-semibold text-lg">{props.expense.description}</h3>
                    <p className="text-gray-500 text-sm mt-1">{props.expense.category}</p>
                    <p className="text-gray-600 text-xs mt-1">{props.expense.date}</p>
                </div>
                <div className="text-right">
                    <p className="text-cyan-400 font-bold text-xl">${props.expense.amount}</p>
                    <div className="flex gap-2 mt-3">
                        <button
                            onClick={() => setIsEditing(true)}
                            className="text-xs bg-gray-800 hover:bg-cyan-900 text-cyan-400 border border-cyan-800 px-3 py-1 rounded-lg transition-all duration-200"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => props.onDelete(props.expense.id)}
                            className="text-xs bg-gray-800 hover:bg-red-900 text-red-400 border border-red-900 px-3 py-1 rounded-lg transition-all duration-200"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseCard;