const getVisibleExpenses = (expenses, filters) => {
    return expenses.filter((expense) => {
        const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase());
        const startDateMatch = isNaN(filters.startDate) || expense.createdAt >= filters.startDate;
        const endDateMatch = isNaN(filters.endDate) ||  expense.createdAt <= filters.endDate;
        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if(filters.sortBy === 'date') return a.createdAt < b.createdAt ? 1 : -1;
        if(filters.sortBy === 'amount') return a.amount < b.amount ? 1 : -1;
    });
};


export {getVisibleExpenses};