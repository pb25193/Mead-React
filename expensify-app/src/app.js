import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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

const store = configureStore();

store.subscribe(()=>{
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters))
})


store.dispatch(addExpense({description: "water bill", amount: 300, createdAt: 43200}));

store.dispatch(addExpense({description: "electrity bill", amount: 400, createdAt: 234}));

store.dispatch(addExpense({description: "water bottle", amount: 20}));

store.dispatch(editFilterText("bill"));

store.dispatch(editFilterText("water"));

store.dispatch(editFilterText("ele"));

store.dispatch(editFilterText(""));


setTimeout(()=>{
    store.dispatch(addExpense({description: "randi bill", amount: 3000000000, createdAt: 778}));
}, 3000);

// setTimeout(()=>{
//     store.dispatch(editFilterText("wat"));
// }, 5000);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
