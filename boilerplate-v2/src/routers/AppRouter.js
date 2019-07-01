import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
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
                <PrivateRoute path="/dashboard" component={DashboardPage} />
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