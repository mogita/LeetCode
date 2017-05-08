/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
let nextGreaterElement = function (findNums, nums) {
  let retArr = []
  for (let i of findNums) {
    let pos = nums.indexOf(i)
    let flag = false
    for (let j = pos; j < nums.length; j++) {
      flag = false
      if (nums[j] > i) {
        retArr.push(nums[j])
        flag = true
        break
      }
    }

    if (!flag) retArr.push(-1)
  }

  return retArr
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]))
