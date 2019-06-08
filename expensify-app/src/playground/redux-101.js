console.log('redux yo');


import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    };
};

const reset = () => {
    return {
        type: 'RESET'
    };
};

const set = ({ count } = {}) => {
    return {
        type: count === undefined ? '#' : 'SET',
        count
    };
};

/**
 * Reducers
 * 1. reducers are pure functions
 * 2. never change state or action
 */

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type){
        case 'INCREMENT':
            return { 
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            if( typeof action.count === 'number' )
                return {
                    count: action.count
                };
            else return state;
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

console.log("store:", store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

// actions
// will increase count
store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 3 }));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 31 }));

store.dispatch(decrementCount());

// unsubscribe();

store.dispatch(reset());

store.dispatch(set({ count: 101 }));

store.dispatch(set());

// action generators


