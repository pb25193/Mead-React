"use strict";

console.log("App.js is running");

// JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "Let the computer take your boring decisions for you!"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
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
var user = {
    name: "Partha Bhattacharya",
    age: 26,
    location: "Bangalore"
};
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

ReactDOM.render(template, appRoot);
