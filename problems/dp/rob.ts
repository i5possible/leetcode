let map = {};

const dp = (nums: number[], k: number): number => {
    if (k === 0) {
        return nums[0];
    } else if (k === 1) {
        return Math.max(nums[0], nums[1]);
    }

    if (map[k] !== undefined) {
        return map[k];
    }

    let value1 = dp(nums, k - 1);
    let value2 = dp(nums, k - 2) + nums[k];
    // console.log(`k: ${k}, value1: ${value1}, value2: ${value2}`);
    const result = Math.max(value1, value2);
    map[k] = result;

    return result;
}

function rob(nums: number[]): number {
    const result = dp(nums, nums.length - 1);
    map = {};
    // console.log(JSON.stringify(map));
    return result;
};

export default rob;