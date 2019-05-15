import React, { Component } from 'react';
import Cell from './cell';
import _ from 'lodash';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cells: 9,
            cellValues: {},
            currentPlayer: 'X',
            winCases: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]],
            lastSteps: [],
            winner: null,
            isGameTie: false,
         }
    }

    resetState = () => {
        this.setState({
            cellValues: {},
            currentPlayer: 'X',
            lastSteps: [],
            winner: null,
            isGameTie: false,
        });
    }

    checkIfWon = () => {
        const { winCases, cellValues, winner } = this.state;

        const player1 = Object.keys(cellValues).filter(x=>cellValues[x] === 'X').map(x=>Number(x));
        const player2 = Object.keys(cellValues).filter(o=>cellValues[o] === 'O').map(o=>Number(o));

        let checker = (arr, target) => target.every(v => arr.includes(v));

        const palyer1Won = winCases.find(one => checker(player1, one));
        const palyer2Won = winCases.find(two => checker(player2, two));

        if (Array.isArray(palyer1Won) && palyer1Won.length == 3) {
            this.setState({ winner: 'X' }, () => alert('Player 1 is the winner'));
        } else if (Array.isArray(palyer2Won) && palyer2Won.length == 3) {
            this.setState({ winner: 'O' }, () => alert('Player 2 is the winner'));
        };

        if (player1.length + player2.length === 9 && winner === null) this.setState({ isGameTie: true })
    }

    previousStep = () => {
        let { lastSteps, cellValues, currentPlayer } = this.state;
        if (Array.isArray(lastSteps) && lastSteps.length === 0) return;
        const lastStep = Array.isArray(lastSteps) ? lastSteps.pop() : '';
        cellValues[lastStep] = '';
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        this.setState({
            cellValues,
            currentPlayer,
            lastSteps,
            winner: null,
            isGameTie: false,
        });
    }


    cellClick = ({ target }) => {
        const { cellValues, currentPlayer, lastSteps, winner } = this.state;
        const name = target.getAttribute('name');
        if (lastSteps.indexOf(name) > -1 || winner !== null) return; 
        cellValues[name] = currentPlayer;
        Array.isArray(lastSteps) && lastSteps.push(name);
        this.setState({
            cellValues,
            currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
            lastSteps,
        }, () => {
            this.checkIfWon();
            if (this.state.winner === null) setTimeout( () => alert(`Player ${this.state.currentPlayer} turn`),  200);
        });
    }

    render() { 
        const { cells = null, cellValues = {}, currentPlayer, winner, isGameTie } = this.state;
        return (
            <div>
                {winner === null && !isGameTie && (<div className="labelName"><b>Player <span className={`${currentPlayer === 'X' ? 'text-primary' : 'text-warning'}`}>{currentPlayer}'s</span> turn</b></div>)}
                {winner !== null && !isGameTie && (<div className="labelName text-center text-info"><h2>Player <span>{winner}</span> has won the game</h2></div>)}
                {isGameTie && winner === null &&  (<div className="labelName text-center text-info"><h2>This game is tie</h2></div>)}
                <div className="gametable shadow-lg d-flex flex-row flex-wrap gametable justify-content-center align-items-center">
                    {
                        _.times(cells, (index) => <Cell value={cellValues[index] || ""} onClick={this.cellClick} key={index} name={index} />)
                    }
                </div>
                <div className="mt-2 text-center">
                    <button type="button" className="btn btn-primary mr-2 reset-btn" onClick={this.resetState}>reset</button>
                    <button type="button" className="btn btn-secondary rewind-btn" onClick={this.previousStep}>rewind</button>
                </div>
            </div>
         );
    }
}
 
export default Table;