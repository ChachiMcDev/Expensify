import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";



const ExpenseListItem = ({ id, description, amount, createdAt, note }) => {

    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>Description: {description}</h3>
            </Link>
            <p>Amount: {amount}</p>
            <p>Created At: {dayjs(createdAt).format('MMM DD YYYY')}</p>
            <p>Notes: {note}</p>
        </div>
    )
};


export default ExpenseListItem;
