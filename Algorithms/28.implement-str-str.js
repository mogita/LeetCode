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

function solution1withKMP(haystack, needle) {
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
  console.log('pTable=', pTable)

  // do comparison with the help of the prefix table
  let maxMatches = 0
  const hLen = haystack.length
  const nLen = needle.length
  for (let curIdx = 0; curIdx < hLen; curIdx++) {
    console.info('start', 'curIdx=', curIdx, 'maxMatches=', maxMatches)
    if (maxMatches > 0 && needle[maxMatches] !== haystack[curIdx]) {
      console.info('pTable needed,', 'maxMatches=', maxMatches, 'pTable[maxMatches - 1]=', pTable[maxMatches - 1])
      maxMatches = pTable[maxMatches - 1]
    }
    console.info('needle[maxMatches]=', needle[maxMatches], 'haystack[curIdx]=', haystack[curIdx])
    if (needle[maxMatches] === haystack[curIdx]) {
      maxMatches++
    }
    console.info('maxMatches=', maxMatches, 'nLen=', nLen)
    if (maxMatches === nLen) {
      return curIdx - nLen + 1
    }
    // maxMatches = pTable[maxMatches]
    console.info('=end=', 'curIdx=', curIdx, 'maxMatches=', maxMatches)
  }
  return -1
}

console.log(
  solution1withKMP(
    'ababaabbbbababbaabaaabaabbaaaabbabaabbbbbbabbaabbabbbabbbbbaaabaababbbaabbbabbbaabbbbaaabbababbabbbabaaabbaabbabababbbaaaaaaababbabaababaabbbbaaabbbabb',
    'abbabbbabaa',
  ),
)

function buildPrefixTable(needle) {
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
