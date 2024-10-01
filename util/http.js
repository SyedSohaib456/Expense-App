import axios from "axios";

const BACKEND_URL = "https://expense-tracker-6741f-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
    try {
        const response = await axios.post(`${BACKEND_URL}/expenses.json`, expenseData);
        const id = response.data.name; 
        return id;
    } catch (error) {
        console.error("Error storing expense:", error.response ? error.response.data : error.message);
        throw new Error("Failed to store expense.");
    }
}

export async function fetchExpense() {
    try {
        const response = await axios.get(`${BACKEND_URL}/expenses.json`);
        const expenses = [];

        for (const key in response.data) {
            const expenseObj = {
                id: key,
                amount: response.data[key].amount,
                date: new Date(response.data[key].date), 
                description: response.data[key].description,
            };
            expenses.push(expenseObj);
        }

        return expenses;
    } catch (error) {
        console.error("Error fetching expenses:", error.response ? error.response.data : error.message);
        throw new Error("Failed to fetch expenses.");
    }
}

export async function updateExpense(id, expenseData) {
    try {
        const sanitizedId = sanitizeId(id);  
        const response = await axios.put(`${BACKEND_URL}/expenses/${sanitizedId}.json`, expenseData);
        return response.data;
    } catch (error) {
        console.error("Error updating expense:", error.response ? error.response.data : error.message);
        throw new Error("Failed to update expense.")
    }
}

export async function deleteExpense(id) {
    try {
        const sanitizedId = sanitizeId(id);  
        await axios.delete(`${BACKEND_URL}/expenses/${sanitizedId}.json`);
        console.log("Expense deleted successfully.");
    } catch (error) {
        console.error("Error deleting expense:", error.response ? error.response.data : error.message);
        throw new Error("Failed to delete expense.");
    }
}

function sanitizeId(id) {
    return id.replace(/[^a-zA-Z0-9_-]/g, '');  
}
