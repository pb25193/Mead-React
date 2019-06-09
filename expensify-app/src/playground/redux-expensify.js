import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


/**
 * ADD_EXPENSE
 * REMOVE_EXPENSE
 * EDIT_EXPENSE
 */

 const addExpense = ( { description = '', note = '', amount = 0, createdAt = 0 } = {} ) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note, 
        amount,
        createdAt
    }
 });

 const removeExpense = ( { id } = {} ) => ({
    type: "REMOVE_EXPENSE",
    id
 });

 const editExpense = ( { id, updates } = {} ) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
 });

 /** 
 * SET_TEXT_FILTER
 * SORT_BY_DATE
 * SORT_BY_AMOUNT
 * SET_START_DATE
 * SET_END_DATE
 */

const editFilterText = ( { text = '' } = {} ) => ({
    type: "SET_TEXT_FILTER",
    text
 });

const sortByAmount = ( ) => ({
    type: "SORT_BY_AMOUNT",
    sortBy: 'amount'
});

const sortByDate = ( ) => ({
    type: "SORT_BY_DATE",
    sortBy: 'date'
});

const setStartDate = ( startDate ) => ({
    type: "SET_START_DATE",
    startDate
});

const setEndDate = ( endDate ) => ({
    type: "SET_END_DATE",
    endDate
});

 // Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense) => expense.id === action.id ? {...expense, ...action.updates} : expense );
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
    console.log(action);
    switch(action.type){
        case "SET_TEXT_FILTER":
            return { ...state,  text: action.text };
        case "SORT_BY_AMOUNT":
            return { ...state,  sortBy: action.sortBy };
        case "SORT_BY_DATE":
            return { ...state,  sortBy: action.sortBy };
        case "SET_START_DATE":
            return { ...state, startDate: action.startDate };
        case "SET_END_DATE":
            return { ...state, endDate: action.endDate };
        default:
            return state;
    }
}

// get visible expenses

const getVisibleExpenses = (expenses, filters) => {
    return expenses.filter((expense) => {
        const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase());
        const startDateMatch = isNaN(filters.startDate) || expense.createdAt >= filters.startDate;
        const endDateMatch = isNaN(filters.endDate) ||  expense.createdAt <= filters.endDate;
        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if(filters.sortBy === 'date') return a.createdAt < b.createdAt ? 1 : -1;
        if(filters.sortBy === 'amount') return a.amount < b.amount ? 1 : -1;
    });
};


// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const rentExpense = store.dispatch(addExpense({
    description: "rent",
    amount: 400
}));

const coffeeExpense = store.dispatch(addExpense({
    description: "coffee",
    amount: 3,
    createdAt: 12
}));

// store.dispatch(removeExpense({ id: coffeeExpense.expense.id }));

store.dispatch(editExpense({ id: rentExpense.expense.id, updates: { amount: 4 } }));

store.dispatch(editFilterText({ text: 'loda le' }));

store.dispatch(editFilterText({ text: 'cof' }));

store.dispatch(editFilterText());

store.dispatch(sortByAmount());

store.dispatch(sortByDate());

store.dispatch(setStartDate(125));

store.dispatch(setStartDate());

store.dispatch(setEndDate(-177));

store.dispatch(setEndDate());
