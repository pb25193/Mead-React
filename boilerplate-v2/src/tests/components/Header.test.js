import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';


test('should render header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});

test('should log out correctly', ()=>{
    const logOutBtn = jest.fn();
    const wrapper = shallow(<Header startLogout={logOutBtn} />);
    wrapper.find('button').simulate('click');
    expect(logOutBtn).toHaveBeenCalled();
})