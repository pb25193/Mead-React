import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';



export class EditExpensePage extends React.Component {

    handleEditButton = (updates)=>{
        this.props.startEditExpense(this.props.expense.id, updates);
        this.props.history.push('/');
    }

    handleRemoveButton = ()=>{
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.handleEditButton}
                />
                <button 
                    onClick = {this.handleRemoveButton} 
                >Remove</button>
            </div>
        );
    }

}


const matchDispatchToProps = (dispatch) => ({
    startEditExpense: (id, updates) => dispatch(startEditExpense({id, updates})),
    startRemoveExpense: (id) => dispatch(startRemoveExpense({id}))
});

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
});

export default connect(mapStateToProps, matchDispatchToProps)(EditExpensePage);