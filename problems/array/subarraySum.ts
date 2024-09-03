function subarraySum(nums: number[], k: number): number {
    let map = new Map();
    // nums[i] === k
    map.set(0, 1);
    let pre = 0, count = 0;

    for (let num of nums) {
        pre += num;
        // pre[i] - pre[j] === k
        // pre[j] === pre[i] - k
        if (map.has(pre - k)) {
            count += map.get(pre - k);
        }
        if (map.has(pre)) {
            map.set(pre, map.get(pre) + 1);
        } else {
            map.set(pre, 1);
        }
    }
    return count;
};

const subarraySumBruteForce = function(nums, k) {
    let count = 0;
    for (let start = 0; start < nums.length; ++start) {
        let sum = 0;
        for (let end = start; end >= 0; --end) {
            sum += nums[end];
            if (sum == k) {
                count++;
            }
        }
    }
    return count;
};

export default subarraySumBruteForce;