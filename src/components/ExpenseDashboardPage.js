import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';


//
const ExpenseDashboardPage = () => (
    <div>
        This is from the dashboard component
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage 