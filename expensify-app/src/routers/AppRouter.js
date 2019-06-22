import React from 'react';
import {Router, Route, Switch, NavLink, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact = {true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

/**
 * props from Route:
 * 1. history: used to see where the user is or was, and is used in redirections.
 * 2. match: params is what contains the passed in key value combinations.
 * 3. location: get the path, and query, and the hash from here.
 */


export default AppRouter;