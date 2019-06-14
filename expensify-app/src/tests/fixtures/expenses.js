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

export default expenses;