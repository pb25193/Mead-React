import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';



export class EditExpensePage extends React.Component {

    handleEditButton = (updates)=>{
        this.props.editExpense(this.props.expense.id, updates);
        this.props.history.push('/');
    }

    handleRemoveButton = ()=>{
        this.props.removeExpense(this.props.expense.id);
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
    editExpense: (id, updates) => dispatch(editExpense({id, updates})),
    removeExpense: (id) => dispatch(removeExpense({id}))
});

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
});

export default connect(mapStateToProps, matchDispatchToProps)(EditExpensePage);