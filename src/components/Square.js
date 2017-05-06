import React from 'react';

/*class Square extends Component {
  render() {
    return (
      // Now when the square is clicked, it calls the onClick prop which is a function that was passed by Board.
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}*/

//Functional example of Square
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
