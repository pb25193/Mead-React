import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3>Your options:</h3>
            <button 
                className="button--link"
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
        </div>
        { props.options.length === 0 && <p className="widget__message">Please add some options to get started!</p> }
        {props.options.map((opt, i) => <Option key = {i} count = {i+1} opt={opt} handleDeleteOption = {props.handleDeleteOption}/>)}
    </div>
);


export default Options;



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