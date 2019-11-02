/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = solution1

function solution1(l1, l2) {
  const arr1 = []
  const arr2 = []
  listToArray(l1, arr1)
  listToArray(l2, arr2)
  const finalArray = [...arr1, ...arr2].sort((a, b) => a - b)
  const newList = finalArray[0] !== undefined ? new ListNode(finalArray[0]) : null
  if (newList) {
    let curList = newList
    for (let i = 1; i < finalArray.length; i++) {
      const tempList = new ListNode(finalArray[i])
      curList.next = tempList
      curList = tempList
    }
  }
  return newList
}

function listToArray(list, arr) {
  if (!list) {
    return arr
  }
  arr.push(list.val)
  if (list.next !== null) {
    listToArray(list.next, arr)
  } else {
    return arr
  }
}

function ListNode(val) {
  this.val = val
  this.next = null
}
// @lc code=end
