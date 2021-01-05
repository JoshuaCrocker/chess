import React from 'react';
import Piece from './Piece';
import Constants from './Constants';

class Cell extends React.Component {
    getBackgroundColor() {
        let light = true;

        if (this.props.x % 2) {
            light = !light;
        }

        if (this.props.y % 2) {
            light = !light;
        }

        return light ? 'beige' : 'brown';
    }

    render() {
        const style = {
            position: 'absolute',
            width: `${Constants.CELL_SIZE}px`,
            height: `${Constants.CELL_SIZE}px`,
            left: `${Constants.CELL_SIZE * this.props.x}px`,
            top: `${Constants.CELL_SIZE * this.props.y}px`,
            backgroundColor: this.getBackgroundColor(),
        };

        return (
            <div style={style}>
                <Piece code={this.props.piece} />
            </div>
        );
    }
}

export default Cell;
