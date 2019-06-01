import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

class IndecisionApp extends React.Component {

    state = {
        options: []
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
        alert(this.state.options[i]);
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
                <Action numOptions={this.state.options.length} handlePick={this.handlePick}/>
                <Options handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} options = {this.state.options} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
};

export default IndecisionApp;