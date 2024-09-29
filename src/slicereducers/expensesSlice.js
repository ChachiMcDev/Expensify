import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const expensesDefaultState = [];

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: expensesDefaultState,
    reducers: {
        getExpenses: (state, action) => {
            return state
        },
        addExpense: (state, action) => {
            return [...state, {
                id: uuidv4(),
                ...action.payload
            }]
        },
        removeExpense: (state, action) => {
            return state.filter(({ id }) => id !== action.payload.id);
        },
        editExpense: (state, action) => {
            return state.map((expense) => {
                if (expense.id === action.payload.id) {
                    return {
                        ...expense,
                        ...action.payload
                    }
                } else {
                    return expense
                }
            })
        }
    }
});

export default expensesSlice