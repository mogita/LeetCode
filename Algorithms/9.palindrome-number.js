/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = solution1

function solution1(x) {
  if (x < 0) {
    return false
  }
  const str = x.toString()
  let part1, part2
  if (str.length % 2 === 0) {
    // console.log('even')
    part1 = str.substr(0, str.length / 2)
    part2 = str
      .substr(str.length / 2)
      .split('')
      .reverse()
      .join('')
  } else {
    // console.log('odd')
    part1 = str.substr(0, (str.length - 1) / 2)
    part2 = str.substr((str.length + 1) / 2)
  }
  // console.log(part1, part2)
  return part1 === part2
}

// console.log(isPalindrome(1001))

// @lc code=end
