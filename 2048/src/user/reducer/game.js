import util from "../util/board";
const INIT_BOARD = "INIT_BOARD";
const MOVE_LEFT = "MOVE_LEFT";
const MOVE_RIGHT = "MOVE_RIGHT";
const MOVE_UP = "MOVE_UP";
const MOVE_DOWN = "MOVE_DOWN";
const UPDATE_SCORE = "UPDATE_SCORE";

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

export const updateScore = score => {
  return {
    type: UPDATE_SCORE,
    score
  };
};

const initState = {
  board: util.createBoard(0),
  score: 0
};

const board = (state = initState, action) => {
  switch (action.type) {
    case INIT_BOARD:
      return { ...state, board: [...action.board] };
    case MOVE_LEFT:
      return { ...state, board: [...action.board] };
    case MOVE_RIGHT:
      return { ...state, board: [...action.board] };
    case MOVE_UP:
      return { ...state, board: [...action.board] };
    case MOVE_DOWN:
      return { ...state, board: [...action.board] };
    case UPDATE_SCORE:
      return { ...state, score: action.score };
    default:
      return state;
  }
};

export default board;
