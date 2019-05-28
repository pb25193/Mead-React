console.log("App.js is running");

// JSX - JavaScript XML
/**
 * This is a source file. It is not valid JS code, and cannot run on any browser. 
 * It is converted to a JS file by Babel, which is present in public/scripts/
 */


const app = {
    title: "Indecision App",
    subtitle: "Let the computer take your boring decisions for you!",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) app.options.push(option);
    e.target.elements.option.value = '';
    

    renderApp();
}

const removeAll = () => {
    app.options = [];

    renderApp();
}

const onMakeDecision = () => {
    const random = Math.floor(Math.random() * app.options.length);
    const option = app.options[random];
    console.log(option);
}

const renderApp = () => {
    const numbers = [55, 33, 14];
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button disabled={app.options.length==0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <p>{app.options.length > 0 ? "Here are your options:" : "No options available..." }</p>
            <ol>
                {
                    app.options.map((option, i) => <li key={i}>{option} </li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add option</button>
            </form>
        </div>
    );
    
    const appRoot = document.getElementById('app');
    
    ReactDOM.render(template, appRoot);    
}

renderApp();
