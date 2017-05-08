/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let xor
  if (x > y) {
    xor = y ^ x
  } else {
    xor = x ^ y
  }

  let res = xor.toString(2).toString()
  return (res.match(/1/g) || []).length
}

console.log(hammingDistance(93, 73))
