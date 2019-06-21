import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('shoud set up default states', ()=>{
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('shoud add an expense', ()=>{
    const toAdd = {
        description: 'laptop',
        amount: 300000,
        createdAt: '1919',
        note: '',
        id: 112
    };
    const state = expensesReducer(expenses, { 
        type: 'ADD_EXPENSE',
        expense: toAdd
     });
    expect(state).toEqual([...expenses, toAdd]);
});

test('shoud delete an expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('shoudnt delete an expense for unfounded id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '3214'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('shoud edit expense by id', ()=>{
    const updates = {
        amount: 122000
    };
    const state = expensesReducer(expenses, { 
        type: 'EDIT_EXPENSE',
        id: '1232',
        updates
     });
    expect(state[1].amount).toBe(122000);
});

test('shoud not edit expense for unfounded id', ()=>{
    const updates = {
        amount: 122000
    };
    const state = expensesReducer(expenses, { 
        type: 'EDIT_EXPENSE',
        id: '1234322',
        updates
     });
    expect(state).toEqual(expenses);
});


test('should set all expenses by setting', ()=>{
    const action = {
        type: "SET_EXPENSES",
        expenses
    };
    const state = expensesReducer([], action);
    expect(state).toEqual(expenses);
});