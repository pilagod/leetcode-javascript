/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  var cols = M[0].length
  var rows = M.length

  if (cols === 1 && rows === 1) {
    return M
  }
  return M.map(function (row, rowIndex) {
    return row.map(function (cell, colIndex) {
      var surroundings = [
        [rowIndex - 1, colIndex - 1],
        [rowIndex - 1, colIndex],
        [rowIndex - 1, colIndex + 1],

        [rowIndex, colIndex - 1],
        [rowIndex, colIndex],
        [rowIndex, colIndex + 1],

        [rowIndex + 1, colIndex - 1],
        [rowIndex + 1, colIndex],
        [rowIndex + 1, colIndex + 1]
      ]
      var result = surroundings.reduce(function (result, coord) {
        if (isValid(coord, rows, cols)) {
          result.count += 1
          result.gray += M[coord[0]][coord[1]]
        }
        return result
      }, { count: 0, gray: 0 })
      return Math.floor(result.gray / result.count)
    })
  })
}

function isValid (coord, rows, cols) {
  return coord[0] >= 0 && coord[0] < rows &&
    coord[1] >= 0 && coord[1] < cols
}

console.log(imageSmoother([
  [1]
]))

console.log(imageSmoother([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]))

console.log(imageSmoother([
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]))
