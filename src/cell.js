import React, { Component, Fragment } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { value, name } = this.props;
        return ( 
            <div className="cell justify-content-center align-items-center d-flex" name={name} value={value}>{value}</div>
         );
    }
}
 
export default Cell;