import React from "react";
import PropTypes from "prop-types";
import Cube from "./cube";
import { connect } from "react-redux";
import util from "../util/board";
import {
  initBoard,
  moveLeft,
  moveRight,
  moveUp,
  moveDown
} from "../reducer/game";
import { addCube } from "../reducer/cube";
import "../../css/board.scss";

class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const {
      initBoard,
      board,
      moveLeft,
      moveRight,
      moveUp,
      moveDown
    } = this.props;
    initBoard();
    this.generateCubes(board, 2);
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case 37:
          moveLeft(board);
          this.generateCubes(board, 2);
          break;
        case 39:
          moveRight(board);
          this.generateCubes(board, 2);
          break;
        case 38:
          moveUp(board);
          this.generateCubes(board, 2);
          break;
        case 40:
          moveDown(board);
          this.generateCubes(board, 2);
          break;
        default:
          return null;
      }
    });
  }
  generateCubes(board, num) {
    const matrix = board.concat();
    while (num > 0) {
      if (util.noSpace(matrix)) {
        return false;
      }
      var randx = util.getRandomNumber(0, 4);
      var randy = util.getRandomNumber(0, 4);
      var status = true;
      // right arr
      while (status) {
        if (matrix[randx][randy] < 1) {
          status = false;
          break;
        }
        randx = util.getRandomNumber(0, 4);
        randy = util.getRandomNumber(0, 4);
      }
      const value = Math.random() < 0.4 ? 2 : 4;
      this.props.addCube(randx, randy, value);
      matrix[randx][randy] = value;
      num--;
    }
    this.props.updateBoard(matrix);
    return true;
  }
  render() {
    // // cubes [[0,0,0,0]*4]   board [{x:1,y:2,value:2}]
    const { board, cubes } = this.props;
    return (
      <div className="grid-container">
        {// 这是棋盘
        board.map((rowAry, rowIndex) =>
          rowAry.map((cellValue, colIndex) => (
            <Cube
              key={rowIndex + "-" + colIndex + "-board"}
              value={cellValue}
              rowIndex={rowIndex}
              colIndex={colIndex}
            />
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.game.board
  };
};

const dispatchToProps = dispatch => {
  return {
    initBoard: () => {
      const board = util.createBoard(0);
      dispatch(initBoard(board));
    },
    updateBoard: matrix => {
      dispatch(initBoard(matrix));
    },
    addCube(x, y, value) {
      const cube = { x, y, value };
      dispatch(addCube(cube));
    },
    moveLeft: board => {
      const newBoard = util.moveLeft(board);
      dispatch(moveLeft(newBoard));
    },
    moveRight: board => {
      const newBoard = util.moveRight(board);
      dispatch(moveRight(newBoard));
    },
    moveUp: board => {
      const newBoard = util.moveUp(board);
      dispatch(moveUp(newBoard));
    },
    moveDown: board => {
      const newBoard = util.moveDown(board);
      dispatch(moveDown(newBoard));
    }
  };
};

export default connect(
  mapStateToProps,
  dispatchToProps
)(Board);
