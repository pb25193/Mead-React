import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

test("should show up with loader.gif", ()=>{
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});