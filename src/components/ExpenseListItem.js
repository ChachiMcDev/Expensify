import React from "react";
import { connect } from "react-redux";
import expensesSlice from "../slicereducers/expensesSlice";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const { removeExpense } = expensesSlice.actions


const ExpenseListItem = ({ id, description, amount, createdAt, note, dispatch }) => {


    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>Description: {description}</h3>
            </Link>
            <p>Amount: {amount}</p>
            <p>Created At: {dayjs(createdAt).format('MM/d/YYYY')}</p>
            <p>Notes: {note}</p>
            <button onClick={
                () => {
                    dispatch(removeExpense({ id }))
                }
            }>Remove</button>

        </div>
    )
};



export default connect()(ExpenseListItem);