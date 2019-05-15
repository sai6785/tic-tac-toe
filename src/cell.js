import React, { Component, Fragment } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { value} = this.props;
        return ( 
            <div>{value}</div>
         );
    }
}
 
export default Cell;