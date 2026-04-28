import axios from 'axios';  // Importing the axios library for making HTTP requests,In this case we will use it to fetch data from the backend API.
import { ExpenseRequest, ExpenseResponse } from '../types/Expense';

const BASE_URL = 'http://localhost:8080/api/expenses';

/**
 *This function gets all expenses from the backend API and returns them as an array of ExpenseResponse objects.
 * @returns An array of ExpenseResponse objects representing all expenses retrieved from the backend API.
 * The promise resolves to an array of ExpenseResponse objects, which contain details about each expense such as id, description, amount, category, and date.
 */
export const getAllExpenses = async (): Promise<ExpenseResponse[]> => {
    // await = wait for axios to get data from Spring Boot
    // axios.get(URL) = send GET request to your API
    const response = await axios.get(BASE_URL);
    return response.data;
}

/**
 * This function creates a new expense by sending a POST request to the backend API with the provided expense data.
 * @param expense 
 * @returns created expense details
 * The function takes an ExpenseRequest object as a parameter, which contains the details of the expense to be created (description, amount, category, and date). It sends this data to the backend API using a POST request. The promise resolves to an ExpenseResponse object, which contains the details of the newly created expense, including its unique id assigned by the backend.
 */
export const createExpense = async (expense: ExpenseRequest): Promise<ExpenseResponse> => {
    const response = await axios.post(BASE_URL, expense);
    return response.data;
}

/**
 * This function updates an existing expense by sending a PUT request to the backend API with the provided expense data.
 * @param id 
 * @param expense 
 * @returns updated expense details
 * The function takes an id and an ExpenseRequest object as parameters. It sends the updated expense data to the backend API using a PUT request. The promise resolves to an ExpenseResponse object, which contains the details of the updated expense.
 */
export const updateExpense = async (id: string, expense: ExpenseRequest): Promise<ExpenseResponse> => {
    const response = await axios.put(`${BASE_URL}/${id}`, expense);
    return response.data;
}

/**
 * This function deletes an existing expense by sending a DELETE request to the backend API.
 * @param id 
 * @returns nothing
 * The function takes an id as a parameter, which identifies the expense to be deleted. It sends a DELETE request to the backend API. The promise resolves to void, indicating that the operation was successful and there is no data to return.
 */
export const deleteExpense = async (id: string): Promise<void> => {
    await axios.delete(`${BASE_URL}/${id}`);
}


