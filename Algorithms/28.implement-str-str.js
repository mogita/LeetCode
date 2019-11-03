/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = solution2

function solution1(haystack, needle) {
  if (needle === '') {
    return 0
  }
  if (haystack === '') {
    return -1
  }
  if (needle === haystack) {
    return 0
  }
  if (needle.length > haystack.length) {
    return -1
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let pass = true
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          pass = false
          break
        }
      }
      if (pass === true) {
        return i
      }
    }
  }
  return -1
}

function solution2(haystack, needle) {
  if (needle === '') {
    return 0
  }
  if (haystack === '') {
    return -1
  }
  if (needle === haystack) {
    return 0
  }
  if (needle.length > haystack.length) {
    return -1
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (needle === haystack.slice(i, needle.length + i)) {
        return i
      }
    }
  }
  return -1
}
// @lc code=end
