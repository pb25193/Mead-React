import React from 'react';
import {BrowserRouter, Route, Switch, NavLink, Link} from 'react-router-dom';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact = {true} />
                <Route path="/portfolio/:id" component={PortfolioPage} />
                <Route path="/Contact" component={ContactPage} exact = {true} />
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