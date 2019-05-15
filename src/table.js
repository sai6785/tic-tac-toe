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
                <div className="gametable shadow-lg d-flex flex-row flex-wrap gametable justify-content-center align-items-center">
                    {
                        _.times(cells, (index) => <Cell value={cellValues[index] || ""} key={index} name={index} />)
                    }
                </div>
            </div>
         );
    }
}
 
export default Table;