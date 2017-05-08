/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
let findTheDifference = function (s, t) {
  let tSorted = t.split('').sort()
  let sSorted = s.split('').sort()

  for (let i = 0; i < tSorted.length; i++) {
    if (tSorted[i] !== sSorted[i]) return tSorted[i]
  }
}

console.log(findTheDifference('abcd', 'adbec'))
