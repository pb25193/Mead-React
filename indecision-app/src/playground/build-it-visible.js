let visible = true;
const message = "Here is the message";
let num = 0;

const toggle = () => {
    visible = !visible;

    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggle}>{visible ? "make it vanish": "make it appear"}</button>
        {visible ? <p>{message}</p> : null}
        <h3>{Date().toString()}</h3>
        </div>
    );
    
    const appRoot = document.getElementById('app');
    
    ReactDOM.render(template, appRoot);    
}

const moveClock = () => {
    num++;

    renderApp();

    setTimeout(moveClock, 1000);
}

moveClock();

renderApp();