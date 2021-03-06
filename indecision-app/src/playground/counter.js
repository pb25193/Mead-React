class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state ={
            count: 0
        };
    }

    componentDidMount(){
        try{
            const n = parseInt(localStorage.getItem('count'));
            
            if(!isNaN(n)) this.setState(()=>({count: n}));
        } catch(e) {

        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        } 
    }

    handleAddOne() {
        this.setState((state)=>{
            return {
                count: state.count + 1
            }
        });
    }

    handleMinusOne() {
        this.setState((state)=>{
            return {
                count: state.count - 1
            }
        });
    }

    handleReset() {
        this.setState(()=>{
            return {
                count: this.props.resetVal
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
};

Counter.defaultProps = {
    count: 0,
    resetVal: 0
};

ReactDOM.render(<Counter />, document.getElementById("app"));




// challenge

// const appRoot = document.getElementById('app');


// let count = 0;

// const increment = () => {
//     count++;
//     renderCounterApp();
// }

// const decrement = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick = {increment}>+1</button>
//             <button onClick = {decrement}>-1</button>
//             <button onClick = {reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);    
// };

// renderCounterApp();