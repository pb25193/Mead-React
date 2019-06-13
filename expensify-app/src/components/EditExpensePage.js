import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';



const EditExpensePage = (props) => {
    return (
        <div>
            <h1>Edit Expense</h1>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(xpns)=>{
                    props.dispatch(editExpense({ id: props.expense.id, updates: xpns }));
                    props.history.push('/');
                }}
            />
            <button 
                onClick = {() => {
                    props.dispatch(removeExpense({ id: props.expense.id }));
                    props.history.push('/');
                }} 
            >Remove</button>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);