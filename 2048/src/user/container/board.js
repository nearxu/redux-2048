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
  moveDown,
  updateScore,
  reset
} from "../reducer/game";
import { addCube, deleteCubes } from "../reducer/cube";
import "../../css/board.scss";
import { WSAECONNRESET } from "constants";

class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  moveTion(type) {
    const {
      board,
      score,
      moveLeft,
      moveRight,
      moveDown,
      moveUp,
      updateScore
    } = this.props;
    let data;
    switch (type) {
      case "Left":
        data = util.moveLeft(board, score);
        moveLeft(data.matrix);
        break;
      case "Right":
        data = util.moveRight(board, score);
        moveRight(data.matrix);
        break;
      case "Up":
        data = util.moveUp(board, score);
        moveUp(data.matrix);
        break;
      case "Down":
        data = util.moveDown(board, score);
        moveDown(data.matrix);
        break;
      default:
        break;
    }
    updateScore(data.score);
  }
  componentDidMount() {
    const { board, initBoard } = this.props;
    initBoard();
    this.generateCubes(board, 2);
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case 37:
          this.moveTion("Left");
          this.generateCubes(board, 2);
          break;
        case 38:
          this.moveTion("Up");
          this.generateCubes(board, 2);
          break;
        case 39:
          this.moveTion("Right");
          this.generateCubes(board, 2);
          break;
        case 40:
          this.moveTion("Down");
          this.generateCubes(board, 2);
          break;
        default:
          return null;
      }
    });
  }
  generateCubes(board, num) {
    let matrix = board.concat();
    // matrix = [[1, 2, 3, 4], [4, 3, 2, 1], [1, 2, 3, 4], [4, 3, 2, 1]];
    while (num > 0) {
      // game over
      if (util.noSpace(matrix)) {
        matrix[randx][randy] = value;
        return false;
        // this.props.updateBoard(matrix);
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
  handleRest() {
    const { board, cubes } = this.props;
    this.props.reset();
    this.props.deleteCubes();
    this.generateCubes(board, 2);
  }
  render() {
    // // cubes [[0,0,0,0]*4]   board [{x:1,y:2,value:2}]
    const { board, cubes, score } = this.props;
    return (
      <div>
        <h1>
          {" "}
          score : {score}{" "}
          <span onClick={this.handleRest.bind(this)}>reset</span>
        </h1>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.game.board,
    score: state.game.score,
    cubes: state.cube.cubes
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
    updateScore: score => {
      dispatch(updateScore(score));
    },
    moveLeft: board => {
      if (util.canMoveLeft(board)) {
        dispatch(moveLeft(board));
      }
    },
    moveRight: board => {
      if (util.canMoveRight(board)) {
        dispatch(moveRight(board));
      }
    },
    moveUp: board => {
      if (util.canMoveUp(board)) {
        dispatch(moveUp(board));
      }
    },
    moveDown: board => {
      if (util.canMoveDown(board)) {
        dispatch(moveDown(board));
      }
    },
    reset: () => {
      dispatch(reset());
    },
    deleteCubes: () => {
      dispatch(deleteCubes());
    }
  };
};

export default connect(
  mapStateToProps,
  dispatchToProps
)(Board);
