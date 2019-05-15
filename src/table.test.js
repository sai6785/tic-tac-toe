import React from 'react';
import { shallow, mount } from 'enzyme';
import Table from './table';
import Cell from './cell';

describe('Table Component', () => {
        it('It should render a box with 9 Cells components', async (done) => {
            const wrapper = shallow(<Table />);
            expect(wrapper.find(Cell).length).toBe(9);
            done();
        }, 10000);
});
