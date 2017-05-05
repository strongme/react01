/**
 * Created by Walter on 2017/5/5.
 */

import React from 'react';
import Board from './Board';
import './index.css';

class Game extends React.Component {

    constructor() {
        super();
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }


    handleClick(i) {

        const history = this.state.history;

        const current = history[history.length - 1];

        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext? 'X': 'O';

        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {

        this.setState({
            stepNumber: step,
            xIsNext: ( step % 2 ) ? false : true
        });

    }

    render() {

        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const calResult = calculateWinner(current.squares);

        const lastMove = (
            <li key='last'>
                <a href="#" onClick={() => this.jumpTo(this.state.history.length-1)}>Last Move</a>
            </li>
        );
        const moves = history.map((step, move) => {
            const desc = move ? 'Move #'+ move: 'Game start';
            return (
                <li key={move}>
                    <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
                </li>
            );
        });

        let status;
        let pattern = [];
        if(calResult) {
            pattern = calResult.pattern;
            status = 'Winner: '+calResult.winner;
        }else {
            status = "Next player： "+(this.state.xIsNext? 'X':'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                        pattern={pattern}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{lastMove}{moves}</ol>
                </div>
            </div>
        );
    }

}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {winner: squares[a], pattern: lines[i]};
        }
    }
    return null;
}


export default Game;