
const editFilterText = ( text = '' ) => ({
    type: "SET_TEXT_FILTER",
    text
 });

const sortByAmount = ( ) => ({
    type: "SORT_BY_AMOUNT",
    sortBy: 'amount'
});

const sortByDate = ( ) => ({
    type: "SORT_BY_DATE",
    sortBy: 'date'
});

const setStartDate = ( startDate ) => ({
    type: "SET_START_DATE",
    startDate
});

const setEndDate = ( endDate ) => ({
    type: "SET_END_DATE",
    endDate
});

export {editFilterText, sortByAmount, sortByDate, setStartDate, setEndDate};