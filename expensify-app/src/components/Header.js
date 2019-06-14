import React from 'react';
import { NavLink } from 'react-router-dom';





const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active" exact={true}>Add Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
    </div>
);


export default Header;