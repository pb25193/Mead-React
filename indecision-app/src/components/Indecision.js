import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal'; 

class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
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

    handleClearSelection = () => {
        this.setState(()=>({ selectedOption: undefined }));
    }

    handleDeleteOptions = () => {
        this.setState(()=>({ options: [] }));
    }

    handleDeleteOption = (option) => {
        this.setState((state)=>({
            options: state.options.filter((o)=>{
                return o !== option;
            })
        }));
    }

    handlePick = (i) => {
        this.setState(()=>({ selectedOption: i }));
    }

    handleAddOption = (optionText) => {
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
                <div className="container">
                    <Action 
                        numOptions={this.state.options.length} 
                        handlePick={this.handlePick}
                    />
                    <div className = "widget">
                        <Options 
                            handleDeleteOptions={this.handleDeleteOptions} 
                            handleDeleteOption={this.handleDeleteOption} 
                            options = {this.state.options} 
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption} 
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    selectedOptionText = {isNaN(this.state.selectedOption) ? undefined : this.state.options[this.state.selectedOption]}
                    okHandler = {this.handleClearSelection}
                />
            </div>
        );
    }
};

export default IndecisionApp;