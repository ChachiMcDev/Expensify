import React from "react";
import { useLocation, useParams } from 'react-router-dom';
import ExpenseForm from "./ExpenseForm";
import { connect, useDispatch, useSelector } from "react-redux";
import expensesSlice from "../slicereducers/expensesSlice";

const { editExpense, addExpense } = expensesSlice.actions

const EditExpensePage = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const getExpenses = useSelector((state) => state.expenses.find((expense) => expense.id === id));

    return (
        <div>

            <ExpenseForm expense={getExpenses} onSubmit={(expense) => {
                dispatch(editExpense(expense));
            }} />
        </div>
    )
};

export default EditExpensePage;

// const mapStateToProps = (state, props) => {
//     //const id = "e9309366-2f23-44bc-a3df-837e786a1069"
//     const { id } = useParams();

//     return {
//         expense: state.expenses.find((expense) => expense.id === id)
//     }
// }

// export default connect(mapStateToProps)(EditExpensePage);