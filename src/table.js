import React, { Component } from 'react';
import Cell from './cell';
import _ from 'lodash';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cells: 9,
         }
    }

    render() { 
        const { cells = null } = this.state;
        return (
            <div>
                {
                   _.times(cells, (index) => <Cell value={"Cell"} />)
                }
            </div>
         );
    }
}
 
export default Table;
