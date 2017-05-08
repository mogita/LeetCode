let str = 'leetcode'

/**
 * @param {string} s
 * @return {string}
 */
let reverseVowels = function (s) {
  let vowels = 'aeiouAEIOU'
  let arr = Array.from(s)
  let buffer = []

  // fetch all vowels and their position
  for (let key in s) {
    if (vowels.indexOf(s[key]) >= 0) buffer.push({ index: key, letter: s[key] })
  }

  let lens = buffer.length

  for (let i = 0; i < lens; i++) {
    arr[buffer[i].index] = buffer[lens - i - 1].letter
  }

  return arr.join('')
}

console.log(reverseVowels(str))
