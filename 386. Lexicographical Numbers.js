/**
 * Given an integer n, return 1 - n in lexicographical order.
 * For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].
 *
 * @param {number} n
 * @return {number[]}
 */
let lexicalOrder = function (n) {
  let arr = []
  for (let i = 1; i < 10; i++) {
    dfs(i, n, arr)
  }

  return arr

  function dfs (cur, n, theArr) {
    if (cur > n) {
      return false
    } else {
      theArr.push(cur)
      for (let i = 0; i < 10; i++) {
        if (10 * cur + i > n) {
          return false
        } else {
          dfs(10 * cur + i, n, theArr)
        }
      }
    }
  }
}

let lexicalOrderOld = function (n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i.toString())
  }

  return arr.sort().map(Number)
}

console.log(lexicalOrder(10458))
