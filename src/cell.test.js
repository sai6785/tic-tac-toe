import React from 'react';
import { shallow, mount } from 'enzyme';
import Cell from './cell';

describe('Cell Component', () => {
    it('It should render a box with data without error', () => {
        const wrapper = shallow(<Cell value={'X'} onClick={() => {}} key={'test'} name={'hey'} />);
        expect(wrapper.exists()).toBe(true);
    })
});