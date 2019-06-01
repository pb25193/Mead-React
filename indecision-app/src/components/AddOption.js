import React from 'react';


class AddOption extends React.Component {
    state = {
        error: undefined
    }
    
    handleAddOption = (e) => {
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

export default AddOption;