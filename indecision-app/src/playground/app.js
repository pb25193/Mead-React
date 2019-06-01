// stateless functional component are used wherever possible. The class based components are still kept as comments.


class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) this.setState(()=>({options}));
        } catch(e) {

        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        } 
    }

    handleDeleteOptions(){
        this.setState(()=>({ options: [] }));
    }

    handleDeleteOption(option){
        this.setState((state)=>({
            options: state.options.filter((o)=>{
                return o !== option;
            })
        }));
    }

    handlePick(i){
        alert(this.state.options[i]);
    }

    handleAddOption(optionText){
        if(!optionText) return "Empty textbox is not a valid option";
        if(this.state.options.indexOf(optionText)>-1) return "Please enter a new option";

        this.setState((state)=>({
            options: state.options.concat([optionText])
        }));
    }

    render() {
        const subtitle = "Put your life in the hands of a computer!";
        return (
            <div>
                <Header subtitle = {subtitle}/>
                <Action numOptions={this.state.options.length} handlePick={this.handlePick}/>
                <Options handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} options = {this.state.options} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
};



const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: "Indecision"
};

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// };


const Action = (props) => {
        const handlePick= function(){
            const ran = Math.floor(Math.random()*props.numOptions);
            props.handlePick(ran);
        }
        return (
            <div>
                <button
                    onClick={handlePick}
                    disabled={props.numOptions==0}
                >
                    What should I do?
                </button>
            </div>
        );
};

// class Action extends React.Component {

//     constructor(props){
//         super(props);
//         this.handlePick = this.handlePick.bind(this);
//     }


//     handlePick(){
//         const ran = Math.floor(Math.random()*this.props.numOptions);
//         this.props.handlePick(ran);
//     }

//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.handlePick}
//                     disabled={this.props.numOptions==0}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>

            {props.options.length === 0 ? <p>Please add some options to get started!</p> : <p>Here are your options:</p> }
            <ol>
                {props.options.map((opt, i) => <Option key = {i} opt={opt} handleDeleteOption = {props.handleDeleteOption}/>)}
            </ol>
        </div>
    );
}; 

// class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 <p>Options Component Here:</p>
//                 <ol>
//                     {this.props.options.map((opt, i) => <Option key = {i} opt={opt}/>)}
//                 </ol>
//             </div>
//         );
//     }
// }

const Option = (props) => {

    const handleDeleteOption = function(){
        props.handleDeleteOption(props.opt);
    };

    return (
        <div>
            <li>{props.opt} <button onClick={handleDeleteOption}>Remove</button></li>
        </div>
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <li>{this.props.opt}</li>
//             </div>
//         );
//     }
// }


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

        if(!error){
            e.target.elements.option.value = '';
        }
        
        this.setState(()=>({ error }));

        
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