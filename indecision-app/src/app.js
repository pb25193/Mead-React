class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}


class Header extends React.Component {
    render() {
        return (
            <div>
            <h1>Indecision</h1>
            <h2>Put your life in the hands of a computer!</h2>
            </div>
        );
    }
};

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options Component Here:
                <ol>
                <Option />
                <Option />
                <Option />
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <li>Option Component Here</li>
            </div>
        );
    }
}


class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>AddOption Component Here</p>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));