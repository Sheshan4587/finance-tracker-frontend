import { useState } from "react";
import type { ExpenseRequest } from "../types/Expense";

interface ExpenseFormProps {
    onSubmit: (expense: ExpenseRequest) => void; // A function that takes an ExpenseRequest object as a parameter and is called when the form is submitted. It is responsible for handling the submission of a new expense.
}

function ExpenseForm(props: ExpenseFormProps) {
    const [description, setDescription] = useState(""); // State variable to store the description of the expense. It is initialized to an empty string.
    const [amount, setAmount] = useState(0); // State variable to store the amount of the expense. It is initialized to 0.
    const [category, setCategory] = useState(""); // State variable to store the category of the expense. It is initialized to an empty string.
    const [date, setDate] = useState(""); // State variable to store the date of the expense. It is initialized to an empty string.

    const handleSubmit = () => {
        /**
         * This function is called when the form is submitted.
         * in short, it creates an expense object with the current values of the description, amount, category, and date state variables.
         * Then it calls the onSubmit function passed as a prop with the expense object, and finally resets the form fields to their initial values.
         */
        const expense: ExpenseRequest = {
            description,
            amount,
            category,
            date
        };
        props.onSubmit(expense); // Calls the onSubmit function passed as a prop with the expense object when the form is submitted.

        setDescription(""); // Resets the description state variable to an empty string after submission.
        setAmount(0); // Resets the amount state variable to 0 after submission.
        setCategory(""); // Resets the category state variable to an empty string after submission.
        setDate(""); // Resets the date state variable to an empty string after submission.
    }

    return (
        <div className="bg-gray-900 border border-cyan-800 rounded-2xl p-6 mb-8 shadow-lg shadow-cyan-900/20">
            <h2 className="text-cyan-400 text-lg font-semibold mb-4 tracking-widest uppercase">
                + New Expense
            </h2>
            <div className="grid grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500 col-span-2"
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    className="bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500"
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    list="category-options"
                    className="bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500"
                />
                <datalist id="category-options">
                    <option value="Food & Dining" />
                    <option value="Transport" />
                    <option value="Shopping" />
                    <option value="Entertainment" />
                    <option value="Health & Medical" />
                    <option value="Housing & Rent" />
                    <option value="Utilities" />
                    <option value="Education" />
                    <option value="Travel" />
                    <option value="Savings" />
                    <option value="Other" />
                </datalist>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500 col-span-2"
                />
            </div>
            <button
                onClick={handleSubmit}
                className="mt-4 w-full bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold py-2 rounded-lg tracking-widest uppercase transition-all duration-200"
            >
                Add Expense
            </button>
        </div>
    );
}

export default ExpenseForm;