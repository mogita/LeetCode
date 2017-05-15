/**
 * @param {number[]} candies
 * @return {number}
 */
let distributeCandies = function (candies) {
  let result = 0
  let set = new Set(candies)
  result = set.size
  if (result > candies.length / 2) result = candies.length / 2
  return result
}

// let candies = [1, 1, 2, 2, 3, 3, 3, 4]
let candies = [1, 1, 2, 3]
console.log(distributeCandies(candies))
