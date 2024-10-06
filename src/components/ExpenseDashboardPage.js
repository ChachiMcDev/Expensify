import React, { useEffect, useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';


const ExpenseDashboardPage = () => {




    return (<div>
        This is from the dashboard component
        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>)
};

export default ExpenseDashboardPage 