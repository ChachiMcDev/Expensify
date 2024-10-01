import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
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
    id: "e9309366-2f23-44bc-a3df-837e786a1069",
    description: 'Water Bill',
    note: 'still paying for it',
    amount: 300,
    createdAt: 1727801255069
}));

store.dispatch(addExpense({
    description: 'Gas Bill',
    note: 'still paying for gas',
    amount: 500,
    createdAt: -3000
}));

store.dispatch(addExpense({
    description: 'Dobby Food',
    note: 'I love you dobbers',
    amount: 75,
    createdAt: 2000
}));

//store.dispatch(setTextFilter('bill'))

store.dispatch(editExpense({
    id: "e9309366-2f23-44bc-a3df-837e786a1069",
    description: 'Water Billfuuuck',
    note: 'still paying for it',
    amount: 300,
    createdAt: 1727801255069
}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log('state', state)
console.log('visible expesnses', visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

const root = createRoot(document.getElementById('app'));
root.render(jsx);

