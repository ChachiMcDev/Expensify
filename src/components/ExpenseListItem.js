import React from "react";
import { connect } from "react-redux";
import expensesSlice from "../slicereducers/expensesSlice";

const { removeExpense } = expensesSlice.actions

const ExpenseListItem = ({ id, description, amount, createdAt, note, dispatch }) => (
    <div>
        <p>Description: {description}</p>
        <p>Amount: {amount}</p>
        <p>Created At: {createdAt}</p>
        <p>Notes: {note}</p>
        <button onClick={
            () => {
                dispatch(removeExpense({ id }))
            }
        }>Remove</button>
    </div>
);



export default connect()(ExpenseListItem);