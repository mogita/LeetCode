/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = solution1

function solution1 (nums, target) {
  if (target < nums[0]) {
    return 0
  } else if (target > nums[nums.length - 1]) {
    return nums.length
  }

  let pointerM = 0
  let pointerL = 0
  let pointerR = nums.length - 1
  while (pointerL <= pointerR) {
    if (pointerL > pointerR) {
      return pointerM
    }
    pointerM = Math.floor((pointerL + pointerR) / 2)
    if (target > nums[pointerM]) {
      pointerL = pointerM + 1
    }
    if (target < nums[pointerM]) {
      pointerR = pointerM - 1
    }
    if (target === nums[pointerM]) {
      return pointerM
    }
  }
  return Math.max(pointerL, pointerR, pointerM)
}
// @lc code=end
