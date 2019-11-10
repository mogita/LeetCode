/*
 * @lc app=leetcode id=1252 lang=javascript
 *
 * [1252] Cells with Odd Values in a Matrix
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = solution1

function solution1(n, m, indices) {
  const matrix = new Array(n).fill(null).map(_ => new Array(m).fill(0))
  for (index of indices) {
    matrix[index[0]] = matrix[index[0]].map(i => i + 1)
    for (row of matrix) {
      row[index[1]] = row[index[1]] + 1
    }
  }
  return matrix.reduce((acc, row, i) => {
    return row.reduce((accIn, item, j) => {
      return accIn + Number(item % 2 === 1)
    }, acc)
  }, 0)
}
// @lc code=end

// console.log(solution1(2, 3, [[0, 1], [1, 1]]))
