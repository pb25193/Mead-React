
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options: ["first thing", "second thing", "third thing"]
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options: []
            };
        });
    }

    handlePick(i){
        alert(this.state.options[i]);
    }

    handleAddOption(optionText){
        if(!optionText) return "Empty textbox is not a valid option";
        if(this.state.options.indexOf(optionText)>-1) return "Please enter a new option";

        this.setState((state)=>{
            return {
                options: state.options.concat([optionText])
            };
        });
    }

    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer!";
        return (
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action numOptions={this.state.options.length} handlePick={this.handlePick}/>
                <Options handleDeleteOptions={this.handleDeleteOptions} options = {this.state.options}/>
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
};


class Header extends React.Component {
    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
};

class Action extends React.Component {

    constructor(props){
        super(props);
        this.handlePick = this.handlePick.bind(this);
    }


    handlePick(){
        const ran = Math.floor(Math.random()*this.props.numOptions);
        this.props.handlePick(ran);
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.handlePick}
                    disabled={this.props.numOptions==0}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <p>Options Component Here:</p>
                <ol>
                    {this.props.options.map((opt, i) => <Option key = {i} opt={opt}/>)}
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.opt}</li>
            </div>
        );
    }
}


class AddOption extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        e.target.elements.option.value = '';

        this.setState(()=>{
            return {
                error
            };
        });

    }

    render() {
        return (
            <div>
                {this.state.error && this.state.error}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));