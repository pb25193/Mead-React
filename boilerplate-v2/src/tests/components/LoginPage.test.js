import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test("should show up", ()=>{
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should log in correctly', ()=>{
    const logInBtn = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={logInBtn} />);
    wrapper.find('button').simulate('click');
    expect(logInBtn).toHaveBeenCalled();
})