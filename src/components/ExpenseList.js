import React from "react";
import { connect, useSelector } from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    const exps = useSelector(state => state.expenses);
    const filts = useSelector(state => state.filters);
    const expenses = getVisibleExpenses(exps, filts)
    return (
        <div>
            <h1>Expenses List</h1>
            {expenses.map((expense) => (
                <div key={expense.id}>
                    <ExpenseListItem {...expense} />
                </div>
            ))}

        </div>
    )
};

export default ExpenseList;

// const mapStateToProps = (state) => {
//     return {
//         expenses: getVisibleExpenses(state.expenses, state.filters)
//     }
// }

// export default connect(mapStateToProps)(ExpenseList);

