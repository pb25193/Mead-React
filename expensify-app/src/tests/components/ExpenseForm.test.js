import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test("should render expense form page while empty", ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("should render expense form page with expenses", ()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid expenses", ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("should update description", ()=>{
    const wrapper = shallow(<ExpenseForm />);
    const value = "New description";
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('description')).toBe(value);
});

test("should update note", ()=>{
    const wrapper = shallow(<ExpenseForm />);
    const value = "New note";
    wrapper.find('textarea').simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('note')).toBe(value);
});

test("should update valid amt", ()=>{
    const wrapper = shallow(<ExpenseForm />);
    const value = "23.99";
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test("should not update invalid amt", ()=>{
    const wrapper = shallow(<ExpenseForm />);
    const value = "23.979";
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toBe("");
});

test("should call onSubmit prop for valid form submission with correct args", ()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test("should update date on date change", ()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test("should update focus on focus change", ()=>{
    const focus = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: focus });
    expect(wrapper.state('calendarFocused')).toBe(focus);
});