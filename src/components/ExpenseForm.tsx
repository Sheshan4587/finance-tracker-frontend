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
        <div>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} // Updates the description state variable when the input value changes.
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))} // Updates the amount state variable when the input value changes, parsing it as a float.
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)} // Updates the category state variable when the input value changes.
            />
            <input
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)} // Updates the date state variable when the input value changes.
            />
            <button onClick={handleSubmit}>Add Expense</button> {/* Calls the handleSubmit function when the button is clicked to submit the form. */}
        </div>
    );
}

export default ExpenseForm;