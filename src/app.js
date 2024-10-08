import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import LoginPage from './components/LoginPage';
import { fetchExpenses } from './slicereducers/expensesSlice';


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

)


//store.dispatch(fetchExpenses()).then(() => {
const root = createRoot(document.getElementById('app'));
root.render(jsx);

//})





