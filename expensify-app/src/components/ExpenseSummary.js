import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import numeral from 'numeral';
import { getVisibleExpenses } from '../selectors/expenses';
import totalExpenses from '../selectors/expense-total';

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => (   
    <div className="page-header">
        <div className="content-container">
            <h1
                className="page-header__title"
            >
                Viewing <span>{expenseCount}</span> expense{expenseCount===1 ? "" : "s"} totalling <span>{numeral(expensesTotal/100).format('$0,0.00')}</span>
            </h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    const expenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: expenses.length,
        expensesTotal: totalExpenses(expenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);