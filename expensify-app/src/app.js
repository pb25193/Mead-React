import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses';
import { editFilterText } from './actions/filters'
import { getVisibleExpenses } from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

/**
 * BrowserRouter --- wrapper for browser app
 * Route --- wrapper for a page
 * Switch --- go sequentially like the CPP switchcase
 * Link --- change path without a --> magic happens inside it
 */


ReactDOM.render(<AppRouter />, document.getElementById("app"));

const store = configureStore();

store.subscribe(()=>{
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters))
})


store.dispatch(addExpense({description: "water bill", amount: 300}));

store.dispatch(addExpense({description: "electrity bill", amount: 400}));

store.dispatch(addExpense({description: "water bottle", amount: 20}));

store.dispatch(editFilterText("bill"));

store.dispatch(editFilterText("water"));

store.dispatch(editFilterText("ele"));