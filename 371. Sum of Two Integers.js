/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  let res = 0
  let sign = (a + b < 0) ? -1 : 1

  for (let i = 0; i < Math.abs(a + b); i++) {
    res++
  }

  return res * sign
}

console.log(getSum(2147483647, -2147483648))
