import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should render correctly with 1 expense', ()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly with many expenses', ()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={23213443255} />);
    expect(wrapper).toMatchSnapshot();
});