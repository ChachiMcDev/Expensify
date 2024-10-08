import { configureStore, combineReducers, applyMiddleware, compose } from '@reduxjs/toolkit';
import expensesSlice from '../slicereducers/expensesSlice';
import filtersSlice from '../slicereducers/filterSlice';
import authSlice from '../slicereducers/authSlice';
import { thunk } from 'redux-thunk';

const middlewareEnhancer = applyMiddleware(thunk);
const composedEnhancers = compose(middlewareEnhancer)

export default () => {

    const rootReducer = combineReducers({
        expenses: expensesSlice.reducer,
        filters: filtersSlice.reducer,
        auth: authSlice.reducer
    });

    const store = configureStore({
        reducer: rootReducer,
        middleware: () => [thunk]
    });

    return store;

};

