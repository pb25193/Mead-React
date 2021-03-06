import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    startAddExpense, 
    addExpense, 
    editExpense, 
    removeExpense, 
    setExpenses, 
    startSetExpenses, 
    startRemoveExpense,
    startEditExpense 
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = "xyz";


beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt})=>{
        expensesData[id] = {description, note, amount, createdAt};
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(()=>done());
});

test('Should set up remove expense action object', ()=>{
    expect(removeExpense({id: '123abc'})).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});


test('Should set up edit expense action object', ()=>{
    expect(editExpense({
        id: '123abc',
        updates: {
            description: "meds",
            amount: 100
        }
    })).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {
            description: "meds",
            amount: 100
        }
    });
});

test('Should set up add expense action object with passed values', ()=>{
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    })
});

test('should add expense to database and store', (done)=>{
    const store = createMockStore({ auth: { uid} });
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'better one',
        createdAt: 10000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense w/defaults to database and store', (done)=>{
    const store = createMockStore({ auth: { uid} });
    const defaultData = {
        description: "",
        amount: 0,
        createdAt: 0,
        note: ''
    }
    store.dispatch(startAddExpense()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...defaultData
            }
        });
        
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(defaultData);
        done();
    });
});

test('should set up a set expenses action', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    });
});

test('should set up initial expenses', ()=>{
    const store = createMockStore({ auth: { uid} });
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        });
        done();
    });
});

test('should remove expense from database and store', (done)=>{
    const store = createMockStore({ auth: { uid} });
    const id = expenses[0].id;
    store.dispatch(startRemoveExpense({id})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id
        });
        
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should edit expense in database and store', (done)=>{
    const store = createMockStore({ auth: { uid} });
    const id = expenses[0].id;
    const updates = {
        description: "chinese food"
    };
    store.dispatch(startEditExpense({id, updates})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id, 
            updates
        });
        
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
        const exp = {
            id,
            ...snapshot.val()
        };
        expect(exp).toEqual({
            ...expenses[0],
            ...updates
        });
        done();
    });
});


// test('Should set up add expense action object with default values', ()=>{
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: "",
//             amount: 0,
//             createdAt: 0,
//             note: ''
//         }
//     })
// });