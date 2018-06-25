const util = {
  createBoard: value => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr[i] = [];
      for (let j = 0; j < 4; j++) {
        arr[i][j] = value;
      }
    }
    return arr;
  },
  getRandomNumber(start, end) {
    return parseInt(Math.random() * (start + end) - start);
  },
  noSpace(matrix) {
    for (let i = 0; i < 4; i++) {
      if (matrix[i].indexOf(0) < 0) {
        return false;
      }
    }
  },
  moveLeft(matrix) {
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        if (matrix[i][j] !== 0) {
          for (var k = 0; k < j; k++) {
            if (matrix[i][k] === 0) {
              matrix[i][k] = matrix[i][j];
              matrix[i][j] = 0;
              continue;
            } else if (matrix[i][k] === matrix[i][j]) {
              matrix[i][k] += matrix[i][j];
              matrix[i][j] = 0;
              continue;
            }
          }
        }
      }
    }
    return matrix;
  },
  moveRight(matrix) {
    for (var j = 0; j < 4; j++) {
      for (var i = 0; i < 4; i++) {
        if (matrix[i][j] !== 0) {
          for (var k = 0; k < i; k++) {
            if (matrix[k][j] === 0) {
              matrix[k][j] = matrix[i][j];
              matrix[i][j] = 0;
              continue;
            } else if (matrix[k][j] === matrix[i][j]) {
              matrix[k][j] += matrix[i][j];
              matrix[i][j] = 0;
              continue;
            }
          }
        }
      }
    }
    return matrix;
  },
  moveUp(matrix) {
    for (var j = 0; j < 4; j++) {
      for (var i = 0; i < 4; i++) {
        if (matrix[i][j] !== 0) {
          for (var k = 0; k < i; k++) {
            if (matrix[k][j] === 0) {
              matrix[k][j] = matrix[i][j];
              matrix[i][j] = 0;
              continue;
            } else if (matrix[k][j] === matrix[i][j]) {
              matrix[k][j] += matrix[i][j];
              matrix[i][j] = 0;
              continue;
            }
          }
        }
      }
    }
    return matrix;
  },
  moveDown(matrix) {
    for (var j = 0; j < 4; j++) {
      for (var i = 2; i >= 0; i--) {
        if (matrix[i][j] !== 0) {
          for (var k = 3; k > i; k--) {
            if (matrix[k][j] === 0) {
              matrix[k][j] = matrix[i][j];
              matrix[i][j] = 0;
              continue;
            } else if (matrix[k][j] === matrix[i][j]) {
              matrix[k][j] += matrix[i][j];
              matrix[i][j] = 0;
              continue;
            }
          }
        }
      }
    }
    return matrix;
  }
};

export default util;
