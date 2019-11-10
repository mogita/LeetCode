/*
 * @lc app=leetcode id=807 lang=javascript
 *
 * [807] Max Increase to Keep City Skyline
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = solution1

function solution1(grid) {
  return grid.reduce((acc, row, i) => {
    return row.reduce((accIn, cur, j) => {
      // max for row and col
      const max = Math.min(Math.max(...row), Math.max(...grid.map(col => col[j])))
      return max - cur + accIn
    }, acc)
  }, 0)
}
// @lc code=end
