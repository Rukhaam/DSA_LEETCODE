/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let map = new Map();
    let result = [];
    let n = nums.length;

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let [num, count] of map) {
        if (count > Math.floor(n / 3)) {
            result.push(num);
        }
    }

    return result;
};