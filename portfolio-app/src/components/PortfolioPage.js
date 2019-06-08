import React from 'react';
import {Link} from 'react-router-dom';



const PortfolioPage = (props) => {

    let content;
    const id = props.match.params.id;
    return (
        <div>
            {!!props.match.params.id && <div>this page is showing project {props.match.params.id}. Hope you liked it. </div> }
            {
                !props.match.params.id && 
                <div>
                    <p>These are my projects:</p>
                    <Link to="/portfolio/1">Portfolio 1</Link>
                    <Link to="/portfolio/2">Portfolio 2</Link>
                </div> 
            }
        </div>
    );
}
export default PortfolioPage;