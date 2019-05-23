console.log("App.js is running");

// JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "Let the computer take your boring decisions for you!"
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Element 1</li>
            <li>Element 2</li>
        </ol>
    </div>
);
var appRoot = document.getElementById('app');

// challenge
var user = {
    name: "Partha Bhattacharya",
    age: 26,
    location: "Bangalore"
};
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);


ReactDOM.render(template, appRoot);