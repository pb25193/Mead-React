import React from 'react';


const EditExpensePage = (props) => {
    return (
        <div>
            EditExpensePage, come and edit the expense with the ID {props.match.params.id}
        </div>
    );
}
export default EditExpensePage;