import { getVisibleExpenses } from '../../selectors/expenses';
import moment from 'moment';

const expenses = [{
    id: "123",
    description: "gum",
    note: '',
    amount: 195,
    createdAt: moment(0).add(7, 'days').valueOf()
}, {
    id: "1232",
    description: "rent",
    note: '',
    amount: 109500,
    createdAt: moment(0).add(1, 'days').valueOf()
}, {
    id: "1523",
    description: "Credit card bill",
    note: '',
    amount: 10000,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should filter by text value',()=>{
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by start date value',()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).add(2, 'days'),
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[2]]);
});

test('should filter by end date value',()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(6, 'days')
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should sort by date',()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[2], expenses[1]]);
});

test('should sort by amount',()=>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});