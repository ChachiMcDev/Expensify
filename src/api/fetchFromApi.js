import { createAsyncThunk } from '@reduxjs/toolkit';


const fetchExpenses = createAsyncThunk('expenses/fetchExpenses', async () => {
    // const response = await getAllExpenses();

    // return response;
    // State to store fetched data
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    try {
        const response = await fetch('http://127.0.0.1:3000/api/expenses');

        // Check if the response is OK
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const result = await response.json(); // Convert response to JSON
        return result;

    } catch (error) {
        //   setError(error.message); // Set error if any
    } finally {
        //  setLoading(false); // Set loading to false after fetching is done
    }
});

const postExpense = createAsyncThunk('expenses/postExpense', async (expense) => {
    console.log('post expense', expense);
    const response = await fetch('http://localhost:3000/api/addexpense', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(expense)
    });
    const getjsonId = await response.json();
    return {
        ...expense,
        _id: getjsonId.result.insertedId
    };
});

const editExpenseWithId = createAsyncThunk('expenses/editExpense', async (expense) => {
    console.log('edit expense', expense);
    const response = await fetch('http://localhost:3000/api/editexpense', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(expense)
    });
    return expense;
});

const removeExpenseWithId = createAsyncThunk('expenses/removeExpense', async (id) => {
    console.log('remove expense', id);
    const response = await fetch('http://localhost:3000/api/deleteexpense', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    });

    return id;
});

export { fetchExpenses, postExpense, editExpenseWithId, removeExpenseWithId };