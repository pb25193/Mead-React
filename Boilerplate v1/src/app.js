import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<p>boilerplate</p>, document.getElementById("app"));

/**
 * The components were kicked out of this file into the other files in ./components/
 * 
 * new babel plugin also helps use class properties. this removes the need for constructors. 
 * 
 * 1 : state is a property
 * 2 : bind is unnecessary for arrow fns (find out why)
 */
