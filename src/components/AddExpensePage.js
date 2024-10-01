import React from "react";
import ExpenseForm from './ExpenseForm';
import { useDispatch } from 'react-redux';
import expensesSlice from "../slicereducers/expensesSlice";

const { addExpense } = expensesSlice.actions

const AddExpensePage = () => {
    const dispatch = useDispatch();
    return (
        <div>
            This is from the add expense component
            <ExpenseForm onSubmit={(expense) => {
                dispatch(addExpense(expense));

            }} />
        </div>
    )
};


export default AddExpensePage
//export default connect()(AddExpensePage);