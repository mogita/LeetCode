/**
 * @param {number[]} nums
 * @return {number}
 */
let arrayPairSum = function (nums) {
  let array = nums.sort((a, b) => { return a - b })
  let sum = 0
  for (let i = 0; i < array.length; i += 2) {
    sum += array[i]
  }
  return sum
}

let arr = [6214, -2290, 2833, -7908]
console.log(arrayPairSum(arr))
