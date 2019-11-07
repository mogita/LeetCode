/*
 * @lc app=leetcode id=1108 lang=javascript
 *
 * [1108] Defanging an IP Address
 */

// @lc code=start
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = solution1

function solution1(address) {
  return address.split('.').join('[.]')
}
// @lc code=end
