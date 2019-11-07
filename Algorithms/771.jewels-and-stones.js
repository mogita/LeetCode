/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = solution1

function solution1(J, S) {
  if (S.length === 0 || J.length === 0) {
    return 0
  }
  let found = 0
  J.split('').forEach(j => {
    const reg = new RegExp(j, 'g')
    const oldLen = S.length
    S = S.replace(reg, '')
    found += oldLen - S.length
  })
  return found
}
// @lc code=end
