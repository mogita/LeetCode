/**
 * @param {number[][]} grid
 * @return {number}
 */
let islandPerimeter = function (grid) {
  let x = grid[0].length
  let y = grid.length
  let fences = 0
  let previousCell

  for (let i = 0; i < y; i++) { // y side iterator
    previousCell = null
    for (let j = 0; j < x; j++) { // x side iterator
      let currentCell = grid[i][j]
      if (currentCell === 1) fences += 4
      if (previousCell === 1 && currentCell === 1) fences -= 2
      previousCell = currentCell
    }
  }

  if (y > 1) {
    for (let i = 0; i < x; i++) {
      previousCell = null
      for (let j = 0; j < y; j++) {
        let currentCell = grid[j][i]
        if (previousCell === 1 && currentCell === 1) fences -= 2
        previousCell = currentCell
      }
    }
  }

  return fences
}

let grid = [[0, 1, 0, 0],
[1, 1, 1, 0],
[0, 1, 0, 0],
[1, 1, 0, 0]]

// grid = [[1, 1], [0, 0]]

console.log(islandPerimeter(grid))
