/**
 * Created by Walter on 2017/5/5.
 */
import React from 'react';
import Square from './Square';
import './index.css';

class Board extends React.Component {

    renderSquare(i) {
        let doHighlight = false;
        if(this.props.pattern) {
            const [a, b, c] = this.props.pattern;
            if(a===i || b===i || c===i) {
                doHighlight = true;
            }
        }

        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
            lightsUp={doHighlight}
        />;
    }

    render() {

        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );

    }
}

export default Board;