class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible: false
        };
    }

    handleToggleVisibility(){
        this.setState((state)=>{
            return {
                visible: !state.visible
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visible ? "make it vanish": "make it appear"}</button>
                {this.state.visible ? <p>{this.props.message}</p> : null}
                <TimeReporter />
            </div>
        );
    }


};

class TimeReporter extends React.Component {
    constructor(props){
        super(props);
        this.tickClock = this.tickClock.bind(this);
        this.state = {
            time: Date().toString()
        };
        setInterval(this.tickClock, 1000);
    }

    tickClock() {
        this.setState(()=>{
            return {
                time: Date().toString()
            };
        })
    }

    render(){
        return (
            <div>
                <h3>{Date().toString()}</h3>
            </div>
        );
    }

}

const message = "This is the message!";

ReactDOM.render(<VisibilityToggle message = {message} />, document.getElementById("app"));
