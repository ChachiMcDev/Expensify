import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseHelpPage from '../components/ExpenseHelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter >
        <Header />
        <Routes>
            <Route path="/" element={<ExpenseDashboardPage />} />
            <Route path="/create" element={<AddExpensePage />} />
            <Route path="/edit" element={<EditExpensePage />} />
            <Route path="/help" element={<ExpenseHelpPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
)

export default AppRouter