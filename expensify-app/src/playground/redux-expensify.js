import { createStore, combineReducers } from 'redux';

/**
 * ADD_EXPENSE
 * REMOVE_EXPENSE
 * EDIT_EXPENSE
 * SET_TEXT_FILTER
 * SORT_BY_DATE
 * SORT_BY_AMOUNT
 * SET_START_DATE
 * SET_END_DATE
 */

 // Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
};

const filterReducerDefaultState = { 
    text: "", 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined 
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'dfslkfds',
        description: 'January Rent',
        note: 'This is the last payment for Sobha Iris',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // can be date or amount
        startDate: undefined,
        endDate: undefined
    }
};