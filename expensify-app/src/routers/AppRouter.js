import React from 'react';
import {BrowserRouter, Route, Switch, NavLink, Link} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact = {true} />
                <Route path="/create" component={AddExpensePage} exact = {true} />
                <Route path="/edit" component={EditExpensePage} exact = {true} />
                <Route path="/help" component={HelpPage} exact = {true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;