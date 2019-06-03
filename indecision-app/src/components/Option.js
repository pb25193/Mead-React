import React from 'react';

const Option = (props) => {

    const handleDeleteOption = function(){
        props.handleDeleteOption(props.opt);
    };
    return (
        <div className="option">
            <p className="option__text">{props.count}. {props.opt}</p> <button className="button--link" onClick={handleDeleteOption}>Remove</button>
        </div>
    );
};

export default Option;



// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <li>{this.props.opt}</li>
//             </div>
//         );
//     }
// }
