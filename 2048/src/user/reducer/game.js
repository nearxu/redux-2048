import util from "../util/board";
const INIT_BOARD = "INIT_BOARD";
const MOVE_LEFT = "MOVE_LEFT";
const MOVE_RIGHT = "MOVE_RIGHT";
const MOVE_UP = "MOVE_UP";
const MOVE_DOWN = "MOVE_DOWN";

export const initBoard = board => {
  return {
    type: INIT_BOARD,
    board
  };
};

export const moveLeft = board => {
  return {
    type: MOVE_LEFT,
    board
  };
};

export const moveRight = board => {
  return {
    type: MOVE_RIGHT,
    board
  };
};
export const moveUp = board => {
  return {
    type: MOVE_UP,
    board
  };
};
export const moveDown = board => {
  return {
    type: MOVE_DOWN,
    board
  };
};

const board = (state, action) => {
  if (!state) {
    state = {
      board: util.createBoard(0)
    };
  }
  switch (action.type) {
    case INIT_BOARD:
      return { board: [...action.board] };
    case MOVE_LEFT:
      return { board: [...action.board] };
    case MOVE_RIGHT:
      return { board: [...action.board] };
    case MOVE_UP:
      return { board: [...action.board] };
    case MOVE_DOWN:
      return { board: [...action.board] };
    default:
      return state;
  }
};

export default board;
