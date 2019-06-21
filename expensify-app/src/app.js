import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses';
// import { editFilterText } from './actions/filters'
// import { getVisibleExpenses } from './selectors/expenses'
// import moment from 'moment';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import database from './firebase/firebase';


/**
 * BrowserRouter --- wrapper for browser app
 * Route --- wrapper for a page
 * Switch --- go sequentially like the CPP switchcase
 * Link --- change path without a --> magic happens inside it
 */

const store = configureStore();


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById("app"));
});

