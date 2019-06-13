import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}:</h3> 
        </Link>
        <div>{amount}, created at {createdAt}</div> 
    </div>
);


export default connect()(ExpenseListItem);

