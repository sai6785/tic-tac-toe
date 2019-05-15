import React from 'react';
import { shallow, mount } from 'enzyme';
import Cell from './cell';

describe('Cell Component', () => {
    it('It should render a box with data without error', () => {
        const wrapper = shallow(<Cell value={'X'} onClick={() => {}} key={'test'} name={'hey'} />);
        expect(wrapper.exists()).toBe(true);
    })
});

it('clicking on all the cells', () =>{
    const onClick = jest.fn();
    let wrapper = mount(<Cell value={'O'} onClick={onClick} kye="test1" name="test1" />);
    wrapper.find('div.cell').first().simulate('click');
    expect('onClick').toBe.true;
})