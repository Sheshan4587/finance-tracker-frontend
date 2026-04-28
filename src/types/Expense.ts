export interface ExpenseRequest {
    description: string;
    amount: number;
    category: string;
    date: string; // ISO format date string
    }

export interface ExpenseResponse {
    id: string;
    description: string;
    amount: number;
    category: string;
    date: string; // ISO format date string
}