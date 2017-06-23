import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import Board from '../components/Board.jsx';
import UndoRedo from '../components/UndoRedoButton.jsx';
import { makeMove } from '../actions';


class Game extends React.Component {
  handleClick(i) {
      const history = this.props.history;
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      const { winner } = calculateWinner(squares);
      if (winner || squares[i]) {
        return;
      }
      this.props.makeMove(i, !current.xIsNext);
  }

  render() {
    const history = this.props.history;
    const current = history[history.length - 1];
    const { winner, highlighted } = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = `Winner ${winner}`;
    } else {
      status = `Next player: ${current.xIsNext ? 'X' : 'O'}`;
    }
    return (
      <div className='game'>
        <div className='game-board'>
          <Board
            status={ status }
            squares={ current.squares }
            highlighted={ highlighted }
            onClick={ i => this.handleClick(i) }
          />
        </div>
        <div className='game-info'>
          <div>{status}</div>
        </div>
        <div className='game-info'>
          <UndoRedo name='Undo' perform={ this.props.onUndo } isDisabled={ !this.props.canUndo } />
          <UndoRedo name='Redo' perform={ this.props.onRedo } isDisabled={ !this.props.canRedo } />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  const onUndo = UndoActionCreators.undo;
  const onRedo = UndoActionCreators.redo;
  return bindActionCreators({ makeMove, onUndo, onRedo }, dispatch);
}

function mapStateToProps({ state }) {
  const canUndo = state.past.length > 0;
  const canRedo = state.future.length > 0;
  return { history : state.present, canRedo, canUndo };
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
  const highlighted = Array(squares.length).fill(null);
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      highlighted[a] = highlighted[b] = highlighted[c] = true;
      return { winner: squares[a], highlighted };
    }
  }
  return { winner:null, highlighted };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
