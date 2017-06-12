
export const MAKE_MOVE = 'MAKE_MOVE';

export const makeMove = (index, xIsNext) => ({
        type: MAKE_MOVE,
        payload: { index, xIsNext },
    });

