import React from "react";
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import expensesSlice from "../slicereducers/expensesSlice";

const { addExpense } = expensesSlice.actions

const AddExpensePage = (props) => (
    <div>
        This is from the add expense component
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(addExpense(expense));

        }} />
    </div>
);



export default connect()(AddExpensePage);