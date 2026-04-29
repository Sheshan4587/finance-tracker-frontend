import type { ExpenseResponse } from "../types/Expense";

interface ExpenseCardProps {
    expense: ExpenseResponse;
    onDelete: (id: string) => void;
}

function ExpenseCard(props: ExpenseCardProps) {
    return (
        <div>
            <h3>{props.expense.description}</h3>
            <p>Amount: ${props.expense.amount}</p>
            <p>Category: {props.expense.category}</p>
            <p>Date: {props.expense.date}</p>
            <button onClick={() => props.onDelete(props.expense.id)}>Delete</button>
        </div>
    );
}

export default ExpenseCard;