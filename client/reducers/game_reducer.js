import { MAKE_MOVE, makeMove } from '../actions';

const firstState = {
    history: [{
        squares: Array(9).fill(null),
    }],
    xIsNext: false,
};

const gameReducer = (state = firstState, action) => {
    switch (action.type) {
        case MAKE_MOVE: {
            const history = state.history;
            const squares = history[history.length - 1].squares.slice();
            squares[action.payload.index] = action.payload.xIsNext ? 'O' : 'X';
            const xIsNext = action.payload.xIsNext;
            return {
                history: [
                    ...history,
                    { squares },
                ],
                xIsNext,
            };
        }
        default: {
            return state;
        }
    }
};

export default gameReducer;
