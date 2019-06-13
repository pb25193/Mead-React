import moment from 'moment';

const getVisibleExpenses = (expenses, filters) => {
    return expenses.filter((expense) => {
        const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase());
        const startDateMatch = filters.startDate ? filters.startDate.isSameOrBefore(moment(expense.createdAt), 'day') : true;
        const endDateMatch = filters.endDate ? filters.endDate.isSameOrAfter(moment(expense.createdAt), 'day') : true;
        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if(filters.sortBy === 'date') return a.createdAt < b.createdAt ? 1 : -1;
        if(filters.sortBy === 'amount') return a.amount < b.amount ? 1 : -1;
    });
};


export {getVisibleExpenses};