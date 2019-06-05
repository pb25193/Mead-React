import React from 'react';
import {BrowserRouter, Route, Switch, NavLink, Link} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact = {true} />
                <Route path="/create" component={AddExpensePage} exact = {true} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} exact = {true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

/**
 * props from Route:
 * 1. history: used to see where the user is or was, and is used in redirections.
 * 2. match: params is what contains the passed in key value combinations.
 * 3. location: get the path, and query, and the hash from here.
 */


export default AppRouter;