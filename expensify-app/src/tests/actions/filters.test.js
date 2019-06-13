import { setStartDate, setEndDate, sortByAmount, sortByDate, editFilterText } from '../../actions/filters';
import moment from 'moment';

test('should create the set start date action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should create the set end date action object', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });});

test('should create the set sort by amount object', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT",
        sortBy: 'amount'
    });
});

test('should create the set sort by date object', ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE",
        sortBy: 'date'
    });
});

test('should create the set start date action object', ()=>{
    const action = editFilterText('fillo');
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: 'fillo'
    });
});

test('should create the set start date action object', ()=>{
    const action = editFilterText();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    });
});
