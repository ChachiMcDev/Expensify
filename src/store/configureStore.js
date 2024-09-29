import { configureStore, combineReducers } from '@reduxjs/toolkit';
import expensesSlice from '../slicereducers/expensesSlice';
import filtersSlice from '../slicereducers/filterSlice';


export default () => {

    const rootReducer = combineReducers({
        expenses: expensesSlice.reducer,
        filters: filtersSlice.reducer
    });

    const store = configureStore({
        reducer: rootReducer
    });

    return store;

};

