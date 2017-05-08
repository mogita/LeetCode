/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  return mine(words)
}

function mine (words) {
  let kb = {
    t: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    m: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    b: ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  }

  let retArr = []

  for (let word of words) {
    let wordBak = word

    word = word.toLowerCase().split('')
    let flagT = false
    let flagM = false
    let flagB = false
    while (((flagT && !flagM && !flagB) ||
    (!flagT && flagM && !flagB) ||
    (!flagT && !flagM && flagB) ||
    (!flagT && !flagM && !flagB)) &&
    word.length > 0) {
      if (kb.t.indexOf(word[0]) >= 0) flagT = true
      if (kb.m.indexOf(word[0]) >= 0) flagM = true
      if (kb.b.indexOf(word[0]) >= 0) flagB = true
      word.shift()
    }

    if ((flagT && !flagM && !flagB) ||
    (!flagT && flagM && !flagB) ||
    (!flagT && !flagM && flagB) ||
    wordBak.length === 1) {
      retArr.push(wordBak)
    }
  }

  return retArr
}

console.log(findWords(['Hello', 'Alaska', 'Dad', 'qz']))
