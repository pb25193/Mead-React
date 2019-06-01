
import React from 'react';


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

export default Action;



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
