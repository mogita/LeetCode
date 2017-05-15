/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
let matrixReshape = function (nums, r, c) {
  // zero length
  if (nums.length === 0) return nums
  // total count test
  let count = nums.length * nums[0].length
  if (count < r * c) return nums
  // reshape
  let result = []
  let rIndex = 0
  let cIndex = 0
  for (let rKey = 0; rKey < nums.length; rKey++) {
    for (let cKey = 0; cKey < nums[rKey].length; cKey++) {
      if (!result[rIndex]) result[rIndex] = []
      result[rIndex][cIndex] = nums[rKey][cKey]
      cIndex++
      if (cIndex >= c) {
        cIndex = 0
        rIndex++
      }
    }
  }

  return result
}

let nums = [[1, 2], [3, 4]]
let r = 1
let c = 4
console.log(matrixReshape(nums, r, c))
