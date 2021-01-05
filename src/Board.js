import React from 'react';
import Cell from './Cell';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: [
                ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'],
                ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
                ['wr', 'wn', 'ww', 'wq', 'wk', 'ww', 'wn', 'wr'],
            ],
        };
    }

    renderBoard() {
        const cells = [];

        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                const cellKey = `${x}-${y}`;
                const cell = (
                    <Cell
                        key={cellKey}
                        x={x}
                        y={y}
                        piece={this.state.board[y][x]}
                    />
                );
                cells.push(cell);
            }
        }

        return cells;
    }

    render() {
        const style = {
            position: 'absolute',
        };

        return <div style={style}>{this.renderBoard()}</div>;
    }
}

export default Board;
