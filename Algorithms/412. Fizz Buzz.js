/**
 * @param {number} n
 * @return {string[]}
 */
let fizzBuzz = function (n) {
  let retArr = []
  for (let i = 1; i <= n; i++) {
    let s = i.toString()
    if (i % 3 === 0) s = 'Fizz'
    if (i % 5 === 0) s = 'Buzz'
    if (i % 3 === 0 && i % 5 === 0) s = 'FizzBuzz'
    retArr.push(s)
  }

  return retArr
}

console.log(fizzBuzz(15))
