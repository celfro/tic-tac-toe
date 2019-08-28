import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

class Board extends React.Component {
  conxtructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return (
      <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      />;
    )
  }
}

class Square extends React.Component {
  render() {
    return(
      <button className="square" onClick={function() { alert('click'); }}>
      {this.props.value}
      </button>
    );
  }
}
