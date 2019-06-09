console.log('hoc');

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props, children) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is privileged information, please do not share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in!!</p>}
        </div>
    );
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated = {false} info = "B43jeHJ23f, there you go. those were the details." />, document.getElementById('app'));