import totalExpenses from '../../selectors/expense-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses',()=>{
    const result = totalExpenses([]);
    expect(result).toBe(0);
});

test('should work correctly for 1 expense',()=>{
    const result = totalExpenses([ expenses[0] ]);
    expect(result).toBe(195);
});

test('should work correctly for many',()=>{
    const result = totalExpenses(expenses);
    expect(result).toBe(119695);
});