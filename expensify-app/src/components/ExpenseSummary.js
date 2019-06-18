import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { getVisibleExpenses } from '../selectors/expenses';
import totalExpenses from '../selectors/expense-total';

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => (   
    <div>
        <h1>Viewing {expenseCount} expense{expenseCount===1 ? "" : "s"} totalling {numeral(expensesTotal/100).format('$0,0.00')}</h1>
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