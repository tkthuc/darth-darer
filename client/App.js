import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Game from './containers/Game.jsx';
import './main.css';
import tictactoeApp from './reducers';


const store = createStore(tictactoeApp);

ReactDOM.render(
  <Provider store={ store }>
    <Game />
  </Provider>,
  document.getElementById('container'),
);
