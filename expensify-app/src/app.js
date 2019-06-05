import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

/**
 * BrowserRouter --- wrapper for browser app
 * Route --- wrapper for a page
 * Switch --- go sequentially like the CPP switchcase
 * Link --- change path without a --> magic happens inside it
 */


ReactDOM.render(<AppRouter />, document.getElementById("app"));
