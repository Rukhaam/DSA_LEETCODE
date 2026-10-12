/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let maxCount = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let count = 1;
            let current = num;
            while (set.has(current + 1)) {
                current++;
                count++;
            }

            maxCount = Math.max(maxCount, count);
        }
    }

    return maxCount;
};
