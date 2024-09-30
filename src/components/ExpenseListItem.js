import React from "react";


export default ({ description, amount, createdAt, note }) => (
    <div>
        <p>Description: {description}</p>
        <p>Amount: {amount}</p>
        <p>Created At: {createdAt}</p>
        <p>Notes: {note}</p>

    </div>
);
