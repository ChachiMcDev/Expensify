import React from 'react';
import { createRoot } from 'react-dom/client';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';

import expensesSlice from './slicereducers/expensesSlice';
import filtersSlice from './slicereducers/filterSlice';
import getVisibleExpenses from './selectors/expenses';

const { getExpenses, addExpense, removeExpense, editExpense } = expensesSlice.actions
const { getFilters, setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } = filtersSlice.actions



const store = configureStore();

//console.log(store.getState());

store.dispatch(addExpense({
    description: 'Water Bill',
    note: 'still paying for it',
    amount: 300,
    createdAt: 1000
}));

store.dispatch(addExpense({
    description: 'Gas Bill',
    note: 'still paying for gas',
    amount: 500,
    createdAt: -3000
}));

store.dispatch(setTextFilter('water'))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log('state', state)
console.log('visible expesnses', visibleExpenses)

const root = createRoot(document.getElementById('app'));
root.render(<AppRouter />);

