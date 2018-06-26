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
      if (matrix[i].indexOf(0) > -1) {
        return false;
      }
    }
    return true;
  },
  moveLeft(matrix, score) {
    for (var i = 0; i < 4; i++) {
      for (var j = 1; j < 4; j++) {
        if (matrix[i][j] !== 0) {
          for (var k = 0; k < j; k++) {
            if (matrix[i][k] === 0 && this.noBlockHorizontal(i, k, j, matrix)) {
              matrix[i][k] = matrix[i][j];
              matrix[i][j] = 0;
              continue;
            } else if (
              matrix[i][k] === matrix[i][j] &&
              this.noBlockHorizontal(i, k, j, matrix)
            ) {
              matrix[i][k] += matrix[i][j];
              score += matrix[i][j] * 2;
              matrix[i][j] = 0;
              continue;
            }
          }
        }
      }
    }
    return { matrix, score };
  },
  moveRight(matrix, score) {
    for (var i = 0; i < 4; i++) {
      for (var j = 2; j >= 0; j--) {
        if (matrix[i][j] !== 0) {
          for (var k = 3; k > j; k--) {
            if (matrix[i][k] === 0 && this.noBlockHorizontal(i, j, k, matrix)) {
              matrix[i][k] = matrix[i][j];
              matrix[i][j] = 0;
              continue;
            } else if (
              matrix[i][k] === matrix[i][j] &&
              this.noBlockHorizontal(i, j, k, matrix)
            ) {
              matrix[i][k] += matrix[i][j];
              score += matrix[i][j] * 2;
              matrix[i][j] = 0;
              continue;
            }
          }
        }
      }
    }
    return { matrix, score };
  },
  moveUp(matrix, score) {
    for (var j = 0; j < 4; j++) {
      for (var i = 1; i < 4; i++) {
        if (matrix[i][j] !== 0) {
          for (var k = 0; k < i; k++) {
            if (matrix[k][j] === 0 && this.noBlockHorizontal(j, k, i, matrix)) {
              matrix[k][j] = matrix[i][j];
              matrix[i][j] = 0;
              continue;
            } else if (
              matrix[k][j] === matrix[i][j] &&
              this.noBlockHorizontal(j, k, i, matrix)
            ) {
              matrix[k][j] += matrix[i][j];
              score += matrix[i][j] * 2;
              matrix[i][j] = 0;
              continue;
            }
          }
        }
      }
    }
    return { matrix, score };
  },
  moveDown(matrix, score) {
    for (var j = 0; j < 4; j++) {
      for (var i = 2; i >= 0; i--) {
        if (matrix[i][j] !== 0) {
          for (var k = 3; k > i; k--) {
            if (matrix[k][j] === 0 && this.noBlockHorizontal(j, i, k, matrix)) {
              matrix[k][j] = matrix[i][j];
              matrix[i][j] = 0;
              continue;
            } else if (
              matrix[k][j] === matrix[i][j] &&
              this.noBlockHorizontal(j, i, k, matrix)
            ) {
              matrix[k][j] += matrix[i][j];
              score += matrix[i][j] * 2;
              matrix[i][j] = 0;
              continue;
            }
          }
        }
      }
    }
    return { matrix, score };
  },
  noBlockHorizontal(row, col1, col2, matrix) {
    for (let i = col1 + 1; i < col2; i++) {
      if (matrix[row][i] !== 0) {
        return false;
      }
    }
    return true;
  },
  noBlockVertical(col, row1, row2, matrix) {
    for (let i = row1 + 1; i < row2; i++) {
      if (matrix[i][col] !== 0) {
        return false;
      }
    }
    return true;
  },
  canMoveLeft(matrix) {
    for (let i = 0; i < 4; i++) {
      for (let j = 1; j < 4; j++) {
        if (matrix[i][j] !== 0) {
          if (matrix[i][j - 1] === 0 || matrix[i][j - 1] === matrix[i][j]) {
            return true;
          }
        }
      }
    }
    return false;
  },
  canMoveRight(matrix) {
    for (let i = 0; i < 4; i++) {
      for (let j = 2; j >= 0; j--) {
        if (matrix[i][j] !== 0) {
          if (matrix[i][j + 1] === 0 || matrix[i][j + 1] === matrix[i][j]) {
            return true;
          }
        }
      }
    }
    return false;
  },
  canMoveUp(matrix) {
    for (let j = 0; j < 4; j++) {
      for (let i = 1; i < 4; i++) {
        if (matrix[i][j] !== 0) {
          if (matrix[i - 1][j] === 0 || matrix[i - 1][j] === matrix[i][j]) {
            return true;
          }
        }
      }
    }
    return false;
  },
  canMoveDown(matrix) {
    for (let j = 0; j < 4; j++) {
      for (let i = 2; i >= 0; i--) {
        if (matrix[i][j] !== 0) {
          if (matrix[i + 1][j] === 0 || matrix[i + 1][j] === matrix[i][j]) {
            return true;
          }
        }
      }
    }
    return false;
  }
};

export default util;
