import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';



export class EditExpensePage extends React.Component {

    handleEditButton = (updates)=>{
        this.props.startEditExpense(this.props.expense.id, updates);
        this.props.history.push('/dashboard');
    }

    handleRemoveButton = ()=>{
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit={this.handleEditButton}
                    />
                    <button 
                        className="button--danger button"
                        onClick = {this.handleRemoveButton} 
                    >Remove Expense</button>
                </div>
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