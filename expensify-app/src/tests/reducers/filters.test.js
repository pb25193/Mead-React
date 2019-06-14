import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filters', ()=>{
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'), 
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', ()=>{
    const state = filterReducer(undefined, { 
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', ()=>{
    const currState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filterReducer( currState, { 
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    });
    expect(state.sortBy).toBe('date');
});

test('should set text filter', ()=>{
    const state = filterReducer(undefined, { 
        type: 'SET_TEXT_FILTER',
        text: 'lilola'
    });
    expect(state.text).toBe('lilola');
});

test('should set startDate', ()=>{
    const SD = moment();
    const state = filterReducer(undefined, { 
        type: "SET_START_DATE",
        startDate: SD
    });
    expect(state.startDate).toEqual(SD);
});

test('should set sortBy to amount', ()=>{
    const ED = moment();
    const state = filterReducer(undefined, { 
        type: "SET_END_DATE",
        endDate: ED
    });
    expect(state.endDate).toEqual(ED);
});

