import React from 'react';

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
