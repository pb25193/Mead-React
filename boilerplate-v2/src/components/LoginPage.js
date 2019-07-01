import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Boilerplate</h1>
            <p>Tagline for your app!</p>
            <button
                className="button"
                onClick={startLogin}
            >Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch)=>({
    startLogin: () => dispatch(startLogin())
});

const ConnectedLoginPage = connect(undefined, mapDispatchToProps)(LoginPage);

export { LoginPage, ConnectedLoginPage as default };