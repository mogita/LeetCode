/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = solution1

function solution1(strs) {
  if (strs.length === 0) {
    return ''
  }
  if (strs.length === 1) {
    return strs[0]
  }
  const common = []
  const conv = []
  const minLength = Math.min(...strs.map(i => i.length))
  for (let i = 0; i < minLength; i++) {
    conv.push(strs.map(j => j[i]).every((val, k, arr) => val === arr[0]))
  }
  for (let j = 0; j < conv.length; j++) {
    if (!conv[j]) {
      break
    }
    common.push(strs[0][j])
  }
  return common.join('')
}
// @lc code=end
