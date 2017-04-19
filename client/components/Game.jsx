import Board from './Board.jsx';
import React from 'react';

class Game extends React.Component {
  
  constructor(){
    super();
    this.state = {
      history:[{
        squares: Array(9).fill(null)
      }],
      stepNumber:0,
      xIsNext:true,     
    }
  }

  handleClick(i){
      const history = this.state.history;
      
      const current = history[this.state.stepNumber];     
      const squares = current.squares.slice();
      const {winner} = calculateWinner(squares);
      if (winner || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' :'O';      
      this.setState({
        stepNumber:history.length,
        history: history.concat([{squares:squares}]),        
        xIsNext:!this.state.xIsNext,
      });
  }

  buildMoves(history){
      const moves = history.map((step,move)=>{
          const desc = move ? 'Move' : 'Game Start';
          return (
            <li key={move}>
                <a href="#" onClick={()=>this.jumpTo(move)}>{desc}</a>
            </li>
          )
      })
      return moves;
  }

  jumpTo(step){
    console.log(step);
    this.setState({
      stepNumber: step,
      xIsNext: (step%2)? false : true,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const {winner,highlighted} = calculateWinner(current.squares);
    let status;
    const moves = this.buildMoves(history);
    if(winner){
      status = "Winner "+ winner;      
    }else{
      status = 'Next player: '+ (this.state.xIsNext ? 'X' :'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            status={status} 
            squares={current.squares}
            highlighted={highlighted}
            onClick={(i)=>this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
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
  let highlighted = Array(squares.length).fill(null);
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      highlighted[a] = highlighted[b] = highlighted[c] = true;
      return {winner: squares[a],highlighted};
    }
  }
  return {winner:null,highlighted};
}

export default Game;