import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  renderSquare(i) {
    // We are telling the square what value it should be
    // Board passed onClick={() => this.handleClick(i)} to Square, so, when called, it runs this.handleClick(i) on the Board, i.e. Board is telling square what function to run when prop onClick is set
    //History: {/*When the square is clicked, run the function passed to it via the prop onClick*/}
    return <Square 
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)} 
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