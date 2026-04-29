import type { ExpenseResponse, ExpenseRequest } from "./types/Expense";
import { getAllExpenses, createExpense, deleteExpense, updateExpense } from "./Service/expenseService";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { useState, useEffect } from "react";

function App() {
  const [expenses, setExpenses] = useState<ExpenseResponse[]>([]); // State variable to store the list of expenses. It is initialized to an empty array.

  useEffect(() => {
    loadExpenses(); // Calls the loadExpenses function when the component is mounted to fetch the list of expenses from the backend API.
  }, []);

  const loadExpenses = async () => {
    const data = await getAllExpenses(); // Calls the getAllExpenses function to fetch the list of expenses from the backend API and waits for the response.
    setExpenses(data); // Updates the expenses state variable with the data retrieved from the backend API.
  }

  const handleCreateExpense = async (expense: ExpenseRequest) => {
    await createExpense(expense); // Calls the createExpense function to send a POST request to the backend API with the new expense data and waits for the response.
    loadExpenses(); // Calls the loadExpenses function to refresh the list of expenses after a new expense is created.
  }

  const handleUpdateExpense = async (id: string, expense: ExpenseRequest) => {
    await updateExpense(id, expense); // Calls the updateExpense function to send a PUT request to the backend API with the updated expense data and waits for the response.
    loadExpenses(); // Calls the loadExpenses function to refresh the list of expenses after an expense is updated.
  }

  const handleDeleteExpense = async (id: string) => {
    await deleteExpense(id); // Calls the deleteExpense function to send a DELETE request to the backend API with the id of the expense to be deleted and waits for the response.
    loadExpenses(); // Calls the loadExpenses function to refresh the list of expenses after an expense is deleted.
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-2 text-cyan-400 tracking-widest uppercase">
          💰 Finance Tracker
        </h1>
        <p className="text-center text-gray-500 mb-10 tracking-widest text-sm">
          Track your expenses with AI
        </p>
        <ExpenseForm onSubmit={handleCreateExpense} />
        <ExpenseList
          expenses={expenses}
          onDelete={handleDeleteExpense}
          onUpdate={handleUpdateExpense}
        />
      </div>
    </div>
  )
}

export default App