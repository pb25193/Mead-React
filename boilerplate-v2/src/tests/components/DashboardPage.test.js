import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test("should show up with expense", ()=>{
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});