import React from 'react';
import Option from './Option';

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