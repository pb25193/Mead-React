import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => (
    <div>
        <button
            onClick={startLogin}
        >Log in</button>
    </div>
);

const mapDispatchToProps = (dispatch)=>({
    startLogin: () => dispatch(startLogin())
});

const ConnectedLoginPage = connect(undefined, mapDispatchToProps)(LoginPage);

export { LoginPage, ConnectedLoginPage as default };