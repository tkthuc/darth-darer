import undoable, { distinctState } from 'redux-undo';

import { MAKE_MOVE, makeMove } from '../actions';


const firstState = [{
        squares: Array(9).fill(null),
        xIsNext: false,
    }];
    // xIsNext: false,


const gameReducer = (state = firstState, action) => {
    switch (action.type) {
        case MAKE_MOVE: {
            const history = state;
            const squares = history[history.length - 1].squares.slice();
            squares[action.payload.index] = action.payload.xIsNext ? 'O' : 'X';
            const xIsNext = action.payload.xIsNext;
            return [
                    ...history,
                    { squares, xIsNext },
                ];
        }
        default: {
            return state;
        }
    }
};

const undoableMoves = undoable(gameReducer, {
    filter: distinctState(),
});

export default undoableMoves;
