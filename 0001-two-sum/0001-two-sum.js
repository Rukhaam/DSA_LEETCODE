
var twoSum = function(nums, target) {
    let sum;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            sum = nums[i] + nums[j];   

            if (sum === target) {
                return [i, j];
            }
        }
    }
};

