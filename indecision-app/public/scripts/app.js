"use strict";

console.log("App.js is running");

// JSX - JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is some information!"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Element 1"
        ),
        React.createElement(
            "li",
            null,
            "Element 2"
        )
    )
);
var appRoot = document.getElementById('app');

// challenge
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Partha Bhattacharya"
    ),
    React.createElement(
        "p",
        null,
        "Age: 26"
    ),
    React.createElement(
        "p",
        null,
        "Location: Ao Nang, Krabi"
    )
);

ReactDOM.render(templateTwo, appRoot);
