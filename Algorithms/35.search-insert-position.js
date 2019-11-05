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

function solution1(nums, target) {
  return binarySearch(nums, target, 0)
}

function binarySearch(nums, target, indexCandidate) {
  // console.info(nums, indexCandidate)
  let pointerM = indexCandidate
  let pointerL = 0
  let pointerR = nums.length - 1
  while (pointerL <= pointerR && nums.length > 1) {
    pointerM = Math.floor((pointerL + pointerR) / 2)
    if (nums[pointerM] === target) {
      return pointerM
    } else if (target < nums[pointerM]) {
      pointerR = pointerM - 1
      pointerM = binarySearch(nums.slice(0, pointerR), target, pointerR)
    } else {
      pointerL = pointerM + 1
      pointerM = binarySearch(nums.slice(pointerL), target, pointerL)
    }
  }
  console.info('return', target < nums[indexCandidate] ? indexCandidate : indexCandidate + 1)
  return target < nums[indexCandidate] ? indexCandidate : indexCandidate + 1
}
// @lc code=end

console.log(solution1([1, 3, 5, 6], 7))
