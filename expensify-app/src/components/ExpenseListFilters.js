import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { editFilterText, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'
import 'react-dates/lib/css/_datepicker.css';


class ExpenseListFilters extends React.Component{

    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        console.log(startDate, endDate);
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(()=>({ calendarFocused }));
    }

    render(){
        return (
            <div>
                <input 
                    type='text' 
                    value={this.props.filters.text} 
                    onChange = {(e) => this.props.dispatch(editFilterText(e.target.value))} 
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange = {(e)=>{
                        if(e.target.value === "amount") this.props.dispatch(sortByAmount());
                        else if(e.target.value === "date") this.props.dispatch(sortByDate());
                    }}
                >
                    <option value = "date">Date</option>
                    <option value = "amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={(this.onFocusChange)}
                    showClearDates={true}
                />
            </div>
        );
    }
};


const mapStateToProps = (state) => ({
    filters: state.filters
});


export default connect(mapStateToProps)(ExpenseListFilters);

