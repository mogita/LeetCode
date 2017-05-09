// simply counting the unique values without altering the array
let method1 = function (nums) {
  let length = 0
  let oldVal = null
  nums.forEach(newVal => {
    if (newVal !== oldVal) length++
    oldVal = newVal
  })
  return length
}

// gets a test pass on leetcode, using two pointers
let method2 = function (nums) {
  if (nums.length < 2) return nums.length
  let index = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[++index] = nums[i]
    }
  }
  return index
}

/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
  return method2(nums)
}

let arr = [1, 1, 2, 2, 3, 4, 4, 4, 5, 6]
console.log(removeDuplicates(arr))
console.log(arr)
