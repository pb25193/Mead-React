import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { getVisibleExpenses } from '../selectors/expenses'


export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>Please add an expense to get started! If you have already added an expense, check your filters!</p>
            ) :
            props.expenses.map((item) => (<ExpenseListItem 
                key={item.id} 
                {...item}
            />))
        }
    </div>
);

const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);

