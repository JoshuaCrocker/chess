import React from 'react';
import Board from './Board';
class App extends React.Component {
  constructor(props) {    
    super(props);

    this.state = {
      isWhiteTurn: true,
    };
  }

  render() {
    return (
      <div className="clearfix">
        <div className="float-left">
          <Board />
        </div>

        <div className="float-right">
          <p>Current Player: {this.state.isWhiteTurn ? 'White' : 'Black'}</p>
        </div>
      </div>
    );
  }
}

export default App;
