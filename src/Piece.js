import React from 'react';
import Constants from './Constants';

class Piece extends React.Component {
    getPiece(pieceCode) {
        switch(pieceCode) {
        case 'p':
            return 'pawn';
        case 'r':
            return 'rook';
        case 'n':
            return 'knight';
        case 'b':
            return 'bishop';
        case 'q':
            return 'queen';
        case 'k':
            return 'king';
        default:
            return 'pawn';
        }
    }

    getUrl() {
        const code = this.props.code.split('');
        const piece = this.getPiece(code[1]);
        const color = code[0] == 'w' ? 'white' : 'black';
        return `/pieces/${piece}-${color}.svg`;
    }

    render() {
        return this.props.code != null ? (
        <img src={this.getUrl()} alt={this.props.code} width={Constants.CELL_SIZE} height={Constants.CELL_SIZE} />
        ) : '';
}
}

export default Piece;
