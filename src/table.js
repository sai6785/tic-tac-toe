import React, { Component } from 'react';
import Cell from './cell';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    render() { 
        return (
            <div>
                <Cell/>
            </div>
         );
    }
}
 
export default Table;