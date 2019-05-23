console.log("App.js is running");

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some information!</p>
        <ol>
            <li>Element 1</li>
            <li>Element 2</li>
        </ol>
    </div>
);
var appRoot = document.getElementById('app');

// challenge
var templateTwo = (
    <div>
        <h1>Partha Bhattacharya</h1>
        <p>Age: 26</p>
        <p>Location: Ao Nang, Krabi</p>
    </div>
);


ReactDOM.render(templateTwo, appRoot);