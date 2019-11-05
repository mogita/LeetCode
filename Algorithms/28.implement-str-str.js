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
var strStr = solution1withKMP

function solution1 (haystack, needle) {
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

function solution1withKMP (haystack, needle) {
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

  // build a prefix table
  const pTable = buildPrefixTable(needle)

  // do comparison with the help of the prefix table
  let i = 0
  let j = 0
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      j++
      i++
    }
    if (j === needle.length) {
      return i - j
    }
    if (haystack[i] !== needle[j]) {
      if (j !== 0) {
        j = pTable[j - 1]
      } else {
        i++
      }
    }
  }
  return -1
}

function buildPrefixTable (needle) {
  const pTable = new Array(needle.length).fill(0)
  // init the max length as 0
  let maxLen = 0
  // loop through the needle (or say pattern)
  for (let curIdx = 1; curIdx < needle.length; curIdx++) {
    // maxLen can't be greater than 0 so skip the first round.
    // when previous char of the needle was a common prefix,
    // and current char isn't the same with the char referred
    // by the max length, max length will be set to the count
    // of the most recent found longest common prefix
    if (maxLen > 0 && needle[maxLen] !== needle[curIdx]) {
      maxLen = pTable[maxLen - 1]
    }
    // found a same char, max length increments by 1
    if (needle[maxLen] === needle[curIdx]) {
      maxLen++
    }
    // put the length value to the prefix table
    pTable[curIdx] = maxLen
  }
  return pTable
}

// console.log(buildPrefixTable('abbabbbabaa'))

function solution2 (haystack, needle) {
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
