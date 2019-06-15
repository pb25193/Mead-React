import moment from 'moment';

export const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

export const altFilters = {
    text: 'bil',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};